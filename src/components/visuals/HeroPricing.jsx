import React from "react";
import { motion } from "framer-motion";

export default function HeroPricing() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-20">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-stone-300 h-full last:border-0" />
                ))}
            </div>

            <div className="relative z-10 flex items-center gap-12">

                {/* Input Circle (Large) */}
                <div className="flex flex-col items-center gap-2">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatDelay: 4 }}
                        className="w-24 h-24 rounded-full border border-stone-300 border-dashed flex items-center justify-center bg-stone-50"
                    >
                        <div className="w-20 h-20 rounded-full bg-stone-200/50" />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                        className="font-mono text-[10px] text-stone-400 uppercase tracking-widest"
                    >
                        Input: 50k
                    </motion.span>
                </div>

                {/* Filter / Processing */}
                <div className="relative w-32 h-1 bg-stone-200 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatDelay: 3.3 }}
                        className="absolute inset-0 bg-orange-700 opacity-50"
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-stone-300 rotate-45 z-10" />
                </div>

                {/* Output Circle (Smaller) */}
                <div className="flex flex-col items-center gap-2 relative">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 2.5, repeat: Infinity, repeatDelay: 4 }} // Starts after input + travel
                        className="w-20 h-20 rounded-full border border-orange-700/30 flex items-center justify-center bg-orange-50/50"
                    >
                        <div className="w-16 h-16 rounded-full bg-orange-100/50" />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                        className="font-mono text-[10px] text-orange-700 uppercase tracking-widest font-medium"
                    >
                        Output: 48k
                    </motion.span>

                    {/* Billing Line */}
                    <svg className="absolute -right-16 top-1/2 -translate-y-1/2 h-32 w-8 overflow-visible">
                        <motion.path
                            d="M 0 0 L 10 0 L 10 64 L 0 64"
                            fill="none"
                            stroke="#c2410c"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 3.2, duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
                        />
                        <motion.text
                            x="15"
                            y="36"
                            className="font-mono text-[10px] fill-orange-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.8, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                        >
                            Billed
                        </motion.text>
                    </svg>
                </div>

            </div>

            {/* Message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.2, duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
                className="absolute bottom-8 font-serif text-stone-500 italic"
            >
                You save differences.
            </motion.div>

        </div>
    );
}
