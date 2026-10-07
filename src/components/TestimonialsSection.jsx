import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../data/spaData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-spa-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-spa-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CLIENT VOICES"
          title="What Our Guests Say"
          subtitle="Discover impressions of calm, restorative massages and discreet hospitality experienced at Oaksana Wellness Spa."
        />

        {/* Disclaimer / Note as strictly requested */}
        <div
          data-aos="fade-up"
          className="max-w-xl mx-auto mb-10 text-center px-4 py-2 rounded-full bg-spa-card/60 border border-spa-gold/20 text-[11px] text-spa-cream-soft/70"
        >
          <span className="text-spa-gold mr-1.5">✦</span>
          <span>Sample Guest Feedback & Experience Preview (Verified review collection in progress)</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group p-6 rounded-2xl bg-spa-card/80 border border-spa-gold/20 hover:border-spa-gold/50 transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-spa-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-spa-gold" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-spa-gold/40 group-hover:text-spa-gold transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-spa-cream-soft/85 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Author & Service */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-spa-cream font-medium">
                    {testimonial.name}
                  </h4>
                  <span className="block text-[11px] text-spa-cream-soft/50">
                    {testimonial.location}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-spa-gold bg-spa-gold/10 px-2 py-0.5 rounded-full border border-spa-gold/20">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
