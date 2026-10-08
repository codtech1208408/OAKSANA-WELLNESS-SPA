import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG, getLocalBusinessSchema, getFaqSchema, getBreadcrumbSchema } from '../data/seoConfig';

/**
 * SEOHead: Injects and updates document title, meta tags, canonical URLs,
 * OpenGraph, Twitter Cards, Google Search Console verification, and Schema.org JSON-LD
 * on every route transition.
 */
export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const routeData = SEO_CONFIG.routes[currentPath] || SEO_CONFIG.routes['/'];
    const currentUrl = `${window.location.origin}${currentPath}`;
    const siteTitle = routeData.title;
    const description = routeData.description;
    const keywords = (routeData.keywords || SEO_CONFIG.keywords).join(', ');
    const ogImage = `${window.location.origin}${SEO_CONFIG.defaultImage}`;

    // 1. Update Document Title
    document.title = siteTitle;

    // Helper to safely set or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to safely set or create link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Search Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'author', SEO_CONFIG.brandName);

    // 3. Geo-Targeting Meta Tags for Local Hyderabad Search Boost
    setMetaTag('name', 'geo.region', 'IN-TG');
    setMetaTag('name', 'geo.placename', 'Hyderabad, Miyapur');
    setMetaTag('name', 'geo.position', `${SEO_CONFIG.geo.latitude};${SEO_CONFIG.geo.longitude}`);
    setMetaTag('name', 'ICBM', `${SEO_CONFIG.geo.latitude}, ${SEO_CONFIG.geo.longitude}`);

    // 4. Canonical URL
    setLinkTag('canonical', currentUrl);

    // 5. OpenGraph Tags (Facebook, WhatsApp, LinkedIn)
    setMetaTag('property', 'og:site_name', SEO_CONFIG.brandName);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:title', siteTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 6. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', siteTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 7. Google Search Console Verification Meta Tag
    // Reads from SEO_CONFIG or localStorage or meta env
    const gscCode = SEO_CONFIG.googleSiteVerification || localStorage.getItem('oaksana_gsc_verification');
    if (gscCode) {
      setMetaTag('name', 'google-site-verification', gscCode);
    }

    // 8. Inject / Update Schema.org JSON-LD Structured Data
    const injectJsonLd = (id, data) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    // Primary LocalBusiness (DaySpa) Schema
    injectJsonLd('schema-local-business', getLocalBusinessSchema(window.location.origin));

    // Breadcrumb Schema for current route
    injectJsonLd('schema-breadcrumb', getBreadcrumbSchema(currentPath, window.location.origin));

    // FAQ Schema on Home & Contact pages
    if (currentPath === '/' || currentPath === '/contact') {
      injectJsonLd('schema-faq', getFaqSchema());
    } else {
      const existingFaqScript = document.getElementById('schema-faq');
      if (existingFaqScript) existingFaqScript.remove();
    }

    // 9. Google Analytics 4 (GA4) Injection if ID is available
    const gaId = SEO_CONFIG.googleAnalyticsId || localStorage.getItem('oaksana_ga_id');
    if (gaId && !document.getElementById('ga4-script')) {
      const gaScript = document.createElement('script');
      gaScript.id = 'ga4-script';
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gaScript);

      const gaInitScript = document.createElement('script');
      gaInitScript.id = 'ga4-init';
      gaInitScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', { page_path: '${currentPath}' });
      `;
      document.head.appendChild(gaInitScript);
    } else if (gaId && window.gtag) {
      window.gtag('config', gaId, { page_path: currentPath });
    }

  }, [location.pathname]);

  return null;
}
