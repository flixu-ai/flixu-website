import React from "react";
import { motion } from "framer-motion";

export default function HeroGlobalMarketing() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Global Hub Map (Stylized point grid connecting regions) */}
        <path d="M 60 150 Q 130 50 200 150 T 340 150" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 60 150 Q 130 250 200 150 T 340 150" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 200 50 L 200 250" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4" />

        {/* Internal Hub (HQ) */}
        <motion.circle cx="200" cy="150" r="24" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        {/* Campaign Brief in HQ */}
        <rect x="190" y="140" width="20" height="20" rx="3" fill={c.sketch} />
        <line x1="194" y1="145" x2="206" y2="145" stroke={c.paper} strokeWidth="1" />
        <line x1="194" y1="150" x2="202" y2="150" stroke={c.paper} strokeWidth="1" />
        <line x1="194" y1="155" x2="206" y2="155" stroke={c.paper} strokeWidth="1" />

        {/* Campaign Launch Signals moving out to regions */}
        {[
          { cx: 60, cy: 150, delay: 0 },
          { cx: 130, cy: 50, delay: 0.3 },
          { cx: 340, cy: 150, delay: 0.6 },
          { cx: 270, cy: 250, delay: 0.9 },
        ].map((node, i) => (
          <g key={`region-${i}`}>
            {/* Connection Line */}
            <line x1="200" y1="150" x2={node.cx} y2={node.cy} stroke={c.sketch} strokeWidth="1" />
            
            {/* The translated marketing asset arriving at each region */}
            <motion.rect 
              x={node.cx - 15} y={node.cy - 15} width="30" height="30" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1, 1], opacity: [0, 1, 1, 1] }}
              transition={{ duration: 4, delay: 1 + node.delay, times: [0, 0.3, 0.4, 1], repeat: Infinity }}
              style={{ originX: `${node.cx}px`, originY: `${node.cy}px` }}
            />
            {/* Localized content lines appearing */}
            <motion.line x1={node.cx - 8} y1={node.cy - 5} x2={node.cx + 8} y2={node.cy - 5} stroke={c.accent} strokeWidth="1.5" strokeLinecap="round"
               initial={{ pathLength: 0 }} animate={{ pathLength: [0, 0, 1, 1] }} transition={{ duration: 4, delay: 1 + node.delay, times: [0, 0.4, 0.5, 1], repeat: Infinity }}
            />
            <motion.line x1={node.cx - 8} y1={node.cy + 5} x2={node.cx + 4} y2={node.cy + 5} stroke={c.ink} strokeWidth="1.5" strokeLinecap="round"
               initial={{ pathLength: 0 }} animate={{ pathLength: [0, 0, 1, 1] }} transition={{ duration: 4, delay: 1 + node.delay, times: [0, 0.5, 0.6, 1], repeat: Infinity }}
            />

            {/* Signal Pulse traveling from HQ to Region */}
            <motion.circle 
              cx="200" cy="150" r="4" fill={c.ink}
              initial={{ cx: 200, cy: 150, opacity: 0 }}
              animate={{ cx: [200, node.cx], cy: [150, node.cy], opacity: [0, 1, 0] }}
               transition={{ duration: 4, delay: 0.5 + node.delay, times: [0, 0.5, 1], repeat: Infinity, ease: "easeIn" }}
            />
          </g>
        ))}

        {/* HQ Pulse indicating centralized control */}
        <motion.circle cx="200" cy="150" r="24" fill="transparent" stroke={c.ink} strokeWidth="1"
          animate={{ scale: [1, 1.5, 1.5], opacity: [1, 0, 0] }}
          transition={{ duration: 4, times: [0, 0.5, 1], repeat: Infinity, ease: "easeOut" }}
          style={{ originX: "200px", originY: "150px" }}
        />

      </motion.svg>
    </div>
  );
}
