import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, Gauge, Zap, Shield, Sparkles, PaintBucket, Wrench } from 'lucide-react';

// Assets
import poloImg from '../assets/Polo.png';
import bentleyImg from '../assets/Bentley.png';
import gwagonImg from '../assets/g wagon.png';
import lexusImg from '../assets/lexus.png';
import rangeroverImg from '../assets/rangerover.png';
import defenderImg from '../assets/defender.png';
import poloback from '../assets/poloback.png';
import pololeft from '../assets/pololeft.png';
import polotop from '../assets/polotop.png';
import bentleyleft from '../assets/bentleyleft.png';
import bentleytop from '../assets/Bentleytop.png';
import bentleyright from '../assets/bentleyright.png';
import gwagontop from '../assets/g wagontop.png';
import gwagonright from '../assets/g wagaonright.jpg';
import gwagonback from '../assets/g wagonback.jpg';
import rangetop from '../assets/rangetop.png';
import rangeleft from '../assets/rangeleft.png';
import rangeright from '../assets/rangeright.jpg';

const serviceData = {
    "tuning": {
        title: "Performance Tuning",
        description: "Unlock the true potential of your engine with our state-of-the-art diagnostic and tuning services. From ECU remapping to exhaust system optimization, we engineer every detail for maximum power and efficiency.",
        mainImage: poloImg,
        icon: Gauge,
        gallery: [
            poloback,
            pololeft,
            polotop
        ],
        specs: [
            { label: "Precision", value: "0.01mm" },
            { label: "Engine Boost", value: "+25% HP" },
            { label: "Response", value: "Instant" }
        ]
    },
    "aesthetics": {
        title: "Bespoke Aesthetics",
        description: "Your vehicle is a canvas. Our artisans provide tailer-made exterior modifications, carbon fiber aero kits, and one-of-a-kind visual transformations that define your presence on the road.",
        mainImage: bentleyImg,
        icon: Zap,
        gallery: [
            bentleyleft,
            bentleytop,
            bentleyright
        ],
        specs: [
            { label: "Material", value: "Carbon Fiber" },
            { label: "Finish", value: "Hand-Polished" },
            { label: "Exclusivity", value: "1 of 1" }
        ]
    },
    "armor": {
        title: "Armor & Security",
        description: "Discreet ballistic protection and advanced security systems without compromising vehicle performance. We provide the ultimate shield for you and your vehicle, engineered to the highest international standards.",
        mainImage: gwagonImg,
        icon: Shield,
        gallery: [
            gwagontop,
            gwagonright,
            gwagonback
        ],
        specs: [
            { label: "Protection", value: "B6/B7 Level" },
            { label: "Weight", value: "Reinforced" },
            { label: "Tech", value: "Thermal Scan" }
        ]
    },
    "interior": {
        title: "Interior Luxury",
        description: "Hand-stitched premium leathers, exotic woods, starlight headliners, and completely personalized cabins. Experience unparalleled luxury that is meticulously crafted to fit your lifestyle.",
        mainImage: rangeroverImg,
        icon: Sparkles,
        gallery: [
            rangetop,
            rangeleft,
            rangeright
        ],
        specs: [
            { label: "Leather", value: "Full-Grain Nappa" },
            { label: "Detailing", value: "Hand-Stitched" },
            { label: "Lighting", value: "Ambient Fiber" }
        ]
    },
    "paint": {
        title: "Paint & Wraps",
        description: "Multi-stage custom paintwork, premium vinyl wraps, and self-healing ceramic coating protection. Our finishing department ensures your vehicle's appearance is as flawless as its performance.",
        mainImage: lexusImg,
        icon: PaintBucket,
        gallery: [
            "https://images.unsplash.com/photo-1611566176212-076166e5c942?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { label: "Layers", value: "7 Stage Paint" },
            { label: "Protection", value: "9H Ceramic" },
            { label: "Color", value: "Infinite Range" }
        ]
    },
    "concierge": {
        title: "Concierge Maintenance",
        description: "White-glove service, secure transport, and meticulous maintenance by master technicians. We handle every aspect of your vehicle's upkeep so you can focus on the drive.",
        mainImage: defenderImg,
        icon: Wrench,
        gallery: [
            "https://images.unsplash.com/photo-1530046339160-ce3e5b087ea2?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1487754180451-c456f719c141?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517524204709-440d4303b41d?auto=format&fit=crop&q=80&w=800"
        ],
        specs: [
            { label: "Service", value: "White-Glove" },
            { label: "Transport", value: "Enclosed" },
            { label: "Technicians", value: "Master Level" }
        ]
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (serviceData[id]) {
            setService(serviceData[id]);
            setActiveImage(serviceData[id].mainImage);
        } else {
            navigate('/atelier');
        }
        window.scrollTo(0, 0);
    }, [id, navigate]);

    if (!service) return null;

    const Icon = service.icon;

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
            {/* Background Texture/Grain */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0" />

            {/* Navigation Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center pointer-events-none"
            >
                <button 
                    onClick={() => navigate('/atelier')}
                    className="group pointer-events-auto flex items-center gap-3 text-white/50 hover:text-white transition-all duration-500 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 hover:border-red-500/50 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-500" />
                    <span className="text-[0.7rem] font-black uppercase tracking-[0.3em]">Atelier Selection</span>
                </button>

                <div className="bg-red-600/10 backdrop-blur-xl px-6 py-4 rounded-full border border-red-500/20 shadow-[0_10px_30px_rgba(220,38,38,0.1)]">
                    <span className="text-red-500 text-[0.65rem] font-bold uppercase tracking-[0.5em]">Heritage & Craft</span>
                </div>
            </motion.div>

            <motion.main 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 pt-40 pb-24 max-w-7xl relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    
                    {/* Visual Section */}
                    <motion.div variants={itemVariants} className="space-y-10">
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/5 group shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                            <motion.img 
                                key={activeImage}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src={activeImage} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            
                            {/* Icon Overlay - Luxury Style */}
                            <div className="absolute bottom-10 left-10 p-6 bg-red-600 rounded-[1.5rem] shadow-[0_15px_40px_rgba(220,38,38,0.5)] border border-white/20">
                                <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                            </div>

                            {/* Corner Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px] rounded-full" />
                        </div>

                        {/* Additional Images Grid (Sideways options) */}
                        <div className="grid grid-cols-4 gap-4 px-2">
                            <button 
                                onClick={() => setActiveImage(service.mainImage)}
                                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-700 ${activeImage === service.mainImage ? 'border-red-600 scale-105 shadow-[0_15px_30px_rgba(220,38,38,0.3)]' : 'border-white/5 opacity-40 hover:opacity-100 hover:scale-105'}`}
                            >
                                <img src={service.mainImage} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20" />
                            </button>
                            {service.gallery.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-700 ${activeImage === img ? 'border-red-600 scale-105 shadow-[0_15px_30px_rgba(220,38,38,0.3)]' : 'border-white/5 opacity-40 hover:opacity-100 hover:scale-105'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20" />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="space-y-16 lg:sticky lg:top-40">
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-red-600" />
                                <span className="text-red-500 text-[0.7rem] font-black uppercase tracking-[0.6em] block">Beyond Limits</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-10 font-medium">
                                {service.title}
                            </h1>
                            <p className="text-gray-400 text-xl leading-relaxed font-light max-w-xl opacity-80">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Specs Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.specs.map((spec, i) => (
                                <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:border-red-500/30 transition-colors duration-500 group/spec">
                                    <p className="text-gray-500 text-[0.65rem] uppercase tracking-[0.2em] mb-3 group-hover/spec:text-red-400 transition-colors">{spec.label}</p>
                                    <p className="text-white text-2xl font-serif font-medium">{spec.value}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div variants={itemVariants} className="pt-12 border-t border-white/5 space-y-8">
                            <div className="flex items-center gap-5 text-white/40">
                                <div className="p-3 bg-red-600/10 rounded-full">
                                    <Info className="w-5 h-5 text-red-500" />
                                </div>
                                <p className="text-sm font-light italic leading-relaxed">Each masterpiece is uniquely commissioned. Consult with our head artisans for a bespoke roadmap.</p>
                            </div>
                            <button className="relative w-full py-7 overflow-hidden group/btn rounded-[1.5rem] bg-red-600 shadow-[0_20px_50px_rgba(220,38,38,0.35)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(220,38,38,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_100%] transition-all duration-1000 group-hover/btn:bg-[position:100%_0]" />
                                <span className="relative z-10 text-white text-[0.8rem] font-black uppercase tracking-[0.4em]">Initialize Commission</span>
                                
                                {/* Button Shine */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-[1.2s] ease-in-out" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.main>
        </div>
    );
};

export default ServiceDetail;
