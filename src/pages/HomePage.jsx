import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Award, ShieldAlert, Coins, 
  Compass, Layers, ShieldCheck, CheckCircle2, Building2,
  CalendarDays, DraftingCompass,
  CheckSquare, ChevronRight, Handshake, Building, Flag,
  FileSpreadsheet, PackageCheck, HardHat, Sliders, KeyRound, Workflow
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import CinematicHero from '@/features/home/components/CinematicHero';
import CTAButton from '@/components/shared/CTAButton';
import { companyProfile } from '@/data/company-profile';

const valueIcons = {
  Integrity: ShieldCheck,
  Planning: Compass,
  Coordination: Layers,
  Control: Award,
  Quality: CheckCircle2,
  Delivery: Building2
};

const stageIconsMap = {
  '01': Flag,
  '02': CalendarDays,
  '03': DraftingCompass,
  '04': FileSpreadsheet,
  '05': PackageCheck,
  '06': HardHat,
  '07': Sliders,
  '08': KeyRound,
};

export default function HomePage() {
  const { lifecycleStages, foundation, contact } = companyProfile;

  return (
    <>
      <SEOHead
        title="Home | Pavana Projects"
        description="Pavana Projects: Integrated Real Estate Solutions, Construction Services, Joint Venture Partnerships, and Project Management Consultancy (PMC) in Bangalore, India."
      />

      {/* 1. CINEMATIC HERO (APPROVED & PRESERVED) */}
      <CinematicHero />

      {/* 2. COMPANY OVERVIEW & 4 CORE DELIVERY PRIORITIES */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                <Compass className="w-3.5 h-3.5 text-[#C69A36]" />
                <span>OUR APPROACH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#064A32] leading-tight">
                Complex projects demand more than coordination. <br className="hidden sm:inline" />
                <span className="text-[#14251E] italic font-semibold">
                  They demand control.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#2C3E36] leading-relaxed">
                Pavana Projects is positioned as a comprehensive <strong>Real Estate Solutions</strong>, construction management, and <strong>Project Management Consultancy (PMC)</strong> partner focused on structured planning, multidisciplinary coordination, project controls, and delivery management for built environments.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Our objective is clear: bringing clarity, control, and accountability to projects from initial brief and feasibility through procurement, execution, testing, and handover. We serve as the client’s trusted project-management interface across consultants, contractors, vendors, authorities, and specialist agencies.
              </p>

              {/* The 4 Core Delivery Priorities */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-xs hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>TIME</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Programme Baseline</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">Critical-path control</span>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-xs hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Coins className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>COST</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Budget Visibility</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">Variation control</span>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-xs hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>QUALITY</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Right-First-Time</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">Auditable ITPs & NCRs</span>
                </div>

                <div className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-xs hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>SAFETY</span>
                  </div>
                  <span className="text-[#14251E] text-xs font-semibold block">Zero-Incident HSE</span>
                  <span className="text-[11px] text-[#5C6E66] block leading-snug">High-risk permits</span>
                </div>
              </div>

              <div className="pt-2">
                <CTAButton to="/about">
                  Learn About Us
                </CTAButton>
              </div>
            </div>

            {/* Right Architectural Vignette: PRESERVED CONTROL TOWER ARCHITECTURE IMAGE */}
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

      {/* 3. OVERVIEW OF MAJOR SERVICES */}
      <section className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                <Layers className="w-3.5 h-3.5 text-[#C69A36]" />
                <span>OUR SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
                Broader Real Estate & Construction Solutions
              </h2>
              <p className="text-base text-[#4C5D56] leading-relaxed">
                From ground-up construction to bespoke interiors, turnkey coordination, and rigorous project controls, we deliver integrated solutions across all built-environment phases.
              </p>
            </div>

            <CTAButton to="/services">
              Explore Services
            </CTAButton>
          </div>

          {/* 4 Primary Service Spectrum Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Construction Solutions */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E2DDD0] border-t-4 border-t-[#064A32] space-y-4 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#064A32] text-[#DFBE65] flex items-center justify-center rounded-[3px] group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                  Construction Solutions
                </h3>
                <p className="text-xs text-[#5C6E66] leading-relaxed">
                  Residential construction, commercial building, civil works, and comprehensive site development coordinated with engineering discipline.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2DDD0]">
                <Link to="/services#construction-solutions" className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#064A32] hover:text-[#C69A36] transition-colors">
                  <span>View Construction Scope</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Interior Design & Space Planning */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E2DDD0] border-t-4 border-t-[#C69A36] space-y-4 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#C69A36] text-[#FFFFFF] flex items-center justify-center rounded-[3px] group-hover:scale-105 transition-transform">
                  <DraftingCompass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                  Interior Design & Planning
                </h3>
                <p className="text-xs text-[#5C6E66] leading-relaxed">
                  Functional space planning, aesthetic interior design, interior development fit-outs, and modernization for residential and commercial spaces.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2DDD0]">
                <Link to="/services#interior-solutions" className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#064A32] hover:text-[#C69A36] transition-colors">
                  <span>View Interior Solutions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Turnkey Projects */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E2DDD0] border-t-4 border-t-[#064A32] space-y-4 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#064A32] text-[#DFBE65] flex items-center justify-center rounded-[3px] group-hover:scale-105 transition-transform">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                  Turnkey Projects
                </h3>
                <p className="text-xs text-[#5C6E66] leading-relaxed">
                  Single-point accountability from project brief to completion, coordinating planning, packaging, contractor sequencing, and handover readiness.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2DDD0]">
                <Link to="/services#turnkey-projects" className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#064A32] hover:text-[#C69A36] transition-colors">
                  <span>View Turnkey Approach</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Project Management Consultancy (PMC) */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E2DDD0] border-t-4 border-t-[#C69A36] space-y-4 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#14251E] text-[#DFBE65] flex items-center justify-center rounded-[3px] group-hover:scale-105 transition-transform">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                  Project Management (PMC)
                </h3>
                <p className="text-xs text-[#5C6E66] leading-relaxed">
                  Nine disciplined PMC capabilities: scheduling, design management, tender coordination, MEP integration, QA/QC, HSE, and controls.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2DDD0]">
                <Link to="/services#pmc-services" className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#064A32] hover:text-[#C69A36] transition-colors">
                  <span>View PMC Capabilities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REAL ESTATE SOLUTIONS OVERVIEW */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                <Building className="w-3.5 h-3.5 text-[#C69A36]" />
                <span>REAL ESTATE SOLUTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
                Guiding Property Developments From Concept to Reality
              </h2>
              <p className="text-sm sm:text-base text-[#2C3E36] leading-relaxed">
                Navigating real estate projects requires comprehensive alignment between development vision, zoning feasibility, architectural coordination, contractor procurement, and commercial oversight.
              </p>
              <p className="text-xs sm:text-sm text-[#4C5D56] leading-relaxed">
                Whether planning residential layouts, commercial facilities, or adaptive renovations, Pavana Projects applies disciplined project controls to protect client interests across every stage of the property development lifecycle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start space-x-2 text-xs text-[#2C3E36]">
                  <span className="text-[#064A32] font-bold select-none">•</span>
                  <span>Residential & Plotted Development Coordination</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-[#2C3E36]">
                  <span className="text-[#064A32] font-bold select-none">•</span>
                  <span>Commercial & Office Building Planning</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-[#2C3E36]">
                  <span className="text-[#064A32] font-bold select-none">•</span>
                  <span>Construction Packaging & Procurement</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-[#2C3E36]">
                  <span className="text-[#064A32] font-bold select-none">•</span>
                  <span>Quality, Safety & Handover Governance</span>
                </div>
              </div>

              <div className="pt-3">
                <CTAButton to="/services#real-estate-solutions">
                  Explore Real Estate Solutions
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-[#F8F6ED] border border-[#E2DDD0] border-l-4 border-l-[#C69A36] space-y-5 shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] uppercase tracking-wider font-bold">
                  <span>INTEGRATED CAPABILITY MATRIX</span>
                </div>
                <h3 className="text-xl font-bold text-[#14251E]">
                  How We Protect Your Property Investment
                </h3>
                <p className="text-xs text-[#4C5D56] leading-relaxed">
                  Real estate projects face common pitfalls: uncoordinated drawings, scope creep, unmonitored contractor variations, and delayed statutory handovers. Our framework replaces uncertainty with documented accountability.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#14251E]">Scope & Packaging Clarity</span>
                    <span className="font-mono-tech text-[10px] text-[#C69A36] uppercase">Pre-Tender Gate</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#14251E]">Execution & Site Coordination</span>
                    <span className="font-mono-tech text-[10px] text-[#064A32] uppercase">Active Supervision</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#14251E]">Cost Visibility & Variation Control</span>
                    <span className="font-mono-tech text-[10px] text-[#C69A36] uppercase">Monthly Audit</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#14251E]">Commissioning & Occupancy Readiness</span>
                    <span className="font-mono-tech text-[10px] text-[#064A32] uppercase">Handover Gate</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROMINENT JOINT VENTURE & DEVELOPMENT PARTNERSHIPS SECTION */}
      <section className="bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69A36]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#064A32]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C69A36]/20 border border-[#C69A36]/40 text-[#DFBE65] text-[11px] font-mono-tech font-bold uppercase tracking-[0.18em]">
                <Handshake className="w-3.5 h-3.5" />
                <span>STRATEGIC COLLABORATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-tight">
                Joint Venture & Land Development Partnerships
              </h2>

              <p className="text-base sm:text-lg text-[#CBD8D2] leading-relaxed">
                Unlocking property potential through structured, transparent development collaboration. We invite landowners, property owners, and strategic partners to explore collaborative development models backed by professional execution oversight.
              </p>

              <p className="text-sm text-[#A3B8B0] leading-relaxed">
                Pavana Projects provides the technical feasibility, project planning, multidisciplinary coordination, and delivery management needed to convert promising land parcels into landmark residential, commercial, or mixed-use assets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-1">
                  <span className="text-xs font-mono-tech text-[#DFBE65] font-bold block">FEASIBILITY</span>
                  <span className="text-xs text-[#FFFFFF] font-semibold block">Zoning & Planning</span>
                  <span className="text-[11px] text-[#A3B8B0] block">Preliminary potential review</span>
                </div>

                <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-1">
                  <span className="text-xs font-mono-tech text-[#DFBE65] font-bold block">TRANSPARENCY</span>
                  <span className="text-xs text-[#FFFFFF] font-semibold block">Defined Roles</span>
                  <span className="text-[11px] text-[#A3B8B0] block">Clear stakeholder alignment</span>
                </div>

                <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-1">
                  <span className="text-xs font-mono-tech text-[#DFBE65] font-bold block">EXECUTION</span>
                  <span className="text-xs text-[#FFFFFF] font-semibold block">Delivery Controls</span>
                  <span className="text-[11px] text-[#A3B8B0] block">Time, cost & quality rigor</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <CTAButton to="/contact" variant="gold">
                  Discuss a Joint Venture
                </CTAButton>
                <CTAButton to="/services#joint-venture">
                  Explore JV Framework
                </CTAButton>
              </div>
            </div>

            {/* Right Interactive Highlights Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1A2E26] border-2 border-[#C69A36]/50 p-6 sm:p-8 space-y-5 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                  <span className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-wider font-bold">
                    COLLABORATION PATHWAY
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#A3B8B0]">5 STEPS</span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start space-x-3 pb-3 border-b border-[#284439]/60">
                    <span className="w-5 h-5 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-mono-tech text-[10px] shrink-0 font-bold border border-[#C69A36]/40">1</span>
                    <div>
                      <strong className="text-[#FFFFFF] block">Initial Enquiry & Opportunity Review</strong>
                      <span className="text-[#A3B8B0] text-[11px]">Confidential sharing of land parameters and objectives.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pb-3 border-b border-[#284439]/60">
                    <span className="w-5 h-5 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-mono-tech text-[10px] shrink-0 font-bold border border-[#C69A36]/40">2</span>
                    <div>
                      <strong className="text-[#FFFFFF] block">Preliminary Discussions</strong>
                      <span className="text-[#A3B8B0] text-[11px]">Aligning property characteristics with potential asset classes.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pb-3 border-b border-[#284439]/60">
                    <span className="w-5 h-5 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-mono-tech text-[10px] shrink-0 font-bold border border-[#C69A36]/40">3</span>
                    <div>
                      <strong className="text-[#FFFFFF] block">Feasibility & Development Planning</strong>
                      <span className="text-[#A3B8B0] text-[11px]">Zoning guidelines, layout options, and preliminary scheduling.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pb-3 border-b border-[#284439]/60">
                    <span className="w-5 h-5 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-mono-tech text-[10px] shrink-0 font-bold border border-[#C69A36]/40">4</span>
                    <div>
                      <strong className="text-[#FFFFFF] block">Responsibilities & Coordination</strong>
                      <span className="text-[#A3B8B0] text-[11px]">Clear delineation of planning, management, and oversight roles.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-mono-tech text-[10px] shrink-0 font-bold border border-[#C69A36]/40">5</span>
                    <div>
                      <strong className="text-[#FFFFFF] block">Development Planning & Project Delivery</strong>
                      <span className="text-[#A3B8B0] text-[11px]">Mobilizing the project execution plan with disciplined milestones.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#284439] text-[11px] text-[#A3B8B0] italic">
                  * All joint venture explorations are conducted confidentially on a preliminary basis.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PROJECT DELIVERY LIFECYCLE (8 STAGES FROM PDF) */}
      <section className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <Workflow className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>PROJECT DELIVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Eight-Stage Sequential Delivery Lifecycle
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Maintaining an unbroken line of sight from strategic brief to physical occupancy and final commercial closure.
            </p>
          </div>

          {/* Compact 8-Stage Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
            {lifecycleStages.map((stg) => {
              const StageIcon = stageIconsMap[stg.step] || Flag;
              return (
                <div
                  key={stg.step}
                  className="p-3.5 bg-[#FFFFFF] border border-[#E2DDD0] border-t-2 border-t-[#064A32] space-y-1.5 shadow-xs hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech font-bold text-[#C69A36]">
                      {stg.step}
                    </span>
                    <StageIcon className="w-3.5 h-3.5 text-[#064A32] group-hover:text-[#C69A36] transition-colors" />
                  </div>
                  <div className="text-xs font-bold text-[#14251E] uppercase tracking-wider">
                    {stg.name}
                  </div>
                  <div className="text-[10px] text-[#5C6E66] leading-snug line-clamp-2">
                    {stg.focus}
                  </div>
                </div>
              );
            })}
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

      {/* 7. COMPANY VALUES & DIFFERENTIATORS FROM PDF */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Six Core Delivery Tenets
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              The fundamental principles that govern our approach to real estate solutions, construction coordination, and project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundation.values.map((val) => {
              const IconComp = valueIcons[val.name] || ShieldCheck;
              return (
                <div
                  key={val.name}
                  className="p-6 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-3 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#E2DDD0]">
                    <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E2DDD0] text-[#064A32] flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-[#064A32]" />
                    </div>
                    <span className="text-[10px] font-mono-tech uppercase font-bold text-[#064A32]">
                      Value
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#14251E]">
                    {val.name}
                  </h3>
                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {val.meaning}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. ENQUIRY CALL TO ACTION */}
      <section className="py-14 bg-[#064A32] text-[#F8F6ED] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono-tech text-[#DFBE65] tracking-[0.2em] uppercase block">
                INITIATE A CONSULTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
                Have a Development or Project in Mind?
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD8D2] leading-relaxed">
                Connect with our planning, project controls, and execution directors at our registered office: {contact.address}.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CTAButton to="/contact" variant="gold">
                Contact Us
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
