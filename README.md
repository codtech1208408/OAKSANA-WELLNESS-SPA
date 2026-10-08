# Oaksana Wellness Spa

A website for **Oaksana Wellness Spa**, a luxury wellness and massage destination located at Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad.

---

## 🌟 Key Features

* **Luxury Aesthetic**: Sophisticated black, radiant gold, and warm cream color palette with polished typography (*Cormorant Garamond*, *Playfair Display*, and *Plus Jakarta Sans*).
* **Frictionless WhatsApp Booking**:
  * One-click direct bookings with pre-formatted service messages.
  * Interactive WhatsApp booking concierge on the Contact page.
  * Global floating WhatsApp action button with glowing ambient badge.
* **Responsive Architecture**:
  * **Desktop**: Header with navigation and full-screen luxury features.
  * **Mobile**: Mobile header, hero banner, 2-column treatment cards, testimonial carousel, and fixed bottom navigation bar (`Home`, `Services`, `Book Now`, `Gallery`, `Contact`).
* **Complete Pages**:
  * **Home (`/`)**: 3-banner auto-rotating hero, Introduction with 2-year experience milestone, Curated Treatments, Step Into Serenity gallery feature, Testimonial slider, FAQ accordion, and Booking CTA.
  * **Services (`/services`)**: Full catalog of 7 massage therapies (Aroma, Deep Tissue, Swedish, Thai, Balinese, Spearmint Oil Therapy, Full Body Massage) with benefits and WhatsApp booking.
  * **Gallery (`/gallery`)**: Categorized photo gallery with built-in interactive high-definition Lightbox modal.
  * **About Us (`/about`)**: Brand story, 2-year experience highlight in Miyapur, and 4 wellness principles.
  * **Contact (`/contact`)**: Location details, opening hours, WhatsApp direct line, interactive appointment builder, and Google Maps embed.

---

## 🛠️ Tech Stack

* **Framework**: React 19 + Vite
* **Styling**: Tailwind CSS + Custom Design System
* **Icons**: Lucide React
* **Scroll Animations**: AOS (Animate On Scroll)
* **Routing**: React Router DOM (v7)

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v20+ recommended)
* npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/codtech1208408/OAKSANA-WELLNESS-SPA.git

# Navigate to project directory
cd OAKSANA-WELLNESS-SPA

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Build production bundle
npm run build

# Preview build locally
npm run preview
```

---

## 🔍 SEO & Google Search Console Integration

Oaksana Wellness Spa includes an enterprise-grade SEO and search indexation suite:

1. **Google Search Console**:
   - Meta tag verification slot pre-configured in [index.html](file:///c:/Users/SANTHOSH/OneDrive/Desktop/OAKSANA%20WELLNESS%20SPA/index.html) (`<meta name="google-site-verification" content="..." />`).
   - Dynamic credentials input via the on-site **Google Console & SEO** modal in the website footer.
   - Or configure via `.env`: `VITE_GOOGLE_SITE_VERIFICATION="YOUR_TOKEN"`.

2. **XML Sitemap**:
   - Live at `/sitemap.xml` with priority weighting, change frequencies, and image metadata for all 5 core routes.
   - Ready for one-click submission in Google Search Console under **Sitemaps** -> `sitemap.xml`.

3. **Robots Directives**:
   - Live at `/robots.txt` directing Googlebot & Bingbot to crawl all main pages and referencing the sitemap.

4. **Schema.org Structured Data (JSON-LD)**:
   - Rich `DaySpa` / `HealthAndBeautyBusiness` schema with address, operating hours, geolocation (Miyapur), pricing tier, and catalogue of all 7 therapies.
   - `FAQPage` schema enabling expandable FAQ rich snippets in Google Search Results.
   - `BreadcrumbList` schema for clear site hierarchy.

5. **Local Hyderabad Geo-Targeting**:
   - Tagged for `IN-TG`, `Hyderabad, Miyapur`, and exact coordinates.

---

## 📍 Business Information

* **Name**: Oaksana Wellness Spa
* **Address**: Sri Mani Kalyan Arcade, Miyapur X Road, Hyderabad, Telangana
* **WhatsApp / Phone**: +91 8897743548
* **Timings**: Mon – Sun: 10:00 AM – 9:30 PM

---

## 📄 License

© Oaksana Wellness Spa. All Rights Reserved.
