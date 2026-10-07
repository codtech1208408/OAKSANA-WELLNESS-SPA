import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import {
  BUSINESS_INFO,
  SERVICES,
  getGeneralBookingWhatsAppLink,
  getWhatsAppLink
} from '../data/spaData';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Sparkles,
  ExternalLink,
  Send,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState(SERVICES[0].name);
  const [preferredDay, setPreferredDay] = useState('Today / Tomorrow');
  const [preferredTime, setPreferredTime] = useState('Evening (4 PM - 8 PM)');
  const [guestName, setGuestName] = useState('');

  const handleCustomWhatsAppBooking = (e) => {
    e.preventDefault();
    let message = `Hello Oaksana Wellness Spa, I would like to book an appointment.\n`;
    if (guestName.trim()) {
      message += `• Name: ${guestName.trim()}\n`;
    }
    message += `• Service: ${selectedService}\n`;
    message += `• Preferred Day: ${preferredDay}\n`;
    message += `• Preferred Time: ${preferredTime}\n`;
    message += `Please confirm slot availability and details.`;

    const url = getWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <PageHero
        title="Contact Oaksana Wellness Spa"
        subtitle="Ready to relax? Connect directly with our front desk team to book your preferred massage or enquire about therapies."
        eyebrow="REACH OUR RETREAT"
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />

      {/* Contact Cards & Information Section */}
      <section className="py-20 lg:py-28 bg-spa-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="We Welcome Your Inquiries"
            subtitle="Conveniently situated at Miyapur X Road in Hyderabad with immediate WhatsApp concierge assistance."
          />

          {/* Cards Grid: Location, WhatsApp, Opening Hours */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            
            {/* Card 1: Visit Us */}
            <div
              data-aos="fade-up"
              className="p-8 rounded-2xl bg-spa-card/80 border border-spa-gold/30 shadow-luxury hover:border-spa-gold/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-spa-gold/15 border border-spa-gold/30 flex items-center justify-center text-spa-gold mb-6 shadow-gold-glow">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-spa-cream mb-2">Visit Us</h3>
                <p className="text-sm text-spa-cream-soft/85 leading-relaxed font-light">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs text-spa-gold/90 mt-2 font-medium">
                  {BUSINESS_INFO.city}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-spa-gold font-semibold uppercase tracking-wider hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: WhatsApp & Direct Call */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-8 rounded-2xl bg-gradient-to-b from-spa-card to-black border border-spa-gold shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-spa-gold/20 border border-spa-gold flex items-center justify-center text-spa-gold mb-6 shadow-gold-glow">
                  <MessageSquare className="w-6 h-6 fill-spa-gold" />
                </div>
                <h3 className="font-serif text-2xl text-spa-cream mb-2">WhatsApp & Phone</h3>
                <p className="text-sm text-spa-cream-soft/85 leading-relaxed font-light">
                  Direct concierge messaging for immediate slot confirmation and enquiries.
                </p>
                <div className="mt-3 space-y-1">
                  <p className="font-serif text-xl text-spa-gold font-semibold">
                    +91 {BUSINESS_INFO.whatsappNumber}
                  </p>
                  <span className="inline-block text-[11px] text-emerald-400 font-medium">
                    ● Online for Bookings
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={getGeneralBookingWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:brightness-110 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-spa-dark" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 3: Opening Hours */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-8 rounded-2xl bg-spa-card/80 border border-spa-gold/30 shadow-luxury hover:border-spa-gold/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-spa-gold/15 border border-spa-gold/30 flex items-center justify-center text-spa-gold mb-6 shadow-gold-glow">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-spa-cream mb-2">Spa Hours</h3>
                <p className="text-sm text-spa-cream-soft/85 leading-relaxed font-light">
                  Open seven days a week to accommodate your working schedule and weekend unwinding.
                </p>
                <div className="mt-4 p-3 rounded-lg bg-black/40 border border-spa-gold/20">
                  <p className="text-xs text-spa-cream font-medium">Monday through Sunday</p>
                  <p className="font-serif text-base text-spa-gold mt-0.5">10:00 AM – 9:30 PM</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-spa-cream-soft/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-spa-gold shrink-0" />
                <span>Last appointment accepted by 8:30 PM</span>
              </div>
            </div>

          </div>

          {/* Interactive WhatsApp Booking Concierge Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form details & benefits (5 cols) */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spa-gold/10 border border-spa-gold/30 text-spa-gold text-xs font-semibold tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FAST APPOINTMENT SETUP</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-spa-cream font-normal leading-tight">
                Book Your Massage Experience
              </h2>

              <p className="text-spa-cream-soft/80 text-base font-light leading-relaxed">
                Select your preferred therapy and time slot below. Clicking <strong className="text-spa-gold">"Send Booking to WhatsApp"</strong> will generate a pre-formatted message directly to our official line, where our manager will instantly confirm availability.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-spa-cream-soft/80">
                  <div className="w-6 h-6 rounded-full bg-spa-gold/15 border border-spa-gold/40 flex items-center justify-center text-spa-gold text-xs font-bold">1</div>
                  <span>Choose treatment & preferred timing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-spa-cream-soft/80">
                  <div className="w-6 h-6 rounded-full bg-spa-gold/15 border border-spa-gold/40 flex items-center justify-center text-spa-gold text-xs font-bold">2</div>
                  <span>Click to open official WhatsApp chat</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-spa-cream-soft/80">
                  <div className="w-6 h-6 rounded-full bg-spa-gold/15 border border-spa-gold/40 flex items-center justify-center text-spa-gold text-xs font-bold">3</div>
                  <span>Receive quick confirmation from our desk</span>
                </div>
              </div>
            </div>

            {/* Interactive Form Card (7 cols) */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="p-8 sm:p-10 rounded-3xl bg-spa-card/90 border border-spa-gold/40 shadow-luxury">
                <form onSubmit={handleCustomWhatsAppBooking} className="space-y-5">
                  
                  {/* Guest Name (Optional) */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-spa-cream-soft/80 mb-2 font-medium">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh / Priya"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-spa-dark border border-spa-gold/30 text-spa-cream text-sm focus:outline-none focus:border-spa-gold focus:ring-1 focus:ring-spa-gold placeholder:text-stone-600 transition-all"
                    />
                  </div>

                  {/* Select Service */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-spa-cream-soft/80 mb-2 font-medium">
                      Select Massage Therapy *
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-spa-dark border border-spa-gold/30 text-spa-cream text-sm focus:outline-none focus:border-spa-gold focus:ring-1 focus:ring-spa-gold cursor-pointer transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name} className="bg-spa-dark text-spa-cream">
                          {s.name} ({s.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Two Columns: Preferred Day & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-spa-cream-soft/80 mb-2 font-medium">
                        Preferred Day
                      </label>
                      <select
                        value={preferredDay}
                        onChange={(e) => setPreferredDay(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-spa-dark border border-spa-gold/30 text-spa-cream text-sm focus:outline-none focus:border-spa-gold transition-all"
                      >
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This Weekend">This Weekend</option>
                        <option value="Flexible Weekday">Flexible Weekday</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-spa-cream-soft/80 mb-2 font-medium">
                        Preferred Time Slot
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-spa-dark border border-spa-gold/30 text-spa-cream text-sm focus:outline-none focus:border-spa-gold transition-all"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                        <option value="Late Evening (8 PM - 9:30 PM)">Late Evening (8 PM - 9:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit to WhatsApp Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-gold-bright text-spa-dark font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 active:scale-98 transition-all duration-200"
                    >
                      <MessageSquare className="w-4 h-4 fill-spa-dark" />
                      <span>Send Booking to WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-spa-cream-soft/60 mt-2">
                      Opens WhatsApp with pre-filled message • Fast response from front desk
                    </p>
                  </div>

                </form>
              </div>
            </div>

          </div>

          {/* Location Map & Directions Section */}
          <div data-aos="fade-up" className="mt-20 p-8 rounded-3xl bg-spa-charcoal border border-spa-gold/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-spa-gold font-semibold">FIND US</span>
                <h3 className="font-serif text-2xl text-spa-cream mt-1">Location & Directions</h3>
                <p className="text-sm text-spa-cream-soft/80 mt-1">
                  Located at Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-spa-card hover:bg-spa-gold/20 border border-spa-gold/40 text-spa-cream hover:text-spa-gold text-xs tracking-wider uppercase font-semibold transition-all shrink-0"
              >
                <MapPin className="w-4 h-4 text-spa-gold" />
                <span>Navigate via Google Maps</span>
              </a>
            </div>

            {/* Embedded interactive Google Map iframe */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-spa-gold/20 relative shadow-inner">
              <iframe
                title="Oaksana Wellness Spa Miyapur Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter invert-[90%] hue-rotate-180 contrast-90"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
