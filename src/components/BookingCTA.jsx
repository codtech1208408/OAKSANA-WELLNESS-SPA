import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { getGeneralBookingWhatsAppLink, BUSINESS_INFO } from '../data/spaData';

export default function BookingCTA({
  title = "Your Moment of Relaxation Starts Here",
  subtitle = "Step into a world of restorative peace. Connect directly with our front desk on WhatsApp to reserve your preferred massage therapy slot today.",
  bgImage = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80"
}) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-spa-dark border-t border-spa-gold/20">
      {/* Background Image with luxury dark gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Luxury spa background"
          className="w-full h-full object-cover object-center filter brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark via-black/80 to-spa-dark/90" />
        <div className="absolute inset-0 bg-hero-radial opacity-70 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-spa-gold/15 border border-spa-gold/30 text-spa-gold text-xs tracking-[0.25em] font-semibold uppercase"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>RESERVE YOUR THERAPY</span>
        </div>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-spa-cream font-normal tracking-wide max-w-3xl mx-auto leading-tight"
        >
          {title}
        </h2>

        {/* Gold Ornament Divider */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex items-center justify-center gap-3 my-5">
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-spa-gold" />
          <div className="w-2.5 h-2.5 rotate-45 border border-spa-gold bg-spa-gold/50" />
          <div className="w-14 h-[1px] bg-gradient-to-l from-transparent to-spa-gold" />
        </div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-spa-cream-soft/85 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={getGeneralBookingWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-gold-bright text-spa-dark font-semibold text-sm tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-spa-dark" />
            <span>Book via WhatsApp</span>
          </a>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-spa-card/80 hover:bg-spa-gold/15 border border-spa-gold/30 hover:border-spa-gold text-spa-cream text-sm tracking-wider uppercase font-medium transition-all duration-300"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-spa-gold" />
          </Link>
        </div>

        {/* Assurance badges */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-spa-cream-soft/70"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-spa-gold" />
            <span>100% Private Suites</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-spa-gold" />
            <span>{BUSINESS_INFO.experience}</span>
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-spa-gold" />
            <span>Open 7 Days a Week</span>
          </span>
        </div>

      </div>
    </section>
  );
}
