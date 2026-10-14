import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, MapPin } from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  // { name: 'Projects', path: '/projects' },
  { name: 'Process', path: '/process' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#14251E]/95 backdrop-blur-md border-b border-[#284439] py-3.5 shadow-xl'
            : isHome
            ? 'bg-gradient-to-b from-[#14251E]/80 via-[#14251E]/40 to-transparent py-5 sm:py-6'
            : 'bg-[#14251E] border-b border-[#284439] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* 1. BRAND LOGO (LEFT) */}
            <Link
              to="/"
              className="flex items-center space-x-3 group shrink-0"
              aria-label="Pavana Projects Homepage"
            >
              <img
                src="/logo-white.png"
                alt="Pavana Projects Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* 2. REFINED NAVIGATION IN THE CENTRE */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 group ${
                      isActive
                        ? 'text-[#DFBE65] font-semibold'
                        : 'text-[#E5E0CE]/90 hover:text-[#FFFFFF]'
                    }`}
                  >
                    <span>{item.name}</span>

                    {/* Subtle animated gold underline for active item */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#C69A36] rounded-full shadow-[0_0_8px_rgba(198,154,54,0.6)]" />
                    ) : (
                      <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#C69A36]/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. PREMIUM SEPARATE CTA BUTTON (RIGHT) */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-[#C69A36] to-[#DFBE65] hover:from-[#DFBE65] hover:to-[#C69A36] text-[#064A32] px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group shrink-0"
              >
                <span>Discuss a Project</span>
                <span className="text-sm font-semibold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  ↗
                </span>
              </Link>

              {/* Accessible Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#DFBE65] hover:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#C69A36]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN / FULL-PANEL MOBILE NAVIGATION */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#14251E] text-[#F8F6ED] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn overflow-y-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#284439]">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/logo-white.png"
                alt="Pavana Projects"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#DFBE65] hover:text-[#FFFFFF]"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-10 space-y-6">
            <div className="space-y-4">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline space-x-4 group"
                  >
                    <span
                      className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                        isActive
                          ? 'text-[#DFBE65]'
                          : 'text-[#FFFFFF] group-hover:text-[#DFBE65]'
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Footer & CTA */}
          <div className="pt-6 border-t border-[#284439] space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C69A36] to-[#DFBE65] text-[#064A32] py-4 text-xs font-bold uppercase tracking-widest shadow-md"
            >
              <span>Discuss a Project</span>
              <span>↗</span>
            </Link>

            <div className="text-[11px] font-mono-tech text-[#8EA49A] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <span className="text-[#DFBE65]">“CREATING LANDMARKS, SHAPING FUTURES.”</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
