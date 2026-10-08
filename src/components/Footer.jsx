import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageSquare, Sparkles, ChevronRight, Search } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getGeneralBookingWhatsAppLink, getServiceBookingWhatsAppLink } from '../data/spaData';
import SEOConsoleModal from './SEOConsoleModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);

  return (
    <footer className="bg-spa-dark border-t border-spa-gold/20 text-spa-cream-soft relative overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-spa-gold/5 blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0 drop-shadow-[0_0_12px_rgba(212,175,55,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.65)] transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="Oaksana Wellness Spa Logo"
                  className="w-full h-full object-contain filter contrast-105 brightness-105 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl tracking-widest font-semibold text-spa-cream uppercase group-hover:text-spa-gold transition-colors leading-none">
                  Oaksana
                </span>
                <span className="block text-[11px] sm:text-xs tracking-[0.25em] text-spa-gold uppercase font-medium mt-1">
                  Wellness Spa
                </span>
              </div>
            </Link>

            <p className="text-spa-cream-soft/75 text-sm leading-relaxed max-w-sm">
              A luxury sanctuary in Hyderabad dedicated to relaxation, revitalization, and physical wellness.
              Experience curated massage therapies crafted with care, privacy, and calm.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-spa-gold/10 border border-spa-gold/30 text-xs text-spa-gold font-medium">
              <Sparkles className="w-3.5 h-3.5 text-spa-gold" />
              <span>{BUSINESS_INFO.experience} in Miyapur, Hyderabad</span>
            </div>

            <div className="pt-2">
              <a
                href={getGeneralBookingWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark text-xs font-semibold tracking-wider uppercase shadow-gold-glow hover:brightness-110 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-spa-dark" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-spa-cream uppercase border-b border-spa-gold/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-spa-cream-soft/80">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 hover:text-spa-gold transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-spa-gold/70" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-spa-cream uppercase border-b border-spa-gold/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-spa-cream-soft/80">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={getServiceBookingWhatsAppLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group hover:text-spa-gold transition-colors duration-200"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {service.name}
                    </span>
                    <span className="text-[10px] text-spa-gold/60 uppercase tracking-wider group-hover:text-spa-gold">
                      Book
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-spa-cream uppercase border-b border-spa-gold/20 pb-2">
              Contact & Visit
            </h3>
            <div className="space-y-3 text-sm text-spa-cream-soft/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-spa-gold shrink-0 mt-1" />
                <span className="leading-snug">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-spa-gold shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-spa-gold transition-colors"
                >
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-spa-gold shrink-0" />
                <a
                  href={getGeneralBookingWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spa-gold hover:underline font-medium"
                >
                  WhatsApp: +91 {BUSINESS_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-spa-gold shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Golden Divider */}
        <div className="mt-12 pt-6 border-t border-spa-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-spa-cream-soft/60">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-spa-cream-soft/70">
            <span>Sri Mani Kalyan Arcade, Miyapur X Road</span>
            <span>•</span>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-spa-gold transition-colors underline decoration-spa-gold/30 underline-offset-2"
            >
              XML Sitemap
            </a>
            <span>•</span>
            <a 
              href="/robots.txt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-spa-gold transition-colors underline decoration-spa-gold/30 underline-offset-2"
            >
              Robots.txt
            </a>
            <span>•</span>
            <button
              onClick={() => setIsSeoModalOpen(true)}
              className="inline-flex items-center gap-1 text-spa-gold hover:text-spa-gold-light hover:underline font-medium"
            >
              <Search className="w-3 h-3" />
              <span>Google Console &amp; SEO</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive SEO & Google Search Console Verification Modal */}
      <SEOConsoleModal
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />
    </footer>
  );
}
