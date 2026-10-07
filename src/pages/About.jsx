import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import BookingCTA from '../components/BookingCTA';
import { BUSINESS_INFO } from '../data/spaData';
import { Sparkles, Award, Heart, Shield, MapPin, Feather, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: "Pure Relaxation",
      desc: "Creating an environment free from noise, haste, and pressure, allowing body and mind to gently recharge.",
      icon: Feather
    },
    {
      title: "Attentive Comfort",
      desc: "Every guest is received with polite attention, customizable pressure preferences, and clean treatment rooms.",
      icon: Heart
    },
    {
      title: "Uncompromising Privacy",
      desc: "Private therapy rooms designed to guarantee absolute discretion, peace, and individual tranquility.",
      icon: Shield
    },
    {
      title: "Holistic Wellness",
      desc: "Utilizing time-tested massage methodologies that alleviate muscular tightness and enhance physical vitality.",
      icon: Sparkles
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <PageHero
        title="About Oaksana Wellness Spa"
        subtitle="A place to slow down, relax and reconnect with your wellbeing in the heart of Miyapur, Hyderabad."
        eyebrow="OUR HERITAGE & CARE"
        backgroundImage="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: 'About Us', path: '/about' }]}
      />

      {/* Section 1: Our Story & 2 Years Experience */}
      <section className="py-20 lg:py-28 bg-spa-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1" data-aos="fade-right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-spa-gold/30 shadow-luxury aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
                    alt="Oaksana Wellness Spa entrance and ambiance"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Experience Badge Card */}
                <div className="absolute -bottom-6 -right-6 bg-spa-card/95 backdrop-blur-md p-6 rounded-2xl border border-spa-gold shadow-gold-glow max-w-xs text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-spa-gold" />
                    <span className="font-serif text-2xl font-bold text-spa-gold">2 Years</span>
                  </div>
                  <p className="text-xs text-spa-cream font-medium">Of Dedicated Spa Care</p>
                  <p className="text-[11px] text-spa-cream-soft/70 mt-0.5">Serving clients in Miyapur, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Story Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center drop-shadow-[0_0_15px_rgba(212,175,55,0.45)] shrink-0">
                  <img
                    src="/logo.png"
                    alt="Oaksana Wellness Spa Logo"
                    className="w-full h-full object-contain filter contrast-105 brightness-105"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spa-gold/10 border border-spa-gold/25 text-spa-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-spa-gold animate-pulse" />
                  <span>OUR STORY</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-spa-cream font-normal leading-tight">
                Crafting a Haven of Calm in Miyapur
              </h2>

              <p className="text-spa-cream-soft/85 text-base sm:text-lg font-light leading-relaxed">
                Founded with a vision to make authentic, high-quality wellness accessible without pretension, <strong className="text-spa-cream font-medium">Oaksana Wellness Spa</strong> has spent the last <strong className="text-spa-gold font-medium">2 years</strong> cultivating a reputation for calm, restorative massage therapies.
              </p>

              <p className="text-spa-cream-soft/75 text-sm sm:text-base font-light leading-relaxed">
                Located at Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad, our spa was conceived as a respite from the rush of urban life. We recognize that daily stress, long desk hours, and physical fatigue take a toll on personal vitality. Our response is a serene setting where guests can completely disconnect and unwind.
              </p>

              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-spa-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-spa-cream-soft/80">
                    <strong>Address:</strong> Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-spa-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-spa-cream-soft/80">
                    <strong>Experience:</strong> 2 continuous years of dedicated client care and relaxation service
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Our Wellness Philosophy */}
      <section className="py-20 lg:py-28 bg-spa-charcoal relative border-y border-spa-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title="The Oaksana Principles of Wellbeing"
            subtitle="Our four pillars of care are thoughtfully infused into every massage session and guest interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-8 rounded-2xl bg-spa-card/70 border border-spa-gold/20 hover:border-spa-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-spa-gold/15 border border-spa-gold/30 flex items-center justify-center text-spa-gold mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl text-spa-cream mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-spa-cream-soft/75 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-spa-gold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Experience Highlight & Transparency */}
      <section className="py-20 bg-spa-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-spa-card via-black/90 to-spa-card border border-spa-gold/30 shadow-luxury">
            <span className="text-xs uppercase tracking-[0.25em] text-spa-gold font-bold">
              CONCIERGE TOUCH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-spa-cream mt-2 mb-4 font-normal">
              A Direct, Personal Booking Experience
            </h2>
            <p className="text-base text-spa-cream-soft/80 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              We value your convenience. Instead of navigating confusing automated portals, every guest can communicate directly with our team on WhatsApp for scheduling, personalized therapist preferences, and instant timing confirmations.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-spa-gold/15 border border-spa-gold/30 text-xs sm:text-sm text-spa-cream font-medium">
              <Sparkles className="w-4 h-4 text-spa-gold" />
              <span>Direct WhatsApp Line: +91 {BUSINESS_INFO.whatsappNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title="Begin Your Wellness Journey"
        subtitle="Book a session at Oaksana Wellness Spa and give yourself the restorative break you deserve."
      />
    </div>
  );
}
