import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Sparkles, Calendar, Image as ImageIcon, Phone, MessageSquare } from 'lucide-react';
import { getGeneralBookingWhatsAppLink } from '../data/spaData';

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Sparkles },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-spa-gold/30 px-3 py-2 shadow-2xl safe-area-bottom"
      aria-label="Mobile Navigation Bar"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 transition-colors ${
              isActive ? 'text-spa-gold' : 'text-spa-cream-soft/70 hover:text-spa-gold'
            }`
          }
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Home</span>
        </NavLink>

        {/* Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 transition-colors ${
              isActive ? 'text-spa-gold' : 'text-spa-cream-soft/70 hover:text-spa-gold'
            }`
          }
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Services</span>
        </NavLink>

        {/* Center Prominent Book Now Button */}
        <a
          href={getGeneralBookingWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-gold-bright text-spa-dark font-bold text-xs tracking-wider uppercase shadow-gold-glow hover:brightness-110 active:scale-95 transition-all -translate-y-1"
          aria-label="Book appointment via WhatsApp"
        >
          <Calendar className="w-3.5 h-3.5 fill-spa-dark" />
          <span>Book Now</span>
        </a>

        {/* Gallery */}
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 transition-colors ${
              isActive ? 'text-spa-gold' : 'text-spa-cream-soft/70 hover:text-spa-gold'
            }`
          }
        >
          <ImageIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Gallery</span>
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 transition-colors ${
              isActive ? 'text-spa-gold' : 'text-spa-cream-soft/70 hover:text-spa-gold'
            }`
          }
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Contact</span>
        </NavLink>

      </div>
    </nav>
  );
}
