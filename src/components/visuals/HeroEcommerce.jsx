import React from "react";
import { motion } from "framer-motion";

export default function HeroEcommerce() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  // Generate a grid of products
  const cols = 5;
  const rows = 4;
  const boxSize = 40;
  const gap = 15;
  const startX = (400 - (cols * boxSize + (cols - 1) * gap)) / 2;
  const startY = (300 - (rows * boxSize + (rows - 1) * gap)) / 2;

  const boxes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      boxes.push({ id: `${r}-${c}`, x: startX + c * (boxSize + gap), y: startY + r * (boxSize + gap), row: r, col: c });
    }
  }

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        className="w-full max-w-[500px]"
      >
        {/* Background Grid Elements */}
        {boxes.map((box, i) => (
          <motion.rect
            key={box.id}
            x={box.x}
            y={box.y}
            width={boxSize}
            height={boxSize}
            rx={4}
            fill={c.paper}
            stroke={c.sketch}
            strokeWidth={1.5}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          />
        ))}

        {/* Translation Pass Effect */}
        {boxes.map((box, i) => (
          <motion.rect
            key={`overlay-${box.id}`}
            x={box.x}
            y={box.y}
            width={boxSize}
            height={boxSize}
            rx={4}
            initial={{ fill: c.paper, stroke: c.sketch }}
            animate={{ 
              fill: [c.paper, "#FFEDD5", c.paper], // orange-100 flash
              stroke: [c.sketch, c.accent, c.ink] 
            }}
            transition={{ 
              duration: 2, 
              delay: 1 + box.row * 0.5 + box.col * 0.1, 
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        ))}

        {/* Scanning Bar */}
        <motion.line
          initial={{ y1: startY - 20, y2: startY - 20, opacity: 0 }}
          animate={{ 
            y1: [startY - 20, startY + rows * (boxSize + gap) + 10, startY + rows * (boxSize + gap) + 10], 
            y2: [startY - 20, startY + rows * (boxSize + gap) + 10, startY + rows * (boxSize + gap) + 10],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
          x1={startX - 20}
          x2={startX + cols * (boxSize + gap) + 5}
          stroke={c.accent}
          strokeWidth={3}
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
