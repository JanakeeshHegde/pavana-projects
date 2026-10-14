import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ROUTE_BREADCRUMBS = {
  '/about': 'About',
  '/services': 'Services',
  '/projects': 'Projects',
  '/process': 'Process',
  '/contact': 'Contact',
  '/quality-safety': 'Quality & Safety',
  '/project-controls': 'Project Controls',
};

export default function PageHero({
  sectionNumber = '01',
  sectionTitle = 'COMPANY OVERVIEW',
  title = '',
  subtitle = '',
  badge = '',
  breadcrumbName = '',
  dark = false,
  image = null,
  imageTag = '',
  imageCaption = '',
  visual = null,
}) {
  const location = useLocation();
  const hasSideVisual = Boolean(visual || image);

  // Compute clean breadcrumb page name
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const currentBreadcrumb =
    breadcrumbName ||
    ROUTE_BREADCRUMBS[cleanPath] ||
    title;

  const isHomePage = cleanPath === '/';

  return (
    <section
      className={`relative overflow-hidden ${isHomePage ? 'py-14 lg:py-20' : 'pt-24 pb-14 lg:pt-28 lg:pb-20'} border-b ${
        dark
          ? 'bg-[#14251E] text-[#F8F6ED] border-[#284439]'
          : 'bg-[#F8F6ED] text-[#14251E] border-[#E5E0CE]'
      }`}
    >
      {/* Background Grid Pattern */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-30 ${
          dark ? 'arch-grid-dark' : 'arch-grid-bg'
        }`}
      />

      {/* Subtle ambient architectural background glow when image is present */}
      {image && (
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20 -mr-20 -mt-20 ${
            dark ? 'bg-[#C69A36]' : 'bg-[#064A32]'
          }`}
        />
      )}

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          hasSideVisual
            ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'
            : ''
        }`}
      >
        <div className={hasSideVisual ? 'lg:col-span-7 xl:col-span-7' : ''}>
          {/* Breadcrumb: Only Home > <PageName> */}
          {!isHomePage && (
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-medium tracking-wider mb-5">
              <Link
                to="/"
                className={`transition-colors ${
                  dark ? 'text-[#8BA49A] hover:text-[#DFBE65]' : 'text-[#5C6E66] hover:text-[#064A32]'
                }`}
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C69A36]" />
              <span className={dark ? 'text-[#DFBE65] font-semibold' : 'text-[#064A32] font-semibold'}>
                {currentBreadcrumb}
              </span>
            </nav>
          )}

          {/* Hero Title and Badge */}
          <div className="max-w-3xl space-y-4">
            {badge && (
              <div className="inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#C69A36]/15 text-[#C69A36] border border-[#C69A36]/30">
                {badge}
              </div>
            )}

            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
                dark ? 'text-[#FFFFFF]' : 'text-[#064A32]'
              }`}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  dark ? 'text-[#CBD8D2]' : 'text-[#4A5D54]'
                }`}
              >
                {subtitle}
              </p>
            )}

            {/* Fine gold underline */}
            <div className="pt-2">
              <div className="gold-divider-left w-32" />
            </div>
          </div>
        </div>

        {/* Custom 3D or dynamic interactive visual (e.g. AboutPage) */}
        {visual && (
          <div className="lg:col-span-5 xl:col-span-5 min-w-0">
            {visual}
          </div>
        )}

        {/* High-Resolution Framed Architectural Hero Image */}
        {!visual && image && (
          <div className="lg:col-span-5 xl:col-span-5 min-w-0">
            <div className="relative group">
              {/* Subtle outer decorative glow */}
              <div
                className={`absolute -inset-1.5 rounded-sm -z-10 blur-[2px] transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${
                  dark
                    ? 'bg-gradient-to-tr from-[#C69A36]/30 via-transparent to-[#064A32]/40'
                    : 'bg-gradient-to-tr from-[#C69A36]/25 via-transparent to-[#064A32]/20'
                }`}
              />

              <div
                className={`relative border p-2.5 sm:p-3 shadow-xl transition-all duration-500 hover:shadow-2xl ${
                  dark
                    ? 'bg-[#1A2F27] border-[#284439] hover:border-[#C69A36]/70'
                    : 'bg-[#FFFFFF] border-[#D5CDBE] hover:border-[#C69A36]/70'
                }`}
              >
                {/* Image display container */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#14251E] shadow-inner">
                  <img
                    src={image}
                    alt={title || 'Pavana Projects'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient scrim for caption clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1612]/80 via-transparent to-[#0B1612]/30 pointer-events-none" />

                  {/* Precision Architectural Crosshair Accents */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#DFBE65]/90 pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#DFBE65]/90 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#DFBE65]/90 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#DFBE65]/90 pointer-events-none" />

                  {/* Top Tag Badge */}
                  {(imageTag || badge) && (
                    <div className="absolute top-3 left-3 bg-[#14251E]/95 text-[#DFBE65] font-mono-tech text-[10px] font-bold px-2.5 py-1 border border-[#C69A36]/50 uppercase tracking-wider backdrop-blur-md shadow-md">
                      {imageTag || badge}
                    </div>
                  )}

                  {/* Bottom Caption Overlay */}
                  {imageCaption && (
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-left pointer-events-none">
                      <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF] tracking-wide block drop-shadow-md">
                        {imageCaption}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
