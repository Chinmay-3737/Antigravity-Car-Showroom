import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const VisionExpertise = () => {
    return (
        <section className="bg-black text-white py-32 overflow-hidden relative border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex flex-col items-start"
                >
                    {/* Badge */}
                    <div className="flex items-center gap-2 border border-red-900/50 bg-red-900/10 px-4 py-2 rounded-full mb-8">
                        <Settings className="w-4 h-4 text-red-600" />
                        <span className="text-red-500 text-xs font-bold uppercase tracking-widest">
                            CUSTOMIZATION STUDIO
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-wide leading-tight mb-2">
                        YOUR VISION.
                    </h2>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-wide leading-tight text-transparent mb-8"
                        style={{ WebkitTextStroke: '1px #444' }}
                    >
                        OUR EXPERTISE.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed">
                        From custom paint jobs to complete body modifications, our studio brings your dream vehicle to life.
                    </p>

                    {/* Button */}
                    <MagneticButton
                        to="/atelier"
                        variant="red"
                        className="rounded-none tracking-[0.2em]"
                    >
                        START CUSTOMIZING <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                    </MagneticButton>
                </motion.div>

                {/* Right Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:w-1/2 relative w-full aspect-[4/3] max-w-2xl hidden md:block"
                >
                    {/* Dotted Arch Background Decor */}
                    <div className="absolute -top-16 -left-10 w-[120%] h-[120%] border-t border-dashed border-gray-700/50 rounded-full blur-[1px] -z-10" />

                    {/* Tilted Card */}
                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 relative group bg-[#050505]">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop')` }}
                        />
                        {/* Red lighting overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 via-transparent to-transparent opacity-50 mix-blend-overlay" />
                    </div>
                </motion.div>

                {/* Mobile Image (No tilt) */}
                <div className="w-full relative block md:hidden aspect-[4/3] rounded-2xl overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1000&auto=format&fit=crop')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 via-transparent to-transparent opacity-50 mix-blend-overlay" />
                </div>
            </div>
        </section>
    );
};

export default VisionExpertise;
