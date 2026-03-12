import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TheCollection = () => {
    return (
        <section className="bg-black text-white py-20 lg:py-32">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-widest uppercase mb-6 md:mb-0"
                    >
                        THE <span className="text-red-600">COLLECTION</span>
                    </motion.h2>

                    <motion.a
                        href="#inventory"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center text-gray-400 hover:text-white uppercase tracking-[0.2em] text-xs font-semibold group transition-colors"
                    >
                        VIEW FULL INVENTORY
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">

                    {/* Large Left Item (Spans 2 columns, 2 rows on large screens) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5 hover:border-red-600 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2000&auto=format&fit=crop')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute bottom-10 left-10 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-left">
                            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">VYRONEX CUSTOM</h3>
                            <p className="text-red-500 text-sm uppercase tracking-widest font-bold">CLIENT MASTERPIECE #W092</p>
                        </div>
                    </motion.div>

                    {/* Top Right Small Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5 hover:border-red-600 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6 z-10 transition-transform duration-500 group-hover:translate-x-2 text-left">
                            <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:text-red-500 transition-colors uppercase">Customer Build</h3>
                            <p className="text-gray-400 text-[10px] tracking-widest uppercase">Special Modification</p>
                        </div>
                    </motion.div>

                    {/* Bottom Right Small Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5 hover:border-red-600 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6 z-10 transition-transform duration-500 group-hover:translate-x-2 text-left">
                            <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:text-red-500 transition-colors uppercase">Signature Series</h3>
                            <p className="text-gray-400 text-[10px] tracking-widest uppercase">Vyronex Performance</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TheCollection;
