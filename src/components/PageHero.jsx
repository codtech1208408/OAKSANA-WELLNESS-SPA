import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  title,
  subtitle,
  eyebrow = "OAKSANA WELLNESS SPA",
  backgroundImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
  breadcrumbs = []
}) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-spa-dark border-b border-spa-gold/20">
      {/* Background Image with dark luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.35] scale-105 transform animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark via-spa-dark/80 to-black/60" />
        <div className="absolute inset-0 bg-hero-radial opacity-60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-spa-cream-soft/60 mb-6 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-spa-gold transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-spa-gold" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-spa-gold transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-spa-gold font-medium">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div data-aos="fade-up" className="inline-block mb-3 px-4 py-1 rounded-full bg-spa-gold/10 border border-spa-gold/30 text-spa-gold text-xs tracking-[0.25em] font-medium uppercase">
            {eyebrow}
          </div>
        )}

        {/* Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-spa-cream font-normal tracking-wide max-w-4xl mx-auto leading-tight"
        >
          {title}
        </h1>

        {/* Gold Ornament Divider */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex items-center justify-center gap-3 my-5">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-spa-gold" />
          <div className="w-2.5 h-2.5 rotate-45 border border-spa-gold bg-spa-gold/40" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-spa-gold" />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-spa-cream-soft/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
