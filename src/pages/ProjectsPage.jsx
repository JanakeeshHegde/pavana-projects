import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Layers, CheckCircle2, ArrowRight, ShieldCheck, 
  ChevronRight, Info, PlusCircle, MapPin, Sparkles 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import ScopeExplorer from '@/features/projects/components/ScopeExplorer';
import { companyProfile } from '@/data/company-profile';

export default function ProjectsPage() {
  const { referenceProject } = companyProfile;

  return (
    <>
      <SEOHead
        title="Project Profiles — 15,00,000 Sq. Ft. IT Software Park Framework"
        description="Detailed reference project profile and proposed PMC coordination framework for a 15,00,000 Sq. Ft. IT Software Park commercial development in Bangalore."
      />

      <PageHero
        sectionNumber="04 & 05"
        sectionTitle="PROJECT PRESENTATION & SCOPE"
        title="15,00,000 Sq. Ft. IT Software Park"
        subtitle="Reference Project Profile & Proposed PMC Framework for large-scale commercial and IT/ITES developments."
        badge="Reference Capability Profile"
        image="/images/hero-campus.jpg"
      />

      {/* 1. PROJECT OVERVIEW & PARAMETER MATRIX */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency Disclaimer Notice Banner */}
          <div className="bg-[#F8F6ED] p-5 border-l-4 border-[#C69A36] text-xs text-[#2C3E36] leading-relaxed mb-12 flex items-start space-x-3">
            <Info className="w-5 h-5 text-[#C69A36] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] uppercase tracking-wide block mb-1">
                Transparency & Specification Notice (PDF Page 5):
              </strong>
              {referenceProject.disclaimer}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>04 | PROJECT PRESENTATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Large-Scale Built-Environment Integration
              </h2>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                {referenceProject.overview}
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C69A36]">
                  Primary PMC Interfaces Managed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4C5D56]">
                  <div className="flex items-center space-x-2 bg-[#F8F6ED] p-3 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span>Client / Developer Leadership</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#F8F6ED] p-3 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span>Architects & Structural Engineers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#F8F6ED] p-3 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span>MEP & Specialist Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#F8F6ED] p-3 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span>General Contractors & Trade Packages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Verified Parameters Table (5 Cols) */}
            <div className="lg:col-span-5 bg-[#14251E] text-[#F8F6ED] p-6 sm:p-8 border border-[#284439] space-y-6 shadow-md">
              <div className="border-b border-[#284439] pb-4">
                <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block mb-1">
                  PROJECT PARAMETERS (PDF PAGE 5)
                </span>
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  Proposed PMC Framework
                </h3>
              </div>

              <dl className="space-y-3.5 text-xs">
                <div className="pb-2.5 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Project Type</dt>
                  <dd className="text-sm font-semibold text-[#FFFFFF] mt-0.5">{referenceProject.category}</dd>
                </div>

                <div className="pb-2.5 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Project Scale</dt>
                  <dd className="text-2xl font-bold font-serif-arch text-[#DFBE65] mt-0.5">{referenceProject.scale}</dd>
                </div>

                <div className="pb-2.5 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">PMC Objective</dt>
                  <dd className="text-sm text-[#E5E0CE] mt-0.5">Integrated management of time, cost, quality, safety and delivery</dd>
                </div>

                <div className="pb-2.5 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Delivery Model</dt>
                  <dd className="text-xs text-[#CBD8D2] mt-0.5">{referenceProject.deliveryModel}</dd>
                </div>

                <div>
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Key Success Measures</dt>
                  <dd className="text-xs text-[#DFBE65] mt-0.5">{referenceProject.successMeasures}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 2. INTERACTIVE PACKAGE BREAKDOWN */}
          <div className="pt-6">
            <ScopeExplorer />
          </div>
        </div>
      </section>

      {/* 3. FUTURE PROJECT EXTENSIBILITY ARCHITECTURE */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>PROJECT PORTFOLIO EXPANSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Configurable PMC Architecture for Client Developments
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Pavana Projects’ consultancy model is ready to be deployed across single-tower IT developments, multi-acre tech campuses, commercial retail spaces, and specialized data centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Active Reference Profile */}
            <div className="bg-[#FFFFFF] p-6 border-2 border-[#064A32] space-y-4 shadow-sm relative">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#064A32] text-[#F8F6ED] absolute top-4 right-4">
                Active Reference Framework
              </span>

              <div className="text-xs font-serif-arch text-[#C69A36] font-bold">
                PROFILE 01
              </div>

              <h3 className="text-xl font-bold text-[#14251E]">
                IT / Software Park Campus
              </h3>

              <div className="text-sm font-semibold text-[#064A32]">
                15,00,000 Sq. Ft.
              </div>

              <p className="text-xs text-[#4C5D56] leading-relaxed">
                Full 360° integrated PMC coordination spanning civil substructure through multi-service MEP, BMS automation, and statutory occupancy sign-off.
              </p>

              <div className="pt-3 border-t border-[#E5E0CE] text-xs font-bold text-[#C69A36]">
                Framework Defined & Ready for Deployment
              </div>
            </div>

            {/* Extensible Future Commercial */}
            <div className="bg-[#FDFCF8] p-6 border border-dashed border-[#C69A36]/60 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#EAE6D6] text-[#064A32] inline-block mb-3">
                  Client Appointment Pipeline
                </span>

                <div className="text-xs font-serif-arch text-[#C69A36] font-bold">
                  PROFILE 02
                </div>

                <h3 className="text-xl font-bold text-[#14251E] mt-1">
                  Grade-A Commercial Tower
                </h3>

                <div className="text-sm font-semibold text-[#064A32]">
                  Customizable Scale (5L – 10L Sq. Ft.)
                </div>

                <p className="text-xs text-[#5C6E66] leading-relaxed mt-2">
                  Specialized design management, high-performance facade engineering, deep basement excavation controls, and LEED/IGBC green compliance tracking.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0CE]">
                <Link
                  to="/contact"
                  className="text-xs font-bold text-[#064A32] hover:text-[#C69A36] flex items-center space-x-1"
                >
                  <span>Inquire for Upcoming Commercial Tower</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Extensible Future Infrastructure */}
            <div className="bg-[#FDFCF8] p-6 border border-dashed border-[#C69A36]/60 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#EAE6D6] text-[#064A32] inline-block mb-3">
                  Client Appointment Pipeline
                </span>

                <div className="text-xs font-serif-arch text-[#C69A36] font-bold">
                  PROFILE 03
                </div>

                <h3 className="text-xl font-bold text-[#14251E] mt-1">
                  Infrastructure & Industrial Campus
                </h3>

                <div className="text-sm font-semibold text-[#064A32]">
                  Campus & Logistics Scale
                </div>

                <p className="text-xs text-[#5C6E66] leading-relaxed mt-2">
                  Heavy civil engineering, specialized substation power distribution, internal roads, storm drainage, and multi-agency statutory liaison.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0CE]">
                <Link
                  to="/contact"
                  className="text-xs font-bold text-[#064A32] hover:text-[#C69A36] flex items-center space-x-1"
                >
                  <span>Inquire for Industrial & Infra Mandate</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#14251E] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              APPOINTMENT & SCOPE STRUCTURING
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Have a Built-Environment Development in Planning?
            </h3>
            <p className="text-xs text-[#A3B8B0]">
              Let us adapt the 15,00,000 Sq. Ft. PMC framework to your project's specific site parameters and timeline.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
