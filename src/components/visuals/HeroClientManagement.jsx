import React from "react";
import { motion } from "framer-motion";

export default function HeroClientManagement() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Central Hub (Agency) */}
        <circle cx="200" cy="150" r="30" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <rect x="190" y="140" width="20" height="20" rx="4" fill={c.sketch} />

        {/* Orbiting Client Workspaces (Isolated Environments) */}
        {[
          { cx: 100, cy: 150, delay: 0 },
          { cx: 300, cy: 150, delay: 1.5 },
          { cx: 200, cy: 50, delay: 0.75 },
          { cx: 200, cy: 250, delay: 2.25 },
        ].map((node, i) => (
          <g key={`client-${i}`}>
            {/* The Secure Connection Line */}
            <motion.line
              x1="200" y1="150" x2={node.cx} y2={node.cy}
              stroke={c.sketch} strokeWidth="1" strokeDasharray="4 4"
            />
            {/* Isolated Workspace Bubble */}
            <motion.circle 
              cx={node.cx} cy={node.cy} r="20" 
              fill={c.paper} stroke={c.accent} strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle cx={node.cx} cy={node.cy} r="8" fill={c.accent} opacity="0.8" />
            
            {/* Data transfer isolated to just that client */}
            <motion.circle
              cx="200" cy="150" r="4" fill={c.ink}
              animate={{ cx: node.cx, cy: node.cy, opacity: [0, 1, 0] }}
              transition={{ duration: 2, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}

        {/* Overall Security Perimeter */}
        <motion.circle
          cx="200" cy="150" r="140" fill="transparent" stroke={c.sketch} strokeWidth="1" strokeDasharray="10 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "150px" }}
        />
      </motion.svg>
    </div>
  );
}
