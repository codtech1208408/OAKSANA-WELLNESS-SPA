import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/spaData';

export default function GalleryGrid({ limit = null, showFilter = true }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['All', 'Treatment Rooms', 'Therapies', 'Interiors', 'Ambiance'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % displayItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      {showFilter && (
        <div data-aos="fade-up" className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-spa-gold text-spa-dark font-semibold shadow-gold-glow scale-105'
                  : 'bg-spa-card/80 text-spa-cream-soft/75 hover:text-spa-gold hover:bg-spa-card border border-spa-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 80}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-spa-card border border-spa-gold/20 hover:border-spa-gold/60 transition-all duration-300 shadow-md hover:shadow-gold-glow"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Elegant luxury overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-widest text-spa-gold font-bold mb-1">
                {item.category}
              </span>
              <h4 className="font-serif text-lg text-spa-cream">
                {item.title}
              </h4>
              <p className="text-xs text-spa-cream-soft/80 line-clamp-2 mt-1">
                {item.description}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-spa-gold font-medium">
                <Eye className="w-3.5 h-3.5" />
                <span>Tap to view full</span>
              </div>
            </div>

            {/* Permanent subtle category pill on mobile */}
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-spa-gold/30 text-[10px] text-spa-cream-soft tracking-wider sm:hidden">
              {item.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-spa-card/80 border border-spa-gold/40 text-spa-gold hover:text-white transition-colors z-20"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-spa-card/80 border border-spa-gold/40 text-spa-gold hover:text-white transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-spa-card/80 border border-spa-gold/40 text-spa-gold hover:text-white transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-spa-gold/40 shadow-2xl max-h-[70vh]">
              <img
                src={displayItems[activeImageIndex].image}
                alt={displayItems[activeImageIndex].title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
            <div className="text-center mt-4 px-4">
              <span className="text-xs uppercase tracking-widest text-spa-gold font-semibold">
                {displayItems[activeImageIndex].category}
              </span>
              <h3 className="font-serif text-2xl text-spa-cream mt-1">
                {displayItems[activeImageIndex].title}
              </h3>
              <p className="text-sm text-spa-cream-soft/80 mt-1 max-w-lg">
                {displayItems[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
