import React from "react";
import { motion } from "framer-motion";

export default function HeroSaas() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { delay: i * 0.3, duration: 2, ease: "easeInOut" }, opacity: { duration: 0.1 } },
    }),
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Code Editor Frame */}
        <rect x="50" y="50" width="300" height="200" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <circle cx="70" cy="70" r="4" fill={c.sketch} />
        <circle cx="85" cy="70" r="4" fill={c.sketch} />
        <circle cx="100" cy="70" r="4" fill={c.sketch} />
        <line x1="50" y1="90" x2="350" y2="90" stroke={c.sketch} strokeWidth="1" />

        {/* Code Lines */}
        <motion.line x1="70" y1="120" x2="160" y2="120" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={1} />
        
        {/* Unprotected Text Block (will translate/scramble) */}
        <motion.line 
          x1="180" y1="120" x2="300" y2="120" 
          stroke={c.ink} strokeWidth="1" strokeLinecap="round" 
          initial={{ strokeDasharray: "20 5", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <motion.line x1="70" y1="150" x2="140" y2="150" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={2} />
        
        {/* The Protected Variable e.g., {{user_name}} */}
        <motion.g 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Highlights in Orange to show it is mathematically locked */}
          <rect x="150" y="140" width="90" height="20" rx="4" fill="#FFEDD5" stroke={c.accent} strokeWidth="1.5" />
          <text x="195" y="154" textAnchor="middle" fontSize="12" fontFamily="monospace" fill={c.accent} fontWeight="500">
            {"{{var}}"}
          </text>
        </motion.g>

        <motion.line x1="250" y1="150" x2="330" y2="150" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={3} />
        
        <motion.line x1="70" y1="180" x2="220" y2="180" stroke={c.sketch} strokeWidth="1" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={4} />
      </motion.svg>
    </div>
  );
}
