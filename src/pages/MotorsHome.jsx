import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BeyondOrdinary from '../components/atelier/BeyondOrdinary';
import MagicServices from '../components/atelier/MagicServices';
import VisionExpertise from '../components/atelier/VisionExpertise';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const MotorsHome = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <BeyondOrdinary />
                <MagicServices />
                <VisionExpertise />
                <Gallery />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default MotorsHome;
