import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const MagneticButton = ({ children, className = '', onClick, to, href, variant = 'dark' }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const bgClass = variant === 'red' ? 'bg-red-600' : 'bg-black';
    const borderClass = variant === 'red' ? 'border-red-500' : 'border-white/10';

    const content = (
        <motion.div
            className={`relative inline-flex group cursor-pointer ${className}`}
            ref={buttonRef}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            <div className={`relative px-8 py-4 ${bgClass} border ${borderClass} overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-red-500/50`}>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 text-white font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                    {children}
                </span>
            </div>
        </motion.div>
    );

    if (to) {
        return <Link to={to} className="inline-block">{content}</Link>;
    }

    if (href) {
        return <a href={href} className="inline-block">{content}</a>;
    }

    return content;
};

export default MagneticButton;
