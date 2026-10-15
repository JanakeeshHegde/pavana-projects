import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Compass, Network, Sliders, CheckCircle2, Building2, 
  ArrowRight, Layers, FileCheck, HardHat, Cpu, Truck, Info, CheckSquare,
  Flag, Calendar, Hammer, Activity, CheckCircle, ChevronRight, Sparkles,
  Users, DraftingCompass, Wrench, Award, CalendarDays, Coins, ClipboardCheck, ShieldAlert,
  Target, FileSpreadsheet, PackageCheck, KeyRound
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import CTAButton from '@/components/shared/CTAButton';
import { companyProfile } from '@/data/company-profile';

const valueIcons = {
  Integrity: ShieldCheck,
  Planning: Compass,
  Coordination: Network,
  Control: Sliders,
  Quality: CheckCircle2,
  Delivery: Building2
};

const stageIcons = {
  '01': Flag,              // Initiate
  '02': CalendarDays,      // Plan
  '03': DraftingCompass,   // Design
  '04': FileSpreadsheet,   // Tender
  '05': PackageCheck,      // Procure
  '06': HardHat,           // Execute
  '07': Sliders,           // Commission
  '08': KeyRound,          // Handover
};

const stakeholderIconsMap = {
  'Client / Developer': Users,
  'Architect / Design Consultants': DraftingCompass,
  'Structural / MEP Consultants': Cpu,
  'Main Contractors': HardHat,
  'Specialist Contractors': Wrench,
  'Vendors / Suppliers': Truck,
  'Authorities / Statutory Agencies': FileCheck,
  'Facility / Operations Team': ShieldCheck,
};

const roleIconsMap = {
  'Project Director / PMC Head': Award,
  'Project Manager': Users,
  'Planning / Project Controls': CalendarDays,
  'Civil / Architectural Team': Building2,
  'MEP Management Team': Cpu,
  'QA/QC Team': ClipboardCheck,
  'HSE Team': ShieldAlert,
  'Contracts / Commercial Team': Coins,
  'Procurement / Coordination Team': Truck,
};

const valuePropsIconsMap = {
  'Integrated Management': Network,
  'Client-Focused Governance': ShieldCheck,
  'Project Controls': Sliders,
  'Multidisciplinary Coordination': Layers,
  'Execution Discipline': HardHat,
  'Handover Readiness': CheckCircle2,
};

// Stage-to-Stage Continuity Connections
const stageTransitions = {
  '01': 'Feeds into Stage 02: Approved project charter and stakeholder matrix form the foundation for Work Breakdown Structure (WBS) baseline scheduling.',
  '02': 'Feeds into Stage 03: Master baseline schedule and procurement packaging strategy guide design deliverable schedules and consultant release dates.',
  '03': 'Feeds into Stage 04: Coordinated, clash-resolved architectural and engineering drawings form the basis for Bill of Quantities (BOQ) and tender packages.',
  '04': 'Feeds into Stage 05: Comparative technical-commercial evaluation and contractor awards trigger long-lead procurement and vendor onboarding.',
  '05': 'Feeds into Stage 06: Verified equipment manufacturing, factory inspections, and logistics milestones align with site work-front readiness.',
  '06': 'Feeds into Stage 07: Substantial physical completion and signed-off Quality ITPs enable safe start of MEP integrated testing and commissioning.',
  '07': 'Feeds into Stage 08: Verified system balancing, BMS validation, and punch-list rectification clear the gateway for final statutory handover.',
  '08': 'Final Project Lifecycle State: Complete as-built dossier, O&M manuals, warranty certificates, and statutory records transferred to facility operations.',
};

export default function AboutPage() {
  const { foundation, lifecycleStages, organisationRoles, stakeholders, governancePrinciples, valueProps, contact } = companyProfile;
  const [activeStageTab, setActiveStageTab] = useState(0);

  const selectedStage = lifecycleStages[activeStageTab];
  const StageIcon = stageIcons[selectedStage.step] || Flag;

  return (
    <>
      <SEOHead
        title="About"
        description="About Pavana Projects: Professional Project Management Consultancy (PMC) founded on integrity, planning, coordination, control, quality, and delivery."
      />

      {/* 1. ARCHITECTURAL HERO SECTION (UNIFIED WITH SERVICES & CONTACT) */}
      <PageHero
        title="About Pavana Projects"
        subtitle="Bringing clarity, control, and accountability to real estate developments, construction solutions, and multidisciplinary Project Management Consultancy from project initiation through commissioning and handover."
        badge="Company Profile & Methodology"
        breadcrumbName="About"
        technicalNote="GOVERNANCE & METHODOLOGY"
      />

      {/* STICKY SUB-NAVIGATION BAR FOR SECTION DISCOVERY */}
      <div className="sticky top-[58px] sm:top-[68px] z-30 bg-[#0E1B15] border-b border-[#284439] py-1.5 sm:py-2 px-4 sm:px-6 shadow-md overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 sm:space-x-3 min-w-max">
          <span className="text-[10px] font-mono-tech uppercase font-bold text-[#DFBE65] pr-2 border-r border-[#284439]">
            DISCOVERY INDEX:
          </span>
          {[
            { label: 'Overview', href: '#overview' },
            { label: 'Core Values', href: '#values' },
            { label: '8-Stage Lifecycle', href: '#lifecycle' },
            { label: 'Stakeholders', href: '#governance' },
            { label: 'PMC Structure', href: '#organisation' },
            { label: 'Value Proposition', href: '#value-propositions' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] sm:text-xs font-mono-tech text-[#CBD8D2] hover:text-[#DFBE65] px-2 py-0.5 rounded transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* 1. COMPANY OVERVIEW & PROFESSIONAL POSITIONING */}
      <section id="overview" className="scroll-mt-36 py-12 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase">
                <span>COMPANY OVERVIEW</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Strategic Interface for Complex Built Environments
              </h2>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Pavana Projects is positioned as a trusted partner for <strong>real estate and construction-related solutions</strong>, structured project coordination, disciplined planning, and professional <strong>Project Management Consultancy (PMC)</strong> across commercial, residential, and built-environment developments.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Our approach is built around one clear objective: <strong>bringing clarity, control and accountability</strong> to complex projects from project initiation through commissioning and handover.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Pavana Projects is designed to act as the client’s project-management interface across consultants, contractors, vendors, statutory stakeholders and specialist agencies—ensuring that developer and client priorities in Time, Cost, Quality, and Safety are protected at every stage.
              </p>

              <div className="p-4 bg-[#F8F6ED] border-l-4 border-[#C69A36] text-xs text-[#064A32] font-semibold leading-relaxed">
                “CREATING LANDMARKS, SHAPING FUTURES.” — Grounded in engineering rigor, transparent documentation, and accountable leadership.
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#14251E] text-[#F8F6ED] p-8 border border-[#284439] space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 arch-grid-dark opacity-30 pointer-events-none" />
                <div className="relative">
                  <span className="text-xs font-mono-tech text-[#DFBE65] tracking-widest uppercase block mb-1">
                    FOUNDATION METRICS
                  </span>
                  <h3 className="text-xl font-bold text-[#FFFFFF]">
                    Capability Benchmarks
                  </h3>
                </div>

                <div className="space-y-4 relative text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                    <span className="text-[#A3B8B0]">Asset Scope</span>
                    <span className="text-[#DFBE65] font-bold font-mono-tech text-sm">Commercial & Residential</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                    <span className="text-[#A3B8B0]">PMC Approach</span>
                    <span className="text-[#FFFFFF] font-semibold">360° Integrated Coordination</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                    <span className="text-[#A3B8B0]">Delivery Priorities</span>
                    <span className="text-[#DFBE65] font-semibold">Time, Cost, Quality, Safety & Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A3B8B0]">Registered Office</span>
                    <span className="text-[#FFFFFF]">Mathikere, Bangalore – 560054</span>
                  </div>
                </div>

                <div className="pt-2">
                  <CTAButton to="/contact" variant="gold" className="w-full">
                    Connect With Our Directors
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION, MISSION & 6 CORE VALUES */}
      <section id="values" className="scroll-mt-36 py-12 lg:py-16 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase">
              <span>OUR FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Vision, Mission & Core Values
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Every system and procedure at Pavana Projects is designed to align architectural intent with physical constructability and financial predictability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="group bg-[#FFFFFF] p-8 sm:p-10 border border-[#D5CDBE] border-t-4 border-t-[#C69A36] space-y-4 relative shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#F8F6ED] border border-[#E5E0CE] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-[#C69A36]" />
                  </div>
                  <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#C69A36]">
                    OUR VISION
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-[#5C6E66] uppercase tracking-wider bg-[#F8F6ED] px-2 py-0.5 border border-[#E5E0CE]">
                  STRATEGIC DIRECTION
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#14251E]">
                A Trusted Partner for Landmark Developments
              </h3>
              <p className="text-base text-[#3C4E46] leading-relaxed italic">
                “{foundation.vision}”
              </p>
            </div>

            {/* Mission Card */}
            <div className="group bg-[#064A32] text-[#F8F6ED] p-8 sm:p-10 border border-[#C69A36]/50 border-t-4 border-t-[#DFBE65] space-y-4 relative shadow-md hover:shadow-xl transition-all duration-300 cad-grid-dark">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#14251E] border border-[#284439] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-[#DFBE65]" />
                  </div>
                  <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#DFBE65]">
                    OUR MISSION
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-[#DFBE65] uppercase tracking-wider bg-[#14251E] px-2 py-0.5 border border-[#284439]">
                  EXECUTION CHARTER
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF]">
                Professional Systems Aligning Project Execution
              </h3>
              <p className="text-base text-[#CBD8D2] leading-relaxed italic">
                “{foundation.mission}”
              </p>
            </div>
          </div>

          {/* 6 CORE VALUES */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>CORE VALUES & WHAT THEY MEAN</span>
            </div>
            <h3 className="text-2xl font-bold text-[#064A32] mb-8">
              The Six Tenets of Pavana Projects Delivery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundation.values.map((val) => {
                const IconComp = valueIcons[val.name] || ShieldCheck;
                return (
                  <div
                    key={val.name}
                    className="group relative p-7 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-4 shadow-sm hover:shadow-xl hover:border-[#C69A36] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
                      <div className="w-8 h-8 rounded-full bg-[#F8F6ED] border border-[#E5E0CE] text-[#064A32] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4 text-[#064A32]" />
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#F8F6ED] px-2 py-0.5 border border-[#E5E0CE]">
                        Core Tenet
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                      {val.name}
                    </h4>

                    <p className="text-xs text-[#4C5D56] leading-relaxed">
                      {val.meaning}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EIGHT-STAGE PROJECT LIFECYCLE */}
      <section id="lifecycle" className="scroll-mt-36 py-12 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase">
              <span>DELIVERY METHODOLOGY</span>
              <span>•</span>
              <span>SEQUENTIAL FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Eight-Stage Project Delivery Lifecycle
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Pavana Projects maintains an unbroken line of sight from strategic developer vision to physical occupancy and auditable commercial closure. Every stage has defined objectives, hold points, and multidisciplinary coordination milestones.
            </p>
          </div>

          {/* Interactive Progressive Lifecycle Visual Narrative */}
          <div className="bg-[#F8F6ED] border border-[#E2DDD0] p-6 sm:p-10 shadow-sm relative">
            
            {/* 8-Stage Progress Step Bar */}
            <div className="pb-8 border-b border-[#E2DDD0]">
              <div className="flex items-center justify-between pb-3 text-xs font-mono-tech text-[#5C6E66]">
                <span>PROGRESSIVE TIMELINE : INITIATE TO HANDOVER</span>
                <span className="text-[#064A32] font-bold">PHASE {selectedStage.step} / 08</span>
              </div>

              {/* Progress Fill Bar */}
              <div className="w-full h-1.5 bg-[#E2DDD0] rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-[#064A32] via-[#C69A36] to-[#DFBE65] transition-all duration-500 ease-out"
                  style={{ width: `${((activeStageTab + 1) / 8) * 100}%` }}
                />
              </div>

              {/* 8 Clickable Stage Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {lifecycleStages.map((stg, idx) => {
                  const isSelected = idx === activeStageTab;
                  const TabStageIcon = stageIcons[stg.step] || Flag;
                  return (
                    <button
                      key={stg.step}
                      onClick={() => setActiveStageTab(idx)}
                      className={`p-3 text-left transition-all border ${
                        isSelected
                          ? 'bg-[#064A32] text-[#F8F6ED] border-[#064A32] shadow-md ring-2 ring-[#C69A36]'
                          : 'bg-[#FFFFFF] text-[#2C3E36] border-[#E2DDD0] hover:border-[#C69A36]/60 hover:bg-[#F3EFE3]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-mono-tech font-bold ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
                          {stg.step}
                        </span>
                        <TabStageIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#DFBE65]' : 'text-[#064A32]'}`} />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider truncate mt-0.5">
                        {stg.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Stage Detailed Panel */}
            <div className="pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Stage Narrative (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0 shadow-sm">
                      <StageIcon className="w-6 h-6 text-[#DFBE65]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono-tech font-bold uppercase tracking-widest text-[#064A32] block">
                        FOCUS: {selectedStage.focus}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#14251E]">
                        {selectedStage.name} STAGE
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-[#3C4E46] leading-relaxed">
                    {selectedStage.description}
                  </p>

                  {/* Stage-to-Stage Continuity Box */}
                  <div className="p-4 bg-[#FFFFFF] border-l-4 border-[#C69A36] text-xs text-[#2C3E36] leading-relaxed shadow-xs">
                    <strong className="text-[#064A32] uppercase tracking-wide block mb-1">
                      Sequential Connection to Next Milestone:
                    </strong>
                    {stageTransitions[selectedStage.step]}
                  </div>

                  <div className="p-4 bg-[#FFFFFF] border-l-4 border-[#064A32] text-xs text-[#4C5D56] leading-relaxed shadow-xs">
                    <strong className="text-[#064A32] uppercase tracking-wide block mb-1">Stage-Gate Control:</strong>
                    Formal sign-off between developer leadership, PMC Project Director, and lead consultants is required before releasing subsequent package commitments.
                  </div>

                  {/* Stage Navigation Buttons */}
                  <div className="flex items-center space-x-3 pt-3">
                    <button
                      onClick={() => setActiveStageTab(Math.max(0, activeStageTab - 1))}
                      disabled={activeStageTab === 0}
                      className="px-4 py-2 border border-[#E2DDD0] bg-[#FFFFFF] text-xs font-bold uppercase tracking-wider text-[#064A32] disabled:opacity-40 hover:bg-[#F3EFE3] transition-colors"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => setActiveStageTab(Math.min(7, activeStageTab + 1))}
                      disabled={activeStageTab === 7}
                      className="px-4 py-2 border border-[#064A32] bg-[#064A32] text-xs font-bold uppercase tracking-wider text-[#DFBE65] disabled:opacity-40 hover:bg-[#043624] transition-colors"
                    >
                      Next Stage →
                    </button>
                  </div>
                </div>

                {/* Key Activities & Deliverables Box (5 Cols) */}
                <div className="lg:col-span-5 bg-[#FFFFFF] p-6 border border-[#E2DDD0] space-y-4 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                    <span className="text-xs font-mono-tech text-[#C69A36] uppercase tracking-wider font-bold">
                      STAGE DELIVERABLES & OUTPUTS
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#5C6E66] bg-[#F8F6ED] px-2 py-0.5 border border-[#E2DDD0]">
                      {(selectedStage.deliverables || []).length} MILESTONES
                    </span>
                  </div>

                  <div className="space-y-3">
                    {(selectedStage.deliverables || []).map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-2.5 text-xs text-[#2C3E36]">
                        <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0 mt-0.5" />
                        <span className="leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD0]">
                    <div className="text-[11px] font-mono-tech text-[#5C6E66]">
                      <strong className="text-[#064A32]">Cross-Discipline Alignment:</strong> Coordinates architects, structural engineers, MEP consultants, contractors, and client representatives.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STAKEHOLDER COORDINATION & GOVERNANCE */}
      <section id="governance" className="scroll-mt-36 py-12 lg:py-16 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase">
              <span>INTEGRATED TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Stakeholder Coordination & Governance
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Large-scale developments succeed when every participant works to one coordinated plan. Pavana Projects provides a structured interface between the client and the complete project ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stakeholders.map((stk) => {
              const StkIcon = stakeholderIconsMap[stk.stakeholder] || Users;
              return (
                <div
                  key={stk.stakeholder}
                  className="group p-5 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#064A32] space-y-3 shadow-xs hover:shadow-md hover:border-[#C69A36] transition-all"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
                    <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:border-[#C69A36] group-hover:bg-[#064A32] flex items-center justify-center transition-all">
                      <StkIcon className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#F8F6ED] px-2 py-0.5 border border-[#E5E0CE]">
                      {stk.type}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                    {stk.stakeholder}
                  </h4>

                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {stk.interfaceRole}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 5 Core Governance Principles */}
          <div className="p-6 sm:p-8 bg-[#14251E] text-[#F8F6ED] border border-[#284439] space-y-4 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
              <span className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-wider font-bold">
                GOVERNANCE PRINCIPLES
              </span>
              <span className="text-[10px] font-mono-tech text-[#A3B8B0]">[ 5 TENETS ]</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
              {governancePrinciples.map((prin, pIdx) => (
                <div key={pIdx} className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-[#DFBE65]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBE65] shrink-0" />
                    <span className="tracking-wide uppercase text-[10px]">Tenet</span>
                  </div>
                  <p className="text-xs text-[#CBD8D2] leading-snug">
                    {prin}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROPOSED PMC ORGANISATION STRUCTURE */}
      <section id="organisation" className="scroll-mt-36 py-12 lg:py-16 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase">
              <span>PEOPLE & ACCOUNTABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Proposed PMC Organisation Structure
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              The PMC organisation can be scaled to suit project phase, package complexity, and site requirements. The following structure provides clear reporting lines and specialist interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organisationRoles.map((role) => {
              const RoleIcon = roleIconsMap[role.role] || Users;
              return (
                <div
                  key={role.role}
                  className="group relative p-6 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#064A32] space-y-3 shadow-xs hover:shadow-lg hover:border-[#C69A36] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
                    <div className="w-8 h-8 bg-[#FFFFFF] border border-[#E5E0CE] group-hover:border-[#064A32] flex items-center justify-center transition-colors">
                      <RoleIcon className="w-4 h-4 text-[#064A32]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#FFFFFF] px-2 py-0.5 border border-[#E5E0CE]">
                      Accountability
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                    {role.role}
                  </h4>

                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {role.responsibility}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-[#F8F6ED] p-6 border-l-4 border-[#064A32] border border-[#E5E0CE] text-xs text-[#4C5D56] leading-relaxed flex items-start space-x-3.5 shadow-xs">
            <Info className="w-5 h-5 text-[#064A32] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] uppercase tracking-wide block mb-1">
                Phased Deployment & Scalability Framework:
              </strong>
              The structure is proposed and scalable to suit project phase and package intensity. The team is deployed in phases—remaining lean during initial planning and procurement, while mobilizing specialized site engineers, MEP coordinators, and safety supervisors as physical work fronts peak.
            </div>
          </div>
        </div>
      </section>

      {/* 6. VALUE PROPOSITION */}
      <section id="value-propositions" className="scroll-mt-36 py-12 lg:py-16 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase">
              <span>OUR VALUE PROPOSITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Why Pavana Projects
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Six core operational pillars that deliver measurable value for commercial, IT/ITES, and infrastructure developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((vp) => {
              const VpIcon = valuePropsIconsMap[vp.title] || ShieldCheck;
              return (
                <div
                  key={vp.title}
                  className="group p-6 bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-3 shadow-xs hover:shadow-md transition-all hover:border-[#064A32]"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
                    <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:border-[#C69A36] group-hover:bg-[#064A32] flex items-center justify-center transition-all">
                      <VpIcon className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                    {vp.title}
                  </h4>

                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {vp.approach}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-12 bg-[#14251E] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech text-[#DFBE65] tracking-widest uppercase block">
              HEADQUARTERS & ENGAGEMENT
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Ready to Explore a Tailored PMC Framework?
            </h3>
            <p className="text-xs text-[#A3B8B0]">
              Visit our Mathikere, Bangalore office or request a formal project briefing.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-4">
            <CTAButton to="/contact" variant="gold">
              Schedule Discussion
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
