import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashPage = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Stage 1: Lines animate in
        const t1 = setTimeout(() => setStage(1), 300);
        // Stage 2: Glow & Text reveals
        const t2 = setTimeout(() => setStage(2), 1200);
        // Stage 3: Hold the completed state
        const t3 = setTimeout(() => setStage(3), 3500);
        // Stage 4: Fade out everything
        const t4 = setTimeout(() => setStage(4), 4200);
        // Stage 5: Unmount component
        const t5 = setTimeout(() => onComplete(), 5000);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); }
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a1111] overflow-hidden"
                initial={{ opacity: 1 }}
                animate={stage >= 4 ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                {/* Radial gradient background to simulate a very dark red room */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a1a1a]/40 via-[#1a1111] to-[#110a0a]" />

                <div className="relative z-10 flex items-center justify-center w-full max-w-5xl mx-auto px-4 group">

                    {/* Dark Red glowing pill behind the text */}
                    <motion.div
                        className="absolute w-[300px] md:w-[600px] h-[100px] md:h-[150px] bg-red-900/30 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={stage >= 2 ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />

                    {/* Floating Engine Components (Abstract V8/V12 elements) */}

                    {/* Mid Left - Turbine / Fan */}
                    <motion.div
                        className="absolute top-[45%] left-[25%] md:left-[35%] text-gray-500/50 pointer-events-none"
                        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        animate={stage >= 2 ? { opacity: 0.6, rotate: 0, scale: 1.2 } : {}}
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {/* Outer Ring */}
                                <circle cx="50" cy="50" r="45" />
                                {/* Inner Hub Ring */}
                                <circle cx="50" cy="50" r="15" />
                                {/* Center Axle */}
                                <circle cx="50" cy="50" r="5" fill="currentColor" />

                                {/* Turbine Blades */}
                                {/* Blade 1 */}
                                <path d="M50 35 V5" />
                                {/* Blade 2 */}
                                <path d="M50 65 V95" />
                                {/* Blade 3 */}
                                <path d="M35 50 H5" />
                                {/* Blade 4 */}
                                <path d="M65 50 H95" />

                                {/* Diagonal Blades */}
                                <path d="M39 39 L18 18" />
                                <path d="M61 61 L82 82" />
                                <path d="M39 61 L18 82" />
                                <path d="M61 39 L82 18" />

                                {/* Segment Details */}
                                <path d="M45 5 H55" />
                                <path d="M45 95 H55" />
                                <path d="M5 45 V55" />
                                <path d="M95 45 V55" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Top Right - Large Piston */}
                    <motion.div
                        className="absolute top-[20%] right-[20%] md:right-[30%] text-red-500/40 pointer-events-none"
                        initial={{ opacity: 0, rotate: 0, scale: 0.8, x: 50, y: -20 }}
                        animate={stage >= 2 ? { opacity: 0.7, rotate: 15, scale: 1.5, x: 0, y: 0 } : {}}
                        transition={{ duration: 3.5, ease: "easeOut", delay: 0.3 }}
                    >
                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                            <svg width="120" height="150" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2">
                                {/* Piston Head */}
                                <rect x="20" y="10" width="60" height="25" rx="2" />
                                {/* Piston Rings */}
                                <line x1="20" y1="18" x2="80" y2="18" strokeWidth="1.5" />
                                <line x1="20" y1="26" x2="80" y2="26" strokeWidth="1.5" />

                                {/* Connecting Rod */}
                                <path d="M40 35 L30 80" />
                                <path d="M60 35 L70 80" />

                                {/* Wrist Pin Housing */}
                                <rect x="35" y="32" width="30" height="8" rx="1" fill="currentColor" />

                                {/* Crankshaft End Ring */}
                                <circle cx="50" cy="88" r="16" />
                                {/* Crank Center Hole */}
                                <circle cx="50" cy="88" r="6" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* --- ADDED ENGINE COMPONENTS --- */}

                    {/* Bottom Left - Engine Valve */}
                    <motion.div
                        className="absolute bottom-[25%] left-[10%] md:left-[20%] text-white/20 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={stage >= 2 ? { opacity: 0.4, scale: 0.9, y: 0 } : {}}
                        transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
                    >
                        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                            <svg width="80" height="120" viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {/* Valve Stem */}
                                <line x1="30" y1="10" x2="30" y2="70" />
                                {/* Valve Head */}
                                <path d="M10 90 L30 70 L50 90 Z" />
                                {/* Valve Spring Lines */}
                                <path d="M20 20 H40 M20 30 H40 M20 40 H40 M20 50 H40 M20 60 H40" strokeDasharray="2 2" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Top Center-Right - Spark Plug */}
                    <motion.div
                        className="absolute top-[10%] right-[35%] md:right-[45%] text-red-500/20 pointer-events-none hidden md:block"
                        initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                        animate={stage >= 2 ? { opacity: 0.5, rotate: -15, scale: 0.8 } : {}}
                        transition={{ duration: 3.5, ease: "easeOut", delay: 0.6 }}
                    >
                        <motion.div animate={{ y: [5, -5, 5], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                            <svg width="60" height="100" viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {/* Terminal */}
                                <rect x="15" y="5" width="10" height="10" rx="2" />
                                {/* Ceramic Insulator */}
                                <path d="M12 15 H28 L25 40 H15 Z" />
                                {/* Hex Nut Area */}
                                <rect x="12" y="40" width="16" height="15" />
                                {/* Threaded Body */}
                                <path d="M16 55 H24 M16 60 H24 M16 65 H24" />
                                {/* Ground Electrode */}
                                <path d="M20 70 V75 H16" strokeWidth="2" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Right - Interlocking Gears */}
                    <motion.div
                        className="absolute bottom-[10%] right-[5%] md:right-[15%] text-gray-500/30 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                        animate={stage >= 2 ? { opacity: 0.5, scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                    >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {/* Main Gear */}
                                <circle cx="50" cy="50" r="30" strokeDasharray="10 5" strokeWidth="4" />
                                <circle cx="50" cy="50" r="20" />
                                <circle cx="50" cy="50" r="5" fill="currentColor" />
                                {/* Cross Spokes */}
                                <line x1="50" y1="20" x2="50" y2="80" />
                                <line x1="20" y1="50" x2="80" y2="50" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Top Left - Hanging Chain & Pulley (from reference image) */}
                    <motion.div
                        className="absolute top-0 left-[30%] md:left-[35%] text-gray-500/50 pointer-events-none origin-top"
                        initial={{ opacity: 0, y: -50 }}
                        animate={stage >= 2 ? { opacity: 0.6, y: 0 } : {}}
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        <motion.div animate={{ rotate: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", originY: 0 }}>
                            <svg width="60" height="180" viewBox="0 0 40 180" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {/* Vertical Chain Line */}
                                <line x1="20" y1="0" x2="20" y2="120" strokeDasharray="4 4" />

                                {/* Pulley/Hook Mechanism at the end */}
                                <path d="M10 120 H30 L25 140 H15 Z" />
                                <circle cx="20" cy="155" r="10" />
                                <circle cx="20" cy="155" r="3" fill="currentColor" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Left Animated Lines */}
                    <div className="flex flex-col items-end space-y-1 md:space-y-2 mr-6 md:mr-10">
                        <motion.div
                            className="h-[1px] md:h-[2px] bg-white/80 origin-right rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            animate={stage >= 1 ? { width: "40px", opacity: 1 } : { width: 0, opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        <motion.div
                            className="h-[1px] md:h-[2px] bg-white/80 origin-right rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            animate={stage >= 1 ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
                            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                        />
                    </div>

                    {/* Central Brand Text Container */}
                    <motion.div
                        className="flex flex-col items-center relative z-20"
                        initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                        animate={stage >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl md:text-5xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500 uppercase tracking-[0.4em] md:tracking-[0.6em] pl-4 md:pl-6 drop-shadow-md">
                            VYRONEX
                        </h1>
                        <p className="text-[0.45rem] md:text-[0.6rem] font-medium tracking-[0.4em] md:tracking-[0.8em] text-gray-400 uppercase mt-4 md:mt-6 opacity-70">
                            Engineered for Dominance
                        </p>
                    </motion.div>

                    {/* Right Animated Lines */}
                    <div className="flex flex-col items-start space-y-1 md:space-y-2 ml-6 md:ml-10">
                        <motion.div
                            className="h-[1px] md:h-[2px] bg-white/80 origin-left rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            animate={stage >= 1 ? { width: "40px", opacity: 1 } : { width: 0, opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        <motion.div
                            className="h-[1px] md:h-[2px] bg-white/80 origin-left rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            animate={stage >= 1 ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
                            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                        />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
export default SplashPage;
