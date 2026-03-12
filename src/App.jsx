import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BrandLoader from './components/BrandLoader';
import MotorsHome from './pages/MotorsHome';
import AtelierHome from './pages/AtelierHome';
import StudioDetail from './pages/StudioDetail';
import ServiceDetail from './pages/ServiceDetail';

const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500/30 font-sans antialiased overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <BrandLoader key="loader" onComplete={() => setShowSplash(false)} />
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MotorsHome />} />
            <Route path="/atelier" element={<AtelierHome />} />
            <Route path="/studio/:id" element={<StudioDetail />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
