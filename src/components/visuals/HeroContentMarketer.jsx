import React from "react";
import { motion } from "framer-motion";

export default function HeroContentMarketer() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Source Document Structure */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="50" y="80" width="80" height="110" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
          <rect x="60" y="90" width="40" height="30" rx="2" fill={c.sketch} opacity="0.3" />
          <line x1="60" y1="130" x2="120" y2="130" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="60" y1="145" x2="110" y2="145" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="60" y1="160" x2="90" y2="160" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Translation Process / Hub */}
        <motion.path 
          d="M 140 135 H 170" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" 
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <rect x="180" y="115" width="40" height="40" rx="20" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        <circle cx="200" cy="135" r="4" fill={c.accent} />
        {/* Radar/Tone Rings */}
        <motion.circle cx="200" cy="135" r="10" fill="transparent" stroke={c.accent} strokeWidth="1"
           animate={{ r: [10, 25, 25], opacity: [1, 0, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Distribution Lines splitting out */}
        {[
          { y: 50, destY: 60 },
          { y: 135, destY: 135 },
          { y: 220, destY: 210 }
        ].map((path, i) => (
           <motion.path 
            key={`line-${i}`}
            d={`M 230 135 C 250 135, 250 ${path.y}, 270 ${path.y}`} 
            fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4"
            animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Localized Output Documents (Identical layouts, localized content lines) */}
        {[
          { y: 30, delay: 0 },
          { y: 95, delay: 0.5 },
          { y: 160, delay: 1 }
        ].map((doc, i) => (
          <motion.g 
            key={`doc-${i}`}
            initial={{ x: 270, y: doc.y, opacity: 0 }}
            animate={{ x: 280, opacity: [0, 1, 1] }}
            transition={{ duration: 3, delay: doc.delay, repeat: Infinity, ease: "easeOut" }}
          >
            <rect x="0" y="0" width="70" height="90" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
            <rect x="10" y="10" width="30" height="20" rx="2" fill={c.accent} opacity="0.2" />
            
            {/* The text lines are slightly different lengths per document, representing language expansion/contraction but the same meaning and tone */}
            <line x1="10" y1="45" x2={50 + (i * 5)} y2="45" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="58" x2={40 - (i * 2)} y2="58" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="71" x2="35 + (i * 3)" y2="71" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
}
