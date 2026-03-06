import React from "react";
import { motion } from "framer-motion";

export default function HeroVision() {
    return (
        <div className="w-full h-64 bg-[#FDFCF8] relative overflow-hidden flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="relative z-10 w-64 h-40 flex items-end justify-center">
                {/* The Horizon Line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-stone-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* The Sun / Vision Source */}
                <motion.div
                    className="w-16 h-16 rounded-full border border-orange-500/50 bg-orange-50/20 mb-8 backdrop-blur-sm relative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border border-orange-400"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    />
                </motion.div>

                {/* Rays / Path */}
                <div className="absolute bottom-0 w-full h-32 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 left-1/2 w-px h-32 bg-stone-200 origin-bottom"
                            style={{ transform: `translateX(-50%) rotate(${(i - 2) * 15}deg)` }}
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1, delay: 1 + i * 0.1, ease: "easeOut" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
