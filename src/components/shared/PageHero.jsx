import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ROUTE_BREADCRUMBS = {
  '/about': 'About',
  '/services': 'Services',
  '/contact': 'Contact',
};

export default function PageHero({
  title = '',
  subtitle = '',
  badge = '',
  breadcrumbName = '',
  dark = false,
  image = null,
  imageTag = '',
  imageCaption = '',
  visual = null,
  technicalNote = '',
}) {
  const location = useLocation();
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const isHomePage = cleanPath === '/';


  const currentBreadcrumb =
    breadcrumbName ||
    ROUTE_BREADCRUMBS[cleanPath] ||
    title;


  const isDarkTheme = dark || !isHomePage;

  return (
    <section
      className={`relative overflow-hidden pt-20 pb-6 sm:pt-22 sm:pb-7 lg:pt-24 lg:pb-8 border-b ${
        isDarkTheme
          ? 'bg-[#14251E] text-[#F8F6ED] border-[#284439]'
          : 'bg-[#F8F6ED] text-[#14251E] border-[#E5E0CE]'
      }`}
    >

      {isDarkTheme ? (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">

          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C69A36]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#064A32]/30 rounded-full blur-3xl" />


          <div className="absolute inset-0 cad-grid-dark opacity-30" />


          <svg
            className="absolute inset-0 w-full h-full opacity-20 stroke-[#C69A36]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <pattern id="archGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" fillOpacity="0.6" />
                <circle cx="100" cy="100" r="1.5" fill="currentColor" fillOpacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />


            <circle cx="85%" cy="50%" r="130" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.4" />
            <circle cx="85%" cy="50%" r="210" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 8" opacity="0.3" />
            <circle cx="85%" cy="50%" r="290" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />


            <line x1="60%" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
            <line x1="75%" y1="0" x2="100%" y2="60%" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          </svg>


          <div className="absolute top-3 left-6 text-[#C69A36]/40 font-mono-tech text-[10px] pointer-events-none">
            + 13.03° N // 77.55° E
          </div>
          <div className="absolute top-3 right-6 text-[#C69A36]/40 font-mono-tech text-[10px] pointer-events-none hidden sm:block">
            + BANGALORE // 560054
          </div>
        </div>
      ) : (

        <div className="absolute inset-0 pointer-events-none opacity-30 arch-grid-bg" aria-hidden="true" />
      )}


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {!isHomePage && (
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-[11px] sm:text-xs font-medium tracking-wider mb-2 sm:mb-2.5">
            <Link
              to="/"
              className={`transition-colors ${
                isDarkTheme ? 'text-[#8BA49A] hover:text-[#DFBE65]' : 'text-[#5C6E66] hover:text-[#064A32]'
              }`}
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#C69A36]" />
            <span className={isDarkTheme ? 'text-[#DFBE65] font-semibold' : 'text-[#064A32] font-semibold'}>
              {currentBreadcrumb}
            </span>
          </nav>
        )}


        <div className="max-w-3xl space-y-2 sm:space-y-2.5">


          {badge && (
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold font-mono-tech uppercase tracking-[0.14em] bg-[#C69A36]/15 text-[#DFBE65] border border-[#C69A36]/40 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFBE65] animate-pulse" />
              <span>{badge}</span>
            </div>
          )}


          <h1
            className={`text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight leading-tight ${
              isDarkTheme ? 'text-[#FFFFFF]' : 'text-[#064A32]'
            }`}
          >
            {title}
          </h1>


          {subtitle && (
            <p
              className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
                isDarkTheme ? 'text-[#CBD8D2]' : 'text-[#4A5D54]'
              }`}
            >
              {subtitle}
            </p>
          )}


          <div className="pt-1 flex items-center space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#DFBE65] to-transparent" />
            <div className="w-1 h-1 rotate-45 bg-[#C69A36]" />
            {technicalNote && (
              <span className="text-[10px] sm:text-[11px] font-mono-tech text-[#8BA49A]">
                {technicalNote}
              </span>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
