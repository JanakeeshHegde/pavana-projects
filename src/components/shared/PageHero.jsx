import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  sectionNumber = '01',
  sectionTitle = 'COMPANY OVERVIEW',
  title = '',
  subtitle = '',
  badge = '',
  dark = false,
  image = null,
}) {
  return (
    <section
      className={`relative overflow-hidden py-16 lg:py-24 border-b ${
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

      {/* Optional image overlay with architectural mask */}
      {image && (
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-15 pointer-events-none mix-blend-luminosity overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover object-center" />
          <div
            className={`absolute inset-0 ${
              dark
                ? 'bg-gradient-to-r from-[#14251E] via-[#14251E]/80 to-transparent'
                : 'bg-gradient-to-r from-[#F8F6ED] via-[#F8F6ED]/80 to-transparent'
            }`}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Editorial Section Number */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2 text-xs font-medium tracking-wider uppercase text-[#C69A36]">
            <Link
              to="/"
              className={`transition-colors ${
                dark ? 'text-[#8BA49A] hover:text-[#DFBE65]' : 'text-[#5C6E66] hover:text-[#064A32]'
              }`}
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C69A36]" />
            <span className={dark ? 'text-[#F8F6ED]' : 'text-[#064A32] font-semibold'}>
              {title}
            </span>
          </div>

          {/* Section Numbering from PDF convention (e.g. 01 | COMPANY OVERVIEW) */}
          {/* <div className="flex items-center space-x-2 text-xs font-serif-arch tracking-widest text-[#C69A36]">
            <span className="font-bold">{sectionNumber}</span>
            <span className="opacity-50">|</span>
            <span className="uppercase">{sectionTitle}</span>
          </div> */}
        </div>

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
                dark ? 'text-[#A3B8B0]' : 'text-[#4A5D54]'
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
    </section>
  );
}
