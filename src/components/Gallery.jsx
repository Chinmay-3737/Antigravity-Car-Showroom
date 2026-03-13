import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Loader2 } from 'lucide-react';
import brandVideo from '../assets/Video_Generation_Request - MERGE - Videobolt.net.mp4';
import collageImg from '../assets/image.png';
import lexus from '../assets/lexus.png';
import rangeright from '../assets/rangeright.jpg';
import pololeft from '../assets/pololeft.png';
import gwagon from '../assets/g wagon.png';

const galleryImages = [
    {
        url: collageImg,
        colSpan: "col-span-12 md:col-span-8",
        rowSpan: "row-span-2",
    },
    {
        url: lexus,
        colSpan: "col-span-12 md:col-span-4",
        rowSpan: "row-span-1",
    },
    {
        url: rangeright,
        colSpan: "col-span-12 md:col-span-4",
        rowSpan: "row-span-1",
    },
    {
        url: pololeft,
        colSpan: "col-span-12 md:col-span-4",
        rowSpan: "row-span-1",
    },
    {
        url: gwagon,
        colSpan: "col-span-12 md:col-span-8",
        rowSpan: "row-span-1",
    },
];

const Gallery = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const videoRef = useRef(null);

    return (
        <section className="bg-black py-1" id="gallery">
            {/* Video Teaser Bar */}
            <div 
                onClick={() => {
                    setIsVideoOpen(true);
                    setIsVideoLoading(true);
                }}
                className="w-full bg-white/5 border-y border-white/10 py-4 cursor-pointer group hover:bg-red-600 transition-colors duration-500"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-[1px] bg-red-500 group-hover:bg-white group-hover:w-16 transition-all duration-500" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-500 font-black uppercase tracking-[0.2em] text-xs">
                            Watch the Brand Film
                        </span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">Play Clip</span>
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                            <div className="p-3 border border-gray-400/30 group-hover:border-white rounded-full transition-all duration-300 relative bg-black/50 backdrop-blur-sm">
                                <Play className="w-3 h-3 fill-white group-hover:fill-white text-transparent transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-1 p-1 h-auto md:h-[800px]">
                {galleryImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`relative overflow-hidden group cursor-pointer ${img.colSpan} ${img.rowSpan}`}
                        style={{ minHeight: '300px' }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: `url(${img.url})` }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="w-16 h-16 border-2 border-red-500 bg-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm -scale-50 group-hover:scale-100 transition-transform duration-500">
                                <span className="text-white text-xs uppercase tracking-widest font-bold">View</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 overflow-hidden"
                    >
                        {/* Hardware acceleration trigger */}
                        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-md opacity-50 pointer-events-none" style={{ transform: 'translate3d(0,0,0)' }} />

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-10 right-10 text-white/40 hover:text-white transition-all z-[110] flex items-center space-x-2 group"
                        >
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                            <X size={32} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500" />
                        </motion.button>

                        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-80" />
                        </div>

                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 30, stiffness: 150 }}
                            className="relative w-full max-w-7xl aspect-video bg-black rounded-sm overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)] border border-white/5 group z-20"
                            style={{ willChange: 'transform' }}
                        >
                            {isVideoLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-[30] space-y-4">
                                    <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
                                    <span className="text-[10px] text-gray-500 uppercase tracking-[0.8em] font-black ml-2">Optmizing Frame</span>
                                </div>
                            )}

                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                onCanPlayThrough={() => setIsVideoLoading(false)}
                                style={{ transform: 'translate3d(0,0,0)' }}
                            >
                                <source src={brandVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Cinematic Letterbox effect on hover */}
                            <div className="absolute top-0 left-0 w-full h-[12%] bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-90 z-10" />
                            <div className="absolute bottom-0 left-0 w-full h-[12%] bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-90 z-10" />
                            
                            {/* Branding Overlay */}
                            <div className="absolute bottom-8 left-12 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-[1px] h-12 bg-red-600" />
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-[0.6em]">Vyronex</p>
                                        <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em]">Cinematic Division</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
