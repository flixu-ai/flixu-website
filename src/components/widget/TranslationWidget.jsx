import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Check, ChevronDown, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---

const MODES = [
    { id: 'marketing', label: 'Marketing', desc: 'Creative, engaging, brand-aligned.' },
    { id: 'formal', label: 'Formal', desc: 'Precise, professional, respectful.' },
    { id: 'informal', label: 'Informal', desc: 'Casual, friendly, conversational.' },
    { id: 'technical', label: 'Technical', desc: 'Accurate terminology, clear syntax.' },
    { id: 'literary', label: 'Literary', desc: 'Focus on flow and narrative nuance.' },
];

const POPULAR_LANGUAGES = [
    "German", "French", "Spanish (Spain)", "Italian", "Portuguese (Brazil)",
    "Dutch", "Polish", "Russian", "Japanese", "Chinese (Simplified)"
];

const ALL_LANGUAGES = [
    "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Basque", "Belarusian", "Bengali", "Bosnian", "Bulgarian", "Catalan", "Cebuano", "Chinese (Traditional)", "Corsican", "Croatian", "Czech", "Danish", "English (UK)", "English (US)", "Esperanto", "Estonian", "Finnish", "Frisian", "Galician", "Georgian", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Myanmar (Burmese)", "Nepali", "Norwegian", "Nyanja (Chichewa)", "Pashto", "Persian", "Portuguese (Portugal)", "Punjabi", "Romanian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho", "Shona", "Sindhi", "Sinhala (Sinhalese)", "Slovak", "Slovenian", "Somali", "Spanish (Mexico)", "Spanish (Argentina)", "Spanish (Latin America)", "Sundanese", "Swahili", "Swedish", "Tagalog (Filipino)", "Tajik", "Tamil", "Telugu", "Thai", "Turkish", "Ukrainian", "Urdu", "Uzbek", "Vietnamese", "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"
];

// Combine and sort
const LANGUAGES = [
    ...POPULAR_LANGUAGES,
    ...ALL_LANGUAGES.filter(l => !POPULAR_LANGUAGES.includes(l)).sort()
];

export default function TranslationWidget({ t }) {
    const [isTranslating, setIsTranslating] = useState(false);
    const [inputText, setInputText] = useState("Flixu optimizes your global content strategy by preserving brand voice nuances across all languages.");
    const [outputText, setOutputText] = useState("");
    const [mounted, setMounted] = useState(false);

    // Selectors State
    const [targetLang, setTargetLang] = useState("German");
    const [selectedMode, setSelectedMode] = useState(MODES[0]);

    // Dropdown UI State
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModeOpen, setIsModeOpen] = useState(false);

    const langDropdownRef = useRef(null);
    const modeDropdownRef = useRef(null);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close dropdowns on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
            if (modeDropdownRef.current && !modeDropdownRef.current.contains(event.target)) {
                setIsModeOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleTranslate = () => {
        setIsTranslating(true);
        // Simulate AI delay
        setTimeout(() => {
            // Simple mock response based on language/mode just to show interaction
            let mockResponse = `[${selectedMode.label} - ${targetLang}] Flixu optimiert Ihre globale Content-Strategie...`;
            if (targetLang === "German") {
                mockResponse = "Flixu optimiert Ihre globale Content-Strategie, indem Nuancen der Markenstimme in allen Sprachen gewahrt bleiben.";
            } else if (targetLang.includes("French")) {
                mockResponse = "Flixu optimise votre stratégie de contenu mondial en préservant les nuances de la voix de la marque dans toutes les langues.";
            } else if (targetLang.includes("Spanish")) {
                mockResponse = "Flixu optimiza su estrategia de contenido global preservando los matices de la voz de la marca en todos los idiomas.";
            }

            setOutputText(mockResponse);
            setIsTranslating(false);
        }, 1200);
    };

    const filteredLanguages = LANGUAGES.filter(lang =>
        lang.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!mounted) return <div className="w-full h-[400px] bg-paper border border-stone-200 animate-pulse" />;

    return (
        <div className="w-full max-w-5xl mx-auto bg-[#FDFCF8] border border-stone-200 rounded-sm shadow-sm flex flex-col relative group z-10">

            {/* --- HEADER BAR --- */}
            <div className="flex flex-col md:flex-row border-b border-stone-200 text-xs font-mono uppercase tracking-widest text-stone-500 relative z-20">

                {/* Source Side & Mode Selector */}
                <div className="flex-1 flex items-center justify-between px-6 py-3 border-b md:border-b-0 md:border-r border-stone-100">
                    <div className="flex items-center gap-2">
                        <span className="text-stone-400">Source:</span>
                        <span className="text-stone-900 font-medium">Auto Detect</span>
                    </div>

                    {/* Mode Selector */}
                    <div className="relative" ref={modeDropdownRef}>
                        <button
                            onClick={() => setIsModeOpen(!isModeOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 hover:border-orange-200 rounded-[2px] text-[10px] transition-colors"
                        >
                            <span className="text-stone-400">Mode:</span>
                            <span className="text-stone-900 font-bold">{selectedMode.label}</span>
                            <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isModeOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isModeOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="absolute top-full right-0 mt-2 w-64 bg-white border border-stone-200 shadow-xl rounded-sm py-2 z-50"
                                >
                                    {MODES.map((mode) => (
                                        <button
                                            key={mode.id}
                                            onClick={() => {
                                                setSelectedMode(mode);
                                                setIsModeOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 hover:bg-stone-50 flex flex-col gap-1 border-b border-stone-50 last:border-0"
                                        >
                                            <div className="flex items-center justify-between w-full">
                                                <span className={`font-medium ${selectedMode.id === mode.id ? 'text-orange-700' : 'text-stone-900'}`}>
                                                    {mode.label}
                                                </span>
                                                {selectedMode.id === mode.id && <Check className="w-3 h-3 text-orange-700" />}
                                            </div>
                                            <span className="text-[9px] text-stone-400 leading-normal normal-case tracking-normal font-sans">
                                                {mode.desc}
                                            </span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Target Side & Language Selector */}
                <div className="flex-1 flex items-center justify-between px-6 py-3 bg-stone-50/30">
                    <div className="flex items-center gap-3 relative" ref={langDropdownRef}>
                        <span className="text-stone-400">Target:</span>

                        <button
                            onClick={() => {
                                setIsLangOpen(!isLangOpen);
                                // Focus search input next tick if opening
                                if (!isLangOpen) setTimeout(() => document.getElementById('lang-search')?.focus(), 50);
                            }}
                            className="flex items-center gap-2 text-orange-700 font-medium hover:text-orange-800 transition-colors"
                        >
                            {targetLang}
                            <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="absolute top-full left-0 mt-2 w-64 max-h-[400px] flex flex-col bg-white border border-stone-200 shadow-xl rounded-sm z-50"
                                >
                                    {/* Search Header */}
                                    <div className="p-3 border-b border-stone-100 flex items-center gap-2 sticky top-0 bg-white z-10">
                                        <Search className="w-3 h-3 text-stone-400" />
                                        <input
                                            id="lang-search"
                                            type="text"
                                            placeholder="Search language..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full text-[10px] font-mono uppercase tracking-widest outline-none text-stone-900 placeholder:text-stone-300"
                                            autoComplete="off"
                                        />
                                        {searchTerm && (
                                            <button onClick={() => setSearchTerm("")}>
                                                <X className="w-3 h-3 text-stone-400 hover:text-stone-600" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Scrollable List */}
                                    <div className="overflow-y-auto flex-1 py-1 custom-scrollbar">
                                        {filteredLanguages.length > 0 ? (
                                            <>
                                                {/* Popular Section Header if searching is empty */}
                                                {!searchTerm && (
                                                    <div className="px-4 py-2 text-[9px] text-stone-400 font-bold bg-stone-50/50">
                                                        POPULAR
                                                    </div>
                                                )}

                                                {filteredLanguages.map((lang) => (
                                                    <button
                                                        key={lang}
                                                        onClick={() => {
                                                            setTargetLang(lang);
                                                            setIsLangOpen(false);
                                                            setSearchTerm("");
                                                        }}
                                                        className={`w-full text-left px-4 py-2 hover:bg-stone-50 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest ${targetLang === lang ? 'text-orange-700 bg-orange-50/30' : 'text-stone-600'}`}
                                                    >
                                                        {lang}
                                                        {targetLang === lang && <Check className="w-3 h-3" />}
                                                    </button>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="p-4 text-center text-stone-400 italic normal-case font-sans">
                                                No languages found
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Status Dot */}
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="hidden sm:inline text-[10px] text-stone-400">{t?.translationReady || "READY"}</span>
                    </div>
                </div>
            </div>

            {/* --- CONTENT GRID --- */}
            <div className="flex flex-col md:flex-row min-h-0 md:min-h-[400px] relative z-0">

                {/* INPUT AREA */}
                <div className="flex-1 relative group/input border-b border-stone-100 md:border-b-0 md:border-r min-h-[250px] md:min-h-auto pb-12 md:pb-0 z-0">
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-full p-8 bg-transparent outline-none resize-none font-serif text-xl md:text-3xl text-stone-900 placeholder:text-stone-300 leading-relaxed whitespace-pre-wrap"
                        placeholder={t?.placeholder || "Type or paste text here..."}
                        spellCheck="false"
                    />
                    {/* Focus Indicator Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-700 transition-all duration-500 group-focus-within/input:w-full"></div>
                </div>

                {/* OUTPUT AREA */}
                <div className="flex-1 relative bg-stone-50/30 min-h-[250px] md:min-h-auto pt-8 md:pt-0 z-0">
                    <div className={`w-full h-full p-8 font-serif text-xl md:text-3xl leading-relaxed transition-opacity duration-300 ${isTranslating ? 'opacity-50 blur-[1px]' : 'opacity-100'}`}>
                        {outputText ? (
                            <span className="text-stone-900">{outputText}</span>
                        ) : (
                            <span className="text-stone-300 italic">{t?.translationEmpty || "Translation will appear here..."}</span>
                        )}
                    </div>

                    {/* Loading Overlay */}
                    {isTranslating && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex items-center gap-2 text-orange-700 font-mono text-xs uppercase tracking-widest bg-white/80 px-3 py-1 border border-stone-100 rounded-full shadow-sm">
                                <Sparkles className="w-3 h-3 animate-spin" />
                                <span>{t?.processing || "Processing Context..."}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- ACTION BAR (Bottom Docked) --- */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 w-full flex justify-center px-4">
                <button
                    onClick={handleTranslate}
                    disabled={isTranslating}
                    className="flex items-center gap-3 px-8 py-3 bg-[#FDFCF8] hover:bg-white text-stone-900 border border-stone-200 hover:border-orange-600 transition-all duration-300 rounded-full shadow-sm hover:shadow-md group/btn whitespace-nowrap"
                >
                    {isTranslating ? (
                        <>
                            <span className="w-4 h-4 border-2 border-stone-300 border-t-orange-600 rounded-full animate-spin"></span>
                            <span className="font-sans font-medium text-sm">{t?.translating || "Translating..."}</span>
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-4 h-4 text-orange-700 group-hover/btn:scale-110 transition-transform" />
                            <span className="font-sans font-medium text-sm">{t?.translateBtn || "Translate with Context"}</span>
                        </>
                    )}
                </button>
            </div>

        </div>
    );
}
