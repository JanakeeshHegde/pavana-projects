import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Clock, Award, ShieldAlert, Coins, 
  Compass, Layers, ShieldCheck, CheckCircle2, Building2,
  CalendarDays, DraftingCompass, FileSpreadsheet, HardHat, Cpu,
  CheckSquare, ChevronRight, MapPin, Building
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import CinematicHero from '@/features/home/components/CinematicHero';
import CTAButton from '@/components/shared/CTAButton';
import { companyProfile } from '@/data/company-profile';

const serviceIcons = {
  'planning-scheduling': CalendarDays,
  'design-management': DraftingCompass,
  'tender-procurement': FileSpreadsheet,
  'construction-management': HardHat,
  'cost-commercial': Coins,
  'mep-coordination': Cpu,
  'qa-qc-management': Award,
  'hse-coordination': ShieldAlert,
  'testing-commissioning': CheckSquare,
};

const valueIcons = {
  Integrity: ShieldCheck,
  Planning: Compass,
  Coordination: Layers,
  Control: Award,
  Quality: CheckCircle2,
  Delivery: Building2
};

export default function HomePage() {
  const { services, lifecycleStages, referenceProject, foundation, contact } = companyProfile;

  return (
    <>
      <SEOHead
        title="Home"
        description="Pavana Projects — Integrated Project Management Consultancy (PMC) for ambitious commercial, IT/ITES and infrastructure developments. Bangalore, India."
      />

      {/* 1. CINEMATIC HERO */}
      <CinematicHero />

      {/* 2. COMPANY OVERVIEW & 4 CORE PRIORITIES */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                <span>COMPANY OVERVIEW</span>
                <span>•</span>
                <span>PMC POSITIONING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#064A32] leading-tight">
                Complex projects demand more than coordination. <br className="hidden sm:inline" />
                <span className="text-[#14251E] italic font-semibold">
                  They demand control.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#2C3E36] leading-relaxed">
                Pavana Projects is positioned as a professional <strong>Project Management Consultancy (PMC)</strong> focused on structured planning, multidisciplinary coordination, project controls, and delivery management for large-scale built environments.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Our objective: bringing clarity, control, and accountability to complex projects from initiation through commissioning and handover. We serve as the client’s project-management interface across consultants, contractors, vendors, authorities, and specialist agencies.
              </p>

              {/* The 4 Core Delivery Priorities */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>TIME</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Programme Baseline</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">Critical-path control</span>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Coins className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>COST</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Budget Visibility</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">Variation control</span>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>QUALITY</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Right-First-Time</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">Auditable ITPs & NCRs</span>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>SAFETY</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Zero-Incident HSE</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">High-risk permits</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.16em] text-[#064A32] hover:text-[#C69A36] transition-colors group"
                >
                  <span>Learn More About Pavana Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#C69A36] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Vignette (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#D5CDBE] bg-[#F8F6ED] p-3 shadow-2xl">
                <div className="relative overflow-hidden aspect-[4/5] bg-[#14251E] group">
                  <img
                    src="/images/control tower architecture.png"
                    alt="Control tower architecture"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#14251E]/95 text-[#DFBE65] font-mono-tech text-[10px] px-2.5 py-1 border border-[#284439]">
                    CONTROL TOWER ARCHITECTURE
                  </div>
                </div>

                <div className="p-4 bg-[#FFFFFF] border-t border-[#E2DDD0] space-y-1">
                  <span className="text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-wider block font-bold">
                    GOVERNANCE PHILOSOPHY
                  </span>
                  <p className="text-xs text-[#2C3E36] font-medium leading-snug">
                    Converting on-site physical activity into actionable management information for developer leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL HIGHLIGHT: 15,00,000 SQ. FT. REFERENCE PROJECT PROFILE */}
      <section className="bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative border-2 border-[#C69A36]/40 p-2 bg-[#1A2E26] shadow-2xl overflow-hidden group">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0C1A14]">
                  <img
                    src="/images/it-software-park.jpg"
                    alt="15,00,000 Sq. Ft. IT Software Park Campus Profile"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14251E]/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-[#064A32] text-[#DFBE65] font-mono-tech text-[10px] px-2.5 py-1 border border-[#C69A36]/40">
                    REFERENCE PROFILE
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono-tech text-[#CBD8D2]">
                    <span className="text-[#DFBE65] font-bold">PROPOSED PMC FRAMEWORK</span> // 1.5M SQ. FT. CAMPUS
                  </div>
                </div>
              </div>

              {/* 3 Headline Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-[#1A2E26] border border-[#284439] text-center">
                  <div className="text-xl sm:text-2xl font-bold font-serif-arch text-[#DFBE65]">1.5M</div>
                  <div className="text-[10px] font-mono-tech text-[#A3B8B0] uppercase mt-0.5">Built-Up Area</div>
                </div>
                <div className="p-3 bg-[#1A2E26] border border-[#284439] text-center">
                  <div className="text-xl sm:text-2xl font-bold font-serif-arch text-[#FFFFFF]">9</div>
                  <div className="text-[10px] font-mono-tech text-[#A3B8B0] uppercase mt-0.5">Core Packages</div>
                </div>
                <div className="p-3 bg-[#1A2E26] border border-[#284439] text-center">
                  <div className="text-xl sm:text-2xl font-bold font-serif-arch text-[#DFBE65]">360°</div>
                  <div className="text-[10px] font-mono-tech text-[#A3B8B0] uppercase mt-0.5">PMC Oversight</div>
                </div>
              </div>
            </div>

            {/* Narrative Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#DFBE65] uppercase tracking-[0.2em]">
                <span>REFERENCE PROJECT PROFILE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFFF] leading-tight">
                15,00,000 Sq. Ft. IT Software Park
              </h2>

              <p className="text-sm sm:text-base text-[#CBD8D2] leading-relaxed">
                Demonstrating Pavana Projects' intended PMC framework for a large-scale commercial IT park. The role structures civil execution, MEP engineering, procurement, quality assurance, and integrated commissioning under a single control architecture.
              </p>

              <div className="p-4 bg-[#1A2E26] border-l-4 border-l-[#C69A36] border border-[#284439] text-xs text-[#CBD8D2] leading-relaxed">
                <strong className="text-[#DFBE65] block mb-1">Proposed PMC Framework:</strong>
                Integrates 9 core trade packages—from deep substructure civil works through high-performance facades, HT/LT power distribution, central HVAC, BMS automation, and statutory handover.
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <CTAButton to="/projects#it-software-park" variant="gold">
                  Inspect Project Framework
                </CTAButton>

                <CTAButton to="/projects#nine-packages" variant="gold">
                  9-Package Breakdown
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRIEF SERVICE HIGHLIGHTS (9 DISCIPLINES) */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                PMC SERVICE PORTFOLIO
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
                Nine Core Consulting Responsibilities
              </h2>
              <p className="text-base text-[#4C5D56] leading-relaxed">
                Comprehensive project management coverage across every technical and commercial dimension of development.
              </p>
            </div>

            <CTAButton to="/services" variant="green" className="shrink-0">
              View Detailed Portfolio & Deliverables
            </CTAButton>
          </div>

          {/* 9 Compact Discipline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, idx) => {
              const IconComp = serviceIcons[svc.id] || CalendarDays;
              return (
                <Link
                  key={svc.id}
                  to={`/services`}
                  className="group p-5 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] hover:border-[#064A32] hover:bg-[#FFFFFF] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                      <div className="w-8 h-8 bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#EAE6D6] px-2 py-0.5 border border-[#E2DDD0]">
                        Scope Discipline
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors mt-3">
                      {svc.title}
                    </h3>

                    <p className="text-xs text-[#5C6E66] mt-2 leading-relaxed">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2DDD0] mt-4 flex items-center justify-between text-[11px] font-mono-tech text-[#C69A36]">
                    <span>Inspect Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMPACT EIGHT-STAGE LIFECYCLE PREVIEW */}
      <section className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              DELIVERY METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Eight-Stage Delivery Lifecycle
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Maintaining an unbroken line of sight from strategic developer brief to physical occupancy and final commercial closure.
            </p>
          </div>

          {/* Compact 8-Stage Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
            {lifecycleStages.map((stg) => (
              <div
                key={stg.step}
                className="p-4 bg-[#FFFFFF] border border-[#E2DDD0] border-t-2 border-t-[#064A32] space-y-1.5 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-mono-tech font-bold text-[#C69A36]">
                  {stg.step}
                </div>
                <div className="text-xs font-bold text-[#14251E] uppercase tracking-wider">
                  {stg.name}
                </div>
                <div className="text-[10px] text-[#5C6E66] leading-snug line-clamp-2">
                  {stg.focus}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between p-5 bg-[#FFFFFF] border border-[#E2DDD0] gap-4">
            <div className="text-xs text-[#4C5D56]">
              <strong className="text-[#064A32]">Stage-Gate Control:</strong> Formal sign-off between client leadership and PMC is required before advancing to subsequent milestone packages.
            </div>
            <CTAButton to="/about#lifecycle">
              Explore Delivery Lifecycle
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 6. SHORT PROJECT-CONTROLS SUMMARY */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                PROJECT CONTROLS & VISIBILITY
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
                Actionable Oversight, Not Just Progress Logs
              </h2>
              <p className="text-base text-[#4C5D56] leading-relaxed">
                The purpose of project controls is to give developer leadership an early, auditable view of what is on track, what is at risk, and what decisions are required.
              </p>
            </div>

            <CTAButton to="/services#project-controls" variant="green" className="shrink-0">
              Explore Controls & Reporting Frequencies
            </CTAButton>
          </div>

          {/* 3 Executive Control Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E2DDD0]">
                <span className="text-xs font-mono-tech font-bold text-[#C69A36]">SCHEDULE HEALTH</span>
                <span className="text-[10px] font-mono-tech text-[#5C6E66] uppercase">[ WEEKLY ]</span>
              </div>
              <h3 className="text-base font-bold text-[#14251E]">Planned vs. Actual Tracking</h3>
              <p className="text-xs text-[#4C5D56] leading-relaxed">
                Baseline schedules, critical-path monitoring, milestone variance analysis, and contractor recovery plans.
              </p>
            </div>

            <div className="p-6 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E2DDD0]">
                <span className="text-xs font-mono-tech font-bold text-[#C69A36]">COMMERCIAL CONTROL</span>
                <span className="text-[10px] font-mono-tech text-[#5C6E66] uppercase">[ MONTHLY ]</span>
              </div>
              <h3 className="text-base font-bold text-[#14251E]">Budget vs. Commitments & Forecast</h3>
              <p className="text-xs text-[#4C5D56] leading-relaxed">
                Cashflow curves, pending variations, certified bill reconciliations, and projected final cost at completion.
              </p>
            </div>

            <div className="p-6 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E2DDD0]">
                <span className="text-xs font-mono-tech font-bold text-[#C69A36]">QUALITY & SAFETY</span>
                <span className="text-[10px] font-mono-tech text-[#5C6E66] uppercase">[ CONTINUOUS ]</span>
              </div>
              <h3 className="text-base font-bold text-[#14251E]">ITP Hold Points & NCR Closure</h3>
              <p className="text-xs text-[#4C5D56] leading-relaxed">
                Workmanship inspections, lab test records, high-risk work permits, and auditable root cause defect closeouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENQUIRY CALL TO ACTION */}
      <section className="py-20 bg-[#064A32] text-[#F8F6ED] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono-tech text-[#DFBE65] tracking-[0.2em] uppercase block">
                INITIATE A CONSULTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
                Have a Landmark Development in Mind?
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD8D2] leading-relaxed">
                Connect with our planning, project controls, and execution directors at our registered office: {contact.address}.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CTAButton to="/contact" variant="gold">
                Initiate Project Discussion
              </CTAButton>

              <CTAButton to="/services" variant="gold">
                Explore Services
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
