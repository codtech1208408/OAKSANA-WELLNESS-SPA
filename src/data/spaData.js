export const BUSINESS_INFO = {
  name: "Oaksana Wellness Spa",
  tagline: "Relax. Rejuvenate. Restore.",
  experience: "2 Years of Excellence",
  yearsCount: "2+",
  phone: "8897743548",
  whatsappNumber: "8897743548",
  whatsappInternational: "918897743548",
  address: "Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad",
  city: "Hyderabad, Telangana",
  openingHours: "Mon - Sun: 10:00 AM – 9:30 PM",
  email: "contact@oaksanawellness.com",
  mapQuery: "Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad",
  googleMapsUrl: "https://maps.google.com/?q=Sri+Mani+Kalyan+Arcade,+Miyapur+X+Road,+Hyderabad"
};

export const getWhatsAppLink = (message) => {
  return `https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=${encodeURIComponent(message)}`;
};

export const getServiceBookingWhatsAppLink = (serviceName) => {
  const message = `Hello Oaksana Wellness Spa, I am interested in booking the ${serviceName}. Please share the available timings and details.`;
  return getWhatsAppLink(message);
};

export const getGeneralBookingWhatsAppLink = () => {
  const message = "Hello Oaksana Wellness Spa, I would like to book a massage session. Please share the available timings.";
  return getWhatsAppLink(message);
};

export const getContactWhatsAppLink = () => {
  const message = "Hello Oaksana Wellness Spa, I would like to know more about your services and availability.";
  return getWhatsAppLink(message);
};

export const SERVICES = [
  {
    id: "aroma-massage",
    name: "Aroma Massage",
    tagline: "Gentle Sensory Serenity with Essential Botanicals",
    description: "A soothing massage experience designed around relaxation and aromatic oils that awaken the senses and release everyday stress.",
    price: "Coming Soon",
    duration: "60 / 90 Mins",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Alleviates nervous tension and mental fatigue",
      "Infused with calming aromatic botanical oils",
      "Promotes deep, restorative sleep and calm",
      "Gentle flowing pressure suitable for all"
    ],
    idealFor: "Stress relief, soothing the nervous system, pure relaxation"
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Intense Muscular Release and Rejuvenation",
    description: "A focused massage experience designed for deeper muscle relaxation and tension relief, addressing chronic knots and physical fatigue.",
    price: "Coming Soon",
    duration: "60 / 90 Mins",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Targets deeper layers of muscle tissue and fascia",
      "Breaks down stubborn postural knots",
      "Assists in muscle recovery and flexibility",
      "Relieves stiff shoulders, neck, and lower back"
    ],
    idealFor: "Active individuals, office workers with stiff posture, chronic tightness"
  },
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    tagline: "Timeless Classical Relaxation Therapy",
    description: "A classic relaxing massage experience using flowing massage techniques to promote full-body circulation, calmness and holistic comfort.",
    price: "Coming Soon",
    duration: "60 / 90 Mins",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Long gliding strokes that boost blood circulation",
      "Gently eases surface muscle tightness",
      "Boosts natural vitality and calm breathing",
      "Perfect introductory massage experience"
    ],
    idealFor: "First-time spa guests, general relaxation, full-body rejuvenation"
  },
  {
    id: "thai-massage",
    name: "Thai Massage",
    tagline: "Ancient Rhythmic Energy & Flexibility Alignment",
    description: "A traditional-inspired wellness experience combining assisted stretching and rhythmic acupressure massage techniques.",
    price: "Coming Soon",
    duration: "60 / 90 / 120 Mins",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Improves natural body flexibility and range of motion",
      "Balances internal energy flow along meridian pathways",
      "Dynamic guided stretches that relieve joint stiffness",
      "Leaves the body feeling revitalized and light"
    ],
    idealFor: "Flexibility enhancement, active lifestyles, total body awakening"
  },
  {
    id: "balinese-massage",
    name: "Balinese Massage",
    tagline: "Exotic Tropical Harmony and Deep Pampering",
    description: "A relaxing full-body wellness experience inspired by traditional Balinese massage techniques combining gentle stretching and skin rolling.",
    price: "Coming Soon",
    duration: "60 / 90 Mins",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Harmonious combination of acupressure and soothing strokes",
      "Warm essential oil application for supple skin",
      "Calms mind while invigorating muscular energy",
      "Traditional Southeast Asian relaxation therapy"
    ],
    idealFor: "Total tranquil surrender, sensory indulgence, gentle full-body care"
  },
  {
    id: "spearmint-oil-therapy",
    name: "Spearmint Oil Therapy",
    tagline: "Crisp Botanical Invigoration & Mental Clarity",
    description: "A refreshing wellness experience featuring spearmint oil in a soothing environment that awakens the senses and promotes deep breathability.",
    price: "Coming Soon",
    duration: "60 / 90 Mins",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Natural cooling sensation that relieves fatigue",
      "Refreshing spearmint aroma sharpens mental clarity",
      "Revives tired limbs and improves physical lightness",
      "Leaves skin feeling revitalized and scented"
    ],
    idealFor: "Beating tiredness, cooling relief, mental reset after a hectic week"
  },
  {
    id: "full-body-massage",
    name: "Full Body Massage",
    tagline: "Head-to-Toe Restoration and Ultimate Serenity",
    description: "A complete relaxation experience focused on helping the body unwind and feel rejuvenated from head to toe in utmost privacy and luxury.",
    price: "Coming Soon",
    duration: "60 / 90 / 120 Mins",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Comprehensive treatment addressing every major muscle group",
      "Tailored pressure tailored to your personal comfort level",
      "Ultimate unwind ritual in a peaceful dark-luxe suite",
      "Restores holistic mind-body equilibrium"
    ],
    idealFor: "Exhausted professionals, complete physical renewal, special pampering"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "2 Years of Experience",
    shortText: "2 Years Experience",
    description: "A trusted wellness destination in Miyapur with two continuous years of dedicated client care and proven relaxation expertise.",
    icon: "Award"
  },
  {
    id: 2,
    title: "Premium Experience",
    shortText: "Luxury Atmosphere",
    description: "A carefully curated sanctuary of calming warm lighting, golden accents, soft acoustics, and hygienic private therapy suites.",
    icon: "Sparkles"
  },
  {
    id: 3,
    title: "Professional Service",
    shortText: "Dedicated Care",
    description: "Attentive service customized to your comfort level, ensuring every massage session is deeply relaxing and rejuvenating.",
    icon: "HeartHandshake"
  },
  {
    id: 4,
    title: "Convenient Location",
    shortText: "Miyapur X Road",
    description: "Easily accessible at Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad, with peaceful accessibility for city dwellers.",
    icon: "MapPin"
  },
  {
    id: 5,
    title: "Easy WhatsApp Booking",
    shortText: "Instant Booking",
    description: "Book your session directly through WhatsApp in seconds with zero complicated forms or unnecessary booking delays.",
    icon: "MessageCircle"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Tranquil Therapy Suite",
    category: "Treatment Rooms",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    description: "Private massage room illuminated with warm ambient light and plush bedding."
  },
  {
    id: 2,
    title: "Botanical Aromatherapy Decanters",
    category: "Therapies",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
    description: "Hand-selected pure essential oils and natural extracts used in our treatments."
  },
  {
    id: 3,
    title: "Golden Ambiance Lounge",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    description: "Welcoming reception and relaxation lounge adorned with golden tones and warm textures."
  },
  {
    id: 4,
    title: "Hot Stone Therapy Setup",
    category: "Therapies",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    description: "Smooth basalt stones and restorative warmth for deep muscle tranquility."
  },
  {
    id: 5,
    title: "Serene Water & Floral Ritual",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    description: "Delicate floral petals creating a soothing atmosphere before your massage begins."
  },
  {
    id: 6,
    title: "Deep Rejuvenation Suite",
    category: "Treatment Rooms",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    description: "Private acoustic-dampened chamber offering absolute privacy and relaxation."
  },
  {
    id: 7,
    title: "Refreshing Herbal Infusions",
    category: "Therapies",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
    description: "Revitalizing spearmint and herbal botanical oils prepared fresh for each session."
  },
  {
    id: 8,
    title: "Luxury Spa Architecture",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80",
    description: "Elegantly lit corridors designed to slow down the senses upon arrival."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram R.",
    location: "Miyapur, Hyderabad",
    service: "Deep Tissue Massage",
    rating: 5,
    review: "The ambiance at Oaksana is remarkably peaceful and luxurious. After long work hours with stiff shoulder pain, the therapist provided exceptional attention. Booking via WhatsApp was effortless.",
    isGuestExperience: true
  },
  {
    id: 2,
    name: "Ananya P.",
    location: "Kukatpally, Hyderabad",
    service: "Aroma Massage",
    rating: 5,
    review: "Loved the soothing oils and the gentle golden lighting throughout the spa. You immediately feel calm the moment you walk into the suite. Highly recommended for weekend unwinding.",
    isGuestExperience: true
  },
  {
    id: 3,
    name: "Suresh K.",
    location: "Kondapur, Hyderabad",
    service: "Swedish Massage",
    rating: 5,
    review: "Oaksana Spa has established a truly upscale haven in Miyapur. The private rooms are hygienic, clean, and spacious. Very professional team and easy coordination on WhatsApp.",
    isGuestExperience: true
  },
  {
    id: 4,
    name: "Pooja M.",
    location: "Gachibowli, Hyderabad",
    service: "Thai Massage",
    rating: 5,
    review: "The assisted stretching techniques in the Thai massage session helped relieve my chronic back tension. The staff is polite, courteous, and respectful of privacy.",
    isGuestExperience: true
  }
];

export const FAQS = [
  {
    id: 1,
    question: "How can I book a massage?",
    answer: "You can book easily by clicking any 'Book Now' or 'WhatsApp' button on our website. This opens WhatsApp directly with your chosen massage details, where our team will confirm available slots and assist you immediately."
  },
  {
    id: 2,
    question: "Where is Oaksana Wellness Spa located?",
    answer: "Oaksana Wellness Spa is located at Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad. The venue is easily accessible with convenient transit points across Miyapur and surrounding areas."
  },
  {
    id: 3,
    question: "What massage services do you offer?",
    answer: "We offer seven signature therapies: Aroma Massage, Deep Tissue Massage, Swedish Massage, Thai Massage, Balinese Massage, Spearmint Oil Therapy, and Full Body Massage."
  },
  {
    id: 4,
    question: "Do you have fixed prices?",
    answer: "Service pricing is provided upon request as customized packages and seasonal sessions are available. Please click 'Book Now' or contact our team via WhatsApp to get the current pricing and personalized recommendations."
  },
  {
    id: 5,
    question: "How can I check availability?",
    answer: "Contact us directly through WhatsApp at 8897743548. Let us know your preferred date and time, and we will confirm the available therapist and room slots in minutes."
  },
  {
    id: 6,
    question: "What should I expect during my first visit?",
    answer: "Upon arrival, you will be welcomed into our calm lounge. You can discuss your massage preferences and pressure level with the staff before stepping into a sanitized, private suite prepared with fresh linens and relaxing music."
  }
];
