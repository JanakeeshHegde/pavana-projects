import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Layers, CheckCircle2, ArrowRight, ShieldCheck, ShieldAlert,
  ChevronRight, Info, MapPin, Sparkles, Cpu, HardHat, Factory, 
  Compass, CheckSquare, BarChart3, Truck, Zap, Droplets, Wind,
  ExternalLink
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import ScopeExplorer from '@/features/projects/components/ScopeExplorer';
import CTAButton from '@/components/shared/CTAButton';
import { companyProfile } from '@/data/company-profile';

export default function ProjectsPage() {
  const { referenceProject } = companyProfile;

  return (
    <>
      <SEOHead
        title="Projects"
        description="Explore Pavana Projects' portfolio: 15,00,000 Sq. Ft. IT Software Park framework, Commercial Office Towers, IT / ITES Campuses, Infrastructure developments, and 9-Package Scope."
      />

      <PageHero
        title="Projects"
        subtitle="Disciplined project management frameworks engineered for large-scale commercial, IT/ITES, and infrastructure developments."
        badge="Portfolio & Sector Frameworks"
      />

      {/* 1. SECTION: 15,00,000 SQ. FT. IT SOFTWARE PARK (ID: it-software-park) */}
      <section id="it-software-park" className="scroll-mt-36 py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency Disclaimer Notice Banner */}
          <div className="bg-[#F8F6ED] p-5 border-l-4 border-[#C69A36] border-t border-r border-b border-[#E5E0CE] text-xs text-[#2C3E36] leading-relaxed mb-12 flex items-start space-x-3.5 shadow-sm">
            <Info className="w-5 h-5 text-[#C69A36] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] uppercase tracking-wide block mb-1">
                Transparency & Specification Notice:
              </strong>
              {referenceProject.disclaimer}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>REFERENCE PROJECT PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                15,00,000 Sq. Ft. IT Software Park
              </h2>
              <p className="text-xs font-bold text-[#C69A36] uppercase tracking-wider">
                Comprehensive Proposed PMC Framework & Multidisciplinary Integration
              </p>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                {referenceProject.overview}
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                By maintaining a rigorous control tower across civil construction, electrical distribution, central HVAC systems, and statutory sign-offs, Pavana Projects ensures that ambitious campus developments stay on schedule, within commercial benchmarks, and adhere to world-class safety protocols.
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#064A32]">
                  Primary PMC Interfaces Managed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4C5D56]">
                  <div className="flex items-center space-x-2.5 bg-[#F8F6ED] p-3.5 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span className="font-medium text-[#14251E]">Client / Developer Leadership</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-[#F8F6ED] p-3.5 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span className="font-medium text-[#14251E]">Architects & Structural Engineers</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-[#F8F6ED] p-3.5 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span className="font-medium text-[#14251E]">MEP & Specialist Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-[#F8F6ED] p-3.5 border border-[#E5E0CE]">
                    <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                    <span className="font-medium text-[#14251E]">General Contractors & Trade Packages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Verified Parameters Table (5 Cols) */}
            <div className="lg:col-span-5 bg-[#14251E] text-[#F8F6ED] p-6 sm:p-8 border border-[#284439] space-y-6 shadow-xl">
              <div className="border-b border-[#284439] pb-4">
                <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block mb-1">
                  PROJECT PARAMETERS & FRAMEWORK
                </span>
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  Proposed PMC Framework
                </h3>
              </div>

              <dl className="space-y-4 text-xs">
                <div className="pb-3 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Project Type</dt>
                  <dd className="text-sm font-semibold text-[#FFFFFF] mt-1">{referenceProject.category}</dd>
                </div>

                <div className="pb-3 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Project Scale</dt>
                  <dd className="text-2xl font-bold font-serif-arch text-[#DFBE65] mt-1">{referenceProject.scale}</dd>
                </div>

                <div className="pb-3 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">PMC Objective</dt>
                  <dd className="text-sm text-[#E5E0CE] mt-1">Integrated management of time, cost, quality, safety and delivery</dd>
                </div>

                <div className="pb-3 border-b border-[#284439]">
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Delivery Model</dt>
                  <dd className="text-xs text-[#CBD8D2] mt-1">{referenceProject.deliveryModel}</dd>
                </div>

                <div>
                  <dt className="text-[#A3B8B0] uppercase tracking-wide">Key Success Measures</dt>
                  <dd className="text-xs text-[#DFBE65] mt-1 leading-relaxed">{referenceProject.successMeasures}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: 9-PACKAGE PROPOSED FRAMEWORK (ID: nine-packages) */}
      <section id="nine-packages" className="scroll-mt-36 py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>WORK BREAKDOWN STRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              9-Package Proposed Framework
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Explore the complete 9-package multidisciplinary coordination matrix connecting civil works, structural engineering, MEP services, building management systems, and final statutory handover.
            </p>
          </div>

          {/* Interactive Scope Explorer */}
          <ScopeExplorer showPackageStatus={true} />
        </div>
      </section>

      {/* 3. SECTION: COMMERCIAL OFFICE TOWERS (ID: commercial-towers) */}
      <section id="commercial-towers" className="scroll-mt-36 py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative group border-2 border-[#064A32] p-2 bg-[#F8F6ED] shadow-xl overflow-hidden">
                <img
                  src="/images/commercial-tower.jpg"
                  alt="Commercial Office Towers PMC Management"
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#064A32] text-[#DFBE65] font-mono-tech text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase border border-[#C69A36]/40 shadow-md">
                  GRADE-A HIGH-RISE
                </div>
              </div>
              <div className="p-3 bg-[#064A32] text-[#DFBE65] text-xs font-serif-arch text-center tracking-widest uppercase shadow-sm">
                HIGH-RISE COMMERCIAL OFFICE TOWERS
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>SECTOR PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Commercial Office Towers
              </h2>
              <p className="text-xs font-bold text-[#C69A36] uppercase tracking-wider">
                Scalable From 5,00,000 to 12,00,000+ Sq. Ft. Built-Up Area
              </p>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Grade-A commercial office towers demand uncompromising structural precision, facade performance, high-speed vertical transportation, and seamless core-and-shell tenant handovers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Building2 className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Unitized Curtain Wall & Facade</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Engineering oversight on double-glazed low-E facades, wind-tunnel pressure testing, and acoustic thermal optimization.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Layers className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Deep Basement Excavation</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Diaphragm walls, multi-level rock anchoring, dewatering controls, and multi-tier basement parking logistics.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <ShieldCheck className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>LEED & IGBC Green Building</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Documentation and verification of sustainable materials, energy simulation, and statutory green rating audits.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Zap className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>High-Speed Vertical Transport</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Destination dispatch elevator coordination, traffic simulation compliance, and shaft tolerance inspection.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <CTAButton to="/contact">
                  Inquire for Commercial Mandate
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: IT / ITES CAMPUSES (ID: it-campuses) */}
      <section id="it-campuses" className="scroll-mt-36 py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>SECTOR PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                IT / ITES Campuses
              </h2>
              <p className="text-xs font-bold text-[#C69A36] uppercase tracking-wider">
                Multi-Building Tech Parks & Integrated Work-Live Ecosystems
              </p>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Large-scale technology campuses involve multi-building master plans with high redundancy MEP requirements, centralized plant rooms, continuous power back-up, and phased tenant occupancy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Cpu className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Dual-Grid 66kV/11kV Substation</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Coordination of high-tension utility incomers, synchronized diesel generator plants, and ring-main distributions.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Wind className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Central Chilled Water Plant</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Variable primary pumping, magnetic-bearing chillers, cooling towers, and underground piping utility corridors.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Droplets className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>STP, WTP & Water Neutrality</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Zero-liquid discharge treatment plants, dual-plumbing flushing loops, and automated rainwater harvesting reservoirs.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <BarChart3 className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Phased Occupancy & Handover</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Sectional completion certificates, partial fire NOC clearances, and segregated tenant circulation zones.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <CTAButton to="/contact">
                  Inquire for Tech Campus Mandate
                </CTAButton>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="relative group border-2 border-[#064A32] p-2 bg-[#FFFFFF] shadow-xl overflow-hidden">
                <img
                  src="/images/tech-campus.jpg"
                  alt="IT / ITES Campus PMC Coordination"
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#064A32] text-[#DFBE65] font-mono-tech text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase border border-[#C69A36]/40 shadow-md">
                  CAMPUS SCALE
                </div>
              </div>
              <div className="p-3 bg-[#064A32] text-[#DFBE65] text-xs font-serif-arch text-center tracking-widest uppercase shadow-sm">
                INTEGRATED IT / ITES CAMPUS PRECINCTS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: INFRASTRUCTURE & INDUSTRIAL CAMPUSES (ID: infrastructure-campuses) */}
      <section id="infrastructure-campuses" className="scroll-mt-36 py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative group border-2 border-[#064A32] p-2 bg-[#F8F6ED] shadow-xl overflow-hidden">
                <img
                  src="/images/site-execution.jpg"
                  alt="Infrastructure & Industrial Logistics Campuses"
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#064A32] text-[#DFBE65] font-mono-tech text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase border border-[#C69A36]/40 shadow-md">
                  HEAVY LOGISTICS & INFRA
                </div>
              </div>
              <div className="p-3 bg-[#064A32] text-[#DFBE65] text-xs font-serif-arch text-center tracking-widest uppercase shadow-sm">
                INDUSTRIAL & LOGISTICS INFRASTRUCTURE
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>SECTOR PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Infrastructure & Industrial Campuses
              </h2>
              <p className="text-xs font-bold text-[#C69A36] uppercase tracking-wider">
                Industrial Parks, Warehousing Hubs & Logistics Corridors
              </p>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Logistics parks, factory estates, and heavy engineering facilities require focused PMC expertise in ground improvement, Pre-Engineered Building (PEB) superstructures, heavy vehicle pavements, and statutory industrial environmental compliance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Factory className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>PEB Structural Steel Erection</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Erection sequencing, crane load safety calculations, torque checks, and roof leakage warranty verification.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Truck className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Heavy-Duty Concrete Pavements</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    Pavement Quality Concrete (PQC), subgrade stabilization, load-bearing floor slabs, and laser screed level finishes.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <ShieldAlert className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>High-Hazard Fire Protection</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    ESFR high-density sprinkler heads, dedicated underground fire reservoirs, diesel booster pumps, and NBC compliance.
                  </p>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-1.5 shadow-sm hover:shadow-md hover:border-[#C69A36] transition-all group">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#064A32]">
                    <Compass className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>Statutory Industrial Clearance</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed">
                    State Pollution Control Board (KSPCB) consents, factory inspectorate sign-offs, and power sanction liaisons.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <CTAButton to="/contact">
                  Inquire for Industrial Mandate
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
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

          <CTAButton to="/contact" variant="gold" className="shrink-0">
            Initiate Project Consultation
          </CTAButton>
        </div>
      </section>
    </>
  );
}
