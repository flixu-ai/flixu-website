import React from "react";
import { motion } from "framer-motion";

export default function HeroMethodology() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        
        {/* 7-Layer Context Stack (Represented by 4 conceptual plates for visual balance) */}
        {[0, 1, 2, 3].map((layer) => (
          <motion.g 
            key={`plate-${layer}`} 
            transform={`translate(120, ${150 + layer * 25})`}
          >
            {/* Isometric Glass/Filter Plate */}
            <path d="M 80 0 L 160 15 L 80 30 L 0 15 Z" fill={c.paper} stroke={layer === 3 ? c.accent : c.sketch} strokeWidth="1" strokeLinejoin="round" />
            <path d="M 0 15 L 80 30 L 80 35 L 0 20 Z" fill={c.sketch} opacity="0.3" strokeLinejoin="round" />
            <path d="M 160 15 L 80 30 L 80 35 L 160 20 Z" fill={c.sketch} opacity="0.3" strokeLinejoin="round" />
            
            {/* Scanning Laser traversing each plate */}
            <motion.line 
              x1="20" y1="18" x2="140" y2="18" stroke={c.accent} strokeWidth="1" opacity="0.5"
              animate={{ 
                x1: [20, 40, 20], y1: [18, 10, 18],
                x2: [140, 120, 140], y2: [18, 25, 18]
               }}
              transition={{ duration: 2, delay: layer * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        ))}

        <text x="80" y="165" fontSize="10" fontFamily="monospace" fill={c.sketch} fontWeight="500">Glossary</text>
        <text x="80" y="190" fontSize="10" fontFamily="monospace" fill={c.sketch} fontWeight="500">Memory</text>
        <text x="80" y="215" fontSize="10" fontFamily="monospace" fill={c.sketch} fontWeight="500">Brand</text>
        <text x="80" y="240" fontSize="10" fontFamily="monospace" fill={c.accent} fontWeight="500">Review</text>

        {/* Raw Text Box dropping in from top */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [50, 150, 150, 150], opacity: [0, 1, 0, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.4, 1], ease: "easeIn" }}
        >
          {/* A simple document outline */}
          <rect x="180" y="0" width="40" height="50" rx="4" fill="#F5F5F4" stroke={c.ink} strokeWidth="1" />
          <line x1="185" y1="15" x2="215" y2="15" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
          <line x1="185" y1="25" x2="205" y2="25" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
          <line x1="185" y1="35" x2="210" y2="35" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
        </motion.g>

        {/* Polished Translated Box emerging from the bottom */}
        <motion.g
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: [220, 220, 280, 280], opacity: [0, 0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: "easeOut" }}
        >
          <rect x="180" y="0" width="40" height="50" rx="4" fill="#FFF7ED" stroke={c.accent} strokeWidth="1" />
          <line x1="185" y1="15" x2="215" y2="15" stroke={c.accent} strokeWidth="1" strokeLinecap="round" />
          <line x1="185" y1="25" x2="210" y2="25" stroke={c.accent} strokeWidth="1" strokeLinecap="round" />
          <line x1="185" y1="35" x2="200" y2="35" stroke={c.accent} strokeWidth="1" strokeLinecap="round" />
        </motion.g>

        {/* Connection pipeline passing through the plates */}
        <motion.line 
          x1="200" y1="120" x2="200" y2="270" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4"
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

      </motion.svg>
    </div>
  );
}
