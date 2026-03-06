import React from "react";
import { motion } from "framer-motion";

export default function DetailVisual() {
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
                {/* Abstract Abstract Image Representation */}
                <rect x="50" y="50" width="200" height="200" fill="none" stroke={c.sketch} strokeWidth="1" />

                {/* Simple UI Elements inside */}
                <line x1="50" y1="100" x2="250" y2="100" stroke={c.sketch} strokeWidth="0.5" />
                <rect x="70" y="130" width="160" height="40" rx="4" fill="none" stroke={c.ink} strokeWidth="1" />
                <rect x="80" y="145" width="80" height="10" rx="2" fill={c.sketch} opacity="0.5" />

                {/* Bounding Box Animation */}
                <motion.rect
                    x="65" y="125" width="170" height="50" rx="4"
                    fill="none" stroke={c.accent} strokeWidth="2" strokeDasharray="4 4"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, times: [0, 0.2, 0.8, 1] }}
                />

                {/* Label Popup */}
                <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 1, 1, 0], y: 0 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, times: [0, 0.2, 0.8, 1] }}
                >
                    <rect x="65" y="105" width="80" height="16" rx="2" fill={c.accent} />
                    {/* "Button" Text lines inside label */}
                    <line x1="75" y1="113" x2="135" y2="113" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* Text Change inside Button */}
                <motion.g
                    animate={{ opacity: [1, 0, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, times: [0, 0.4, 0.6, 1] }}
                >
                    <rect x="80" y="145" width="80" height="10" rx="2" fill={c.sketch} />
                </motion.g>

                <motion.g
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, times: [0, 0.4, 0.6, 1] }}
                >
                    {/* Translated Text placeholder */}
                    <rect x="80" y="145" width="60" height="10" rx="2" fill={c.ink} />
                </motion.g>

            </motion.svg>
        </div>
    );
}
