import React from 'react';
import { motion } from 'framer-motion';

const StickyMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-[#050000] border-y border-red-900/60 py-3 flex z-40 relative">
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 35,
                    repeat: Infinity,
                }}
            >
                {[1, 2].map((set) => (
                    <div key={set} className="flex items-center">
                        {[...Array(6)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span className="text-red-700 font-bold uppercase tracking-[0.15em] text-xs md:text-sm mx-6">
                                    VIP CARS
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-2"></div>
                                <span className="text-red-700 font-bold uppercase tracking-[0.15em] text-xs md:text-sm mx-6">
                                    MONSTER TRUCKS
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-2"></div>
                                <span className="text-red-700 font-bold uppercase tracking-[0.15em] text-xs md:text-sm mx-6">
                                    CUSTOM BUILDS
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-2"></div>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default StickyMarquee;
