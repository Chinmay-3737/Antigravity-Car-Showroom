import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette } from 'lucide-react';

const BeyondOrdinary = () => {
    const containerRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: "Premium Selection",
            desc: "Curated collection of VIP cars, luxury vehicles, branded sports cars, 4x4s, and monster trucks.",
            icon: Sparkles,
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Full Customization",
            desc: "Expert color charts, interior/exterior design, and complete body customization services.",
            icon: Palette,
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={containerRef} className="bg-black text-white relative py-20 lg:py-40 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

                {/* Left Column (Sticky Header) */}
                <div className="lg:w-1/3 relative h-auto">
                    <div className="lg:sticky lg:top-40 block">
                        <div className="mb-6 w-12 h-[2px] bg-red-600" />
                        <h2 className="text-5xl md:text-7xl font-sans font-black tracking-wide leading-none mb-2">
                            BEYOND
                        </h2>
                        <h2 className="text-5xl md:text-7xl font-sans font-black tracking-wide leading-none text-transparent mb-6"
                            style={{ WebkitTextStroke: '1px #444' }}>
                            <span>ORDINARY</span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-sm mt-8">
                            We don't just sell cars. We curate experiences.
                        </p>
                    </div>
                </div>

                {/* Right Column (Scrolling Image Cards) */}
                <div className="lg:w-2/3 flex flex-col gap-20">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative w-full rounded-2xl overflow-hidden border border-white/10 hover:border-red-600 group bg-[#050505] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] cursor-pointer"
                                style={{ minHeight: '600px' }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                                {/* Card Content positioned bottom left */}
                                <div className="absolute bottom-10 left-10 right-10 z-20 transition-transform duration-500 group-hover:translate-x-2">
                                    <div className="text-red-500 mb-4 inline-block transform group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3 drop-shadow-lg group-hover:text-red-500 transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm max-w-md drop-shadow-md">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BeyondOrdinary;
