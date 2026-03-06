import React from "react";
import { motion } from "framer-motion";

export default function DetailDoc() {
    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1",
        ink: "#1c1917",
        accent: "#c2410c",
    };

    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden pointer-events-none bg-[#FDFCF8]">
            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                className="w-full max-w-[300px]"
            >
                {/* Document Frame */}
                <rect x="50" y="40" width="200" height="220" fill="none" stroke={c.sketch} strokeWidth="1" rx="2" />

                {/* Static Layout Grid - Represents Structure */}
                <g>
                    {/* Header Area */}
                    <rect x="70" y="60" width="60" height="20" fill={c.paper} stroke={c.ink} strokeWidth="1.5" rx="1" />

                    {/* Image Placeholder */}
                    <rect x="70" y="95" width="160" height="80" fill={c.paper} stroke={c.sketch} strokeWidth="1" rx="1" />
                    <line x1="70" y1="95" x2="230" y2="175" stroke={c.sketch} strokeWidth="0.5" />
                    <line x1="230" y1="95" x2="70" y2="175" stroke={c.sketch} strokeWidth="0.5" />

                    {/* Column 1 Text Lines */}
                    <rect x="70" y="190" width="70" height="6" rx="3" fill={c.ink} opacity="0.1" />
                    <rect x="70" y="205" width="70" height="6" rx="3" fill={c.ink} opacity="0.1" />
                    <rect x="70" y="220" width="50" height="6" rx="3" fill={c.ink} opacity="0.1" />

                    {/* Column 2 Text Lines */}
                    <rect x="160" y="190" width="70" height="6" rx="3" fill={c.ink} opacity="0.1" />
                    <rect x="160" y="205" width="70" height="6" rx="3" fill={c.ink} opacity="0.1" />
                    <rect x="160" y="220" width="50" height="6" rx="3" fill={c.ink} opacity="0.1" />
                </g>

                {/* Scan Bar Animation */}
                <motion.line
                    x1="40" y1="40" x2="260" y2="40"
                    stroke={c.accent} strokeWidth="2"
                    initial={{ y1: 40, y2: 40, opacity: 0 }}
                    animate={{
                        y1: [40, 260],
                        y2: [40, 260],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1
                    }}
                />

                {/* Content Change Simulation (Opacity pulse on lines) */}
                <motion.g
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                >
                    <rect x="70" y="190" width="70" height="6" rx="3" fill={c.ink} />
                    <rect x="160" y="205" width="70" height="6" rx="3" fill={c.ink} />
                </motion.g>

            </motion.svg>
        </div>
    );
}
