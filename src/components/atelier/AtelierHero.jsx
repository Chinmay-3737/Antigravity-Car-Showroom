import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowDown } from 'lucide-react';

const AtelierHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, scale }}
            >
                {/* Subtle Overlay to ensure text readability without looking like a black bar */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Main Image - Garage Studio Background */}
                <img
                    src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop"
                    alt="Atelier Custom Vehicle"
                    className="w-full h-full object-cover object-center"
                />

                {/* Bottom Vignette only (no top darkness) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>

            {/* Glowing Red Orbs for Premium effect */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-800/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center text-center px-4 max-w-7xl mx-auto"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="mb-6 flex items-center gap-4"
                >
                    <div className="h-[1px] w-12 bg-red-600" />
                    <span className="text-red-500 font-medium tracking-[0.3em] uppercase text-sm md:text-base">
                        Bespoke Customization Studio
                    </span>
                    <div className="h-[1px] w-12 bg-red-600" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-wide"
                >
                    VYRONEX <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 italic font-light drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        ATELIER
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12 drop-shadow-md"
                >
                    Where automotive engineering meets uncompromised artistry.
                    Tailor-made performance, exclusive aesthetics, and ultimate luxury.
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">SCROLL</span>
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
                    animate={{ height: ["0rem", "3rem", "0rem"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
};

export default AtelierHero;
