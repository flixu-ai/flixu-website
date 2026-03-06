import React from "react";
import { motion } from "framer-motion";

export default function HeroText() {
    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1", // stone-300
        ink: "#1c1917",    // stone-900
        accent: "#c2410c", // orange-700
    };

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.1, duration: 1, ease: "easeInOut" },
                opacity: { duration: 0.1 },
            },
        }),
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
                {/* Abstract Text Lines */}
                <motion.line
                    x1="50" y1="100" x2="350" y2="100"
                    stroke={c.sketch} strokeWidth="1"
                    strokeLinecap="round"
                    variants={draw} custom={1}
                />
                <motion.line
                    x1="50" y1="140" x2="200" y2="140"
                    stroke={c.sketch} strokeWidth="1"
                    strokeLinecap="round"
                    variants={draw} custom={3}
                />
                <motion.line
                    x1="280" y1="140" x2="350" y2="140"
                    stroke={c.sketch} strokeWidth="1"
                    strokeLinecap="round"
                    variants={draw} custom={5}
                />
                <motion.line
                    x1="50" y1="180" x2="300" y2="180"
                    stroke={c.sketch} strokeWidth="1"
                    strokeLinecap="round"
                    variants={draw} custom={7}
                />

                {/* The "Found" Word - Highlights in Orange */}
                <motion.line
                    x1="210" y1="140" x2="270" y2="140"
                    stroke={c.ink} strokeWidth="1.5"
                    strokeLinecap="round"
                    variants={draw} custom={4}
                    animate={{ stroke: [c.ink, c.accent, c.ink] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                />

                {/* Cursor */}
                <motion.line
                    x1="275" y1="130" x2="275" y2="150"
                    stroke={c.accent} strokeWidth="1"
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 0.8, times: [0, 0.5, 0.5, 0.9, 1], repeat: Infinity, ease: "linear" }}
                />

                {/* Tooltip "Context Found" */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.8, 1, 1, 1, 0.8], y: [10, 0, 0, 0, 10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2, times: [0, 0.1, 0.8, 0.9, 1] }}
                >
                    <rect x="195" y="90" width="90" height="24" rx="2" fill={c.ink} />
                    {/* Tooltip Tail */}
                    <path d="M 240 114 L 245 119 L 250 114" fill={c.ink} />
                    {/* Text lines inside tooltip */}
                    <line x1="205" y1="102" x2="275" y2="102" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </motion.g>

            </motion.svg>
        </div>
    );
}
