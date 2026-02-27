import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Models', href: '#models' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-[0.3em] text-white drop-shadow-md">
                                VYRONEX
                            </h1>
                            <p className="text-[0.65rem] text-gray-300 tracking-[0.4em] uppercase mt-1 opacity-80">
                                Engineered for Dominance
                            </p>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm uppercase tracking-wider text-gray-200 hover:text-red-400 transition-colors duration-300 drop-shadow-md font-semibold"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="px-6 py-2 border border-red-500 text-white bg-black/40 backdrop-blur-sm hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300 uppercase tracking-wider text-sm font-bold focus:outline-none">
                                Contact Us
                            </button>
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
                        className="fixed inset-0 z-40 bg-black/95 glass pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col space-y-6 items-center flex-1 justify-center h-full pb-20">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-8 px-8 py-3 border border-gray-500 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest focus:outline-none">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
