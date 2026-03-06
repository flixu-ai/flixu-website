import React from 'react';
import { motion } from "framer-motion";

export default function WorkspaceVisual() {
    const c = {
        paper: "#FDFCF8",
        border: "#E7E5E4",
        text: "#E7E5E4", // Inactive text
        textDark: "#57534E", // Active text
        accent: "#C2410C",
        accentBg: "#FFEDD5"
    };

    // Staggered Text Line Animation
    const lineVar = {
        hidden: { width: 0 },
        visible: (i) => ({
            width: i % 2 === 0 ? "80%" : "60%",
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <div className="w-full h-full bg-[#FDFCF8] border border-stone-200 rounded-sm relative overflow-hidden flex font-sans">

            {/* 1. SIDEBAR (Left) */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-full border-r border-stone-100 flex flex-col items-center py-6 gap-4 bg-stone-50/50"
            >
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-sm bg-stone-200 opacity-50" />
                ))}
                <div className="mt-auto w-8 h-8 rounded-full bg-stone-200" />
            </motion.div>

            {/* 2. MAIN EDITOR AREA */}
            <div className="flex-1 flex flex-col p-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="h-8 w-full border-b border-stone-100 mb-8 flex items-center justify-between"
                >
                    <div className="h-2 w-32 bg-stone-200 rounded-full" />
                    <div className="h-6 w-24 bg-stone-100 rounded-sm" />
                </motion.div>

                {/* Translation Grid */}
                <div className="grid grid-cols-2 gap-12 h-full">

                    {/* SOURCE COLUMN */}
                    <div className="flex flex-col gap-3">
                        <div className="text-xs font-mono text-stone-400 mb-2 uppercase tracking-widest">Source</div>
                        {/* Abstract Text Lines */}
                        <motion.div className="h-2 w-full bg-stone-200 rounded-full" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} />
                        <motion.div className="h-2 w-[90%] bg-stone-200 rounded-full" initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1, delay: 0.7 }} />

                        {/* THE TRIGGER WORD (Orange Highlight) */}
                        <div className="flex items-center gap-2 mt-1">
                            <motion.div className="h-2 w-12 bg-stone-200 rounded-full" initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 0.5, delay: 0.9 }} />
                            <motion.div
                                className="h-6 px-2 flex items-center bg-orange-50 border border-orange-200 rounded-sm relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2, duration: 0.5 }}
                            >
                                <div className="h-2 w-16 bg-orange-300 rounded-full" />

                                {/* Floating Glossary Card (Tooltip) */}
                                <motion.div
                                    className="absolute -top-12 left-0 bg-white border border-stone-200 shadow-sm p-2 rounded-sm w-32 z-10"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2.5, duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        <div className="h-1 w-8 bg-stone-300 rounded-full" />
                                    </div>
                                    <div className="h-1 w-20 bg-stone-200 rounded-full" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* TARGET COLUMN */}
                    <div className="flex flex-col gap-3">
                        <div className="text-xs font-mono text-orange-700/60 mb-2 uppercase tracking-widest">Target</div>
                        {/* Simulation of Typing */}
                        <motion.div className="h-2 w-full bg-stone-200 rounded-full" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 3.5 }} />
                        <motion.div className="h-2 w-[85%] bg-stone-200 rounded-full" initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 3.7 }} />

                        {/* THE CORRECTED WORD */}
                        <div className="flex items-center gap-2 mt-1">
                            <motion.div className="h-2 w-10 bg-stone-200 rounded-full" initial={{ width: 0 }} whileInView={{ width: 40 }} transition={{ duration: 0.5, delay: 4 }} />
                            <motion.div
                                className="h-2 w-16 bg-stone-800 rounded-full"
                                initial={{ width: 0, backgroundColor: "#E7E5E4" }}
                                whileInView={{ width: 64, backgroundColor: "#1C1917" }}
                                transition={{ delay: 4.2, duration: 0.5 }}
                            />
                            {/* Success Checkmark */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 4.5, type: "spring" }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
