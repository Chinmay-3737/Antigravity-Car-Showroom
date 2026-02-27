import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedCars from './components/FeaturedCars';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SplashPage from './components/SplashPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500/30 font-sans antialiased overflow-x-hidden">
      {showSplash ? (
        <SplashPage onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Categories />
            <FeaturedCars />
            <Services />
            <Gallery />
            <Testimonials />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
