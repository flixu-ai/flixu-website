import React from "react";
import { motion } from "framer-motion";

export default function HeroLegal() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        className="w-full max-w-[500px]"
      >
        {/* Base Platform */}
        <line x1="150" y1="240" x2="250" y2="240" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="200" y1="240" x2="200" y2="100" stroke={c.sketch} strokeWidth="1.5" />

        {/* Balancing Beam Group */}
        <motion.g
          initial={{ rotate: -10 }}
          animate={{ rotate: [10, -5, 5, -2, 0, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          style={{ originX: "200px", originY: "100px" }}
        >
          {/* Main Beam */}
          <line x1="80" y1="100" x2="320" y2="100" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
          
          {/* Left String & Scale */}
          <line x1="80" y1="100" x2="60" y2="160" stroke={c.sketch} strokeWidth="1" />
          <line x1="80" y1="100" x2="100" y2="160" stroke={c.sketch} strokeWidth="1" />
          <path d="M 50 160 Q 80 180 110 160 Z" fill={c.paper} stroke={c.ink} strokeWidth="1" />
          {/* Left Block (Source Term) */}
          <rect x="70" y="145" width="20" height="15" fill={c.sketch} />

          {/* Right String & Scale */}
          <line x1="320" y1="100" x2="300" y2="160" stroke={c.sketch} strokeWidth="1" />
          <line x1="320" y1="100" x2="340" y2="160" stroke={c.sketch} strokeWidth="1" />
          <path d="M 290 160 Q 320 180 350 160 Z" fill={c.paper} stroke={c.ink} strokeWidth="1" />
          {/* Right Block (Translated Term) - Appears slightly later */}
          <motion.rect 
            x="310" y="145" width="20" height="15" 
            fill={c.accent} 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0, 1, 1], scale: [0, 0, 1, 1] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          />
        </motion.g>

        {/* The Central "Lock" Core (Domain Awareness Lock) */}
        <motion.circle 
          cx="200" cy="100" r="8" 
          fill={c.paper} stroke={c.ink} strokeWidth="1.5" 
        />
        <motion.circle 
          cx="200" cy="100" r="4" 
          fill={c.accent}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
        />
      </motion.svg>
    </div>
  );
}
