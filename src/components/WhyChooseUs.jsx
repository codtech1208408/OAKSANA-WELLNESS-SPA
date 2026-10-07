import React from 'react';
import { Award, Sparkles, HeartHandshake, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/spaData';

const iconMap = {
  Award: Award,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  MapPin: MapPin,
  MessageCircle: MessageCircle,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-spa-charcoal relative overflow-hidden border-y border-spa-gold/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-spa-gold/5 blur-3xl rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spa-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="WHY OAKSANA"
          title="Why Choose Oaksana Wellness Spa"
          subtitle="Experience an authentic, peaceful sanctuary engineered around customer comfort, privacy, and rejuvenating bodywork."
        />

        {/* Highlight Banner: 2 Years Experience */}
        <div
          data-aos="zoom-in"
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-spa-card via-black/80 to-spa-card border border-spa-gold/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-spa-gold/15 border border-spa-gold flex items-center justify-center shrink-0 shadow-gold-glow">
              <Award className="w-8 h-8 text-spa-gold" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-spa-gold font-bold">
                Established Milestone
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-spa-cream font-medium">
                2 Years of Wellness & Relaxation in Miyapur
              </h3>
              <p className="text-sm text-spa-cream-soft/75 mt-1">
                Providing consistent, peaceful care and rejuvenating massage journeys in Hyderabad.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="block font-serif text-3xl font-bold text-spa-gold">2+</span>
              <span className="block text-[11px] uppercase tracking-wider text-spa-cream-soft/70">Years Experience</span>
            </div>
            <div className="h-10 w-[1px] bg-spa-gold/30" />
            <div className="text-left">
              <span className="block font-serif text-3xl font-bold text-spa-cream">100%</span>
              <span className="block text-[11px] uppercase tracking-wider text-spa-cream-soft/70">Guest Privacy</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group p-8 rounded-2xl bg-spa-card/70 border border-spa-gold/20 hover:border-spa-gold/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-spa-gold/10 border border-spa-gold/30 flex items-center justify-center text-spa-gold group-hover:bg-spa-gold group-hover:text-spa-dark transition-colors duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-spa-cream group-hover:text-spa-gold transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-spa-cream-soft/75 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-spa-gold/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-spa-gold" />
                  <span>{item.shortText}</span>
                </div>
              </div>
            );
          })}

          {/* Privacy & Hygiene Card */}
          <div
            data-aos="fade-up"
            data-aos-delay={500}
            className="group p-8 rounded-2xl bg-gradient-to-br from-spa-card to-black border border-spa-gold/20 hover:border-spa-gold/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-spa-gold/10 border border-spa-gold/30 flex items-center justify-center text-spa-gold group-hover:bg-spa-gold group-hover:text-spa-dark transition-colors duration-300 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-spa-cream group-hover:text-spa-gold transition-colors duration-200">
                Pristine Hygiene & Calm
              </h4>
              <p className="mt-3 text-spa-cream-soft/75 text-sm leading-relaxed">
                Fresh sanitized linens for each session, soothing acoustic ambiance, and dedicated private suites ensure peaceful unwinding.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-spa-gold/80">
              <span className="w-1.5 h-1.5 rounded-full bg-spa-gold" />
              <span>Certified Cleanliness</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
