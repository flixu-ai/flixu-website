import React from "react";
import { motion } from "framer-motion";

export default function HeroMarketingTranslation() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Source Marketing Asset (e.g., an Ad Banner) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="40" y="80" width="100" height="140" rx="6" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
          {/* Hero Image Block */}
          <rect x="50" y="90" width="80" height="50" rx="4" fill={c.sketch} opacity="0.3" />
          {/* Ad Copy */}
          <line x1="50" y1="160" x2="110" y2="160" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="175" x2="130" y2="175" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
          <line x1="50" y1="190" x2="100" y2="190" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
          {/* CTA Button */}
          <rect x="50" y="205" width="60" height="10" rx="2" fill={c.ink} opacity="0.8" />
        </motion.g>

        {/* Transcreation Engine (Cultual Adaptation) */}
        <motion.path 
          d="M 160 150 L 240 150" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" 
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        <circle cx="200" cy="150" r="16" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        <motion.circle 
          cx="200" cy="150" r="16" fill="transparent" stroke={c.accent} strokeWidth="1"
          animate={{ r: [16, 40], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        {/* Sparkles indicating "creative" adaptation rather than literal translation */}
        <motion.polygon 
          points="200,140 202,148 210,150 202,152 200,160 198,152 190,150 198,148" 
          fill={c.accent}
          animate={{ rotate: 90, scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "150px" }}
        />

        {/* Target Marketing Asset (Culturally Adapted, Different Layout/Length) */}
        <motion.g
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -5, 0], opacity: 1 }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="260" y="80" width="100" height="140" rx="6" fill={c.paper} stroke={c.accent} strokeWidth="1" />
          {/* Adapted Ad Copy (Top instead of bottom, longer text for German/French expansion) */}
          <line x1="270" y1="100" x2="340" y2="100" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="270" y1="115" x2="350" y2="115" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
          <line x1="270" y1="130" x2="320" y2="130" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
          {/* Adapted CTA Button (Longer) */}
          <rect x="270" y="145" width="80" height="10" rx="2" fill={c.accent} />
          
          {/* Adapted Hero Image Block (Bottom instead of top) */}
          <rect x="270" y="165" width="80" height="45" rx="4" fill={c.accent} opacity="0.2" />
        </motion.g>

      </motion.svg>
    </div>
  );
}
