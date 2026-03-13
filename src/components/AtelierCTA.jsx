import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AtelierCTA = () => {
    return (
        <section className="relative py-32 bg-[#0a0a0a] overflow-hidden flex items-center justify-center border-y border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

                {/* Subtle Carbon fiber pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #111 25%, #111 75%, #000 75%, #000)`,
                        backgroundPosition: `0 0, 4px 4px`,
                        backgroundSize: `8px 8px`
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-medium tracking-widest uppercase mb-8">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Exclusive Customization
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                        Customize Your Vehicle at <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Vyronex Atelier</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Elevate your automotive experience. Bespoke aesthetics, performance tuning, and exclusive materials crafted to your exact specifications.
                    </p>

                    <Link to="/atelier">
                        <motion.button
                            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-semibold text-lg uppercase tracking-wider overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shine" />

                            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                                Enter The Studio
                                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </span>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AtelierCTA;
