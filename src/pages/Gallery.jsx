import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import BookingCTA from '../components/BookingCTA';
import { Sparkles, Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <PageHero
        title="Our Gallery"
        subtitle="Step into a space designed for relaxation and rejuvenation. Explore the serene rooms, calming details, and warm ambiance awaiting your visit."
        eyebrow="VISUAL SANCTUARY"
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: 'Gallery', path: '/gallery' }]}
      />

      {/* Main Gallery Section */}
      <section className="py-20 lg:py-28 bg-spa-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PHOTO IMPRESSIONS"
            title="The Oaksana Experience"
            subtitle="Explore our tranquil treatment chambers, essential oils, and peaceful spa settings designed to quiet your senses."
          />

          {/* Full Gallery with Filter and Lightbox */}
          <GalleryGrid showFilter={true} />

          {/* Atmosphere Note */}
          <div
            data-aos="fade-up"
            className="mt-16 text-center max-w-xl mx-auto p-4 rounded-xl bg-spa-card/40 border border-spa-gold/20 text-xs text-spa-cream-soft/70"
          >
            <Camera className="w-4 h-4 text-spa-gold inline-block mr-2" />
            <span>All therapy spaces are maintained with utmost discretion and continuous hygienic standards.</span>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title="Experience the Ambiance in Person"
        subtitle="Reserve your private therapy suite today. Click below to check available timings via WhatsApp."
      />
    </div>
  );
}
