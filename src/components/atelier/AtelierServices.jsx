import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Shield, Wrench, PaintBucket, PenTool, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import poloImg from '../../assets/Polo.png';
import bentleyImg from '../../assets/Bentley.png';
import gwagonImg from '../../assets/g wagon.png';
import lexusImg from '../../assets/lexus.png';
import rangeroverImg from '../../assets/rangerover.png';
import defenderImg from '../../assets/defender.png';

const services = [
    {
        id: "tuning",
        icon: Settings,
        title: "Performance Tuning",
        desc: "Engine remapping, exhaust upgrades, and track-ready calibration engineered to unleash maximum power output.",
        image: poloImg
    },
    {
        id: "aesthetics",
        icon: PenTool,
        title: "Bespoke Aesthetics",
        desc: "Tailor-made exterior modifications, carbon fiber aero kits, and one-of-a-kind visual transformations.",
        image: bentleyImg
    },
    {
        id: "armor",
        icon: Shield,
        title: "Armor & Security",
        desc: "Discreet ballistic protection and advanced security systems without compromising vehicle performance.",
        image: gwagonImg
    },
    {
        id: "interior",
        icon: Sparkles,
        title: "Interior Luxury",
        desc: "Hand-stitched premium leathers, exotic woods, starlight headliners, and completely personalized cabins.",
        image: rangeroverImg
    },
    {
        id: "paint",
        icon: PaintBucket,
        title: "Paint & Wraps",
        desc: "Multi-stage custom paintwork, premium vinyl wraps, and self-healing ceramic coating protection.",
        image: lexusImg
    },
    {
        id: "concierge",
        icon: Wrench,
        title: "Concierge Maintenance",
        desc: "White-glove service, secure transport, and meticulous hypercar maintenance by master technicians.",
        image: defenderImg
    }
];

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePos({ x: 0, y: 0 });
            }}
            className="group relative w-full cursor-pointer rounded-3xl flex flex-col overflow-visible border border-white/5 bg-[#0a0a0a] transition-all duration-700 hover:bg-[#0c0c0c] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            style={{ 
                minHeight: '540px',
                perspective: '1000px'
            }}
        >
            {/* 3D Tilt Container */}
            <motion.div 
                className="flex-1 flex flex-col h-full"
                animate={{ 
                    rotateX: mousePos.y * 10, 
                    rotateY: mousePos.x * 10,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl border-b border-white/5">
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${service.image})` }}
                        animate={{ scale: isHovered ? 1.15 : 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                    
                    {/* Light Sweep Effect */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%]"
                        animate={{ translateX: isHovered ? '200%' : '-200%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 pt-12 flex flex-col relative z-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-red-600 rounded-full" />
                        <h3 className="text-3xl font-serif text-white group-hover:text-red-500 transition-colors duration-500 tracking-tight font-medium">
                            {service.title}
                        </h3>
                    </div>

                    <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm md:text-[1rem] opacity-80 group-hover:opacity-100 transition-all duration-500">
                        {service.desc}
                    </p>

                    <Link 
                        to={`/service/${service.id}`}
                        className="mt-auto flex items-center gap-3 text-red-500 uppercase text-[0.75rem] tracking-[0.3em] font-black group/link"
                    >
                        <span className="relative overflow-hidden inline-block">
                            <span className="inline-block transition-transform duration-500 group-hover/link:-translate-y-full">Explore Details</span>
                            <span className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover/link:translate-y-0 text-white">Full Experience</span>
                        </span>
                        <ChevronRight className="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-2" />
                    </Link>
                </div>
            </motion.div>

            {/* Icon Overlay - Absolute Floating */}
            <div className="absolute top-[230px] left-8 w-16 h-16 bg-[#111] text-white flex items-center justify-center rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-40 group-hover:shadow-[0_15px_35px_rgba(220,38,38,0.3)] transition-all duration-700 border border-white/5 group-hover:border-red-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
                <Icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
            </div>

            {/* Premium Interactive Border */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl group-hover:border-red-600/30 transition-all duration-700 pointer-events-none" />
        </motion.div>
    );
};

const AtelierServices = () => {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-24 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-red-600 tracking-[0.4em] uppercase text-sm font-medium mb-4 block">
                            Our Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6">
                            Mastery In <span className="inline-block text-red-500 italic">Motion</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-red-600/50 mx-auto mt-8 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-white shadow-[0_0_10px_white]" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard key={service.id} service={service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AtelierServices;
