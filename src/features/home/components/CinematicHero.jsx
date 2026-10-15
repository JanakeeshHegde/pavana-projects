import React from 'react';
import CTAButton from '@/components/shared/CTAButton';

export default function CinematicHero() {
  return (
    <section 
      className="relative min-h-[76vh] sm:min-h-[84vh] lg:min-h-[88vh] xl:min-h-[92vh] bg-[#14251E] text-[#F8F6ED] overflow-hidden flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 border-b border-[#284439]"
      aria-label="Pavana Projects Homepage Hero"
    >
      {/* 1. CINEMATIC FULL-BLEED ARCHITECTURAL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/pavana-hero-masterpiece.jpg"
          alt="Pavana Projects — Architectural Project Management, Real Estate and Construction Solutions"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-[center_right] sm:object-center brightness-[0.85] contrast-[1.06]"
        />

        {/* Balanced Architectural Gradients for Flawless Text Readability & High Visual Vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251E]/90 via-[#14251E]/65 via-45% to-[#14251E]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14251E]/80 via-transparent to-[#14251E]/30" />

        {/* Subtle Ambient Lighting Accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#064A32]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[30rem] h-[30rem] bg-[#C69A36]/15 rounded-full blur-3xl" />

        {/* Precision CAD Drafting Grid Overlay */}
        <div className="absolute inset-0 cad-grid-dark opacity-10" />
      </div>

      {/* 2. MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
          {/* Main Headline */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h1 className="text-3xl sm:text-4.5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-[#FFFFFF] leading-[1.08] drop-shadow-sm">
              Building Possibilities. <br />
              <span className="gold-gradient-text font-bold">
                Creating Lasting Value.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#CBD8D2] font-normal leading-relaxed max-w-2xl drop-shadow-sm">
              Integrated real estate solutions, construction services and project management — shaped around your vision.
            </p>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 sm:pt-3">
            <CTAButton 
              to="/services" 
              variant="green"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-xs sm:text-sm font-semibold tracking-wide"
              ariaLabel="Explore Pavana Projects Services"
            >
              Explore Services
            </CTAButton>

            <CTAButton 
              to="/contact" 
              variant="outline"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-xs sm:text-sm font-semibold tracking-wide"
              ariaLabel="Contact Pavana Projects"
            >
              Contact Us
            </CTAButton>
          </div>

        </div>
      </div>
    </section>
  );
}
