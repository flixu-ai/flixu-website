import React from "react";
import { motion } from "framer-motion";

export default function HeroProjectManagement() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Kanban / Task Board Base */}
        <rect x="80" y="80" width="240" height="160" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="160" y1="80" x2="160" y2="240" stroke={c.sketch} strokeWidth="1" />
        <line x1="240" y1="80" x2="240" y2="240" stroke={c.sketch} strokeWidth="1" />

        {/* Tasks (Cards) */}
        {[ 
          { x: 90, y: 100, targetX: 250, targetY: 100, delay: 0 },
          { x: 90, y: 140, targetX: 170, targetY: 180, delay: 1.5 },
          { x: 170, y: 100, targetX: 250, targetY: 140, delay: 0.8 },
        ].map((task, i) => (
          <motion.rect
            key={`task-${i}`}
            x={task.x} y={task.y} width="60" height="30" rx="4"
            fill={i === 0 ? "#FFEDD5" : c.paper} 
            stroke={i === 0 ? c.accent : c.ink} strokeWidth="1.5"
            initial={{ x: task.x, y: task.y }}
            animate={{ 
              x: [task.x, task.x, task.targetX, task.targetX], 
              y: [task.y, task.y, task.targetY, task.targetY] 
            }}
            transition={{ duration: 6, delay: task.delay, repeat: Infinity, ease: "anticipate" }}
          />
        ))}

        {/* Automated Progress Bar at Top to indicate project velocity */}
        <rect x="80" y="50" width="240" height="10" rx="5" fill={c.paper} stroke={c.sketch} strokeWidth="1.5" />
        <motion.rect 
          x="80" y="50" width="10" height="10" rx="5" fill={c.accent}
          animate={{ width: [10, 120, 240, 240] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

      </motion.svg>
    </div>
  );
}
