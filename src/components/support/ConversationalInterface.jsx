import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Building2, MessageSquareHeart, Send, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

export default function ConversationalInterface({ lang = 'en' }) {
    const [view, setView] = useState('selection');
    const [agent, setAgent] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const scrollRef = useRef(null);

    // Localized Content
    const content = {
        en: {
            ui: {
                placeholder: "Type your response...",
                agentSuffix: "AI",
                back: "Back",
                aiName: "Flixu Intelligence",
                userName: "You",
                fallback: "Thank you. I've captured that detail.",
                processing: "Processing..."
            },
            agents: {
                sales: {
                    title: "Enterprise Solutions",
                    desc: "Custom Pools, SLA & Security.",
                    script: [
                        { text: "Hello. I help structure custom plans for high-volume teams. Roughly how many users are you looking to onboard?", delay: 500 },
                        { text: "Understood. For a team of that scale, data sovereignty is key. Our Enterprise tier offers dedicated VPC deployment.", delay: 1200 },
                        { text: "I've opened a priority slot for a strategy call. Shall we book it?", action: { label: "Book Strategy Call", url: "mailto:sales@flixu.ai" }, delay: 2000 }
                    ]
                },
                tech: {
                    title: "Technical Support",
                    desc: "API, Integration & Bugs.",
                    script: [
                        { text: "Let's debug this. Is this regarding the API or the Web Interface?", delay: 500 },
                        { text: "Scanning documentation...", delay: 1000 },
                        { text: "Based on recent tickets, this might be a glossary format issue. Check this guide:", action: { label: "Read: JSON Glossary Format", url: "/en/docs" }, delay: 1800 }
                    ]
                },
                feedback: {
                    title: "Founder Feedback",
                    desc: "Direct line to the product team.",
                    script: [
                        { text: "I'm listening. This goes directly to Deniz. What's on your mind?", delay: 500 },
                        { text: "Thank you. I've tagged this for the next product cycle. Leave your email if you want a follow-up.", delay: 1200 }
                    ]
                }
            }
        },
        de: {
            ui: {
                placeholder: "Ihre Antwort...",
                agentSuffix: "KI",
                back: "Zurück",
                aiName: "Flixu Intelligenz",
                userName: "Sie",
                fallback: "Danke. Ich habe dieses Detail erfasst.",
                processing: "Verarbeite..."
            },
            agents: {
                sales: {
                    title: "Enterprise Lösungen",
                    desc: "Individuelle Pools, SLA & Sicherheit.",
                    script: [
                        { text: "Hallo. Ich helfe bei der Strukturierung individueller Pläne für große Teams. Wie viele Nutzer möchten Sie ungefähr onboarden?", delay: 500 },
                        { text: "Verstanden. Bei dieser Teamgröße ist Datensouveränität entscheidend. Unser Enterprise-Tier bietet dediziertes VPC-Deployment.", delay: 1200 },
                        { text: "Ich habe einen Prioritäts-Slot für ein Strategiegespräch geöffnet. Sollen wir es buchen?", action: { label: "Strategiegespräch buchen", url: "mailto:sales@flixu.ai" }, delay: 2000 }
                    ]
                },
                tech: {
                    title: "Technischer Support",
                    desc: "API, Integration & Fehler.",
                    script: [
                        { text: "Lassen Sie uns das debuggen. Geht es um die API oder das Web-Interface?", delay: 500 },
                        { text: "Scanne Dokumentation...", delay: 1000 },
                        { text: "Basierend auf aktuellen Tickets könnte dies ein Glossar-Format-Problem sein. Prüfen Sie diesen Guide:", action: { label: "Lesen: JSON Glossar Format", url: "/de/product/text" }, delay: 1800 }
                    ]
                },
                feedback: {
                    title: "Feedback an Gründer",
                    desc: "Direkter Draht zum Produktteam.",
                    script: [
                        { text: "Ich höre zu. Das geht direkt an Deniz. Was beschäftigt Sie?", delay: 500 },
                        { text: "Danke. Ich habe dies für den nächsten Produktzyklus markiert. Hinterlassen Sie Ihre E-Mail für ein Follow-up.", delay: 1200 }
                    ]
                }
            }
        }
    };

    const currentLang = content[lang] || content.en;

    const agents = {
        sales: { ...currentLang.agents.sales, icon: Building2 },
        tech: { ...currentLang.agents.tech, icon: Terminal },
        feedback: { ...currentLang.agents.feedback, icon: MessageSquareHeart }
    };

    const selectAgent = (id) => {
        setAgent(id);
        setView('chat');
        setMessages([]);
        setTimeout(() => {
            addMessage('ai', agents[id].script[0].text);
        }, 600);
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // 1. Optimistic UI update
        const userMsg = { role: 'user', text: input, id: Date.now() };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsThinking(true);

        try {
            // 2. Prepare payload for API
            const history = messages.map(m => ({ role: m.role, text: m.text }));
            const payload = {
                messages: [...history, { role: 'user', text: input }],
                agent: agent, // 'sales', 'tech', 'feedback'
                lang: lang    // 'en' or 'de'
            };

            // 3. Call Serverless Function
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('API Error');

            // 4. Prepare AI Message Placeholder
            const aiMsgId = Date.now() + 1;
            setMessages(prev => [...prev, { role: 'ai', text: '', id: aiMsgId }]);
            setIsThinking(false); // Stop thinking, start streaming

            // 5. Read Stream
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let aiText = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                aiText += chunk;

                // Update the last message (the AI placeholder) with new text
                setMessages(prev => prev.map(msg =>
                    msg.id === aiMsgId ? { ...msg, text: aiText } : msg
                ));
            }

        } catch (err) {
            console.error(err);
            addMessage('ai', currentLang.ui.fallback); // Fallback on error
        } finally {
            setIsThinking(false);
        }
    };

    const addMessage = (role, text, action = null) => {
        setMessages(prev => [...prev, { role, text, action, id: Date.now() }]);
    };

    // Robust Scroll: Scroll to bottom of container
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isThinking]);

    return (
        <div className="w-full max-w-4xl mx-auto py-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">

                {/* SELECTION GRID */}
                {view === 'selection' && (
                    <motion.div
                        key="selection"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {Object.entries(agents).map(([key, data]) => (
                            <button
                                key={key} onClick={() => selectAgent(key)}
                                className="group flex flex-col items-start p-8 border border-stone-200 bg-[#FDFCF8] hover:border-orange-700 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 rounded-sm text-left h-72 justify-between"
                            >
                                <div className="text-stone-400 group-hover:text-orange-700 transition-colors">
                                    <data.icon size={32} strokeWidth={1} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-3xl text-stone-900 mb-3">{data.title}</h3>
                                    <p className="font-sans text-xs font-medium text-stone-500 uppercase tracking-widest leading-relaxed">{data.desc}</p>
                                </div>
                            </button>
                        ))}
                    </motion.div>
                )}

                {/* CHAT INTERFACE (FIXED LAYOUT) */}
                {view === 'chat' && (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col h-[700px] w-full bg-[#FDFCF8] border border-stone-200 rounded-sm shadow-2xl shadow-stone-200/40 overflow-hidden relative"
                    >
                        {/* 1. Header (Fixed) */}
                        <div className="flex-none h-20 flex justify-between items-center p-6 border-b border-stone-100 bg-[#FDFCF8] z-20">
                            <button onClick={() => setView('selection')} className="text-stone-400 hover:text-orange-700 transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider">
                                <ArrowLeft size={16} /> {currentLang.ui.back}
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">{agents[agent].title} {currentLang.ui.agentSuffix}</span>
                            </div>
                        </div>

                        {/* 2. Transcript Area (Scrollable) */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-8 space-y-10 bg-[#FDFCF8]"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`max-w-[85%] ${msg.role === 'ai' ? 'text-left' : 'text-right'}`}>
                                        <span className={`block font-mono text-[10px] uppercase tracking-widest text-stone-300 mb-2 ${msg.role === 'user' && 'text-right'}`}>
                                            {msg.role === 'ai' ? currentLang.ui.aiName : currentLang.ui.userName}
                                        </span>

                                        {msg.role === 'ai' ? (
                                            <p className="font-serif text-2xl md:text-3xl text-stone-900 leading-snug">
                                                {msg.text}
                                            </p>
                                        ) : (
                                            <p className="font-mono text-sm text-stone-600 bg-stone-100 px-4 py-3 rounded-sm inline-block border border-stone-200">
                                                {msg.text}
                                            </p>
                                        )}

                                        {msg.action && (
                                            <motion.a
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                                                href={msg.action.url}
                                                className="mt-6 inline-flex items-center gap-3 text-orange-700 hover:text-orange-900 font-medium transition-colors border-b border-orange-200 hover:border-orange-700 pb-1 text-lg"
                                            >
                                                {msg.action.label} <ArrowRight size={18} />
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isThinking && (
                                <div className="flex items-center gap-2 text-stone-400 pl-1 mt-4">
                                    <Loader2 size={16} className="animate-spin" />
                                    <span className="font-mono text-xs uppercase tracking-widest">{currentLang.ui.processing}</span>
                                </div>
                            )}
                        </div>

                        {/* 3. Input Area (Fixed Bottom) */}
                        <div className="flex-none p-8 bg-[#FDFCF8] border-t border-stone-100 z-20">
                            <form onSubmit={handleSend} className="relative w-full">
                                <input
                                    autoFocus
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={currentLang.ui.placeholder}
                                    className="w-full bg-transparent border-b border-stone-200 py-4 pr-12 text-xl font-serif text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-orange-700 ring-0 focus:ring-0 transition-colors"
                                    style={{ outline: 'none', boxShadow: 'none' }}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300 hover:text-orange-700 disabled:opacity-0 transition-all duration-300"
                                >
                                    <Send size={24} strokeWidth={1.5} />
                                </button>
                            </form>
                        </div>

                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}
