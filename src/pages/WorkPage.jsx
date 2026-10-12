import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, 
  Info, Layers, Zap, Wind, Droplets, Network, Cpu, Trees, CheckSquare 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScopeExplorer from '../components/ScopeExplorer';
import { companyProfile } from '../data/companyData';

export default function WorkPage() {
  const { referenceProject } = companyProfile;

  return (
    <>
      <SEOHead
        title="WORK — 15,00,000 Sq. Ft. IT Software Park Framework"
        description="Explore the signature reference project profile and proposed PMC framework for a 15,00,000 Sq. Ft. IT Software Park, spanning civil, architectural, and multi-system MEP coordination."
      />

      {/* Editorial Page Header */}
      <section className="bg-[#F8F6ED] cad-grid-light border-b border-[#E2DDD0] pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2DDD0] text-xs font-mono-tech text-[#5C6E66]">
            <div>01 // WORK — SIGNATURE PORTFOLIO & PROPOSED PMC FRAMEWORK</div>
            <div className="text-[#064A32] font-bold">[15,00,000 SQ. FT. REFERENCE SCALE]</div>
          </div>

          <div className="pt-8 max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#064A32] leading-[1.05]">
              Architectural Scale, <br />
              <span className="text-[#14251E] font-light">Engineered Precision.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed max-w-2xl">
              Demonstrating Pavana Projects' comprehensive PMC capability across complex commercial developments, IT campuses, and infrastructure developments.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Disclaimer Notice */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-[#F8F6ED] border-l-4 border-[#C69A36] text-xs text-[#2A3B33] leading-relaxed flex items-start space-x-3">
            <Info className="w-5 h-5 text-[#C69A36] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] uppercase tracking-wide block mb-0.5">
                Specification & Reference Notice (PDF Page 5):
              </strong>
              {referenceProject.disclaimer}
            </div>
          </div>
        </div>
      </section>

      {/* Reference Project Profile Specification Sheet */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
                PROJECT DOSSIER // IT SOFTWARE PARK
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                15,00,000 Sq. Ft. Integrated Delivery Model
              </h2>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                {referenceProject.overview}
              </p>

              <div className="p-5 bg-[#F8F6ED] border border-[#E2DDD0] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#064A32]">
                  Core PMC Interfaces Synchronized
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4A5D54]">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#C69A36]" />
                    <span>Client / Developer Leadership</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#C69A36]" />
                    <span>Architects & Structural Engineers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#C69A36]" />
                    <span>MEP & Specialist Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#C69A36]" />
                    <span>General Contractors & Specialist Trades</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Parameters Box (5 Cols) */}
            <div className="lg:col-span-5 bg-[#14251E] text-[#F8F6ED] p-6 sm:p-8 border border-[#284439] space-y-5 shadow-xl font-mono-tech text-xs">
              <div className="pb-3 border-b border-[#284439]">
                <span className="text-[#DFBE65] uppercase tracking-widest block text-[10px]">
                  DWG SPEC // PARAMETERS
                </span>
                <h3 className="text-lg font-bold text-[#FFFFFF] mt-0.5 font-sans">
                  Proposed PMC Framework
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[#8EA49A] uppercase block text-[10px]">PROJECT SCALE</span>
                  <span className="text-2xl font-bold text-[#DFBE65]">{referenceProject.scale}</span>
                </div>
                <div className="pt-2 border-t border-[#284439]">
                  <span className="text-[#8EA49A] uppercase block text-[10px]">PROJECT TYPE</span>
                  <span className="text-[#FFFFFF]">{referenceProject.category}</span>
                </div>
                <div className="pt-2 border-t border-[#284439]">
                  <span className="text-[#8EA49A] uppercase block text-[10px]">PMC ROLE</span>
                  <span className="text-[#CBD8D2]">Integrated Time, Cost, Quality & Safety Management</span>
                </div>
                <div className="pt-2 border-t border-[#284439]">
                  <span className="text-[#8EA49A] uppercase block text-[10px]">DELIVERY SEQUENCE</span>
                  <span className="text-[#DFBE65]">{referenceProject.deliveryModel}</span>
                </div>
                <div className="pt-2 border-t border-[#284439]">
                  <span className="text-[#8EA49A] uppercase block text-[10px]">SUCCESS MEASURES</span>
                  <span className="text-[#CBD8D2]">{referenceProject.successMeasures}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive 9-Package Scope Explorer */}
          <div id="packages">
            <ScopeExplorer />
          </div>
        </div>
      </section>

      {/* Extensible Future Projects Pipeline */}
      <section id="pipeline" className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              DEPLOYMENT SCALABILITY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Configurable PMC Architecture for Client Developments
            </h2>
            <p className="text-sm text-[#4A5D54] leading-relaxed">
              Pavana Projects adapts its management architecture to suit varying development formats across commercial office towers, industrial campuses, and mixed-use complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] p-6 border-2 border-[#064A32] space-y-3 shadow-sm">
              <span className="text-[10px] font-mono-tech uppercase font-bold px-2 py-0.5 bg-[#064A32] text-[#F8F6ED] inline-block">
                Reference Framework
              </span>
              <h3 className="text-lg font-bold text-[#14251E]">IT / Software Park Campus</h3>
              <div className="text-sm font-bold text-[#064A32] font-mono-tech">15,00,000 Sq. Ft.</div>
              <p className="text-xs text-[#5C6E66] leading-relaxed">
                Full 360° integrated PMC coordination spanning civil substructure through multi-service MEP, BMS automation, and statutory occupancy sign-off.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 border border-[#E2DDD0] space-y-3">
              <span className="text-[10px] font-mono-tech uppercase font-bold px-2 py-0.5 bg-[#EAE5D6] text-[#064A32] inline-block">
                Pipeline Specification
              </span>
              <h3 className="text-lg font-bold text-[#14251E]">Commercial Grade-A Tower</h3>
              <div className="text-sm font-bold text-[#064A32] font-mono-tech">5,00,000 – 10,00,000 Sq. Ft.</div>
              <p className="text-xs text-[#5C6E66] leading-relaxed">
                Focused design management, high-performance façade engineering, deep basement excavation controls, and green building compliance.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 border border-[#E2DDD0] space-y-3">
              <span className="text-[10px] font-mono-tech uppercase font-bold px-2 py-0.5 bg-[#EAE5D6] text-[#064A32] inline-block">
                Pipeline Specification
              </span>
              <h3 className="text-lg font-bold text-[#14251E]">Infrastructure & Logistics Campus</h3>
              <div className="text-sm font-bold text-[#064A32] font-mono-tech">Campus & Industrial Scale</div>
              <p className="text-xs text-[#5C6E66] leading-relaxed">
                Heavy civil engineering, specialized substation power distribution, internal roads, storm drainage, and multi-agency statutory liaison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="bg-[#14251E] text-[#F8F6ED] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono-tech text-[#DFBE65] uppercase">READY TO STRUCTURE YOUR PROJECT?</div>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mt-1">Discuss Your Specific Development Brief</h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
