import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Sparkles, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, getGeneralBookingWhatsAppLink } from '../data/spaData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spa-dark/95 backdrop-blur-md border-b border-spa-gold/20 shadow-2xl py-3 sm:py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3.5 group text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] flex items-center justify-center shrink-0 drop-shadow-[0_0_12px_rgba(212,175,55,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.65)] transition-all duration-300">
              <img
                src="/logo.png"
                alt="Oaksana Wellness Spa Logo"
                className="w-full h-full object-contain filter contrast-105 brightness-105 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-2xl sm:text-3xl tracking-widest font-semibold text-spa-cream uppercase group-hover:text-spa-gold transition-colors leading-none">
                Oaksana
              </span>
              <span className="block text-[11px] sm:text-xs tracking-[0.25em] text-spa-gold uppercase font-medium mt-1">
                Wellness Spa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200 relative ${
                    isActive
                      ? 'text-spa-gold font-semibold'
                      : 'text-spa-cream-soft/80 hover:text-spa-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-spa-gold rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action: Book Now (WhatsApp) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getGeneralBookingWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
              aria-label="Book a massage on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-spa-dark" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-spa-gold hover:text-spa-cream hover:bg-spa-card/60 transition-colors focus:outline-none focus:ring-2 focus:ring-spa-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-spa-dark/98 backdrop-blur-xl border-b border-spa-gold/30 px-6 py-6 animate-fadeIn transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-spa-gold bg-spa-gold/10 font-medium border-l-2 border-spa-gold'
                      : 'text-spa-cream-soft/90 hover:text-spa-gold hover:bg-spa-surface'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={getGeneralBookingWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark font-semibold tracking-wider uppercase shadow-gold-glow text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-spa-dark" />
                <span>Book via WhatsApp</span>
              </a>

              <div className="mt-2 text-xs text-spa-stone space-y-1 text-center">
                <p className="flex items-center justify-center gap-1.5 text-spa-cream-soft/70">
                  <MapPin className="w-3.5 h-3.5 text-spa-gold" />
                  <span>Sri Mani Kalyan Arcade, Miyapur X Road</span>
                </p>
                <p className="flex items-center justify-center gap-1.5 text-spa-cream-soft/70">
                  <Phone className="w-3.5 h-3.5 text-spa-gold" />
                  <span>WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
