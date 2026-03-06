import { motion } from "framer-motion";

export default function HeroAmbient() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

            {/* Wrapper mit Maske, um harte Kanten oben zu verhindern */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_100%)]">

                {/* The Warm Light Orb - Moved Up significantly */}
                <motion.div
                    className="absolute -top-[30%] left-[10%] w-[600px] h-[600px] rounded-full bg-orange-200/50 blur-[120px] mix-blend-multiply"
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.1, 0.9, 1],
                        opacity: [0.4, 0.6, 0.4, 0.4],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* The Cooler Balance Orb - Also moved up */}
                <motion.div
                    className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-stone-200/60 blur-[100px] mix-blend-multiply"
                    animate={{
                        x: [0, -60, 40, 0],
                        y: [0, 50, -30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

            </div>
        </div>
    );
}
