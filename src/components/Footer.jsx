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
                            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-[0.3em] text-white drop-shadow-md">
                                VYRONEX
                            </h1>
                            <p className="text-[0.65rem] text-gray-300 tracking-[0.4em] uppercase mt-1 opacity-80">
                                Engineered for Dominance
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                            Redefining automotive luxury. We offer an exclusive selection of the world's most prestigious vehicles, paired with unparalleled bespoke customization services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-black hover:bg-white transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-black hover:bg-white transition-all duration-300">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-black hover:bg-white transition-all duration-300">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Collection</h4>
                        <ul className="space-y-4">
                            {['Hypercars', 'Luxury Sedans', 'Armored SUVs', 'Monster Trucks', 'Pre-Owned Excellence'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 h-px bg-white mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    100 Prestige Boulevard<br />
                                    Beverly Hills, CA 90210
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+1 (800) LUX-AUTO</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">concierge@vyronexmotors.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Exclusive Access</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                            Subscribe to receive private invitations to vehicle unveilings and elite events.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-black border-b border-white/20 px-0 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-gray-600 tracking-widest uppercase"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-2"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Legal */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-wider">
                    <p>&copy; {new Date().getFullYear()} VYRONEX MOTORS. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors uppercase">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors uppercase">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
