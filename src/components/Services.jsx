import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, PaintBucket, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
    {
        icon: <Wrench className="w-10 h-10 text-red-500" />,
        title: "Performance Tuning",
        description: "Unlock the true potential of your engine with our state-of-the-art diagnostic and tuning services."
    },
    {
        icon: <PaintBucket className="w-10 h-10 text-red-500" />,
        title: "Bespoke Aesthetics",
        description: "Custom wraps, premium ceramic coatings, and interior detailing tailored to your exacting standards."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
        title: "Armor & Security",
        description: "Discreet ballistic protection and advanced security systems for ultimate peace of mind."
    },
    {
        icon: <Sparkles className="w-10 h-10 text-red-500" />,
        title: "Concierge Maintenance",
        description: "White-glove pickup, meticulous servicing, and pristine delivery back to your estate."
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="services">
            {/* Background styling */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase mb-4"
                    >
                        Vyronex Atelier
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black uppercase text-white tracking-widest leading-tight"
                    >
                        Customization <br /> <span className="text-red-500">Studio</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group p-8 bg-[#050505] backdrop-blur-sm border border-white/5 hover:border-gray-500 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-500" />

                            <div className="mb-6 p-4 bg-black/50 rounded-full inline-block group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-red-500 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <button className="px-10 py-4 border border-red-500 text-red-500 uppercase tracking-widest text-sm font-bold hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300">
                        Design Your Vision
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
