import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Compass, ShieldCheck } from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

export default function ArchitecturalHero() {
  return (
    <section className="relative bg-[#F8F6ED] text-[#14251E] cad-grid-light border-b border-[#E2DDD0] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Drafting Crosshairs & Measurement Annotations */}
      <div className="absolute top-4 left-6 font-mono-tech text-[10px] text-[#064A32]/60 hidden sm:block">
        + [REF: 13°01'58"N / 77°33'18"E] // BANGALORE HQ
      </div>
      <div className="absolute top-4 right-6 font-mono-tech text-[10px] text-[#064A32]/60 hidden sm:block">
        + [SCALE 1:500] // DWG-PMC-01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Left-Aligned Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 z-10">
            
            {/* Technical Header Meta Bar */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-tech uppercase tracking-wider text-[#064A32]">
              <span className="px-2.5 py-1 bg-[#EAE5D6] border border-[#D5CDBE] font-bold text-[#064A32]">
                DOSSIER // PMC-2026
              </span>
              <span className="text-[#C69A36]">|</span>
              <span className="text-[#3D4F47]">
                PROJECT MANAGEMENT CONSULTANCY
              </span>
              <span className="text-[#C69A36]">|</span>
              <span className="text-[#C69A36] font-semibold">
                “CREATING LANDMARKS, SHAPING FUTURES.”
              </span>
            </div>

            {/* Oversized Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.035em] text-[#064A32] leading-[0.98]">
                We bring <br />
                order to <br />
                <span className="relative inline-block text-[#14251E]">
                  complexity.
                  {/* Fine gold drafting underline */}
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C69A36]" />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-light text-[#3D4F47] max-w-xl leading-relaxed pt-2">
                Integrated project management for ambitious developments.
              </p>
            </div>

            {/* Editorial Architectural Manifesto Quote */}
            <div className="p-4 bg-[#FFFFFF] border-l-2 border-[#C69A36] border-t border-r border-b border-[#E2DDD0] max-w-xl text-xs text-[#2A3B33] leading-relaxed">
              <strong className="text-[#064A32] font-semibold uppercase tracking-wide block mb-1">
                The PMC Mandate:
              </strong>
              Acting as the developer's project-management interface across design consultants, trade contractors, specialist vendors, statutory authorities, and operational teams—bringing unyielding clarity to Time, Cost, Quality, and Safety.
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/work"
                className="inline-flex items-center space-x-3 bg-[#064A32] text-[#F8F6ED] hover:bg-[#14251E] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all border border-[#064A32] shadow-sm hover:shadow-md group"
              >
                <span>Explore The Work</span>
                <span className="text-[#DFBE65] group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-transparent text-[#064A32] hover:text-[#C69A36] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] border border-[#C69A36]/60 hover:border-[#C69A36] transition-colors"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#C69A36]" />
              </Link>
            </div>

            {/* Technical Drafting Metrics Bar */}
            <div className="pt-6 border-t border-[#E2DDD0] grid grid-cols-3 gap-4 max-w-xl font-mono-tech text-xs">
              <div>
                <span className="text-[10px] text-[#7A8C84] uppercase block">SCALE</span>
                <span className="text-base font-bold text-[#064A32]">1.5M SQ. FT.</span>
                <span className="text-[9.5px] text-[#A3B8B0] block">Reference Benchmark</span>
              </div>
              <div>
                <span className="text-[10px] text-[#7A8C84] uppercase block">OVERSIGHT</span>
                <span className="text-base font-bold text-[#C69A36]">360° PMC</span>
                <span className="text-[9.5px] text-[#A3B8B0] block">Full Lifecycle</span>
              </div>
              <div>
                <span className="text-[10px] text-[#7A8C84] uppercase block">DELIVERY</span>
                <span className="text-base font-bold text-[#064A32]">4 PRIORITIES</span>
                <span className="text-[9.5px] text-[#A3B8B0] block">Time Cost Quality HSE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Architectural Image Reveal Plate (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Background CAD Framing Box with Offset */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-[#C69A36]/40 pointer-events-none hidden sm:block" />

            <div className="relative bg-[#FFFFFF] border border-[#D5CDBE] p-3 shadow-xl">
              {/* Image Frame with Slit-Mask */}
              <div className="relative overflow-hidden aspect-[4/5] bg-[#14251E]">
                <img
                  src="/images/hero-campus.jpg"
                  alt="15,00,000 Sq. Ft. IT Software Park Campus Reference Architecture"
                  className="w-full h-full object-cover object-center filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
                />

                {/* Technical Drawing Elevation Overlay */}
                <div className="absolute top-3 left-3 bg-[#14251E]/90 text-[#DFBE65] font-mono-tech text-[10px] px-2.5 py-1 border border-[#284439] backdrop-blur-sm">
                  DWG // 04.1 — IT SOFTWARE PARK
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#14251E]/95 text-[#F8F6ED] p-3.5 border border-[#284439] backdrop-blur-sm space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#C69A36]">
                    <span>PROPOSED PMC FRAMEWORK</span>
                    <span>15,00,000 SQ. FT.</span>
                  </div>
                  <p className="text-xs text-[#CBD8D2] font-medium leading-snug">
                    Integrated civil, structural, MEP, façade, BMS automation and commissioning oversight.
                  </p>
                </div>
              </div>

              {/* Technical Caption Below Image */}
              <div className="pt-3 flex items-center justify-between text-[10px] font-mono-tech text-[#5C6E66]">
                <span>ELEVATION: COMMERCIAL CAMPUS</span>
                <span className="text-[#C69A36]">• REFERENCE CAPABILITY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Understated Architectural Scroll Indicator */}
        <div className="mt-14 pt-6 border-t border-[#E2DDD0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#5C6E66]">
          <div className="flex items-center space-x-2">
            <ArrowDown className="w-3.5 h-3.5 text-[#C69A36] animate-bounce" />
            <span>[SCROLL TO EXPLORE ARCHITECTURAL DOSSIER // 01-08]</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span>TIME</span>
            <span>•</span>
            <span>COST</span>
            <span>•</span>
            <span>QUALITY</span>
            <span>•</span>
            <span className="text-[#064A32] font-bold">SAFETY & RISK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
