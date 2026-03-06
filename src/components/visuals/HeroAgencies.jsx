import React from "react";
import { motion } from "framer-motion";

export default function HeroAgencies() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Central Agency Hub */}
        <rect x="160" y="60" width="80" height="180" rx="8" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <text x="200" y="155" textAnchor="middle" fontSize="14" fontFamily="serif" fill={c.ink} fontWeight="500" transform="rotate(-90 200 150)">
          FLIXU AGENCY
        </text>

        {/* Unorganized Client Folders coming in (Left side) */}
        {[
          { y: 80, delay: 0, tag: "Client A" },
          { y: 150, delay: 0.8, tag: "Client B" },
          { y: 220, delay: 1.6, tag: "Client C" },
        ].map((client, i) => (
          <g key={`in-${i}`}>
            {/* Path */}
            <motion.line x1="60" y1={client.y} x2="160" y2={client.y} stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" 
               animate={{ strokeDashoffset: 20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Raw Messy Folder */}
            <motion.g
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: [0, 80, 80], opacity: [0, 1, 0] }}
              transition={{ duration: 5, delay: client.delay, times: [0, 0.4, 0.45, 1], repeat: Infinity, ease: "linear" }}
            >
              <rect x="40" y={client.y - 15} width="40" height="30" rx="2" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
              <polygon points="40,15 55,15 60,20 80,20 80,45 40,45" fill={c.sketch} opacity="0.3" transform={`translate(0, ${client.y - 30})`} />
              {/* Client Tag */}
               <text x="60" y={client.y - 20} textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.sketch} fontWeight="500">
                  {client.tag}
              </text>
            </motion.g>
          </g>
        ))}

        {/* Perfect Isolated Workspaces Processing inside Hub */}
        {[80, 150, 220].map((y, i) => (
           <motion.circle 
            key={`hub-${i}`}
            cx="200" cy={y} r="8" fill="transparent" stroke={c.accent} strokeWidth="1"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.5, 0.5], opacity: [0, 1, 0] }}
            transition={{ duration: 5, delay: i * 0.8 + 2, times: [0, 0.5, 1], repeat: Infinity }}
            style={{ originX: "200px", originY: `${y}px` }}
           />
        ))}

        {/* Organized, translated output going out (Right side) */}
        {[
          { y: 80, delay: 0 },
          { y: 150, delay: 0.8 },
          { y: 220, delay: 1.6 },
        ].map((client, i) => (
          <g key={`out-${i}`}>
            {/* Path */}
             <motion.line x1="240" y1={client.y} x2="340" y2={client.y} stroke={c.accent} strokeWidth="1" strokeDasharray="4 4" 
               animate={{ strokeDashoffset: -20 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Perfect Translated Folder */}
            <motion.g
              initial={{ x: 240, opacity: 0 }}
              animate={{ x: [240, 240, 320, 320], opacity: [0, 0, 1, 0] }}
              transition={{ duration: 5, delay: client.delay, times: [0, 0.6, 0.9, 1], repeat: Infinity, ease: "linear" }}
            >
              <rect x="0" y={client.y - 15} width="40" height="30" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
              <rect x="0" y={client.y - 15} width="40" height="8" fill={c.accent} opacity="0.2" />
              {/* Translared Document inside */}
              <line x1="10" y1={client.y - 2} x2="30" y2={client.y - 2} stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" />
              <line x1="10" y1={client.y + 6} x2="25" y2={client.y + 6} stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" />
            </motion.g>
          </g>
        ))}

      </motion.svg>
    </div>
  );
}
