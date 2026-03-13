import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Scroll Progress Logic
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'CUSTOMIZATION STUDIO', path: '/atelier' },
        { name: 'SIGNATURE ALLOYS', path: '/collection' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
                    }`}
            >
                {/* Top Scroll Progress Bar */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-[60]"
                    style={{ 
                        scaleX,
                        boxShadow: '0 0 10px rgba(220, 38, 38, 0.8)'
                    }}
                />
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                            <h1 className="text-2xl md:text-3xl font-sans font-black tracking-widest text-white drop-shadow-md uppercase flex items-center">
                                VYRONEX <span className="text-red-600">CUSTOM</span>
                            </h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-[0.8rem] md:text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 pb-1 border-b-2
                                        ${isActive(link.path)
                                            ? 'text-red-600 border-red-600'
                                            : 'text-gray-300 border-transparent hover:text-red-600 hover:border-red-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl uppercase tracking-[0.2em] font-medium transition-colors duration-300 
                                    ${isActive(link.path) ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
