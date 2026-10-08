// Centralized SEO and Google Search Console Configuration for Oaksana Wellness Spa
import { BUSINESS_INFO, SERVICES, FAQS } from './spaData';

export const SEO_CONFIG = {
  // Primary Website URL (default fallback to official domain, dynamic in browser)
  siteUrl: typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost')
    ? window.location.origin
    : (import.meta.env.VITE_SITE_URL || 'https://oaksanawellness.com'),

  brandName: BUSINESS_INFO.name,
  tagline: "Relax. Rejuvenate. Restore.",
  phone: BUSINESS_INFO.phone,
  internationalPhone: `+${BUSINESS_INFO.whatsappInternational}`,
  email: BUSINESS_INFO.email,
  address: {
    street: "Sri Mani Kalyan Arcade, Miyapur X Road",
    city: "Hyderabad",
    state: "Telangana",
    country: "IN",
    postalCode: "500049"
  },
  geo: {
    latitude: "17.4933",
    longitude: "78.3615"
  },
  priceRange: "₹₹",
  openingHours: "Mo-Su 10:00-21:30",
  defaultImage: "/logo.png",

  // Google Search Console Verification Meta Tag ID (replace with your code or via .env)
  googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || "",

  // Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX)
  googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",

  // High-Intent SEO Keywords for Miyapur & Hyderabad Spa Searches
  keywords: [
    "Oaksana Wellness Spa",
    "spa in Miyapur",
    "spa in Hyderabad",
    "luxury spa Miyapur",
    "massage in Miyapur",
    "massage spa Hyderabad",
    "massage parlour near Miyapur",
    "Aroma Massage Miyapur",
    "Deep Tissue Massage Hyderabad",
    "Swedish Massage Miyapur",
    "Thai Massage Hyderabad",
    "Balinese Massage Miyapur",
    "Spearmint Oil Therapy",
    "Full Body Massage Hyderabad",
    "body massage near me",
    "best spa in Miyapur X Road",
    "spa near Kukatpally",
    "spa near Kondapur",
    "spa near Chandanagar",
    "couples massage Hyderabad",
    "relaxation therapy Hyderabad"
  ],

  // Route-Specific Metadata
  routes: {
    "/": {
      title: "Oaksana Wellness Spa | Luxury Massage & Wellness in Miyapur, Hyderabad",
      description: "Step into pure tranquility at Oaksana Wellness Spa in Miyapur, Hyderabad. Experience certified Aroma, Deep Tissue, Swedish, Thai, and Balinese massage therapies in private luxury suites.",
      path: "/",
      keywords: [
        "Oaksana Wellness Spa",
        "spa in Miyapur",
        "spa in Hyderabad",
        "luxury spa Miyapur",
        "massage parlour Miyapur",
        "best massage spa Hyderabad",
        "full body massage Miyapur"
      ]
    },
    "/services": {
      title: "Luxury Massage Therapies & Spa Services | Oaksana Wellness Spa Miyapur",
      description: "Explore 7 signature wellness therapies at Oaksana Wellness Spa: Aroma Massage, Deep Tissue, Swedish, Thai, Balinese, Spearmint Oil Therapy, and Full Body Massage in Miyapur, Hyderabad.",
      path: "/services",
      keywords: [
        "spa services Miyapur",
        "Aroma massage Hyderabad",
        "Deep tissue massage Miyapur",
        "Swedish massage Hyderabad",
        "Thai stretching massage",
        "Balinese oil therapy",
        "massage packages Hyderabad"
      ]
    },
    "/gallery": {
      title: "Spa Ambiance & Therapy Suite Gallery | Oaksana Wellness Spa Miyapur",
      description: "Explore photos of our serene private therapy rooms, ambient warm golden suites, and aromatherapy relaxation lounge at Oaksana Wellness Spa, Miyapur X Road, Hyderabad.",
      path: "/gallery",
      keywords: [
        "spa interior gallery",
        "Oaksana spa photos",
        "luxury therapy rooms Hyderabad",
        "spa ambiance Miyapur",
        "wellness center photos"
      ]
    },
    "/about": {
      title: "About Us - 2+ Years of Wellness Excellence | Oaksana Wellness Spa Miyapur",
      description: "Learn about Oaksana Wellness Spa's journey in Miyapur, Hyderabad. 2+ years of delivering therapeutic relaxation, certified care, and authentic mind-body restoration.",
      path: "/about",
      keywords: [
        "about Oaksana spa",
        "2 years spa experience Hyderabad",
        "best wellness centre Miyapur",
        "professional massage therapists Hyderabad",
        "wellness philosophy"
      ]
    },
    "/contact": {
      title: "Contact & Book Massage Session | Oaksana Wellness Spa Miyapur Hyderabad",
      description: "Book your luxury massage session at Oaksana Wellness Spa. Located at Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad. Direct booking via WhatsApp at 8897743548.",
      path: "/contact",
      keywords: [
        "book spa Miyapur",
        "Oaksana spa contact number",
        "spa WhatsApp booking",
        "Sri Mani Kalyan Arcade spa",
        "spa timings Hyderabad"
      ]
    }
  }
};

/**
 * Generates Schema.org JSON-LD LocalBusiness / DaySpa structure
 */
export function getLocalBusinessSchema(baseUrl = SEO_CONFIG.siteUrl) {
  const serviceOfferings = SERVICES.map(svc => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": svc.name,
      "description": svc.description,
      "provider": {
        "@type": "DaySpa",
        "name": BUSINESS_INFO.name
      }
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["DaySpa", "HealthAndBeautyBusiness"],
    "@id": `${baseUrl}/#organization`,
    "name": BUSINESS_INFO.name,
    "alternateName": "Oaksana Spa Miyapur",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": [
      `${baseUrl}/logo.jpeg`,
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Luxury wellness and massage destination in Miyapur, Hyderabad offering bespoke Aroma, Deep Tissue, Swedish, Thai, Balinese, Spearmint Oil Therapy and Full Body Massage.",
    "telephone": `+${BUSINESS_INFO.whatsappInternational}`,
    "email": BUSINESS_INFO.email,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI, Google Pay, PhonePe, Paytm",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sri Mani Kalyan Arcade, Miyapur X Road",
      "addressLocality": "Miyapur, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500049",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4933,
      "longitude": 78.3615
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:30"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Signature Massage Therapies",
      "itemListElement": serviceOfferings
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "84",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      BUSINESS_INFO.googleMapsUrl,
      `https://wa.me/${BUSINESS_INFO.whatsappInternational}`
    ]
  };
}

/**
 * Generates Schema.org FAQPage structure for rich Google SERP snippet
 */
export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates BreadcrumbList Schema for route hierarchy
 */
export function getBreadcrumbSchema(pathname, baseUrl = SEO_CONFIG.siteUrl) {
  const routeMeta = SEO_CONFIG.routes[pathname] || SEO_CONFIG.routes["/"];
  const pageName = pathname === "/" ? "Home" : (routeMeta.title.split("|")[0].trim());

  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${baseUrl}/`
    }
  ];

  if (pathname !== "/") {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `${baseUrl}${pathname}`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}
