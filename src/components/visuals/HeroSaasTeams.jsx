import React from "react";
import { motion } from "framer-motion";

export default function HeroSaasTeams() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        
        {/* The Central Synchronization Hub (Flixu) */}
        <motion.rect 
            x="160" y="110" width="80" height="80" rx="16" fill={c.paper} stroke={c.accent} strokeWidth="1"
            animate={{ strokeDasharray: ["4 4", "8 8", "4 4"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <text x="200" y="153" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.accent} fontWeight="500" letterSpacing="1">SYNC</text>
        <motion.circle cx="200" cy="150" r="28" fill="transparent" stroke={c.accent} strokeWidth="0.5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "200px", originY: "150px" }}
        />

        {/* --- Cross-Functional Team Nodes --- */}

        {/* Top Node: Designers (Figma/UI assets) */}
        <circle cx="200" cy="40" r="16" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <rect x="194" y="34" width="12" height="12" fill="transparent" stroke={c.sketch} strokeWidth="1.5" />
        <circle cx="200" cy="40" r="2" fill={c.sketch} />
        
        <path d="M 200 56 L 200 110" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="3 3" />
        {/* Designer Asset moving to Hub */}
        <motion.rect x="196" y="56" width="8" height="8" rx="2" fill={c.ink} 
           animate={{ y: [56, 100, 100], opacity: [0, 1, 0] }} transition={{ duration: 4, times: [0, 0.4, 0.5], repeat: Infinity }}
        />

        {/* Bottom Left Node: Developers (GitHub/JSON) */}
        <circle cx="90" cy="220" r="16" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <text x="90" y="224" textAnchor="middle" fontSize="12" fontFamily="monospace" fill={c.sketch} fontWeight="500">{"{}"}</text>
        
        <path d="M 103 210 Q 130 180 160 180" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="3 3" />
        {/* Dev Asset moving to Hub */}
        <motion.circle cx="103" cy="210" r="4" fill={c.ink}
            animate={{ cx: [103, 160], cy: [210, 180], opacity: [0, 1, 0] }} transition={{ duration: 4, delay: 1.3, times: [0, 0.4, 0.5], repeat: Infinity }}
        />

        {/* Bottom Right Node: Marketers (Content/Docs) */}
        <circle cx="310" cy="220" r="16" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <line x1="304" y1="214" x2="316" y2="214" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="304" y1="220" x2="316" y2="220" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="304" y1="226" x2="310" y2="226" stroke={c.sketch} strokeWidth="1.5" strokeLinecap="round" />

        <path d="M 297 210 Q 270 180 240 180" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="3 3" />
        {/* Marketing Asset moving to Hub */}
        <motion.polygon points="-4,-4 4,-4 0,4" fill={c.ink}
            animate={{ x: [297, 240], y: [210, 180], opacity: [0, 1, 0] }} transition={{ duration: 4, delay: 2.6, times: [0, 0.4, 0.5], repeat: Infinity }}
        />

        {/* Distributed Unified Output (Radiating Outwards) */}
        <motion.circle 
            cx="200" cy="150" r="80" fill="transparent" stroke={c.accent} strokeWidth="0.5" opacity="0.5"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
            style={{ originX: "200px", originY: "150px" }}
        />
        
        {/* Badges indicating real-time statuses on all sides */}
        <motion.g animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
             <rect x="230" y="80" width="50" height="16" rx="8" fill="#FFF7ED" stroke={c.accent} strokeWidth="1" />
             <text x="255" y="91" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={c.accent} fontWeight="500">LIVE</text>
        </motion.g>

        <motion.g animate={{ y: [2, -2, 2] }} transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}>
             <rect x="120" y="200" width="50" height="16" rx="8" fill="#FFF7ED" stroke={c.accent} strokeWidth="1" />
             <text x="145" y="211" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={c.accent} fontWeight="500">MERGED</text>
        </motion.g>

      </motion.svg>
    </div>
  );
}
