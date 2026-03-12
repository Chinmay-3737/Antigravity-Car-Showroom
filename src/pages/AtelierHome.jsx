import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AtelierHero from '../components/atelier/AtelierHero';
import StickyMarquee from '../components/atelier/StickyMarquee';
import AtelierServices from '../components/atelier/AtelierServices';
import StudioSelection from '../components/atelier/StudioSelection';

const AtelierHome = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <main>
                <AtelierHero />
                <StickyMarquee />
                <StudioSelection />
                <AtelierServices />
            </main>
            <Footer />
        </div>
    );
};

export default AtelierHome;
