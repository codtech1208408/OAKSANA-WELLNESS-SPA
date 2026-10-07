import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
  animate = true,
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${isCentered ? 'text-center mx-auto' : 'text-left'} ${className}`}
      {...(animate ? { 'data-aos': 'fade-up' } : {})}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.2em] uppercase ${
            light
              ? 'bg-spa-gold/15 text-spa-gold border border-spa-gold/30'
              : 'bg-spa-gold/10 text-spa-gold border border-spa-gold/25'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-spa-gold animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide leading-tight ${
          light ? 'text-stone-900' : 'text-spa-cream'
        }`}
      >
        {title}
      </h2>

      {/* Luxury gold accent ornament */}
      <div className={`flex items-center gap-3 my-4 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-spa-gold" />
        <div className="w-2 h-2 rotate-45 border border-spa-gold bg-spa-gold/30" />
        <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-spa-gold" />
      </div>

      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl font-light leading-relaxed ${
            isCentered ? 'mx-auto' : ''
          } ${light ? 'text-stone-700' : 'text-spa-cream-soft/75'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
