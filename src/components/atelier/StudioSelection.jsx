import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import whiteStudioImg from '../../assets/studio-gg.jpg';
import blackStudioImg from '../../assets/Motors-crr.jpg';

const studios = [
    {
        id: 'white-studio',
        subheading: 'PRISTINE. CLINICAL. PERFECTION.',
        title: 'THE WHITE STUDIO',
        description: 'An ultra-clean environment designed for paint protection film (PPF), ceramic coating, and detailed inspections under high-intensity lighting.',
        image: whiteStudioImg,
        tagline: 'VYRONEX CUSTOM STUDIO'
    },
    {
        id: 'black-studio',
        subheading: 'DRAMATIC. BOLD. EXCLUSIVE.',
        title: 'THE BLACK STUDIO',
        description: 'A moody, atmospheric space for vehicle wraps, custom bodywork, and unveiling your newly transformed machine.',
        image: blackStudioImg,
        tagline: 'VYRONEX CUSTOM STUDIO'
    }
];

const StudioCard = ({ studio, index }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-transparent hover:border-red-600 transition-all duration-500 w-full hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:-translate-y-2 hover:scale-[1.01]"
            style={{ minHeight: '650px' }}
            onClick={() => navigate(`/studio/${studio.id}`)}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${studio.image})` }}
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

            {/* Top Tagline */}
            <div className="absolute top-10 left-0 w-full flex justify-center z-20">
                <span className="text-[#d4af37] font-mono tracking-[0.25em] text-[0.65rem] md:text-xs uppercase font-bold drop-shadow-md">
                    {studio.tagline}
                </span>
            </div>

            {/* Content Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20 flex flex-col justify-end">

                {/* Red Subheading */}
                <span className="text-red-600 font-mono tracking-widest text-[0.65rem] font-bold uppercase mb-2">
                    {studio.subheading}
                </span>

                {/* Main Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mb-4 drop-shadow-lg tracking-wide transition-colors duration-300 group-hover:text-red-600" style={{ fontFamily: "Orbitron, sans-serif" }}>
                    {studio.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed max-w-md mb-8 opacity-90 transition-opacity duration-300">
                    {studio.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center gap-3 text-white font-bold text-[0.7rem] uppercase tracking-[0.2em] group-hover:text-red-600 transition-colors duration-300">
                    ENTER STUDIO <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
            </div>
        </motion.div>
    );
};

const StudioSelection = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4 max-w-[1400px]">

                {/* Header Section */}
                <div className="text-center mb-16 px-4 flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-6"
                        style={{ WebkitTextStroke: '1px white' }}
                    >
                        CUSTOMIZATION <span className="text-transparent" style={{ WebkitTextStroke: '2px #dc2626' }}>STUDIO</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-medium text-sm"
                    >
                        <span className="text-[#3b82f6]">Select your environment.</span> Where your vision becomes reality.
                    </motion.p>
                </div>

                {/* Cards Grid - Changed to 2 columns to match updated screenshot */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full max-w-[1600px] mx-auto">
                    {studios.map((studio, idx) => (
                        <StudioCard key={studio.id} studio={studio} index={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StudioSelection;
