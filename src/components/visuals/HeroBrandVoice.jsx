import React from "react";
import { motion } from "framer-motion";

export default function HeroBrandVoice() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Brand Voice Control Panel (Left) */}
        <rect x="40" y="60" width="100" height="180" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="40" y1="90" x2="140" y2="90" stroke={c.sketch} strokeWidth="1" />
        <rect x="50" y="70" width="40" height="10" rx="2" fill={c.sketch} opacity="0.5" />

        {/* Sliders */}
        {/* Slider 1: Formality */}
        <text x="50" y="115" fontSize="8" fontFamily="sans-serif" fill={c.ink} fontWeight="500">FORMAL</text>
        <line x1="50" y1="130" x2="130" y2="130" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
        <motion.circle cx="90" cy="130" r="8" fill={c.paper} stroke={c.accent} strokeWidth="1.5"
            animate={{ cx: [90, 120, 60, 90] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Slider 2: Playfulness */}
        <text x="50" y="165" fontSize="8" fontFamily="sans-serif" fill={c.ink} fontWeight="500">PLAYFUL</text>
        <line x1="50" y1="180" x2="130" y2="180" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
        <motion.circle cx="90" cy="180" r="8" fill={c.paper} stroke={c.accent} strokeWidth="1.5"
            animate={{ cx: [90, 60, 120, 90] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Slider 3: Urgency */}
        <text x="50" y="215" fontSize="8" fontFamily="sans-serif" fill={c.ink} fontWeight="500">URGENT</text>
        <line x1="50" y1="230" x2="130" y2="230" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
        <motion.circle cx="90" cy="230" r="8" fill={c.paper} stroke={c.accent} strokeWidth="1.5"
            animate={{ cx: [90, 100, 50, 90] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Data processing line between Panel and Output */}
        <motion.line 
          x1="140" y1="150" x2="200" y2="150" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4"
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* The Output Document (Right) */}
        <rect x="200" y="75" width="150" height="150" rx="8" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        {/* Document Header lines */}
        <rect x="220" y="95" width="20" height="20" rx="4" fill={c.accent} opacity="0.2" />
        
        {/* Dynamic Text Morphing Based on "Settings" (using fading g elements) */}
        
        {/* State 1: Balanced (matches start of animation loop) */}
        <motion.g animate={{ opacity: [1, 0, 0, 1] }} transition={{ duration: 6, times: [0, 0.2, 0.8, 1], repeat: Infinity }}>
            <line x1="250" y1="100" x2="330" y2="100" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
            <line x1="250" y1="110" x2="300" y2="110" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            
            <line x1="220" y1="140" x2="320" y2="140" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="220" y1="155" x2="310" y2="155" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="220" y1="170" x2="280" y2="170" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />

            <rect x="220" y="190" width="60" height="12" rx="4" fill={c.sketch} opacity="0.5" />
        </motion.g>

        {/* State 2: Highly Formal (matches middle of animation loop when Slider 1 goes right) */}
        <motion.g animate={{ opacity: [0, 1, 0, 0] }} transition={{ duration: 6, times: [0, 0.2, 0.5, 0.6], repeat: Infinity }}>
            <line x1="250" y1="100" x2="310" y2="100" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
            <line x1="250" y1="110" x2="330" y2="110" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            
            <line x1="220" y1="140" x2="330" y2="140" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="220" y1="155" x2="330" y2="155" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="220" y1="170" x2="300" y2="170" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="220" y1="185" x2="260" y2="185" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />

            {/* A formal, strict button shape */}
             <rect x="220" y="200" width="80" height="12" rx="2" fill={c.ink} opacity="0.8" />
        </motion.g>

        {/* State 3: Casual/Playful (matches end of animation loop when Slider 2 goes right) */}
        <motion.g animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 6, times: [0, 0.4, 0.6, 1], repeat: Infinity }}>
            <line x1="250" y1="105" x2="290" y2="105" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Shorter, punchier sentences */}
            <line x1="220" y1="140" x2="280" y2="140" stroke={c.accent} strokeWidth="1" strokeLinecap="round" />
            <line x1="220" y1="160" x2="250" y2="160" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />

            {/* A loud, playful button */}
            <rect x="220" y="185" width="100" height="20" rx="10" fill={c.accent} />
             <text x="270" y="198" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.paper} fontWeight="500">HEYA!</text>
        </motion.g>

      </motion.svg>
    </div>
  );
}
