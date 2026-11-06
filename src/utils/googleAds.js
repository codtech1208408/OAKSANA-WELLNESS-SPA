import { SEO_CONFIG } from '../data/seoConfig';

const GOOGLE_ADS_ID = SEO_CONFIG.googleAdsId || 'AW-18523521964';

/**
 * Safely dispatches a gtag event if Google tag is active.
 * @param {string} eventName 
 * @param {object} params 
 */
export const trackGoogleAdsEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      send_to: GOOGLE_ADS_ID,
      ...params,
    });
  }
};

/**
 * Tracks a lead / conversion action (e.g. WhatsApp booking click, phone call, form submit)
 * @param {'whatsapp' | 'phone_call' | 'booking_form' | 'directions'} leadType 
 * @param {string} label 
 * @param {object} details 
 */
export const trackLeadConversion = (leadType = 'whatsapp', label = 'WhatsApp Booking', details = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const sendToTarget = details.send_to || (details.conversionLabel ? `${GOOGLE_ADS_ID}/${details.conversionLabel}` : GOOGLE_ADS_ID);

    // 1. Send Google Ads generate_lead event
    window.gtag('event', 'generate_lead', {
      send_to: sendToTarget,
      event_category: 'Leads',
      event_label: label,
      lead_type: leadType,
      value: details.value || 1.0,
      currency: 'INR',
      ...details,
    });

    // 2. Send conversion event for Google Ads campaign optimization
    window.gtag('event', 'conversion', {
      send_to: sendToTarget,
      event_category: 'Leads',
      event_label: label,
      ...details,
    });
  }
};

/**
 * Global auto-tracking listener for outbound booking, WhatsApp, and telephone clicks.
 * Automatically attributes conversion events to Google Ads AW-18523521964.
 */
export const initGoogleAdsAutoTracking = () => {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalClick = (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';

    // WhatsApp Booking Clicks
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      const buttonText = (link.textContent || '').trim().replace(/\s+/g, ' ') || 'WhatsApp Button';
      trackLeadConversion('whatsapp', `WhatsApp Click - ${buttonText.substring(0, 40)}`);
    } 
    // Phone Call Clicks
    else if (href.startsWith('tel:')) {
      const phoneNumber = href.replace('tel:', '').trim();
      trackLeadConversion('phone_call', `Phone Call - ${phoneNumber}`);
    } 
    // Google Maps Navigation Clicks
    else if (href.includes('maps.google.com') || href.includes('goo.gl/maps')) {
      trackGoogleAdsEvent('view_location', {
        event_category: 'Engagement',
        event_label: 'Google Maps Directions',
      });
    }
  };

  document.addEventListener('click', handleGlobalClick, { passive: true });

  return () => {
    document.removeEventListener('click', handleGlobalClick);
  };
};

