import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DetailText() {
    const [isFormal, setIsFormal] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFormal((prev) => !prev);
        }, 4000); // Switch every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1",
        ink: "#1c1917",
        accent: "#c2410c",
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden pointer-events-none">

            {/* Toggle Switch Visual */}
            <div className="flex items-center gap-4 mb-8">
                <span className={`text-xs font-mono uppercase tracking-widest transition-colors ${!isFormal ? "text-orange-700 font-bold" : "text-stone-400"}`}>Casual</span>

                {/* Switch Track */}
                <div className="w-12 h-6 rounded-full border border-stone-300 relative bg-stone-50">
                    <motion.div
                        className="w-4 h-4 rounded-full bg-stone-900 absolute top-1"
                        animate={{ left: isFormal ? "26px" : "4px" }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </div>

                <span className={`text-xs font-mono uppercase tracking-widest transition-colors ${isFormal ? "text-orange-700 font-bold" : "text-stone-400"}`}>Formal</span>
            </div>

            {/* Text Transformation */}
            <div className="relative h-12 w-full max-w-[300px] text-center">
                <AnimatePresence mode="wait">
                    {isFormal ? (
                        <motion.div
                            key="formal"
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.5 }}
                            className="font-serif text-xl md:text-2xl text-stone-900"
                        >
                            "Greetings, how may I assist you?"
                        </motion.div>
                    ) : (
                        <motion.div
                            key="casual"
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.5 }}
                            className="font-sans text-xl md:text-2xl text-stone-600"
                        >
                            "Hey, what's up?"
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Decorative Blueprint Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.svg width="100%" height="100%" viewBox="0 0 300 150" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                    <line x1="0" y1="75" x2="300" y2="75" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="150" y1="0" x2="150" y2="150" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />
                </motion.svg>
            </div>

        </div>
    );
}
