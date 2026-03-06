import React from "react";
import { motion } from "framer-motion";

export default function HeroLocalizationManager() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  const languages = ["EN", "DE", "ES", "FR", "JA"];

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Main Dashboard Panel */}
        <rect x="50" y="40" width="300" height="220" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        
        {/* Header Area */}
        <line x1="50" y1="80" x2="350" y2="80" stroke={c.sketch} strokeWidth="1" />
        <rect x="70" y="55" width="80" height="10" rx="4" fill={c.ink} opacity="0.8" />
        
        {/* Progress Overview Ring */}
        <circle cx="310" cy="60" r="12" fill="transparent" stroke={c.sketch} strokeWidth="1.5" />
        <motion.circle 
          cx="310" cy="60" r="12" fill="transparent" stroke={c.accent} strokeWidth="1.5" 
          strokeDasharray="75"
          initial={{ strokeDashoffset: 75 }}
          animate={{ strokeDashoffset: [75, 0, 0] }}
          transition={{ duration: 5, times: [0, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "310px", originY: "60px", rotate: -90 }}
        />

        {/* Translation Project Rows */}
        {languages.map((lang, i) => (
          <g key={`row-${lang}`} transform={`translate(70, ${100 + i * 28})`}>
            {/* Language Code */}
            <rect x="0" y="-10" width="24" height="16" rx="4" fill={c.sketch} opacity="0.3" />
            <text x="12" y="1" textAnchor="middle" fontSize="10" fontFamily="monospace" fill={c.ink} fontWeight="500" alignmentBaseline="middle">
              {lang}
            </text>

            {/* Progress Bar Background */}
            <rect x="35" y="-4" width="180" height="4" rx="2" fill={c.sketch} opacity="0.5" />
            
            {/* Animated Progress Fill */}
            <motion.rect 
              x="35" y="-4" height="4" rx="2" fill={c.accent}
              initial={{ width: 0 }}
              animate={{ width: [0, 180, 180] }}
              transition={{ duration: 4, delay: i * 0.4, times: [0, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Status Indicator (Starts empty, turns into a checkmark when full) */}
            <motion.circle 
              cx="235" cy="-2" r="6" fill="transparent" stroke={c.sketch} strokeWidth="1.5"
              animate={{ fill: ["transparent", "transparent", c.accent], stroke: [c.sketch, c.sketch, c.accent] }}
              transition={{ duration: 4, delay: i * 0.4, times: [0, 0.69, 0.7], repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Checkmark drawing */}
            <motion.path 
              d="M 232 -2 L 234 1 L 238 -4" fill="transparent" stroke={c.paper} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 0, 1] }}
              transition={{ duration: 4, delay: i * 0.4, times: [0, 0.69, 0.75], repeat: Infinity, ease: "easeOut" }}
            />
          </g>
        ))}

        {/* Floating cursor representing the Manager overseeing the process */}
         <motion.g
            initial={{ x: 300, y: 220 }}
            animate={{ 
              x: [300, 240, 240, 310, 310], 
              y: [220, 150, 110, 60, 220] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M 0 0 L 12 18 L 8 18 L 12 28 L 8 30 L 4 20 L -2 20 Z" fill={c.ink} stroke={c.paper} strokeWidth="1.5" />
          </motion.g>

      </motion.svg>
    </div>
  );
}
