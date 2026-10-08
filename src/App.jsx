import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import MobileBottomNav from './components/MobileBottomNav';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';

import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOHead />
      <div className="flex flex-col min-h-screen bg-spa-dark text-spa-cream-soft font-sans relative selection:bg-spa-gold selection:text-spa-dark pb-16 md:pb-0">
        {/* Sticky Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Floating WhatsApp Booking Button */}
        <FloatingWhatsAppButton />

        {/* Mobile Fixed Bottom Navigation Bar */}
        <MobileBottomNav />

        {/* Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
