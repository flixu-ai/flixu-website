import React from "react";
import { motion } from "framer-motion";

export default function HeroEnterprise() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Secure VPC Boundary (Enterprise Intranet) */}
        <motion.rect 
          x="50" y="50" width="220" height="200" rx="16" fill="#F5F5F4" stroke={c.accent} strokeWidth="1" strokeDasharray="8 6"
          animate={{ strokeDashoffset: -28 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Security / Privacy Badge */}
        <rect x="130" y="38" width="60" height="24" rx="12" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        {/* Padlock Icon */}
        <rect x="153" y="48" width="14" height="10" rx="2" fill={c.accent} />
        <path d="M 156 48 L 156 44 A 4 4 0 0 1 164 44 L 164 48" fill="transparent" stroke={c.accent} strokeWidth="1.5" />

        <text x="160" y="90" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.accent} fontWeight="500" letterSpacing="2">SECURE BOUNDARY</text>

        {/* Internal Enterprise Database / Document Store */}
        <path d="M 90 200 L 90 220 A 20 10 0 0 0 130 220 L 130 200" fill="transparent" stroke={c.ink} strokeWidth="1.5" />
        <ellipse cx="110" cy="200" rx="20" ry="10" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <ellipse cx="110" cy="185" rx="20" ry="10" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <ellipse cx="110" cy="170" rx="20" ry="10" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <text x="110" y="240" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.ink} fontWeight="500">Internal DB</text>

        {/* Flixu Internal Enterprise Node */}
        <rect x="180" y="170" width="60" height="40" rx="6" fill={c.paper} stroke={c.accent} strokeWidth="1" />
        <circle cx="210" cy="190" r="6" fill={c.accent} />
        <motion.circle cx="210" cy="190" r="14" fill="transparent" stroke={c.accent} strokeWidth="1"
           initial={{ scale: 0.5, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="210" y="225" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.accent} fontWeight="500">Flixu Instance</text>

        {/* Data processing only occurring internally */}
        <motion.path 
          d="M 130 190 L 180 190" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4"
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="130" cy="190" r="3" fill={c.ink}
          animate={{ cx: [130, 180] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Public Web (Outside Threat / Public Cloud API) */}
        <circle cx="330" cy="150" r="30" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />
        <text x="330" y="195" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.sketch} fontWeight="500">Public APIs</text>

        {/* Blocked Connection Attempt from inside out (Zero Data Retention representation) */}
        <path d="M 240 150 L 260 150" fill="transparent" stroke={c.sketch} strokeWidth="1" />
        <motion.line 
          x1="260" y1="150" x2="300" y2="150" stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.5"
          animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="240" cy="150" r="3" fill={c.accent} opacity="0.5"
          animate={{ cx: [240, 275] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* The firewall block symbol */}
        <motion.g transform="translate(280, 150)" 
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
             <line x1="-10" y1="-10" x2="10" y2="10" stroke={c.accent} strokeWidth="1.5" />
             <line x1="10" y1="-10" x2="-10" y2="10" stroke={c.accent} strokeWidth="1.5" />
        </motion.g>

      </motion.svg>
    </div>
  );
}
