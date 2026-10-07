import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { FAQS, getGeneralBookingWhatsAppLink } from '../data/spaData';

export default function FAQAccordion() {
  // Only one question can be open at a time
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 lg:py-28 bg-spa-charcoal relative border-t border-spa-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services, booking process, and visiting our spa in Miyapur."
          animate={false}
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-spa-card/90 border-spa-gold/60 shadow-gold-glow'
                    : 'bg-spa-card/40 border-spa-gold/20 hover:border-spa-gold/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-spa-cream font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-spa-gold border-spa-gold rotate-180'
                        : 'bg-transparent border-spa-gold/40'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors duration-200 ${
                        isOpen ? 'text-spa-dark' : 'text-spa-gold'
                      }`}
                    />
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-sm text-spa-cream-soft/80 leading-relaxed border-t border-spa-gold/10">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick query helper */}
        <div
          className="mt-12 p-6 rounded-2xl bg-spa-card/50 border border-spa-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-spa-gold/15 border border-spa-gold flex items-center justify-center text-spa-gold shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-spa-cream">Have a different question?</h4>
              <p className="text-xs text-spa-cream-soft/70">
                Our front desk team is readily available on WhatsApp for immediate answers.
              </p>
            </div>
          </div>
          <a
            href={getGeneralBookingWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark text-xs font-semibold tracking-wider uppercase shrink-0 shadow-gold-glow hover:brightness-110 transition-all flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-spa-dark" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
