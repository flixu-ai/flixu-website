import React from "react";
import { motion } from "framer-motion";

export default function HeroDoc() {
    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1",
        ink: "#1c1917",
        accent: "#c2410c",
    };

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-[500px]"
            >
                <g transform="translate(125, 50)">
                    {/* Layer 1: Base (Wireframe) */}
                    <motion.rect
                        x="0" y="0" width="150" height="200" rx="2"
                        fill="none" stroke={c.sketch} strokeWidth="1"
                        initial={{ rotate: 0, x: 0, y: 0, opacity: 0 }}
                        animate={{
                            rotate: [-5, -5, 0],
                            x: [-20, -20, 0],
                            y: [10, 10, 0],
                            opacity: 1
                        }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, times: [0.2, 0.5, 0.8] }}
                    />

                    {/* Layer 2: Format (Structure) */}
                    <motion.rect
                        x="0" y="0" width="150" height="200" rx="2"
                        fill="#FDFCF8" stroke={c.sketch} strokeWidth="1"
                        initial={{ rotate: 0, x: 0, y: 0, opacity: 0 }}
                        animate={{
                            rotate: [5, 5, 0],
                            x: [20, 20, 0],
                            y: [20, 20, 0],
                            opacity: 1
                        }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, times: [0.2, 0.5, 0.8] }}
                    />

                    {/* Layer 3: Content (Final) */}
                    <motion.rect
                        x="0" y="0" width="150" height="200" rx="2"
                        fill="#FDFCF8" stroke={c.ink} strokeWidth="1.5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Content Lines */}
                    <motion.line x1="20" y1="40" x2="130" y2="40" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
                    <motion.line x1="20" y1="70" x2="130" y2="70" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
                    <motion.line x1="20" y1="90" x2="100" y2="90" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
                    <motion.line x1="20" y1="120" x2="130" y2="120" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />

                    {/* Scan Line */}
                    <motion.line
                        x1="-10" y1="0" x2="160" y2="0"
                        stroke={c.accent} strokeWidth="1"
                        initial={{ y1: -10, y2: -10, opacity: 0 }}
                        animate={{ y1: [0, 210], y2: [0, 210], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear", delay: 1 }}
                    />
                </g>
            </motion.svg>
        </div>
    );
}
