import React from "react";
import { motion } from "framer-motion";

export default function HeroFreelancers() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* The Solo Freelancer Node (Center) */}
        <circle cx="200" cy="180" r="20" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        {/* Laptop/Desktop shape */}
        <rect x="185" y="165" width="30" height="20" rx="2" fill={c.sketch} />
        <line x1="180" y1="185" x2="220" y2="185" stroke={c.ink} strokeWidth="1" strokeLinecap="round" />
        
        {/* Copilot Engine hovering above providing leverage */}
        <motion.circle cx="200" cy="110" r="14" fill={c.paper} stroke={c.accent} strokeWidth="1"
            animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon points="196,106 204,110 196,114" fill={c.accent} 
            animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Data processing beam between Freelancer and Engine */}
        <line x1="200" y1="124" x2="200" y2="160" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" />
        <motion.circle cx="200" cy="140" r="3" fill={c.accent}
            animate={{ cy: [160, 124, 160] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Incoming Chaotic Workload (Left) */}
        <path d="M 60 180 Q 120 180 160 180" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />
        <text x="60" y="140" fontSize="10" fontFamily="sans-serif" fill={c.ink} fontWeight="500">Raw Projects</text>
        
        {[0, 1, 2].map((i) => (
          <motion.g 
            key={`rawbox-${i}`}
            initial={{ x: 0, opacity: 0, rotate: -15 + i * 10 }}
            animate={{ x: [0, 80, 140, 140], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: "linear" }}
          >
            {/* A messy looking file */}
             <rect x="50" y="160" width="30" height="40" rx="2" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
             <line x1="55" y1="170" x2="75" y2="175" stroke={c.sketch} strokeWidth="1" />
             <line x1="55" y1="180" x2="70" y2="182" stroke={c.sketch} strokeWidth="1" />
          </motion.g>
        ))}

        {/* Outgoing Organized Localized Workload (Right) */}
        <path d="M 240 180 Q 280 180 340 180" fill="transparent" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" />
        <text x="280" y="140" fontSize="10" fontFamily="sans-serif" fill={c.accent} fontWeight="500">Finished Work</text>

        {[0, 1, 2].map((i) => (
          <motion.g 
            key={`donebox-${i}`}
            initial={{ x: 220, opacity: 0, rotate: 0 }}
            animate={{ x: [220, 220, 300, 360], opacity: [0, 0, 1, 0] }}
            transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, times: [0, 0.2, 0.6, 1], ease: "linear" }}
          >
            {/* A perfectly formed translated file */}
             <rect x="0" y="160" width="30" height="40" rx="2" fill={c.paper} stroke={c.accent} strokeWidth="1" />
             <rect x="20" y="160" width="10" height="40" fill={c.accent} opacity="0.1" />
             <line x1="5" y1="170" x2="25" y2="170" stroke={c.accent} strokeWidth="1" strokeLinecap="round" />
             <line x1="5" y1="180" x2="20" y2="180" stroke={c.accent} strokeWidth="1" strokeLinecap="round" />
          </motion.g>
        ))}

      </motion.svg>
    </div>
  );
}
