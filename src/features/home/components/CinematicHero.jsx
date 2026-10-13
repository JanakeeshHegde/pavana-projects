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
          className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.15] scale-105 filter blur-[0.3px]"
        />
        {/* Cinematic Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251E] via-[#14251E]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14251E] via-transparent to-[#14251E]/60" />
        <div className="absolute inset-0 cad-grid-dark opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column: Oversized Typography & Choreographed Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            
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
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] leading-[1.05]">
                Built on Vision. <br />
                <span className="gold-gradient-text font-serif-arch font-medium">
                  Driven by Precision.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#CBD8D2] font-normal leading-relaxed max-w-xl pt-2">
                Integrated project management for ambitious commercial, IT/ITES and infrastructure developments.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C69A36] to-[#DFBE65] hover:from-[#DFBE65] hover:to-[#C69A36] text-[#064A32] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <span>Explore Our Expertise</span>
                <ArrowRight className="w-4 h-4 text-[#064A32] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center space-x-2 bg-[#1A2F27]/80 hover:bg-[#1A2F27] text-[#F8F6ED] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] border border-[#C69A36]/50 hover:border-[#DFBE65] backdrop-blur-md transition-all duration-300 group"
              >
                <span>View Our Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFBE65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Gold Hairline Divider & Live Governance Coordinates */}
            <div className="pt-4 border-t border-[#284439] max-w-xl">
              <div className="grid grid-cols-3 gap-4 font-mono-tech text-xs">
                <div>
                  <span className="text-[10px] text-[#8EA49A] uppercase block">SCALE PROFILE</span>
                  <span className="text-base font-bold text-[#DFBE65]">1.5M SQ. FT.</span>
                  <span className="text-[10px] text-[#A3B8B0] block">IT Software Park</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8EA49A] uppercase block">INTEGRATION</span>
                  <span className="text-base font-bold text-[#FFFFFF]">360° PMC</span>
                  <span className="text-[10px] text-[#A3B8B0] block">End-to-End Delivery</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8EA49A] uppercase block">DELIVERY CORE</span>
                  <span className="text-base font-bold text-[#DFBE65]">TIME & COST</span>
                  <span className="text-[10px] text-[#A3B8B0] block">Zero-Defect Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Layered Architectural Viewport & Technical Drawing Frame (5 Cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Fine Technical Offset Frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-[#C69A36]/30 pointer-events-none hidden sm:block" />

            <div className="relative bg-[#1A2F27]/90 border border-[#284439] p-3 shadow-2xl backdrop-blur-md">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#0C1A14]">
                <img
                  src="/images/facade-detail.jpg"
                  alt="Curtain Wall Façade & Louver Engineering Detail"
                  className="w-full h-full object-cover object-center filter contrast-[1.12] brightness-95 hover:scale-105 transition-transform duration-700"
                />

                {/* Technical Drawing Elevation Plate */}
                {/* <div className="absolute top-3 left-3 bg-[#14251E]/95 text-[#DFBE65] font-mono-tech text-[10px] px-2.5 py-1 border border-[#284439] backdrop-blur-sm">
                  DWG // 04.2 — ARCHITECTURAL ELEVATION
                </div> */}

                <div className="absolute bottom-3 left-3 right-3 bg-[#14251E]/95 p-3.5 border border-[#284439] backdrop-blur-sm space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#C69A36]">
                    <span>PROPOSED PMC FRAMEWORK</span>
                    <span>IT / ITES CAMPUS</span>
                  </div>
                  <p className="text-xs text-[#CBD8D2] font-medium leading-snug">
                    Multidisciplinary interface coordination across civil structure, high-performance curtain walls, and central MEP plant infrastructure.
                  </p>
                </div>
              </div>

              {/* Technical Caption Below */}
              <div className="pt-3 flex items-center justify-between text-[10px] font-mono-tech text-[#8EA49A]">
                <span>ELEVATION: FAÇADE & SERVICES INTERFACE</span>
                <span className="text-[#DFBE65]">REF: 15,00,000 SQ. FT.</span>
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
