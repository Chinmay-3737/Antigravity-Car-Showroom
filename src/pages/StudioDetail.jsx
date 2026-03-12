import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import whiteStudioImg from '../assets/studio-gg.jpg';
import blackStudioImg from '../assets/Motors-crr.jpg';

const studioData = {
    "white-studio": {
        title: "THE WHITE STUDIO",
        description: "A clinical, high-exposure environment designed for perfectionists.\nHere, every curve is analyzed, and every finish is perfected under\n6000K daylight-balanced lighting.",
        image: whiteStudioImg,
        theme: "white"
    },
    "black-studio": {
        title: "THE BLACK STUDIO",
        description: "Where shadows meet structure. This studio is engineered for dramatic\nreveals, stealth wraps, and heavy customization work. A sanctuary for\nthe bold.",
        image: blackStudioImg,
        theme: "black"
    }
};

const StudioDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [studio, setStudio] = useState(null);

    useEffect(() => {
        if (studioData[id]) {
            setStudio(studioData[id]);
        } else {
            navigate('/atelier'); // redirect if invalid
        }
    }, [id, navigate]);

    if (!studio) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
                style={{ backgroundImage: `url(${studio.image})` }}
            />

            {/* Overlay Gradient to match the screenshot feeling */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto -mt-20">

                {/* Small 'ENTERING' text */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-4"
                >
                    <span className="text-gray-400 text-[0.6rem] font-medium tracking-[0.4em] uppercase">
                        ENTERING
                    </span>
                </motion.div>

                {/* Main Title matching screenshot typography */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-sans font-black text-white uppercase tracking-wider mb-6 drop-shadow-2xl"
                    style={{
                        // To give that thick, blocky, slightly extended look from the references
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                        letterSpacing: '0.05em'
                    }}
                >
                    {studio.title}
                </motion.h1>

                {/* Description Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-300 font-light text-sm md:text-base leading-relaxed max-w-2xl whitespace-pre-line"
                >
                    {studio.description}
                </motion.p>
            </div>

            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => navigate('/atelier')}
                className="absolute top-8 left-8 text-white/50 hover:text-white uppercase tracking-widest text-xs font-bold flex items-center gap-2 transition-colors"
            >
                &larr; Return to Atelier
            </motion.button>
        </motion.div>
    );
};

export default StudioDetail;
