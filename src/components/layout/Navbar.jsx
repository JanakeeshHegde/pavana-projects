import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ArrowRight, ChevronRight, Phone, Mail, MapPin
} from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

const navItems = [
  { name: 'Home', path: '/', subtitle: 'Real Estate & Project Management' },
  { name: 'About', path: '/about', subtitle: 'Company Profile, Vision & Values' },
  { name: 'Services', path: '/services', subtitle: 'Construction, Real Estate, JV & PMC' },
  { name: 'Contact', path: '/contact', subtitle: 'Direct Consultation & Office' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { contact } = companyProfile;


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);


  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#14251E] backdrop-blur-md border-b border-[#284439] py-3 shadow-xl'
            : isHome
            ? 'bg-gradient-to-b from-[#14251E]/90 via-[#14251E]/50 to-transparent py-4 sm:py-5'
            : 'bg-[#14251E] border-b border-[#284439] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between relative">


            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center group shrink-0 z-10"
              aria-label="Pavana Projects Homepage"
            >
              <img
                src="/logo-white.png"
                alt="Pavana Projects logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>


            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 xl:px-5 py-2 text-[12.5px] xl:text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 group ${
                      isActive
                        ? 'text-[#DFBE65] font-semibold'
                        : 'text-[#E5E0CE]/90 hover:text-[#FFFFFF]'
                    }`}
                  >
                    <span>{item.name}</span>


                    {isActive ? (
                      <span className="absolute bottom-0 left-4 right-4 xl:left-5 xl:right-5 h-[2px] bg-[#C69A36] rounded-full shadow-[0_0_8px_rgba(198,154,54,0.6)]" />
                    ) : (
                      <span className="absolute bottom-0 left-4 right-4 xl:left-5 xl:right-5 h-[1.5px] bg-[#C69A36]/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </Link>
                );
              })}
            </nav>


            <div className="flex items-center space-x-2.5 z-10">


              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center space-x-2 h-10 px-5 bg-[#064A32] hover:bg-[#14251E] active:bg-[#0B3B28] text-[#FFFFFF] text-xs font-bold uppercase tracking-[0.14em] rounded-[4px] border border-[#064A32] hover:border-[#C69A36]/60 shadow-sm transition-all duration-300 group"
              >
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C69A36] group-hover:text-[#DFBE65] group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>


              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center bg-[#0E1B15] text-[#DFBE65] hover:text-[#FFFFFF] border border-[#284439] hover:border-[#C69A36]/60 rounded focus:outline-none focus:ring-2 focus:ring-[#C69A36] transition-all cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#DFBE65]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#DFBE65]" />
                )}
              </button>

            </div>
          </div>
        </div>
      </header>


      {mobileMenuOpen && (
        <>

          <div
            className="fixed inset-0 bg-[#0B1612]/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />


          <div
            className="fixed inset-x-0 top-[58px] sm:top-[68px] bottom-0 z-40 overflow-y-auto bg-[#14251E] border-b-2 border-[#C69A36] text-[#F8F6ED] shadow-2xl flex flex-col justify-between lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >

            <div className="bg-[#0E1B15] border-b border-[#284439] px-6 py-2.5 flex items-center justify-between text-[11px] font-mono-tech text-[#A3B8B0]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#DFBE65] animate-pulse" />
                <span className="text-[#DFBE65] font-semibold uppercase tracking-wider">
                  PAVANA PMC // NAVIGATION
                </span>
              </div>
              <span>Bangalore · 560054</span>
            </div>


            <div className="px-6 py-4 flex-1">
              <nav aria-label="Mobile navigation links" className="divide-y divide-[#284439]">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center justify-between py-3.5 group transition-all ${
                        isActive ? 'text-[#DFBE65]' : 'text-[#FFFFFF] hover:text-[#DFBE65]'
                      }`}
                    >
                      <div className={`text-xl sm:text-2xl font-bold tracking-tight ${
                        isActive ? 'text-[#DFBE65]' : 'text-[#FFFFFF] group-hover:text-[#DFBE65]'
                      }`}>
                        {item.name}
                      </div>

                      <div className="flex items-center space-x-2">
                        {isActive && (
                          <span className="text-[10px] font-mono-tech bg-[#064A32] text-[#DFBE65] px-2 py-0.5 rounded border border-[#C69A36]/40 uppercase">
                            Active
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-[#DFBE65]' : 'text-[#A3B8B0]'
                        }`} />
                      </div>
                    </Link>
                  );
                })}
              </nav>


              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center space-x-2 p-2.5 bg-[#0E1B15] hover:bg-[#1A2E26] border border-[#284439] rounded text-xs text-[#E2DDD0] font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFBE65]" />
                  <span className="truncate">Call Office</span>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-center space-x-2 p-2.5 bg-[#0E1B15] hover:bg-[#1A2E26] border border-[#284439] rounded text-xs text-[#E2DDD0] font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#DFBE65]" />
                  <span className="truncate">Email Inquiries</span>
                </a>
              </div>
            </div>


            <div className="bg-[#0E1B15] p-5 border-t border-[#284439] space-y-2 mt-auto">
              <div className="flex items-center justify-between text-[11px] text-[#A3B8B0]">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3 h-3 text-[#C69A36]" />
                  <span className="truncate">Mathikere, Bangalore – 560054</span>
                </div>
                <span className="font-mono-tech text-[#DFBE65]">PIN 560054</span>
              </div>
              <div className="text-[10px] font-mono-tech text-[#8EA49A] text-center pt-1 border-t border-[#1E332A]">
                <span className="text-[#DFBE65]">“CREATING LANDMARKS, SHAPING FUTURES.”</span>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  );
}
