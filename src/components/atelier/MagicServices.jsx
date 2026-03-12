import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Shield, Hammer, Droplets, Layers } from 'lucide-react';

const services = [
    {
        icon: Palette,
        title: "Ceramic Coating",
        desc: "Premium protection"
    },
    {
        icon: Sparkles,
        title: "Clarity Coat",
        desc: "Crystal clear finish"
    },
    {
        icon: Shield,
        title: "Paint Protection",
        desc: "Scratch resistant"
    },
    {
        icon: Hammer,
        title: "Denting Painting",
        desc: "Expert restoration"
    },
    {
        icon: Droplets,
        title: "Car Wash",
        desc: "Deep clean service"
    },
    {
        icon: Layers,
        title: "Glass Film",
        desc: "UV protection"
    }
];

const MagicServices = () => {
    return (
        <section className="bg-black text-white py-24 border-t border-white/5 relative z-10">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4"
                    >
                        Where <span className="text-red-600">The Real Magic</span> Happens
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
                    >
                        Our comprehensive suite of services transforms your automotive dreams into reality
                    </motion.p>
                </div>

                {/* Services Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#050505] border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-red-900/50 hover:bg-[#0a0505] transition-all cursor-pointer"
                            >
                                <div className="text-red-600 mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                                    <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-sm md:text-base mb-1">{service.title}</h3>
                                <p className="text-gray-500 text-xs">{service.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MagicServices;
