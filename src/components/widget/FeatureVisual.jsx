import React from 'react';
import { motion } from "framer-motion";
import HeroVision from '../visuals/HeroVision';
import HeroContext from '../visuals/HeroContext';
import HeroFidelity from '../visuals/HeroFidelity';

export default function FeatureVisual({ variant = "text" }) {
    if (variant === 'vision') return <HeroVision />;
    if (variant === 'context') return <HeroContext />;
    if (variant === 'fidelity') return <HeroFidelity />;

    const c = { paper: "#FDFCF8", sketch: "#E7E5E4", ink: "#57534E", accent: "#C2410C" };

    // Global Transitions
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1, opacity: 1,
            transition: { pathLength: { delay: i * 0.2, duration: 1.5, ease: "easeInOut" }, opacity: { duration: 0.1 } }
        })
    };

    const pulse = {
        opacity: [0.5, 1, 0.5],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    };

    return (
        <div className="w-full h-64 flex items-end justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">

            <motion.svg
                width="100%" height="100%" viewBox="0 0 400 250"
                initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-[400px]"
            >
                {/* === VARIANT: TEXT (Cursor & Typing) === */}
                {variant === "text" && (
                    <g transform="translate(50, 50)">
                        {/* Paper Outline */}
                        <motion.rect x="0" y="0" width="300" height="200" rx="2" fill="none" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" variants={draw} />
                        {/* Text Lines */}
                        {[40, 70, 100].map((y, i) => (
                            <motion.line key={i} x1="30" y1={y} x2="270" y2={y} stroke={c.ink} strokeWidth="2" variants={draw} custom={i + 1} />
                        ))}
                        {/* The Active Cursor */}
                        <motion.line x1="30" y1="130" x2="30" y2="154" stroke={c.accent} strokeWidth="3"
                            initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                        />
                        {/* Typewriter Effect Line */}
                        <motion.line x1="30" y1="142" x2="180" y2="142" stroke={c.sketch} strokeWidth="2"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                    </g>
                )}

                {/* === VARIANT: DOC (Layers) === */}
                {variant === "doc" && (
                    <g transform="translate(100, 40)">
                        {/* Base Layer */}
                        <motion.rect x="20" y="20" width="160" height="200" fill="none" stroke={c.sketch} strokeWidth="1" variants={draw} custom={0} />
                        {/* Top Layer (Offset) */}
                        <motion.rect x="-20" y="-10" width="160" height="200" fill="#FDFCF8" stroke={c.ink} strokeWidth="1.5" variants={draw} custom={1} />
                        {/* Content inside Top Layer */}
                        <motion.rect x="0" y="20" width="60" height="60" fill={c.sketch} opacity="0.1" variants={draw} custom={2} />
                        <motion.line x1="70" y1="25" x2="120" y2="25" stroke={c.sketch} strokeWidth="2" variants={draw} custom={3} />
                        <motion.line x1="70" y1="45" x2="110" y2="45" stroke={c.sketch} strokeWidth="2" variants={draw} custom={4} />
                        {/* Orange Scan Line */}
                        <motion.line x1="-30" y1="80" x2="150" y2="80" stroke={c.accent} strokeWidth="1"
                            animate={{ y1: [80, 150, 80], y2: [80, 150, 80], opacity: [0, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </g>
                )}

                {/* === VARIANT: VISUAL (Viewfinder) === */}
                {variant === "visual" && (
                    <g transform="translate(75, 50)">
                        {/* Image Placeholder Background */}
                        <motion.rect x="25" y="25" width="200" height="150" fill={c.sketch} opacity="0.05" />
                        {/* The Viewfinder Frame */}
                        <motion.rect x="0" y="0" width="250" height="200" fill="none" stroke={c.ink} strokeWidth="1.5" variants={draw} custom={1} />
                        {/* Crosshairs */}
                        <motion.line x1="125" y1="90" x2="125" y2="110" stroke={c.accent} strokeWidth="1" variants={draw} custom={2} />
                        <motion.line x1="115" y1="100" x2="135" y2="100" stroke={c.accent} strokeWidth="1" variants={draw} custom={2} />
                        {/* Corner Markers */}
                        <motion.path d="M 10 40 L 10 10 L 40 10" fill="none" stroke={c.accent} strokeWidth="2" variants={draw} custom={3} />
                        <motion.path d="M 240 160 L 240 190 L 210 190" fill="none" stroke={c.accent} strokeWidth="2" variants={draw} custom={3} />
                    </g>
                )}

                {/* === VARIANT: AUDIO (Waveform) === */}
                {variant === "audio" && (
                    <g transform="translate(50, 100)">
                        {/* Base Line */}
                        <motion.line x1="0" y1="0" x2="300" y2="0" stroke={c.sketch} strokeWidth="1" variants={draw} />
                        {/* The Waves */}
                        {[...Array(20)].map((_, i) => (
                            <motion.line
                                key={i}
                                x1={20 + i * 14} y1={-10} x2={20 + i * 14} y2={10}
                                stroke={c.ink} strokeWidth="4" strokeLinecap="round"
                                initial={{ scaleY: 0.1 }}
                                animate={{ scaleY: [0.2, 1, 0.2] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                            />
                        ))}
                        {/* Playhead */}
                        <motion.line x1="150" y1="-30" x2="150" y2="30" stroke={c.accent} strokeWidth="1" />
                    </g>
                )}
            </motion.svg>

            {/* Fade Gradient to blend into card */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent"></div>
        </div>
    );
}
