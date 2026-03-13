import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Disc, Cog, ShieldCheck, Zap } from 'lucide-react';
import alloysBg from '../../assets/alloys-cc - Copy.jpg';
import classicBlackImg from '../../assets/classic black.png';
import sportChromeImg from '../../assets/Sport Chrome.png';
import racingImg from '../../assets/racing.png';
import titaniumGrayImg from '../../assets/Titanium gray.png';
import pearlWhiteImg from '../../assets/pearl white.png';
import gunmetalImg from '../../assets/gunmetl.png';
import matteBlackImg from '../../assets/Matte blackpro.png';

const collectionWheels = [
    {
        id: 1,
        name: 'Classic Black',
        specs: '18" | 5X120 | 9.5J',
        price: '+$1,800',
        image: classicBlackImg,
        category: 'SPORT SERIES'
    },
    {
        id: 2,
        name: 'Sport Chrome',
        specs: '19" | 5X120 | 10J',
        price: '+$2,200',
        image: sportChromeImg,
        category: 'LUXURY SERIES'
    },
    {
        id: 3,
        name: 'Racing Red',
        specs: '20" | 5X120 | 10.5J',
        price: '+$3,500',
        image: racingImg,
        category: 'TRACK SERIES'
    },
    {
        id: 4,
        name: 'Titanium Gray',
        specs: '19" | 5X120 | 9.5J',
        price: '+$2,100',
        image: titaniumGrayImg,
        category: 'FORGED SERIES'
    },
    {
        id: 5,
        name: 'Pearl White',
        specs: '18" | 5X120 | 9J',
        price: '+$1,950',
        image: pearlWhiteImg,
        category: 'CUSTOM SERIES'
    },
    {
        id: 6,
        name: 'Gunmetal Pro',
        specs: '20" | 5X120 | 10J',
        price: '+$2,800',
        image: gunmetalImg,
        category: 'ELITE SERIES'
    },
    {
        id: 7,
        name: 'Matte Black Pro',
        specs: '21" | 5X120 | 11J',
        price: '+$4,500',
        image: matteBlackImg,
        category: 'SIGNATURE SERIES'
    },
    {
        id: 8,
        name: 'Carbon Fiber',
        specs: '20" | 5X120 | 10.5J',
        price: '+$5,200',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop',
        category: 'PERFORMANCE SERIES'
    }
];

const TheCollection = () => {
    return (
        <section id="collection" className="bg-[#050505] text-white">
            
            {/* PROFESSIONAL FULL-WIDTH HERO (H-SCREEN) */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${alloysBg})` }}
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-50" />
                
                <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-sans font-black tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">
                            VYRONEX <span className="text-red-600">CUSTOM</span>
                        </h2>
                        <div className="flex items-center justify-center mt-8 space-x-6">
                            <div className="h-px w-16 bg-red-600/50" />
                            <p className="text-gray-300 text-sm md:text-lg font-bold tracking-[0.6em] uppercase">
                                THE ART OF BESPOKE
                            </p>
                            <div className="h-px w-16 bg-red-600/50" />
                        </div>
                    </motion.div>
                </div>

                {/* SCROLL INDICATOR */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-[10px] text-gray-400 font-black tracking-[0.4em] uppercase mb-4 opacity-50">SCROLL TO EXPLORE</span>
                    <div className="w-px h-16 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
                </motion.div>
            </div>

            {/* ALLOY GRID SECTION (SS 3 & 4 EFFECT) */}
            <div className="py-24 lg:py-32 max-w-[1600px] mx-auto px-6 md:px-12">
                
                <div className="mb-20 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="absolute inset-0 flex justify-center items-center pointer-events-none"
                    >
                        <span className="text-white/[0.02] text-[10rem] md:text-[15rem] font-black uppercase tracking-tighter">ELITE</span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-sans font-extrabold tracking-tight uppercase"
                    >
                        Complete <span className="text-red-600">SIGNATURE ALLOYS</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mt-6 font-medium leading-relaxed"
                    >
                        Explore our full range of premium alloy wheels, each designed to enhance your vehicle's performance and aesthetics with absolute precision.
                    </motion.p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {collectionWheels.map((wheel, index) => (
                        <motion.div
                            key={wheel.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-red-600/40 transition-all duration-700 hover:-translate-y-3 cursor-pointer"
                        >
                            {/* Metallic Scan Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/0 via-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            {/* Card Glow */}
                            <div className="absolute -inset-[1px] bg-gradient-to-br from-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-[2px] -z-10" />

                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={wheel.image}
                                    alt={wheel.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                                
                                {/* Watermark */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                                    <span className="text-white/[0.03] text-[6rem] font-black rotate-12 select-none uppercase tracking-tighter">VYRONEX</span>
                                </div>

                                {/* Floating Specs Badge */}
                                <div className="absolute top-5 right-5 p-2 px-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                                    <span className="text-[10px] text-red-500 font-black tracking-widest">{wheel.category}</span>
                                </div>
                            </div>

                            {/* Details Container */}
                            <div className="p-8 relative">
                                <h4 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300 tracking-tight">
                                    {wheel.name}
                                </h4>
                                <p className="text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-6 opacity-80 border-l border-red-600 pl-3">
                                    {wheel.specs}
                                </p>
                                
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Starting from</p>
                                        <span className="text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                                            {wheel.price}
                                        </span>
                                    </div>
                                    
                                    <motion.button 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-24 text-center"
                >
                    <button className="group relative px-12 py-5 overflow-hidden rounded-full transition-all duration-300">
                        <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="absolute inset-0 border border-white/20 group-hover:border-red-600 rounded-full transition-colors duration-300" />
                        <span className="relative z-10 text-white text-xs font-black tracking-[.4em] uppercase">
                            Explore Entire Catalog
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TheCollection;
