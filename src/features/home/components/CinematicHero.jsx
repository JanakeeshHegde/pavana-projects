import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Compass, Shield, Layers, ArrowDown } from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

export default function CinematicHero() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen bg-[#14251E] text-[#F8F6ED] overflow-hidden flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background Architectural Canvas & Dramatic Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-campus.jpg"
          alt="15,00,000 Sq. Ft. IT Software Park Architecture"
          className="w-full h-full object-cover object-center brightness-[0.58] contrast-[1.08] scale-105 filter blur-[0.3px]"
        />
        {/* Cinematic Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251E]/85 via-[#14251E]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14251E]/75 via-transparent to-[#14251E]/30" />
        <div className="absolute inset-0 cad-grid-dark opacity-15 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column: Oversized Typography & Choreographed Narrative (7 Cols) */}
          <div className="lg:col-span-12 space-y-7">
            
            {/* Top Architectural Metadata Badge */}
            {/* <div className="inline-flex items-center space-x-3 px-3.5 py-1.5 bg-[#064A32]/90 border border-[#C69A36]/60 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#DFBE65] animate-pulse" />
              <span className="text-[11px] font-mono-tech text-[#DFBE65] uppercase tracking-[0.18em]">
                PMC DOSSIER // BANGALORE HQ
              </span>
              <span className="text-[#C69A36]">|</span>
              <span className="text-[11px] font-mono-tech text-[#A3B8B0]">
                15,00,000 SQ. FT. REFERENCE
              </span>
            </div> */}

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
                Built on Vision. <br />
                <span className="gold-gradient-text font-bold">
                  Driven by Precision.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#CBD8D2] font-normal leading-relaxed max-w-lg pt-1">
                Integrated project management for ambitious commercial, IT/ITES and infrastructure developments.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C69A36] to-[#DFBE65] hover:from-[#DFBE65] hover:to-[#C69A36] text-[#064A32] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <span>Explore Our Expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#064A32] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center space-x-2 bg-[#1A2F27]/80 hover:bg-[#1A2F27] text-[#F8F6ED] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] border border-[#C69A36]/50 hover:border-[#DFBE65] backdrop-blur-md transition-all duration-300 group"
              >
                <span>View Our Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBE65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Gold Hairline Divider & Value Pillars */}
            <div className="pt-4 border-t border-[#284439] max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-tech text-xs">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#DFBE65] block">Ambitious Vision</span>
                  <span className="text-[11px] text-[#A3B8B0] leading-snug block mt-0.5">Future-proof commercial & IT/ITES realities.</span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#DFBE65] block">Precision Execution</span>
                  <span className="text-[11px] text-[#A3B8B0] leading-snug block mt-0.5">Rigorous control, strict timelines & quality.</span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#DFBE65] block">Seamless Integration</span>
                  <span className="text-[11px] text-[#A3B8B0] leading-snug block mt-0.5">Unified workflows, teams & governance.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sophisticated Architectural Scroll Indicator */}
        {/* <div className="mt-12 pt-6 border-t border-[#284439] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#8EA49A]">
          <div className="flex items-center space-x-2">
            <ArrowDown className="w-3.5 h-3.5 text-[#C69A36] animate-bounce" />
            <span>[SCROLL TO DISCOVER ARCHITECTURE IN MOTION ↓]</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-[#A3B8B0]">
            <span>BANGALORE HQ</span>
            <span>•</span>
            <span>MATHIKERE – 560054</span>
            <span>•</span>
            <span className="text-[#DFBE65]">“CREATING LANDMARKS, SHAPING FUTURES.”</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
