import React from "react";
import { motion } from "framer-motion";

export default function HeroFidelity() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Source Document */}
        <rect x="70" y="60" width="120" height="150" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        
        {/* Source Content Layout */}
        <rect x="80" y="70" width="100" height="30" rx="2" fill={c.sketch} opacity="0.3" />
        <line x1="80" y1="110" x2="160" y2="110" stroke={c.sketch} strokeWidth="1" />
        <line x1="80" y1="125" x2="140" y2="125" stroke={c.sketch} strokeWidth="1" />
        <line x1="80" y1="140" x2="180" y2="140" stroke={c.sketch} strokeWidth="1" />
        {/* Inline element (Image/Table) */}
        <rect x="80" y="155" width="60" height="40" rx="2" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="2 2" />

        {/* Translation Pass Effect (Scanning Data Transfer) */}
        {/* Data particles moving from Source to Target */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`data-${i}`}
            cx="200" cy={80 + i * 20} r="3" fill={c.ink}
            initial={{ cx: 160, opacity: 0 }}
            animate={{ cx: [160, 240, 240], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Target Document (Perfect Layout Clone) */}
        <rect x="230" y="60" width="120" height="150" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        
        {/* Target Content Layout (Matching Exactly) */}
        <rect x="240" y="70" width="100" height="30" rx="2" fill={c.accent} opacity="0.2" />
        <motion.line 
            x1="240" y1="110" x2="320" y2="110" stroke={c.ink} strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line 
            x1="240" y1="125" x2="300" y2="125" stroke={c.ink} strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.line 
            x1="240" y1="140" x2="340" y2="140" stroke={c.ink} strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
        />
        {/* Reconstructed Inline Element */}
        <motion.rect 
            x="240" y="155" width="60" height="40" rx="2" fill="transparent" stroke={c.accent} strokeWidth="1"
            initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
        />

        {/* "Fidelity Lock" Box covering the target */}
        <motion.rect 
            x="225" y="55" width="130" height="160" rx="6" fill="transparent" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4"
            animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Top to Bottom Scanner on Source */}
        <motion.line 
            x1="65" x2="195" stroke={c.accent} strokeWidth="1" opacity="0.5"
            initial={{ y1: 55, y2: 55 }}
            animate={{ y1: [55, 215, 215], y2: [55, 215, 215], opacity: [0.5, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}
