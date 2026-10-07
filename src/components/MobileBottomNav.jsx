import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sparkles, Image as ImageIcon, Info, Phone } from 'lucide-react';

export default function MobileBottomNav() {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Sparkles },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-spa-gold/30 px-2 py-2 shadow-2xl safe-area-bottom"
      aria-label="Mobile Navigation Bar"
    >
      <div className="grid grid-cols-5 max-w-md mx-auto items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-1 transition-all duration-200 relative ${
                  isActive
                    ? 'text-spa-gold font-semibold'
                    : 'text-spa-cream-soft/70 hover:text-spa-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-5 h-5 mb-0.5 transition-transform duration-200 ${
                      isActive ? 'scale-110 drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]' : ''
                    }`}
                  />
                  <span className="text-[10px] tracking-wide font-medium leading-tight">
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-spa-gold shadow-gold-glow mt-1" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

