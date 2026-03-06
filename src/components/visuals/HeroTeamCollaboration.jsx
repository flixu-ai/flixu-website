import React from "react";
import { motion } from "framer-motion";

export default function HeroTeamCollaboration() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* The Central Document / Project */}
        <rect x="150" y="100" width="100" height="120" rx="4" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="170" y1="130" x2="230" y2="130" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="170" y1="150" x2="210" y2="150" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="170" y1="170" x2="230" y2="170" stroke={c.ink} strokeWidth="1.5" strokeLinecap="round" />

        {/* Three Cursors working simultaneously */}
        {[
          { color: c.accent, start: {x: 100, y: 80}, target: {x: 180, y: 135}, delay: 0 },
          { color: c.ink, start: {x: 300, y: 80}, target: {x: 220, y: 155}, delay: 0.5 },
          { color: c.sketch, start: {x: 200, y: 240}, target: {x: 185, y: 175}, delay: 1 },
        ].map((cursor, i) => (
          <motion.g
            key={`cursor-${i}`}
            initial={{ x: cursor.start.x, y: cursor.start.y, opacity: 0 }}
            animate={{ 
              x: [cursor.start.x, cursor.target.x, cursor.start.x], 
              y: [cursor.start.y, cursor.target.y, cursor.start.y],
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ duration: 4, delay: cursor.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Minimalist SVG arrow cursor cursor */}
            <path d="M 0 0 L 12 18 L 8 18 L 12 28 L 8 30 L 4 20 L -2 20 Z" fill={cursor.color} stroke={c.paper} strokeWidth="1.5" />
            <motion.circle 
              cx="-2" cy="-2" r="8" fill="transparent" stroke={cursor.color} strokeWidth="1"
              animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.g>
        ))}

        {/* Real-time sync pulses */}
        <motion.rect 
          x="150" y="100" width="100" height="120" rx="4" fill="transparent" stroke={c.accent} strokeWidth="1"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{ originX: "200px", originY: "160px" }}
        />

      </motion.svg>
    </div>
  );
}
