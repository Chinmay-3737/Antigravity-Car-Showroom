import React from 'react';
import { Car, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-black pt-24 pb-8 border-t border-white/5 relative overflow-hidden" id="footer">
            {/* Subtle Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex flex-col mb-6">
                            <h1 className="text-2xl md:text-3xl font-sans font-black tracking-tight text-white uppercase">
                                VYRONEX <span className="text-red-600">CUSTOM</span>
                            </h1>
                        </div>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
                            Premium luxury vehicles and expert customization services for the discerning driver.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Car Sales', 'Customization Studio', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center group">
                                <Phone className="w-5 h-5 text-red-600 mr-4 flex-shrink-0" />
                                <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">+91 8766476895</span>
                            </li>
                            <li className="flex items-center group">
                                <Mail className="w-5 h-5 text-red-600 mr-4 flex-shrink-0" />
                                <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">info@vyronexcustom.com</span>
                            </li>
                            <li className="flex items-center group">
                                <MapPin className="w-5 h-5 text-red-600 mr-4 flex-shrink-0" />
                                <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">Pune, Maharashtra</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Legal */}
                <div className="pt-8 border-t border-white/10 flex flex-col items-center text-[10px] md:text-xs text-gray-500 tracking-widest font-medium">
                    <p className="mb-4 text-center">
                        &copy; 2025 VYRONEXCUSTOM. ALL RIGHTS RESERVED. CRAFTED FOR LUXURY.
                    </p>
                    <div className="flex items-center space-x-2 text-gray-400">
                        <span>MADE WITH</span>
                        <motion.span
                            animate={{
                                scale: [1, 1.25, 1, 1.25, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 1]
                            }}
                            className="inline-block"
                        >
                            ❤️
                        </motion.span>
                        <span>BY CHINMAY CHAUDHARI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
