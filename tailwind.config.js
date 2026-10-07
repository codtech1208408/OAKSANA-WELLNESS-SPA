/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          dark: '#0A0A0A',
          charcoal: '#111111',
          surface: '#171717',
          card: '#1F1F1F',
          gold: '#C9A227',
          'gold-light': '#D4AF37',
          'gold-bright': '#F3C954',
          'gold-dark': '#A07E17',
          cream: '#FFF8ED',
          'cream-soft': '#F5EBDD',
          'cream-muted': '#E8DEC8',
          stone: '#8A867F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 162, 39, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.45)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #C9A227 50%, #9B7718 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C9A227 0%, #FFF8ED 50%, #C9A227 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(10, 10, 10, 0.85) 0%, #0A0A0A 100%)',
        'hero-radial': 'radial-gradient(circle at center, rgba(201, 162, 39, 0.12) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
