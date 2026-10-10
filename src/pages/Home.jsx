import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  Award,
  ShieldCheck,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Flower2,
  Heart,
  Gem
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceGrid from '../components/ServiceGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import GalleryGrid from '../components/GalleryGrid';
import FAQAccordion from '../components/FAQAccordion';
import BookingCTA from '../components/BookingCTA';
import {
  BUSINESS_INFO,
  SERVICES,
  getGeneralBookingWhatsAppLink,
  getServiceBookingWhatsAppLink
} from '../data/spaData';

const HERO_BANNERS = [
  {
    id: 1,
    image: "/images/banners/aroma-massage.png",
    eyebrow: "SIGNATURE • AROMA MASSAGE",
    titleLine1: "Aroma",
    titleLine2: "Massage",
    subtitle: "Gentle flowing sensory relaxation with pure botanical oils to release stress and restore balance."
  },
  {
    id: 2,
    image: "/images/banners/deep-tissue-massage.png",
    eyebrow: "THERAPEUTIC • DEEP TISSUE",
    titleLine1: "Deep Tissue",
    titleLine2: "Massage",
    subtitle: "Targeted therapy reaching deep muscle layers and stubborn knots for profound physical renewal."
  },
  {
    id: 3,
    image: "/images/banners/swedish-massage.png",
    eyebrow: "CLASSIC • SWEDISH MASSAGE",
    titleLine1: "Swedish",
    titleLine2: "Massage",
    subtitle: "Full-body circulation boosting strokes crafted for pure holistic calmness, vitality, and comfort."
  },
  {
    id: 4,
    image: "/images/banners/thai-massage.png",
    eyebrow: "ANCIENT HEALING • THAI MASSAGE",
    titleLine1: "Thai",
    titleLine2: "Massage",
    subtitle: "Ancient rhythmic energy alignment and assisted stretching to improve flexibility and vitality."
  }
];

// Signature Cards
const CURATED_SPA_TREATMENTS = [
  {
    id: 'signature-massage',
    title: 'Signature Massage',
    subtitle: 'Release tension and restore balance.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    link: '/services'
  },
  {
    id: 'aromatherapy',
    title: 'Aromatherapy',
    subtitle: 'Heal your senses with pure essential oils.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
    link: '/services'
  },
  {
    id: 'body-scrubs',
    title: 'Body Scrubs & Rituals',
    subtitle: 'Exfoliate, detoxify, feel renewed.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    link: '/services'
  }
];

const MOBILE_TESTIMONIALS = [
  {
    id: 1,
    quote: "Oaksana Wellness Spa is a true gem! The atmosphere, therapists, and treatments are simply outstanding. I left feeling rejuvenated and refreshed.",
    author: "Sarah L.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    quote: "The deep tissue session was extraordinary. The therapists are remarkably polite and skilled. Cleanest spa rooms in Miyapur.",
    author: "Vikram R.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    quote: "Aromatherapy massage here is pure bliss. Golden ambiance, soothing essential oils, and booking on WhatsApp was super easy.",
    author: "Ananya P.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  }
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-switch banner every 1 second (1000ms) as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeBanner = HERO_BANNERS[currentBanner];
  const activeTestimonial = MOBILE_TESTIMONIALS[testimonialIndex];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % MOBILE_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + MOBILE_TESTIMONIALS.length) % MOBILE_TESTIMONIALS.length);
  };

  return (
    <div className="flex flex-col">
      
      {/* =========================================================================
          HERO SECTION (MATCHING REFERENCE IMAGE - COMPACT MOBILE BANNER)
          ========================================================================= */}
      <section className="relative min-h-[440px] sm:min-h-[500px] md:min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-spa-dark">
        {/* Background Images with smooth 1-second crossfade */}
        {HERO_BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.titleLine1}
              className="w-full h-full object-cover object-center scale-105 transform"
            />
            {/* Elegant luxury overlay for crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          </div>
        ))}

        {/* Content Container (Left-aligned on mobile, compact height) */}
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 pt-24 pb-8 sm:pt-28 sm:pb-14 md:pt-36 md:pb-24 relative z-10 w-full">
          <div className="max-w-xl text-left">
            
            {/* Eyebrow */}
            <div className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-spa-gold mb-1.5 sm:mb-3 [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]">
              {activeBanner.eyebrow}
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-wide leading-[1.1] mb-2.5 sm:mb-4 min-h-[70px] sm:min-h-[120px] flex flex-col justify-center [text-shadow:_0_2px_15px_rgba(0,0,0,0.95),_0_5px_30px_rgba(0,0,0,0.9)]">
              <span>{activeBanner.titleLine1}</span>
              <span className="text-white italic font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                {activeBanner.titleLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-white/95 text-xs sm:text-base md:text-lg font-light leading-relaxed mb-5 sm:mb-8 max-w-sm sm:max-w-md min-h-[36px] sm:min-h-[48px] [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
              {activeBanner.subtitle}
            </p>

            {/* CTA Button: Gold Pill with Calendar Icon */}
            <div className="flex items-center gap-4">
              <a
                href={getGeneralBookingWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-gold-bright text-spa-dark font-bold text-xs sm:text-sm tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-spa-dark" />
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Centered Slider Dots below button */}
            <div className="mt-5 sm:mt-8 flex items-center gap-2">
              {HERO_BANNERS.map((banner, idx) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => setCurrentBanner(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentBanner
                      ? 'w-6 h-1.5 sm:h-2 bg-spa-gold shadow-gold-glow'
                      : 'w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          4 CIRCULAR FEATURE BADGES (HIDDEN ON MOBILE, VISIBLE ON DESKTOP)
          ========================================================================= */}
      <section className="hidden md:block bg-[#0A0A0A] py-8 sm:py-10 border-b border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-4 gap-2 sm:gap-6 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-spa-gold/80 flex items-center justify-center text-spa-gold mb-2.5 shadow-gold-glow bg-black/40 group-hover:bg-spa-gold group-hover:text-spa-dark transition-all duration-300">
                <Leaf className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs text-spa-cream-soft font-medium leading-snug">
                Natural & Organic Products
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-spa-gold/80 flex items-center justify-center text-spa-gold mb-2.5 shadow-gold-glow bg-black/40 group-hover:bg-spa-gold group-hover:text-spa-dark transition-all duration-300">
                <Flower2 className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs text-spa-cream-soft font-medium leading-snug">
                Expert Therapists
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-spa-gold/80 flex items-center justify-center text-spa-gold mb-2.5 shadow-gold-glow bg-black/40 group-hover:bg-spa-gold group-hover:text-spa-dark transition-all duration-300">
                <Heart className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs text-spa-cream-soft font-medium leading-snug">
                Personalized Wellness Plans
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-spa-gold/80 flex items-center justify-center text-spa-gold mb-2.5 shadow-gold-glow bg-black/40 group-hover:bg-spa-gold group-hover:text-spa-dark transition-all duration-300">
                <Gem className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs text-spa-cream-soft font-medium leading-snug">
                Premium Luxury Experience
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          "OUR SERVICES" (CREAM LIGHT SECTION WITH 2-COLUMN CARDS)
          ========================================================================= */}
      <section className="bg-[#FFF8ED] text-stone-900 py-14 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-spa-gold-dark mb-2">
              <span className="w-8 h-[1px] bg-spa-gold" />
              <span>OUR SERVICES</span>
              <span className="w-8 h-[1px] bg-spa-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal">
              Luxury Spa Treatments
            </h2>
            <p className="mt-3 text-stone-700 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
              Discover a world of relaxation with our curated wellness therapies designed to restore your mind, body and soul.
            </p>
          </div>

          {/* Responsive Grid for Curated Spa Treatments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {CURATED_SPA_TREATMENTS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/60 flex flex-col justify-between p-2.5 sm:p-4 group"
              >
                <div>
                  {/* Card Image */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 mb-3 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-base sm:text-lg text-stone-900 font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-600 font-light mt-1 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="mt-3.5 pt-2 border-t border-stone-100">
                  <a
                    href={getServiceBookingWhatsAppLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 py-1.5 px-3 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark font-semibold text-[11px] sm:text-xs shadow-sm hover:brightness-105 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Services Link */}
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-spa-gold-dark hover:underline"
            >
              <span>Explore All 7 Spa Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          "STEP INTO SERENITY" (SANCTUARY OF PEACE SECTION)
          ========================================================================= */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 border-t border-spa-gold/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="space-y-4 text-left">
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold text-spa-gold">
                A SANCTUARY OF PEACE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Step Into Serenity
              </h2>
              <p className="text-spa-cream-soft/80 text-xs sm:text-sm font-light leading-relaxed">
                From the moment you arrive, feel the stress melt away. Our serene environment, soothing aromas and luxurious treatments will transport you to a place of pure bliss.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>About Our Spa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-spa-gold/50 text-spa-cream hover:text-spa-gold hover:border-spa-gold font-medium text-xs uppercase tracking-wider transition-all"
                >
                  <span>Explore Gallery</span>
                </Link>
              </div>
            </div>

            {/* Right Image (Candlelit Luxury Therapy Room) */}
            <div className="rounded-2xl overflow-hidden border border-spa-gold/30 shadow-luxury aspect-[16/10] sm:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Oaksana Sanctuary of Peace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          "REAL PEOPLE. REAL RELAXATION." TESTIMONIAL SLIDER
          ========================================================================= */}
      <section className="bg-black py-14 sm:py-16 relative border-t border-white/10 overflow-hidden">
        {/* Subtle warm bokeh ambient background */}
        <div className="absolute inset-0 bg-radial-at-c from-spa-gold/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-8 tracking-wide">
            “Real People. Real Relaxation.”
          </h2>

          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-spa-gold/60 flex items-center justify-center text-spa-gold hover:bg-spa-gold hover:text-spa-dark transition-all shrink-0"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div className="flex flex-col items-center px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-spa-gold overflow-hidden mb-3 shadow-gold-glow shrink-0">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-spa-cream-soft/90 italic font-light leading-relaxed max-w-md">
                “{activeTestimonial.quote}”
              </p>

              <span className="block text-xs font-semibold text-spa-gold mt-3 tracking-wider">
                — {activeTestimonial.author}
              </span>
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-spa-gold/60 flex items-center justify-center text-spa-gold hover:bg-spa-gold hover:text-spa-dark transition-all shrink-0"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Slider Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {MOBILE_TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTestimonialIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === testimonialIndex
                    ? 'w-6 h-1.5 bg-spa-gold shadow-gold-glow'
                    : 'w-1.5 h-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          FAQ ACCORDION & BOOKING CTA
          ========================================================================= */}
      <FAQAccordion />
      <BookingCTA />

    </div>
  );
}
