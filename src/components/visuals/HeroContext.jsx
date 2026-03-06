import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroContext() {
    const [activeNode, setActiveNode] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNode((prev) => (prev + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const nodes = [
        { x: 50, y: 50, label: "Input" },
        { x: 200, y: 50, label: "Context" },
        { x: 125, y: 150, label: "Output" },
    ];

    return (
        <div className="w-full h-64 bg-[#FDFCF8] relative overflow-hidden flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <svg className="w-64 h-48 visible overflow-visible">
                {/* Connections */}
                <line x1="50" y1="50" x2="200" y2="50" stroke="#E7E5E4" strokeWidth="1" />
                <line x1="50" y1="50" x2="125" y2="150" stroke="#E7E5E4" strokeWidth="1" />
                <line x1="200" y1="50" x2="125" y2="150" stroke="#E7E5E4" strokeWidth="1" />

                {/* Active Connection Animation */}
                <motion.line
                    x1={nodes[0].x} y1={nodes[0].y}
                    x2={nodes[1].x} y2={nodes[1].y}
                    stroke="#EA580C" strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: activeNode === 1 ? 1 : 0, opacity: activeNode === 1 ? 1 : 0 }}
                    transition={{ duration: 1 }}
                />
                <motion.line
                    x1={nodes[1].x} y1={nodes[1].y}
                    x2={nodes[2].x} y2={nodes[2].y}
                    stroke="#EA580C" strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: activeNode === 2 ? 1 : 0, opacity: activeNode === 2 ? 1 : 0 }}
                    transition={{ duration: 1 }}
                />


                {/* Nodes */}
                {nodes.map((node, i) => (
                    <g key={i}>
                        <motion.circle
                            cx={node.x} cy={node.y} r="6"
                            fill={activeNode === i ? "#FFF7ED" : "#FAFAF9"}
                            stroke={activeNode === i ? "#EA580C" : "#D6D3D1"}
                            strokeWidth="1.5"
                            animate={{ scale: activeNode === i ? 1.2 : 1 }}
                        />
                        {activeNode === i && (
                            <motion.text
                                x={node.x} y={node.y - 15}
                                textAnchor="middle"
                                className="text-[10px] font-mono fill-orange-700 uppercase tracking-wider"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {node.label}
                            </motion.text>
                        )}
                    </g>
                ))}
            </svg>
        </div>
    );
}
