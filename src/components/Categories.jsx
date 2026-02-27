import React from 'react';
import { motion } from 'framer-motion';

const categoryData = [
    {
        id: 1,
        title: 'Range Rover',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop',
        subtitle: 'Luxury SUV',
    },
    {
        id: 2,
        title: 'BMW M5',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop',
        subtitle: 'Sports Sedan',
    },
    {
        id: 3,
        title: 'GMC Sierra',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
        subtitle: 'Premium Truck',
    },
    {
        id: 4,
        title: 'G Wagon',
        image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1974&auto=format&fit=crop',
        subtitle: 'Iconic SUV',
    }
];

const Categories = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="categories">
            {/* Ambient Side Glow Effects */}
            <div className="absolute top-1/2 -left-[10%] w-[30%] h-[60%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 -right-[10%] w-[30%] h-[60%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-4"
                    >
                        Vehicle <span className="text-red-500">Categories</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 w-24 bg-red-500 mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryData.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer border border-transparent hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-500"
                        >
                            {/* Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-1">
                                    {category.title}
                                </h3>
                                <p className="text-red-400 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
                                    {category.subtitle}
                                </p>
                                <div className="w-0 h-[2px] bg-red-500 mt-4 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-700 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
