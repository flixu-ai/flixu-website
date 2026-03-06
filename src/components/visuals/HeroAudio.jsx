import React from "react";
import { motion } from "framer-motion";

export default function HeroAudio() {
    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1",
        ink: "#1c1917",
        accent: "#c2410c",
    };

    const barCount = 30;
    const bars = Array.from({ length: barCount });

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

                {/* WAVE 1: Main (Splits Up) */}
                <g>
                    {bars.map((_, i) => (
                        <motion.line
                            key={`w1-${i}`}
                            x1={50 + i * 10} y1={130} x2={50 + i * 10} y2={170}
                            stroke={c.ink} strokeWidth="1" strokeLinecap="round"
                            initial={{ scaleY: 0.1, y: 0 }}
                            animate={{
                                scaleY: [0.2, 1, 0.4, 0.2],
                                y: [0, -40, -40, 0] // Move UP
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.05 // Wave effect
                            }}
                        />
                    ))}
                </g>

                {/* WAVE 2: Accent (Splits Down) */}
                <g>
                    {bars.map((_, i) => (
                        <motion.line
                            key={`w2-${i}`}
                            x1={50 + i * 10} y1={130} x2={50 + i * 10} y2={170}
                            stroke={c.accent} strokeWidth="1" strokeLinecap="round"
                            initial={{ scaleY: 0.1, y: 0, opacity: 0 }}
                            animate={{
                                scaleY: [0.2, 0.8, 0.4, 0.2],
                                y: [0, 40, 40, 0], // Move DOWN
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.05
                            }}
                        />
                    ))}
                </g>

                {/* Center Line visual helper */}
                <motion.line
                    x1="40" y1="150" x2="360" y2="150"
                    stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4"
                />

            </motion.svg>
        </div>
    );
}
