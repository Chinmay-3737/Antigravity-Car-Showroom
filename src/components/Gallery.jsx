import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-8",
        rowSpan: "row-span-2",
    },
    {
        url: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-4",
        rowSpan: "row-span-1",
    },
    {
        url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2071&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-4",
        rowSpan: "row-span-1",
    },
    {
        url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1974&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-4",
        rowSpan: "row-span-1",
    },
    {
        url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-8",
        rowSpan: "row-span-1",
    },
];

const Gallery = () => {
    return (
        <section className="bg-black py-1" id="gallery">
            {/* Video Teaser Bar */}
            <div className="w-full bg-white/5 border-y border-white/10 py-4 cursor-pointer group hover:bg-red-600 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-500 font-bold uppercase tracking-widest text-sm">
                        Watch the Brand Film
                    </span>
                    <div className="flex items-center space-x-2 text-white">
                        <span className="text-xs font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300">Play</span>
                        <div className="p-2 border border-gray-400 group-hover:border-white rounded-full transition-all duration-300">
                            <Play className="w-4 h-4 fill-white group-hover:fill-white text-transparent transition-all duration-300" />
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
        </section>
    );
};

export default Gallery;
