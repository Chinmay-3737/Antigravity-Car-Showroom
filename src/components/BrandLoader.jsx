import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandLoader = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Stage 1: Logo enters
        const t1 = setTimeout(() => setStage(1), 500);
        // Stage 2: Glowing effect
        const t2 = setTimeout(() => setStage(2), 2000);
        // Stage 3: Metallic Shine effect
        const t3 = setTimeout(() => setStage(3), 3500);
        // Stage 4: Fade out
        const t4 = setTimeout(() => setStage(4), 5000);
        // Unmount
        const t5 = setTimeout(() => onComplete(), 5800);

        return () => {
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
                initial={{ opacity: 1 }}
                animate={stage >= 4 ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Subtle radial glow background that intensifies at Stage 2 */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/0 via-black to-black"
                    animate={
                        stage === 2 ? { background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)' } :
                            stage >= 3 ? { background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)' } :
                                { background: 'radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)' }
                    }
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={
                            stage >= 1 && stage < 4 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } :
                                stage >= 4 ? { opacity: 0, scale: 1.05, filter: 'blur(10px)' } : {}
                        }
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Glow Behind Logo */}
                        <motion.div
                            className="absolute inset-0 bg-white/30 blur-3xl rounded-full"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={
                                stage === 2 ? { opacity: 0.5, scale: 1.2 } :
                                    stage >= 3 ? { opacity: 0.8, scale: 1.5 } : { opacity: 0, scale: 0.5 }
                            }
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        {/* Metallic Shine Mask overlay */}
                        {stage >= 3 && (
                            <motion.div
                                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
                                initial={{ x: '-100%', skewX: -20 }}
                                animate={{ x: '100%', skewX: -20 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            >
                                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                            </motion.div>
                        )}

                        <h1
                            className={`text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-[0.4em] md:tracking-[0.6em] pl-4 md:pl-6 relative z-10 transition-all duration-1000 ${stage >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' :
                                    stage >= 2 ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' :
                                        'text-gray-300'
                                }`}
                        >
                            VYRONEX
                        </h1>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BrandLoader;
