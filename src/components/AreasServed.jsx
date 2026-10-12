import React from 'react';
import { MapPin, Navigation, Car, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, NEARBY_AREAS_SERVED, getGeneralBookingWhatsAppLink } from '../data/spaData';

export default function AreasServed() {
  return (
    <section 
      aria-label="Areas Near Miyapur We Serve"
      className="relative bg-gradient-to-b from-spa-dark via-spa-surface/90 to-spa-dark text-spa-cream-soft py-14 sm:py-16 border-t border-spa-gold/20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-48 bg-spa-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spa-gold/10 border border-spa-gold/30 text-spa-gold text-xs uppercase tracking-[0.22em] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5 text-spa-gold" />
            <span>Serving Miyapur &amp; Beyond</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-spa-cream tracking-wide font-semibold">
            Areas Near Miyapur We Serve
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-spa-cream-soft/80 leading-relaxed font-light">
            Guests regularly visit from these nearby localities:
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {NEARBY_AREAS_SERVED.map((area) => (
            <div
              key={area.name}
              className="group relative p-4 rounded-2xl bg-spa-card/70 hover:bg-spa-card border border-spa-gold/20 hover:border-spa-gold/60 shadow-lg hover:shadow-[0_8px_24px_rgba(201,162,39,0.18)] -translate-y-0 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-full bg-spa-gold/10 border border-spa-gold/25 flex items-center justify-center text-spa-gold mb-2.5 group-hover:scale-110 group-hover:bg-spa-gold group-hover:text-spa-dark transition-all duration-300">
                  <Navigation className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-medium text-sm sm:text-base text-spa-cream group-hover:text-spa-gold transition-colors leading-snug">
                  {area.name}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-spa-stone uppercase tracking-wider flex items-center gap-1">
                  <Car className="w-3 h-3 text-spa-stone group-hover:text-spa-gold/80 transition-colors" />
                  <span>Drive</span>
                </span>
                <span className="text-xs font-semibold text-spa-gold bg-spa-gold/10 px-2 py-0.5 rounded-full border border-spa-gold/25">
                  {area.distance}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sanctuary Location Strip */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-spa-card/40 border border-spa-gold/15 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-spa-gold/15 flex items-center justify-center text-spa-gold shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-spa-cream font-medium">
                Conveniently located at {BUSINESS_INFO.address}
              </p>
              <p className="text-[11px] sm:text-xs text-spa-cream-soft/70">
                Easy transit and hassle-free access across all western Hyderabad corridors
              </p>
            </div>
          </div>

          <a
            href={getGeneralBookingWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark text-xs font-semibold tracking-wider uppercase shadow-gold-glow hover:brightness-110 active:scale-95 transition-all shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-spa-dark" />
            <span>Book Appointment</span>
          </a>
        </div>

      </div>
    </section>
  );
}
