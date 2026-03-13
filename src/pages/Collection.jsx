import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TheCollection from '../components/atelier/TheCollection';

const Collection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <main className="pt-20">
                <TheCollection />
            </main>
            <Footer />
        </div>
    );
};

export default Collection;
