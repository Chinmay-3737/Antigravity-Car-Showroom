import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactCard = ({ icon: Icon, title, content, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl group hover:border-red-600/30 transition-all duration-500 relative overflow-hidden"
    >
        {/* Subtle background glow */}
        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-red-600/5 blur-3xl rounded-full group-hover:bg-red-600/10 transition-all duration-500" />
        
        <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
            <Icon size={24} className="text-red-600 group-hover:text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
        <div className="space-y-2">
            {content.map((item, i) => (
                <p key={i} className="text-gray-400 font-medium leading-relaxed uppercase tracking-wider text-sm">
                    {item}
                </p>
            ))}
        </div>
    </motion.div>
);

const Contact = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            content: ["+91 8766476895", "+91 8766476895"]
        },
        {
            icon: Mail,
            title: "Email",
            content: ["INFO@VYRONEXMOTORS.COM", "CHINMAYCHAUDHARI312@GMAIL.COM"]
        },
        {
            icon: MapPin,
            title: "Address",
            content: ["PUNE, MAHARASHTRA", "INDIA"]
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: ["MON - FRI: 10:00 AM - 9:00 PM", "SAT - SUN: 11:00 AM - 7:00 PM"]
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600/30">
            <Navbar />
            
            <main className="pt-32 pb-20">
                {/* Header Section */}
                <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic">
                            Get In <span className="text-red-600 non-italic">Touch</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Have questions about our premium vehicles or customization services? We're here to help.
                        </p>
                    </motion.div>
                </section>

                {/* Info Cards Grid */}
                <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <ContactCard key={index} {...info} index={index} />
                        ))}
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-0 relative h-[600px] w-full group overflow-hidden border-y border-white/5">
                    {/* Dark Overlay for Map */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                    
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471115609!2d73.78056541!3d18.52456485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100c34f391!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710243600000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vyronex Motors Location"
                        className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    />

                    {/* Custom Map UI element from screenshot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center space-x-3 shadow-2xl"
                        >
                            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                            <span className="uppercase tracking-[0.2em] text-xs font-bold text-white">Pune, Maharashtra, India</span>
                        </motion.div>
                    </div>
                </section>

                {/* Luxury CTA Section */}
                <section className="py-32 bg-black border-t border-white/5">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">
                                Ready to Experience <span className="text-red-600 non-italic">Luxury?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                                Visit our showroom to explore our exclusive collection of premium vehicles.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-red-600 text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm flex items-center group shadow-xl shadow-red-600/20"
                                >
                                    <Phone size={18} className="mr-3" />
                                    Call Us Now
                                </motion.button>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border border-white/20 hover:border-white text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm flex items-center transition-colors shadow-xl"
                                >
                                    <Mail size={18} className="mr-3" />
                                    Send Email
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export default Contact;
