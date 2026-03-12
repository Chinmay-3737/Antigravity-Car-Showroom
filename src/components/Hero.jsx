import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070&auto=format&fit=crop')`, // Modified dark sports car
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-6 block drop-shadow-lg">
                        Welcome to the Apex
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-2 leading-tight drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                >
                    Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">RAW</span> <br />
                    <span className="text-white relative inline-block group">
                        POWER
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mb-10 inline-block border border-red-500/50 bg-black/60 backdrop-blur-md px-4 py-1 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                >
                    <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold">
                        Signature by Vyronex Motor
                    </span>
                </motion.div>


                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <button className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300 flex items-center group">
                        Explore Collection
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 border border-white/40 text-white font-bold uppercase tracking-wider hover:bg-white/10 hover:border-red-500 transition-all duration-500 backdrop-blur-sm">
                        Book a Viewing
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="flex flex-col items-center">
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Scroll</span>
                    <motion.div
                        className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent"
                        animate={{ height: ["0rem", "4rem", "0rem"], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
