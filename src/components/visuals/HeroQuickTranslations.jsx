import React from "react";
import { motion } from "framer-motion";

export default function HeroQuickTranslations() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Central Translation App Interface */}
        <rect x="100" y="60" width="200" height="180" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        {/* App Header */}
        <line x1="100" y1="90" x2="300" y2="90" stroke={c.sketch} strokeWidth="1" />
        <rect x="110" y="70" width="40" height="10" rx="2" fill={c.sketch} opacity="0.5" />
        
        {/* Drag & Drop Upload Zone */}
        <motion.rect 
            x="120" y="110" width="160" height="60" rx="4" fill="#FDFCF8" stroke={c.sketch} strokeWidth="1" strokeDasharray="6 4"
            animate={{ stroke: [c.sketch, c.accent, c.sketch] }}
            transition={{ duration: 4, times: [0, 0.4, 1], repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="200" y="145" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.sketch} fontWeight="500">Drag file here</text>

        {/* The User's File being dropped in */}
        <motion.g
            initial={{ x: 200, y: 0, scale: 0.8, opacity: 0 }}
            animate={{ x: [200, 200, 200, 200], y: [0, 130, 130, 130], scale: [0.8, 1, 1, 0.5], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, times: [0, 0.3, 0.5, 0.55], repeat: Infinity, ease: "easeIn" }}
        >
            <rect x="-20" y="-25" width="40" height="50" rx="4" fill={c.paper} stroke={c.ink} strokeWidth="1" />
            <line x1="-10" y1="-10" x2="10" y2="-10" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-10" y1="0" x2="10" y2="0" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-10" y1="10" x2="5" y2="10" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* The Lightning Fast Processing Bar (Fills up rapidly) */}
        <motion.rect 
            x="120" y="185" width="160" height="8" rx="4" fill={c.sketch} opacity="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 4, times: [0, 0.55, 0.6, 0.8, 1], repeat: Infinity }}
        />
        <motion.rect 
            x="120" y="185" height="8" rx="4" fill={c.accent}
            initial={{ width: 0, opacity: 0 }} 
            animate={{ width: [0, 0, 160, 160], opacity: [0, 0, 1, 0] }} 
            transition={{ duration: 4, times: [0, 0.55, 0.8, 1], repeat: Infinity, ease: "easeOut" }}
        />
        {/* Micro-spark indicating super speed calculation */}
        <motion.circle 
            r="4" fill={c.accent}
            initial={{ cx: 120, cy: 189, opacity: 0 }}
            animate={{ cx: [120, 120, 280, 280], opacity: [0, 0, 1, 0] }}
            transition={{ duration: 4, times: [0, 0.55, 0.8, 1], repeat: Infinity, ease: "easeOut" }}
        />

        {/* The Instant Translated Result popping out (Right Side) */}
        <motion.g
            initial={{ x: 300, y: 140, scale: 0.5, opacity: 0 }}
            animate={{ x: [300, 300, 330, 330], y: [140, 140, 140, 140], scale: [0.5, 0.5, 1, 1], opacity: [0, 0, 1, 0] }}
            transition={{ duration: 4, times: [0, 0.8, 0.85, 1], repeat: Infinity, ease: "easeOut" }}
        >
            <rect x="0" y="-30" width="40" height="50" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
            <line x1="10" y1="-15" x2="25" y2="-15" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="-5" x2="30" y2="-5" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Download/Success Check Badge */}
            <circle cx="20" cy="10" r="6" fill={c.accent} />
            <path d="M 16 10 L 19 13 L 24 7" fill="transparent" stroke={c.paper} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

      </motion.svg>
    </div>
  );
}
