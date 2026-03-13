import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashPage = ({ onComplete }) => {
    const [stage, setStage] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // High-speed percentage counter logic
        if (stage >= 1 && count < 100) {
            const timer = setInterval(() => {
                setCount(prev => {
                    const next = prev + Math.floor(Math.random() * 5) + 2;
                    return next > 100 ? 100 : next;
                });
            }, 50);
            return () => clearInterval(timer);
        }
    }, [stage, count]);

    useEffect(() => {
        // Stage 1: Bars & Counter start
        const t1 = setTimeout(() => setStage(1), 300);
        // Stage 2: Glow & Text reveals with Red Sweep
        const t2 = setTimeout(() => setStage(2), 1000);
        // Stage 3: Hold
        const t3 = setTimeout(() => setStage(3), 4000);
        // Stage 4: Fade out
        const t4 = setTimeout(() => setStage(4), 4800);
        // Stage 5: Unmount
        const t5 = setTimeout(() => onComplete(), 5600);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); }
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden pointer-events-none"
                initial={{ opacity: 1 }}
                animate={stage >= 4 ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                {/* 1. Cinematic Background Layers */}
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4a0000_0%,_transparent_80%)] opacity-30" />
                
                {/* Red Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.1) 50%, transparent 50%)',
                        backgroundSize: '100% 4px'
                    }}
                />

                {/* Background Red Particles */}
                <div className="absolute inset-0 z-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-red-600 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                {/* 2. Intense Red Atmosphere Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="absolute w-full h-full max-w-5xl bg-red-900/5 rounded-full blur-[150px]"
                        animate={stage >= 2 ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">
                    
                    {/* Top Row: Metallic Bars & Counter */}
                    <div className="flex items-center justify-center w-full mb-12">
                        {/* LEFT BARS */}
                        <div className="flex flex-col items-end space-y-4 mr-12 md:mr-20">
                            <motion.div
                                className="h-[2px] rounded-full overflow-hidden relative"
                                initial={{ width: 0, opacity: 0 }}
                                animate={stage >= 1 ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="absolute inset-0 bg-red-900 shadow-[0_0_10px_rgba(220,38,38,0.3)]" />
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>
                        </div>

                        {/* PERCENTAGE COUNTER */}
                        <motion.div 
                            className="flex flex-col items-center justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={stage >= 1 ? { opacity: 1, scale: 1 } : {}}
                        >
                            <span className="text-4xl md:text-6xl font-mono font-black text-red-600 tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                {count}<span className="text-xl md:text-2xl text-red-900/50 pl-1">%</span>
                            </span>
                            <span className="text-[0.5rem] tracking-[0.6em] text-red-900 uppercase mt-2 font-black">System Ready</span>
                        </motion.div>

                        {/* RIGHT BARS */}
                        <div className="flex flex-col items-start space-y-4 ml-12 md:mr-20">
                            <motion.div
                                className="h-[2px] rounded-full overflow-hidden relative"
                                initial={{ width: 0, opacity: 0 }}
                                animate={stage >= 1 ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="absolute inset-0 bg-red-900 shadow-[0_0_10px_rgba(220,38,38,0.3)]" />
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* 4. CENTRAL BRANDING WITH RED LIGHT SWEEP & FLARE */}
                    <motion.div
                        className="flex flex-col items-center relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="relative overflow-hidden px-12 py-6">
                            {/* Brand Name with Inner Red Glow */}
                            <h1 className="text-5xl md:text-8xl font-sans font-black text-red-600 uppercase tracking-[0.4em] md:tracking-[0.6em] relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                                VYRONEX
                            </h1>
                            
                            {/* Intense Red Text Sweep (Elite) */}
                            <motion.div 
                                className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-transparent via-red-400 to-transparent skew-x-[-30deg] pointer-events-none z-20 mix-blend-screen"
                                initial={{ x: '-200%' }}
                                animate={stage >= 2 ? { x: '400%' } : {}}
                                transition={{ duration: 2.2, ease: "easeInOut", delay: 1.2 }}
                            />
                            
                            {/* Red Lens flare following the sweep */}
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-8 h-full bg-red-400 blur-2xl pointer-events-none z-30 opacity-60"
                                initial={{ x: '-200%' }}
                                animate={stage >= 2 ? { x: ['-200%', '200%', '600%'] } : {}}
                                transition={{ duration: 2.2, ease: "easeInOut", delay: 1.2 }}
                            />
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="flex flex-col items-center mt-8"
                        >
                            <p className="text-[0.6rem] md:text-[0.8rem] font-black tracking-[1em] text-red-500/80 uppercase mb-4 drop-shadow-[0_0_5px_rgba(220,38,38,0.3)]">
                                Engineered for Dominance
                            </p>
                            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Lower Right Branding stamp (Red Theme) */}
                <motion.div 
                    className="absolute right-12 bottom-12 flex items-center space-x-6 h-12"
                    initial={{ opacity: 0, x: 20 }}
                    animate={stage >= 2 ? { opacity: 0.4, x: 0 } : {}}
                    transition={{ delay: 2.5 }}
                >
                    <span className="text-[0.5rem] tracking-[0.8em] font-black text-red-900 uppercase">Est. 2025</span>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-red-900 to-transparent" />
                    <span className="text-[0.5rem] tracking-[0.8em] font-black text-red-900 uppercase">Custom Div</span>
                </motion.div>

                {/* Pure Red Atmosphere Pulse (Final Stage) */}
                <motion.div
                    className="absolute inset-0 bg-red-600/5 mix-blend-color-dodge z-40 pointer-events-none"
                    animate={stage === 3 ? { opacity: [0, 0.1, 0] } : { opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

            </motion.div>
        </AnimatePresence>
    );
};

export default SplashPage;
