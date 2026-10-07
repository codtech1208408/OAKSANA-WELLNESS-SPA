import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceGrid from '../components/ServiceGrid';
import BookingCTA from '../components/BookingCTA';
import { SERVICES, BUSINESS_INFO, getGeneralBookingWhatsAppLink } from '../data/spaData';
import { Sparkles, Shield, HeartHandshake, Clock, MessageSquare } from 'lucide-react';

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <PageHero
        title="Our Massage Services"
        subtitle="Relax, restore and rejuvenate with our carefully selected wellness experiences designed to release physical tension and quiet the mind."
        eyebrow="BESPOKE THERAPIES"
        backgroundImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
      />

      {/* Main Services Catalog Section */}
      <section className="py-20 lg:py-28 bg-spa-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TREATMENT MENU"
            title="Comprehensive Massage Collection"
            subtitle="Every session is delivered with attentive dedication, pure botanical oils, and customized pressure techniques in Hyderabad."
          />

          {/* All 7 Services Grid */}
          <ServiceGrid services={SERVICES} columns={3} />

          {/* Pricing Notice & Custom Consultation Card */}
          <div
            data-aos="fade-up"
            className="mt-16 p-8 rounded-2xl bg-spa-charcoal border border-spa-gold/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-spa-gold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Consultation & Timing</span>
              </div>
              <h3 className="font-serif text-2xl text-spa-cream">
                Looking for a personalized session or custom duration?
              </h3>
              <p className="text-sm text-spa-cream-soft/75 max-w-2xl">
                Whether you desire extended session timings, specific pressure focus on neck and shoulders, or combination aromatherapy, our front desk team is ready to assist on WhatsApp.
              </p>
            </div>

            <a
              href={getGeneralBookingWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-spa-dark" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Treatment Etiquette & Care Guarantees */}
      <section className="py-16 bg-spa-charcoal border-y border-spa-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-spa-card/60 border border-spa-gold/20 flex items-start gap-4" data-aos="fade-up">
              <div className="w-10 h-10 rounded-lg bg-spa-gold/15 border border-spa-gold/30 flex items-center justify-center text-spa-gold shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-spa-cream mb-1">Sanitized Private Suites</h4>
                <p className="text-xs text-spa-cream-soft/75 leading-relaxed">
                  Individual therapy rooms prepared with fresh linens, soothing aromatic diffusers, and thorough sanitation for complete peace of mind.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-spa-card/60 border border-spa-gold/20 flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-lg bg-spa-gold/15 border border-spa-gold/30 flex items-center justify-center text-spa-gold shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-spa-cream mb-1">Tailored Pressure</h4>
                <p className="text-xs text-spa-cream-soft/75 leading-relaxed">
                  From gentle relaxation to deep muscular tension release, your therapist will adjust pressure according to your personal comfort level.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-spa-card/60 border border-spa-gold/20 flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-lg bg-spa-gold/15 border border-spa-gold/30 flex items-center justify-center text-spa-gold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-spa-cream mb-1">Flexible Timings</h4>
                <p className="text-xs text-spa-cream-soft/75 leading-relaxed">
                  Open seven days a week from 10:00 AM to 9:30 PM. Instant slot confirmation via our quick WhatsApp coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title="Ready to Indulge Your Senses?"
        subtitle="Choose your massage therapy and book directly through WhatsApp for immediate slot availability and details."
      />
    </div>
  );
}
