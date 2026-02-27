import React from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, Shield, Trophy } from 'lucide-react';

const cars = [
    {
        id: 1,
        name: "Mercedes G Wagon",
        type: "Iconic SUV",
        price: "$250K",
        image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1974&auto=format&fit=crop",
        specs: { power: "577 hp", speed: "4.5s" }
    },
    {
        id: 2,
        name: "GMC Sierra Denali",
        type: "Premium Truck",
        price: "$120K",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
        specs: { power: "420 hp", speed: "5.4s" }
    },
    {
        id: 3,
        name: "Range Rover",
        type: "Luxury SUV",
        price: "$150K",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
        specs: { power: "523 hp", speed: "4.4s" }
    },
    {
        id: 4,
        name: "BMW M5 Competition",
        type: "Sports Sedan",
        price: "$140K",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
        specs: { power: "617 hp", speed: "3.1s" }
    }
];

const FeaturedCars = () => {
    return (
        <section className="py-24 bg-black relative" id="models">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6"
                        >
                            Featured <span className="text-red-500">Models</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg font-light leading-relaxed"
                        >
                            Masterpieces of engineering and design. Each vehicle in our curated collection represents the pinnacle of automotive excellence, offering uncompromised performance and unparalleled luxury.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 md:mt-0"
                    >
                        <button className="text-red-500 uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 flex items-center group">
                            View Complete Inventory
                            <div className="w-8 h-px bg-red-500 ml-4 group-hover:w-16 group-hover:bg-white transition-all duration-300" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {cars.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-[#050505] border border-white/5 hover:border-white/20 transition-colors duration-500 overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${car.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-80" />

                                {/* Price Tag */}
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 px-4 py-2 text-white font-mono font-bold tracking-wider">
                                    {car.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 relative">
                                {/* Glow Effect */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />

                                <div className="uppercase tracking-widest text-xs text-gray-500 mb-2 font-bold">
                                    {car.type}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide group-hover:text-red-500 transition-colors duration-300">
                                    {car.name}
                                </h3>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                    <div className="flex items-center space-x-3">
                                        <Zap className="h-5 w-5 text-gray-400" />
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase">Power</div>
                                            <div className="text-white font-mono">{car.specs.power}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Trophy className="h-5 w-5 text-gray-400" />
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase">0-60 mph</div>
                                            <div className="text-white font-mono">{car.specs.speed}</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-8 py-4 bg-white/5 hover:bg-red-600 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 border border-transparent hover:border-red-500">
                                    Discover Reality
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCars;
