import React from "react";
import { motion } from "framer-motion";

export default function HeroTranslationMemory() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        
        {/* Memory Bank Container (Bottom) */}
        <rect x="50" y="110" width="300" height="140" rx="6" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        
        {/* TM Label Header */}
        <line x1="50" y1="140" x2="350" y2="140" stroke={c.sketch} strokeWidth="1" />
        <rect x="65" y="122" width="60" height="8" rx="4" fill={c.sketch} opacity="0.5" />
        <circle cx="135" cy="126" r="2" fill={c.sketch} />
        <circle cx="143" cy="126" r="2" fill={c.sketch} />
        <circle cx="151" cy="126" r="2" fill={c.sketch} />

        {/* Database Rows (Stored Translations) */}
        {/* Row 1 */}
        <line x1="70" y1="165" x2="140" y2="165" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
        <line x1="190" y1="165" x2="210" y2="165" stroke={c.sketch} strokeWidth="1" />
        <polygon points="210,162 215,165 210,168" fill={c.sketch} />
        <line x1="230" y1="165" x2="300" y2="165" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />

        {/* Row 2 */}
        <line x1="70" y1="195" x2="160" y2="195" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
        <line x1="190" y1="195" x2="210" y2="195" stroke={c.sketch} strokeWidth="1" />
        <polygon points="210,192 215,195 210,198" fill={c.sketch} />
        <line x1="230" y1="195" x2="320" y2="195" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />

        {/* Row 3 (The Exact Match) */}
        <motion.line 
          x1="70" y1="225" x2="150" y2="225" strokeWidth="1" strokeLinecap="round"
          stroke={c.sketch}
          animate={{ stroke: [c.sketch, c.ink, c.sketch] }}
          transition={{ duration: 4, times: [0, 0.4, 1], repeat: Infinity, ease: "easeInOut" }}
        />
        <line x1="190" y1="225" x2="210" y2="225" stroke={c.sketch} strokeWidth="1" />
        <polygon points="210,222 215,225 210,228" fill={c.sketch} />
        
        <motion.line 
          x1="230" y1="225" x2="310" y2="225" strokeWidth="1" strokeLinecap="round"
          stroke={c.sketch}
          animate={{ stroke: [c.sketch, c.accent, c.sketch] }}
          transition={{ duration: 4, times: [0, 0.5, 1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Scanning Highlight Box */}
        <motion.rect 
          x="60" y="152" width="280" height="26" rx="4" fill="transparent" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4"
          animate={{ 
            y: [152, 182, 212, 212, 152],
            opacity: [1, 1, 1, 0, 0]
          }}
          transition={{ duration: 4, times: [0, 0.2, 0.4, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top Area: Active Translation */}
        
        {/* Incoming Source Box */}
        <rect x="50" y="40" width="120" height="40" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="70" y1="60" x2="150" y2="60" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
        
        {/* Search Beam pointing down */}
        <motion.path 
          d="M 110 80 L 110 152"
          stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.2, 1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Retrieval Beam pointing up from Target to Output */}
        <motion.path 
          d="M 270 212 L 270 80"
          stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.5, 0.7, 1], repeat: Infinity, ease: "easeOut" }}
        />

        {/* Translated Output Box */}
        <rect x="230" y="40" width="120" height="40" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        <motion.line 
          x1="250" y1="60" x2="330" y2="60" stroke={c.accent} strokeWidth="1" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 1, 1] }}
          transition={{ duration: 4, times: [0, 0.7, 0.8, 1], repeat: Infinity, ease: "easeOut" }}
        />

      </motion.svg>
    </div>
  );
}
