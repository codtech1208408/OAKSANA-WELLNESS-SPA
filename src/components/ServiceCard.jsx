import React from 'react';
import { MessageSquare, Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { getServiceBookingWhatsAppLink } from '../data/spaData';

export default function ServiceCard({ service, index = 0 }) {
  const whatsappUrl = getServiceBookingWhatsAppLink(service.name);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 100}
      className="group relative flex flex-col h-full bg-spa-card/90 rounded-2xl overflow-hidden border border-spa-gold/20 hover:border-spa-gold/60 transition-all duration-300 hover:shadow-gold-glow flex-1"
    >
      {/* Service Image with Zoom & Dark Gradient */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-card via-black/30 to-transparent" />

        {/* Duration badge */}
        {service.duration && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-spa-gold/40 text-[11px] text-spa-gold font-medium tracking-wide">
            <Clock className="w-3 h-3 text-spa-gold" />
            <span>{service.duration}</span>
          </div>
        )}

        {/* Featured Tag if applicable */}
        {service.isFeatured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-spa-gold text-spa-dark text-[10px] font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-2.5 h-2.5 fill-spa-dark" />
            <span>Signature</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Service Title */}
          <h3 className="font-serif text-2xl text-spa-cream group-hover:text-spa-gold transition-colors duration-200">
            {service.name}
          </h3>

          {/* Tagline */}
          {service.tagline && (
            <p className="text-xs text-spa-gold/80 tracking-wide uppercase mt-1 font-medium">
              {service.tagline}
            </p>
          )}

          {/* Short Description */}
          <p className="mt-3 text-spa-cream-soft/75 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Key Benefits (if present) */}
          {service.benefits && service.benefits.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
              {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-xs text-spa-cream-soft/70">
                  <Check className="w-3.5 h-3.5 text-spa-gold shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom Area: Price + Actions */}
        <div className="mt-6 pt-4 border-t border-spa-gold/15">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-spa-cream-soft/50">
                Tariff
              </span>
              <span className="font-serif text-lg text-spa-gold font-medium">
                {service.price || "Coming Soon"}
              </span>
            </div>
            <span className="text-[11px] text-spa-cream-soft/60 italic">
              WhatsApp for Slots
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Primary Action: Book Now (WhatsApp booking) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:brightness-110 active:scale-98 transition-all"
              aria-label={`Book ${service.name} via WhatsApp`}
            >
              <MessageSquare className="w-3.5 h-3.5 fill-spa-dark shrink-0" />
              <span>Book Now</span>
            </a>

            {/* Secondary Action: WhatsApp Inquiry */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-spa-surface hover:bg-spa-gold/10 border border-spa-gold/30 hover:border-spa-gold text-spa-gold text-xs font-medium tracking-wider uppercase transition-all"
              aria-label={`Enquire about ${service.name} via WhatsApp`}
            >
              <span>Enquire</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
