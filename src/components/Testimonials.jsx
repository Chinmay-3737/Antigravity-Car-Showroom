import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Alexander Pierce",
        role: "CEO, Apex Holdings",
        content: "The level of service and attention to detail is truly unparalleled. Purchasing my V12 was an experience that matched the caliber of the vehicle itself.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Victoria Sterling",
        role: "Real Estate Mogul",
        content: "Aura Motors didn't just sell me a car; they curated a lifestyle. The custom detailing on my Sentinel SUV turns heads everywhere I go.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Professional Athlete",
        content: "Performance is everything to me. The tuning studio extracted power I didn't know existed, and the armor package provides total peace of mind.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden" id="testimonials">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white/5">
                    <path d="M47.7,-57.2C59.4,-47.3,64.8,-29.4,66.5,-11.6C68.1,6.1,66.1,23.8,57.1,38.1C48.1,52.3,32.2,63.1,14.2,68.4C-3.8,73.7,-24,73.5,-41.2,65C-58.4,56.5,-72.6,39.6,-78.3,20.1C-84,0.5,-81.1,-21.6,-70.7,-38.4C-60.3,-55.1,-42.4,-66.4,-25.1,-68.8C-7.8,-71.1,8.9,-64.4,25.8,-57.6C32.7,-55.4,40,-53.2,47.7,-57.2Z" transform="translate(100 100) scale(1.1)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-4"
                    >
                        Client <span className="text-red-500">Legacy</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-1 w-24 bg-red-500 mx-auto"
                    />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-black/40 backdrop-blur-md border border-white/5 p-8 md:p-12 shadow-2xl">
                        <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5" />

                        <div className="min-h-[300px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="flex flex-col items-center text-center relative z-10"
                                >
                                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8 italic">
                                        "{testimonials[current].content}"
                                    </p>

                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={testimonials[current].image}
                                            alt={testimonials[current].name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                                        />
                                        <div className="text-left">
                                            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                                                {testimonials[current].name}
                                            </h4>
                                            <span className="text-gray-500 text-xs tracking-widest uppercase">
                                                {testimonials[current].role}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 -mb-6 md:-mb-8">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 md:w-16 md:h-16 bg-black border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 hover:scale-110 transition-all duration-300 z-20 group"
                            >
                                <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
                            </button>

                            <div className="flex space-x-2 z-20">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        className={`w-12 h-1 transition-all duration-300 ${current === idx ? 'bg-red-500' : 'bg-white/20'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 md:w-16 md:h-16 bg-black border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 hover:scale-110 transition-all duration-300 z-20 group"
                            >
                                <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
