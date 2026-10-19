import React, { useState } from 'react';
import {
  Building2, Building, HardHat, Layers, DraftingCompass, Compass, Hammer,
  RefreshCw, CheckSquare, CalendarDays, FileSpreadsheet, Coins, Cpu,
  ClipboardCheck, ShieldAlert, CheckCircle2, Handshake, Search, AlertOctagon,
  Wrench, Clock, Truck, Sliders, TrendingUp, BarChart3, AlertTriangle, FileText,
  FileCheck, ShieldCheck, ChevronRight, Award, LayoutGrid, KeyRound, PackageCheck
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import CTAButton from '@/components/shared/CTAButton';
import ControlsDashboardInteractive from '@/features/process/components/ControlsDashboardInteractive';
import BuildingBlueprint from '@/features/about/components/BuildingBlueprint';
import { companyProfile } from '@/data/company-profile';

const primaryServiceCategories = [
  {
    id: 'construction-solutions',
    title: 'Construction Solutions',
    category: 'Residential & Commercial',
    summary: 'Turnkey residential and commercial construction, civil works, and comprehensive site development.',
    icon: Building2,
    href: '#construction-solutions',
  },
  {
    id: 'interior-solutions',
    title: 'Interior Design & Space Planning',
    category: 'Architecture & Fit-Out',
    summary: 'Functional space optimization, interior architectural coordination, and modernization of built spaces.',
    icon: LayoutGrid,
    href: '#interior-solutions',
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    category: 'Single-Point Delivery',
    summary: 'Single-point accountability from project brief and approvals through execution and handover.',
    icon: KeyRound,
    href: '#turnkey-projects',
  },
  {
    id: 'pmc-services',
    title: 'Project Management (PMC)',
    category: 'Multidisciplinary PMC',
    summary: 'Nine disciplined PMC capabilities: scheduling, cost controls, design management, and site supervision.',
    icon: ClipboardCheck,
    href: '#pmc-services',
  },
  {
    id: 'procurement-commercial',
    title: 'Procurement & Commercial',
    category: 'Cost & Contracts',
    summary: 'Package tendering, contractor evaluations, long-lead management, and variation control.',
    icon: PackageCheck,
    href: '#procurement-commercial',
  },
  {
    id: 'quality-safety',
    title: 'Quality, Safety & Compliance',
    category: 'Zero-Compromise Assurance',
    summary: 'Inspection Test Plans (ITP), 4-gate NCR resolution, site audits, and zero-incident HSE enforcement.',
    icon: ShieldCheck,
    href: '#quality-safety',
  },
  {
    id: 'real-estate-solutions',
    title: 'Real Estate Solutions',
    category: 'Property & Advisory',
    summary: 'Master planning, zoning feasibility advisory, residential plotted layouts, and asset development.',
    icon: Building,
    href: '#real-estate-solutions',
  },
  {
    id: 'joint-venture',
    title: 'Joint Venture & Partnerships',
    category: 'Strategic Development',
    summary: 'Structured land collaboration models aligning landowner property equity with disciplined project delivery.',
    icon: Handshake,
    href: '#joint-venture',
  },
];

const pmcIcons = {
  'planning-scheduling': CalendarDays,
  'design-management': DraftingCompass,
  'tender-procurement': FileSpreadsheet,
  'construction-management': HardHat,
  'cost-commercial': Coins,
  'mep-coordination': Cpu,
  'qa-qc-management': ClipboardCheck,
  'hse-coordination': ShieldAlert,
  'testing-commissioning': CheckSquare,
};

const constructionIcons = {
  'residential-construction': Building2,
  'commercial-construction': Building,
  'civil-works': HardHat,
  'site-development': Layers,
};

const interiorIcons = {
  'interior-design': DraftingCompass,
  'space-planning': Compass,
  'interior-development': Hammer,
  'renovation-modernization': RefreshCw,
};

const procurementStageIcons = {
  'Package Strategy': Layers,
  'Tender Coordination': FileSpreadsheet,
  'Technical Evaluation': ClipboardCheck,
  'Commercial Interface': Coins,
  'Long-Lead Management': Clock,
  'Logistics & Site Readiness': Truck,
  'Change Management': Sliders,
};

const deliverableIcons = [
  FileText,
  CalendarDays,
  Layers,
  DraftingCompass,
  FileSpreadsheet,
  Clock,
  TrendingUp,
  BarChart3,
  Coins,
  AlertTriangle,
  ClipboardCheck,
  ShieldCheck,
  Sliders,
  CheckSquare,
  FileCheck,
];

const subNavItems = [
  { label: 'Overview', href: '#primary-categories' },
  { label: 'Construction', href: '#construction-solutions' },
  { label: 'Interiors', href: '#interior-solutions' },
  { label: 'Turnkey', href: '#turnkey-projects' },
  { label: 'PMC Capabilities', href: '#pmc-services' },
  { label: 'Procurement & Cost', href: '#procurement-commercial' },
  { label: 'Quality & Safety', href: '#quality-safety' },
  { label: 'Real Estate', href: '#real-estate-solutions' },
  { label: 'Joint Venture', href: '#joint-venture' },
];

export default function ServicesPage() {
  const {
    services,
    constructionSolutions,
    interiorSolutions,
    turnkeySolutions,
    realEstateSolutions,
    jointVenture,
    qualitySafetyMatrix,
    procurementStages,
    deliverablesList
  } = companyProfile;

  const [selectedPmcId, setSelectedPmcId] = useState(services[0].id);
  const activePmc = services.find((s) => s.id === selectedPmcId) || services[0];
  const ActivePmcIcon = pmcIcons[activePmc.id] || CalendarDays;

  return (
    <>
      <SEOHead
        title="Services | Pavana Projects"
        description="Comprehensive real estate solutions, construction services, interior design, turnkey project coordination, Joint Venture partnerships, and Project Management Consultancy (PMC) in Bangalore."
      />


      <PageHero
        title="Services & Solutions"
        subtitle="A multidisciplinary delivery framework integrating real estate solutions, construction management, interior space planning, turnkey coordination, and rigorous Project Management Consultancy."
        badge="Integrated Services Spectrum"
        technicalNote="PMC & REAL ESTATE SOLUTIONS"
      />


      <div className="sticky top-[58px] sm:top-[68px] z-30 bg-[#0E1B15] border-b border-[#284439] py-1.5 sm:py-2 px-4 sm:px-6 shadow-md overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 sm:space-x-3 min-w-max">
          <span className="text-[10px] font-mono-tech uppercase font-bold text-[#DFBE65] pr-2 border-r border-[#284439]">
            DISCOVERY INDEX:
          </span>
          {subNavItems.map((item) => (
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




      <section id="primary-categories" className="scroll-mt-36 py-12 lg:py-16 bg-[#F8F6ED] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-2.5">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <Layers className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>PRIMARY SERVICE SPECTRUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Main Service Categories
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Explore our core capabilities across construction, interior architecture, turnkey coordination, project management, and real estate partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {primaryServiceCategories.map((item) => {
              const IconComp = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group p-5 bg-[#FFFFFF] border border-[#E2DDD0] border-t-2 border-t-[#064A32] hover:border-t-[#C69A36] hover:border-[#C69A36] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#F8F6ED] border border-[#E2DDD0] group-hover:bg-[#064A32] group-hover:border-[#064A32] flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono-tech uppercase font-bold text-[#C69A36]">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5C6E66] leading-relaxed mt-1.5">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#E2DDD0] flex items-center justify-between text-[11px] font-mono-tech text-[#064A32] font-semibold group-hover:text-[#C69A36] transition-colors">
                    <span>View Section</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>




      <section id="construction-solutions" className="scroll-mt-36 py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <Building2 className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>CONSTRUCTION CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Construction Solutions
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              We provide structured construction coordination across residential, commercial, civil, and site development packages, emphasizing structural integrity, safety compliance, and disciplined milestone execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {constructionSolutions.map((item) => {
              const IconComp = constructionIcons[item.id] || Building2;
              return (
                <div
                  key={item.id}
                  className="p-6 bg-[#F8F6ED] border border-[#E2DDD0] border-t-4 border-t-[#064A32] space-y-4 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-[#064A32] text-[#DFBE65] flex items-center justify-center rounded-[3px] group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-mono-tech text-[#C69A36] mt-0.5">
                        {item.tagline}
                      </div>
                    </div>
                    <p className="text-xs text-[#5C6E66] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-[#E2DDD0]">
                      <span className="text-[10px] font-mono-tech text-[#064A32] uppercase font-bold block mb-1">
                        Core Coordination Remit:
                      </span>
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start space-x-2 text-[11.5px] text-[#2C3E36]">
                          <span className="text-[#064A32] font-bold select-none">•</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD0]">
                    <CTAButton to="/contact" className="w-full text-center">
                      Inquire for Scope
                    </CTAButton>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>




      <section id="interior-solutions" className="scroll-mt-36 py-14 lg:py-20 bg-[#F8F6ED] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <LayoutGrid className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>INTERIOR ARCHITECTURE & FIT-OUT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Interior Design & Space Planning
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Synthesizing aesthetic form with functional utility. Our interior services encompass space optimization, interior architecture coordination, turnkey fit-out execution, and modernization of existing properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interiorSolutions.map((item) => {
              const IconComp = interiorIcons[item.id] || DraftingCompass;
              return (
                <div
                  key={item.id}
                  className="p-6 bg-[#FFFFFF] border border-[#E2DDD0] border-t-4 border-t-[#C69A36] space-y-4 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-[#C69A36] text-[#FFFFFF] flex items-center justify-center rounded-[3px] group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-mono-tech text-[#064A32] mt-0.5">
                        {item.tagline}
                      </div>
                    </div>
                    <p className="text-xs text-[#5C6E66] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-[#E2DDD0]">
                      <span className="text-[10px] font-mono-tech text-[#C69A36] uppercase font-bold block mb-1">
                        Planning & Fit-out Highlights:
                      </span>
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start space-x-2 text-[11.5px] text-[#2C3E36]">
                          <span className="text-[#C69A36] font-bold select-none">•</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD0]">
                    <CTAButton to="/contact" className="w-full text-center">
                      Plan Your Space
                    </CTAButton>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>




      <section id="turnkey-projects" className="scroll-mt-36 py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                <KeyRound className="w-3.5 h-3.5 text-[#C69A36]" />
                <span>END-TO-END COORDINATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
                {turnkeySolutions.title}
              </h2>
              <div className="text-xs font-mono-tech text-[#C69A36] uppercase tracking-wider font-semibold">
                {turnkeySolutions.tagline}
              </div>
              <p className="text-sm sm:text-base text-[#2C3E36] leading-relaxed">
                {turnkeySolutions.overview}
              </p>
              <p className="text-xs sm:text-sm text-[#4C5D56] leading-relaxed">
                We manage the interfaces between architectural design, statutory clearances, package tendering, contractor mobilization, and site quality control—ensuring that every milestone is delivered with full transparency.
              </p>

              <div className="pt-2">
                <CTAButton to="/contact">
                  Discuss Turnkey Coordination
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8F6ED] border border-[#E2DDD0] p-6 sm:p-8 space-y-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                  <span className="text-xs font-mono-tech text-[#064A32] uppercase tracking-wider font-bold">
                    TURNKEY GOVERNANCE PILLARS
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#C69A36]">4 CORE GATES</span>
                </div>

                <div className="space-y-4">
                  {turnkeySolutions.keyPillars.map((pil, pIdx) => (
                    <div key={pIdx} className="p-4 bg-[#FFFFFF] border border-[#E2DDD0] border-l-4 border-l-[#064A32] space-y-1">
                      <h4 className="text-sm font-bold text-[#14251E]">
                        {pil.title}
                      </h4>
                      <p className="text-xs text-[#5C6E66] leading-relaxed">
                        {pil.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>




      <section id="pmc-services" className="scroll-mt-36 py-14 lg:py-20 bg-[#F8F6ED] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <ClipboardCheck className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>PMC RESPONSIBILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Project Management Consultancy (PMC)
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Derived directly from our verified capability frameworks, our nine core PMC disciplines bring structured visibility, multidisciplinary coordination, and governance to complex built environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FFFFFF] border border-[#E2DDD0] divide-y divide-[#E2DDD0] shadow-xs">
                {services.map((svc) => {
                  const isSelected = svc.id === selectedPmcId;
                  const IconComp = pmcIcons[svc.id] || CalendarDays;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedPmcId(svc.id)}
                      className={`w-full text-left p-3.5 sm:p-4 transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#064A32] text-[#F8F6ED]'
                          : 'hover:bg-[#F3EFE3] text-[#2C3E36]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComp className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#DFBE65]' : 'text-[#064A32]'}`} />
                        <span className="text-xs font-bold uppercase tracking-wide truncate">
                          {svc.title}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-[#DFBE65] translate-x-1' : 'text-[#A3B8B0] group-hover:text-[#064A32]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <BuildingBlueprint />
            </div>


            <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#E2DDD0] p-6 sm:p-8 lg:p-10 space-y-6 shadow-md relative overflow-hidden">

              <div className="flex items-start justify-between pb-4 border-b border-[#E2DDD0]">
                <div>
                  <div className="text-[10px] font-mono-tech text-[#C69A36] uppercase font-bold tracking-wider mb-1">
                    PMC DISCIPLINE PROFILE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32]">
                    {activePmc.title}
                  </h3>
                </div>
                <div className="p-2.5 bg-[#064A32] text-[#DFBE65] rounded-[3px]">
                  <ActivePmcIcon className="w-5 h-5" />
                </div>
              </div>


              <div className="space-y-2">
                <div className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#C69A36]">
                  SPECIFIC PMC RESPONSIBILITY
                </div>
                <div className="p-4 bg-[#F8F6ED] border-l-4 border-[#C69A36] text-sm text-[#064A32] font-semibold leading-relaxed shadow-xs">
                  “{activePmc.shortDesc}”
                </div>
              </div>


              <div className="space-y-2">
                <div className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#064A32]">
                  DETAILED EXECUTION SCOPE & COORDINATION
                </div>
                <p className="text-xs sm:text-sm text-[#2C3E36] leading-relaxed bg-[#F8F6ED] p-5 border border-[#E2DDD0] shadow-xs">
                  {activePmc.fullDesc}
                </p>
              </div>


              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#064A32]">
                    MANDATED OUTPUTS & DELIVERABLES
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#C69A36] font-bold">
                    {activePmc.deliverables.length} DELIVERABLES
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePmc.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start space-x-2.5 p-3.5 bg-[#F8F6ED] border border-[#E2DDD0] text-xs text-[#2C3E36] shadow-xs hover:border-[#C69A36] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#5C6E66]">
                  Standardized in Pavana Projects Project Execution Plan (PEP).
                </span>
                <CTAButton to="/contact">
                  Inquire for This Scope
                </CTAButton>
              </div>
            </div>

          </div>

        </div>
      </section>




      <section id="procurement-commercial" className="scroll-mt-36 py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <PackageCheck className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>PROTECTING TIME AND COST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Procurement & Commercial Management
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Procurement performance has a direct impact on project schedule and budget. Our framework connects package planning with technical evaluations, material tracking, commercial visibility, and logistics readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {procurementStages.map((stg) => {
              const StageIcon = procurementStageIcons[stg.stage] || Layers;
              return (
                <div
                  key={stg.stage}
                  className="group relative bg-[#F8F6ED] p-6 border border-[#E2DDD0] hover:border-[#C69A36] space-y-3 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                    <div className="w-8 h-8 bg-[#FFFFFF] border border-[#E2DDD0] group-hover:border-[#C69A36] group-hover:bg-[#064A32] flex items-center justify-center transition-all">
                      <StageIcon className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                    {stg.stage}
                  </h3>

                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {stg.focus}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-[#F8F6ED] border-l-4 border-[#C69A36] text-xs text-[#064A32] leading-relaxed">
            “Commercial discipline is supported by visibility, documentation and early escalation—helping the client make informed decisions before cost or schedule impacts become difficult to recover.”
          </div>

        </div>
      </section>




      <section id="quality-safety" className="scroll-mt-36 py-14 lg:py-20 bg-[#F8F6ED] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>ZERO-COMPROMISE ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Quality Assurance & Safety Management
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Quality and safety are integrated into project management from inception rather than treated as end-stage checks. The PMC framework establishes inspection, documentation and corrective-action mechanisms throughout execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">


            <div className="bg-[#FFFFFF] border-2 border-[#064A32] p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD0]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#064A32] text-[#DFBE65]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-wider block">
                      QUALITY ASSURANCE (QA/QC)
                    </span>
                    <h3 className="text-xl font-bold text-[#064A32]">
                      Quality Management Protocols
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#F8F6ED] px-3 py-1 border border-[#E2DDD0]">
                  7 Protocols
                </span>
              </div>

              <div className="space-y-3">
                {qualitySafetyMatrix.quality.map((q, idx) => (
                  <div key={idx} className="p-3 bg-[#F8F6ED] border border-[#E2DDD0] hover:border-[#C69A36] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#14251E]">
                        <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0" />
                        <span>{q.item}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#C69A36] bg-[#FFFFFF] px-2 py-0.5 border border-[#E2DDD0]">Verified</span>
                    </div>
                    <p className="text-xs text-[#5C6E66] pl-6 leading-relaxed">
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-[#FFFFFF] border-2 border-[#C69A36] p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD0]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#C69A36] text-[#FFFFFF]">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-tech text-[#064A32] uppercase tracking-wider block">
                      SITE SAFETY & HSE
                    </span>
                    <h3 className="text-xl font-bold text-[#14251E]">
                      HSE & Compliance Coordination
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#F8F6ED] px-3 py-1 border border-[#E2DDD0]">
                  7 Protocols
                </span>
              </div>

              <div className="space-y-3">
                {qualitySafetyMatrix.safety.map((s, idx) => (
                  <div key={idx} className="p-3 bg-[#F8F6ED] border border-[#E2DDD0] hover:border-[#064A32] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#14251E]">
                        <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                        <span>{s.item}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#FFFFFF] px-2 py-0.5 border border-[#E2DDD0]">Active Gate</span>
                    </div>
                    <p className="text-xs text-[#5C6E66] pl-6 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>


          <div className="bg-[#14251E] text-[#F8F6ED] p-8 sm:p-10 border border-[#284439] space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#284439]">
              <div>
                <span className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-widest block">
                  ROOT CAUSE RESOLUTION CYCLE
                </span>
                <h3 className="text-2xl font-bold text-[#FFFFFF]">
                  Non-Conformance (NCR) & Corrective Action Protocol
                </h3>
              </div>
              <span className="text-xs font-mono-tech text-[#DFBE65] bg-[#1A2E26] px-3 py-1 border border-[#284439]">
                4-Gate Loop
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <Search className="w-4 h-4 text-[#DFBE65]" />
                  <span>1. Identification</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Deviation Tagging</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  PMC engineer identifies variance against approved drawing or ITP hold point with photographic proof.
                </p>
              </div>

              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <AlertOctagon className="w-4 h-4 text-[#DFBE65]" />
                  <span>2. Issuance</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Notice & Hold</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  Formal NCR issued to contractor defining severity level and halting work front if safety or integrity is impacted.
                </p>
              </div>

              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <Wrench className="w-4 h-4 text-[#DFBE65]" />
                  <span>3. Remediation</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Method Repair & Test</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  Contractor submits repair method statement, performs rectification, and witnesses re-testing under PMC hold-point.
                </p>
              </div>

              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBE65]" />
                  <span>4. Close-Out</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Billing Gate Release</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  NCR formally closed in digital tracker with root-cause notes before interim contractor billing is certified.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>




      <section id="real-estate-solutions" className="scroll-mt-36 py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <Building className="w-3.5 h-3.5 text-[#C69A36]" />
              <span>PROPERTY ADVISORY & COORDINATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Real Estate Solutions
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              We assist landowners, real estate developers, and corporate investors across every dimension of property creation—combining layout planning, feasibility advisory, procurement packaging, construction coordination, and occupancy governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {realEstateSolutions.offerings.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#064A32] space-y-3 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#E2DDD0]">
                  <span className="text-[10px] font-mono-tech font-bold text-[#C69A36] uppercase">
                    Solution 0{idx + 1}
                  </span>
                  <Building className="w-4 h-4 text-[#064A32]" />
                </div>
                <h3 className="text-base font-bold text-[#14251E]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4C5D56] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#F8F6ED] border-l-4 border-l-[#C69A36] border border-[#E2DDD0] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <strong className="text-sm text-[#064A32] block">
                Have a Land Parcel or Property Development in Planning?
              </strong>
              <p className="text-xs text-[#5C6E66]">
                Consult with our team on feasibility, zoning coordination, project scoping, and milestone frameworks.
              </p>
            </div>
            <CTAButton to="/contact">
              Initiate Real Estate Enquiry
            </CTAButton>
          </div>

        </div>
      </section>




      <section id="joint-venture" className="scroll-mt-36 py-16 lg:py-24 bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69A36]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#064A32]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C69A36]/20 border border-[#C69A36]/40 text-[#DFBE65] text-[11px] font-mono-tech font-bold uppercase tracking-[0.18em]">
              <Handshake className="w-3.5 h-3.5" />
              <span>COLLABORATIVE DEVELOPMENT OPPORTUNITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF]">
              {jointVenture.title}
            </h2>
            <div className="text-sm font-mono-tech text-[#DFBE65]">
              {jointVenture.tagline}
            </div>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              {jointVenture.overview}
            </p>
          </div>


          <div className="border border-[#284439] bg-[#1A2E26]/90 p-6 sm:p-10 mb-10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#284439] mb-8">
              <div>
                <span className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-wider font-bold">
                  STRUCTURED COLLABORATION PROCESS
                </span>
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  5-Stage Engagement Pathway
                </h3>
              </div>
              <span className="text-xs font-mono-tech text-[#A3B8B0]">LANDOWNER & PARTNER INTERFACE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {jointVenture.collaborationSteps.map((stp) => (
                <div key={stp.step} className="p-4 bg-[#14251E] border border-[#284439] space-y-2.5 relative">
                  <div className="flex items-center justify-between pb-2 border-b border-[#284439]">
                    <span className="text-xs font-mono-tech font-bold text-[#DFBE65]">
                      PHASE {stp.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#DFBE65]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#FFFFFF] leading-snug">
                    {stp.title}
                  </h4>
                  <p className="text-xs text-[#A3B8B0] leading-relaxed">
                    {stp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#284439] flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-[#CBD8D2] italic max-w-xl">
                {jointVenture.transparencyNote}
              </p>
              <CTAButton to="/contact" variant="gold" className="shrink-0">
                Discuss a Joint Venture
              </CTAButton>
            </div>
          </div>

        </div>
      </section>




      <section id="project-controls" className="scroll-mt-36 py-14 lg:py-20 bg-[#14251E] text-[#F8F6ED] border-b border-[#284439]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-[11px] font-mono-tech text-[#DFBE65] uppercase tracking-[0.2em]">
              PROJECT CONTROLS ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF]">
              Control Tower & Management Reporting
            </h2>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              Converting on-site physical activity into actionable executive dashboards for developer leadership.
            </p>
          </div>

          <ControlsDashboardInteractive />
        </div>
      </section>




      <section id="deliverables" className="scroll-mt-36 py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              DOCUMENTATION & DECISION SUPPORT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Standardized Key PMC Deliverables
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              The purpose of PMC reporting is to give developer leadership an early view of what is on track, what is at risk, and what actions are required next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverablesList.map((del, idx) => {
              const IconComp = deliverableIcons[idx] || FileText;
              return (
                <div
                  key={idx}
                  className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] hover:border-[#C69A36] transition-colors flex items-start space-x-3.5"
                >
                  <div className="w-7 h-7 rounded-[3px] bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-[#2C3E36] font-medium leading-relaxed pt-1">
                    {del}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-5 bg-[#F8F6ED] border border-[#E2DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#4C5D56]">
              <strong className="text-[#064A32]">Contractual Auditability:</strong> All 14 deliverables are mapped to baseline schedules and executive sign-off milestones.
            </div>
            <CTAButton to="/contact" className="shrink-0">
              Consult on Deliverables
            </CTAButton>
          </div>

        </div>
      </section>




      <section className="py-14 bg-[#064A32] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono-tech text-[#DFBE65] tracking-widest uppercase block">
              CUSTOMIZED ENGAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Need a Tailored Scope for Your Development?
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD8D2]">
              Whether requiring full PMC, construction coordination, real estate advisory, or exploring a Joint Venture partnership, connect with our directors.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-4">
            <CTAButton to="/contact" variant="gold">
              Initiate Discussion
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
