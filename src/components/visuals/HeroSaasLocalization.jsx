import React from "react";
import { motion } from "framer-motion";

export default function HeroSaasLocalization() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        
        {/* Step 1: Code Repository (Git push of new feature strings) */}
        <rect x="30" y="110" width="100" height="80" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <rect x="40" y="125" width="40" height="8" rx="2" fill={c.sketch} opacity="0.5" />
        <text x="40" y="150" fontSize="10" fontFamily="monospace" fill={c.ink} fontWeight="500">{"\"btn\": \"Save\""}</text>
        <text x="40" y="170" fontSize="10" fontFamily="monospace" fill={c.ink} fontWeight="500">{"\"msg\": \"Sent\""}</text>

        {/* Step 2: Automated Deployment Flow */}
        {/* Path lines */}
        <motion.path 
          d="M 140 150 L 260 150" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4"
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Continuous Localization Engine Node */}
        <motion.circle 
          cx="200" cy="150" r="15" fill={c.paper} stroke={c.accent} strokeWidth="1"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <polygon points="195,145 205,150 195,155" fill={c.accent} />

        <motion.text 
          x="200" y="130" textAnchor="middle" fontSize="10" fontFamily="monospace" fill={c.accent} fontWeight="500"
          animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
        >
          [AUTO-SYNC]
        </motion.text>

        {/* Live UI Mockup (Target Application updating instantly) */}
        <rect x="270" y="90" width="100" height="120" rx="8" fill={c.paper} stroke={c.ink} strokeWidth="1" />
        <line x1="270" y1="120" x2="370" y2="120" stroke={c.sketch} strokeWidth="1" />
        
        {/* App Content */}
        <circle cx="290" cy="105" r="4" fill={c.sketch} />
        <circle cx="305" cy="105" r="4" fill={c.sketch} />
        <circle cx="320" cy="105" r="4" fill={c.sketch} />
        
        {/* The Live Translated Button appearing */}
        <motion.rect 
          x="285" y="140" width="70" height="20" rx="4" fill={c.accent}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        />
        <motion.text 
          x="320" y="154" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.paper} fontWeight="500"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        >
          Speichern
        </motion.text>

        {/* The Live Translated Message popping up */}
        <motion.rect 
          x="285" y="170" width="70" height="20" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1.5"
          animate={{ opacity: [0, 0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: "easeOut" }}
        />
        <motion.text 
          x="320" y="184" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.accent} fontWeight="500"
          animate={{ opacity: [0, 0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: "easeOut" }}
        >
          Gesendet
        </motion.text>

      </motion.svg>
    </div>
  );
}
