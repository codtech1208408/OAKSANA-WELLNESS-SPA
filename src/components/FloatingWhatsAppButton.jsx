import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralBookingWhatsAppLink } from '../data/spaData';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center group">
      
      {/* Tooltip bubble on desktop */}
      <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 bg-spa-card/95 border border-spa-gold/40 text-spa-cream rounded-full text-xs font-medium shadow-luxury tracking-wide backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Book on WhatsApp</span>
      </div>

      {/* Main Floating Button */}
      <a
        href={getGeneralBookingWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat and book with Oaksana Wellness Spa on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-black/40 hover:ring-spa-gold/40 animate-pulse-glow"
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.39 1.3-1.92 1.36-.51.06-1.15.08-3.72-.98-3.28-1.36-5.38-4.7-5.54-4.92-.16-.22-1.33-1.78-1.33-3.4 0-1.62.85-2.42 1.15-2.75.31-.33.67-.41.9-.41.22 0 .45 0 .65.01.21.01.49-.08.76.58.28.68.96 2.34 1.04 2.51.08.17.14.37.03.59-.11.22-.17.36-.33.56-.16.2-.34.45-.49.6-.16.16-.33.34-.14.66.19.33.84 1.38 1.8 2.24 1.24 1.11 2.28 1.45 2.61 1.61.33.16.52.14.71-.08.2-.22.84-.98 1.07-1.32.22-.33.45-.28.76-.16.31.11 1.98.93 2.32 1.1.34.17.57.25.65.39.09.15.09.84-.15 1.52z"/>
        </svg>

        {/* Golden badge ping */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spa-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-spa-gold border-2 border-spa-dark"></span>
        </span>
      </a>
    </div>
  );
}
