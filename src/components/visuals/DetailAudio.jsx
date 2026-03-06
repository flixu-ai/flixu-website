import React from "react";
import { motion } from "framer-motion";

export default function DetailAudio() {
    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1",
        ink: "#1c1917",
        accent: "#c2410c",
    };

    const bubbleVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.8, duration: 0.4, ease: "easeOut" }
        })
    };

    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden pointer-events-none bg-[#FDFCF8]">
            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                className="w-full max-w-[300px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} // Re-animate every time
            >

                {/* Speaker A (Left) */}
                <motion.g custom={0} variants={bubbleVariants}>
                    <circle cx="40" cy="60" r="15" fill="none" stroke={c.ink} strokeWidth="1.5" />
                    <path d="M 65 60 L 70 55 L 70 75 L 65 70" fill={c.sketch} stroke="none" />
                    <rect x="70" y="45" width="140" height="30" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
                    <line x1="80" y1="60" x2="180" y2="60" stroke={c.sketch} strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* Speaker B (Right) */}
                <motion.g custom={1} variants={bubbleVariants}>
                    <circle cx="260" cy="120" r="15" fill="none" stroke={c.accent} strokeWidth="1.5" />
                    <path d="M 235 120 L 230 115 L 230 135 L 235 130" fill={c.accent} stroke="none" opacity="0.1" />
                    <rect x="90" y="105" width="140" height="30" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
                    <line x1="100" y1="120" x2="200" y2="120" stroke={c.ink} strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* Speaker A (Left) - Reply */}
                <motion.g custom={2} variants={bubbleVariants}>
                    <circle cx="40" cy="180" r="15" fill="none" stroke={c.ink} strokeWidth="1.5" />
                    <rect x="70" y="165" width="100" height="30" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
                    <line x1="80" y1="180" x2="140" y2="180" stroke={c.sketch} strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* Speaker A (Left) - Follow up */}
                <motion.g custom={3} variants={bubbleVariants}>
                    <rect x="70" y="205" width="160" height="30" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
                    <line x1="80" y1="220" x2="200" y2="220" stroke={c.sketch} strokeWidth="2" strokeLinecap="round" />
                </motion.g>

            </motion.svg>
        </div>
    );
}
