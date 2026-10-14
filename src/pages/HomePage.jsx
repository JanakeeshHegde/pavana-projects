import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, 
  ShieldCheck, Clock, Award, ShieldAlert, Cpu, Layers, 
  Building2, HardHat, FileSpreadsheet, Coins, Compass, 
  Activity, CheckSquare, AlertCircle, Info, Send 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import CinematicHero from '@/features/home/components/CinematicHero';
import ControlsDashboardInteractive from '@/features/process/components/ControlsDashboardInteractive';
import ScopeExplorer from '@/features/projects/components/ScopeExplorer';
import { companyProfile } from '@/data/company-profile';
import confetti from 'canvas-confetti';

const serviceImagesMap = {
  'planning-scheduling': '/images/service-planning.jpg',
  'design-management': '/images/control tower architecture.png',
  'tender-procurement': '/images/project-controls-room.jpg',
  'construction-management': '/images/site-execution.jpg',
  'cost-commercial': '/images/commercial-tower.jpg',
  'mep-coordination': '/images/mep-engineering.jpg',
  'qa-qc-management': '/images/service-qa.jpg',
  'hse-coordination': '/images/site-execution.jpg',
  'testing-commissioning': '/images/mep-engineering.jpg',
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
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [processStageIndex, setProcessStageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiry: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const { services, lifecycleStages, referenceProject, foundation, priorities } = companyProfile;
  const activeService = services[selectedServiceIndex];
  const activeStage = lifecycleStages[processStageIndex];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!contactData.name.trim()) errs.name = 'Full name is required';
    if (!contactData.company.trim()) errs.company = 'Company name is required';
    if (!contactData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!contactData.phone.trim()) errs.phone = 'Phone number is required';
    if (!contactData.enquiry.trim()) errs.enquiry = 'Project brief is required';

    setFormErrors(errs);
    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#064A32', '#C69A36', '#DFBE65']
          });
        } catch (e) {}
      }, 700);
    }
  };

  return (
    <>
      <SEOHead
        title="Home"
        description="Pavana Projects — Integrated Project Management Consultancy (PMC) for ambitious commercial, IT/ITES and infrastructure developments. Bangalore, India."
      />

      {/* 1. CINEMATIC HERO */}
      <CinematicHero />

      {/* 2. SECTION 5: PREMIUM INTRODUCTION SECTION */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
                <span>01 // THE PMC IMPERATIVE</span>
                <span>•</span>
                <span>INTRODUCTION</span>
              </div> */}

              {/* Required Statement */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#064A32] leading-[1.15]">
                Complex projects demand more than coordination. <br className="hidden sm:inline" />
                <span className="text-[#14251E] italic font-semibold">
                  They demand control.
                </span>
              </h2>

              <div className="gold-divider-left w-36 py-1" />

              <p className="text-base sm:text-lg text-[#2C3E36] leading-relaxed">
                Pavana Projects is positioned as a professional <strong>Project Management Consultancy (PMC)</strong> focused on structured planning, multidisciplinary coordination, project controls, and delivery management for large-scale built environments.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Our approach is built around one clear objective: <strong>bringing clarity, control, and accountability</strong> to complex projects from project initiation through commissioning and handover. We serve as the client’s project-management interface across consultants, contractors, vendors, statutory stakeholders, and specialist agencies.
              </p>

              {/* The 4 Priorities Line - Premium Architectural Micro-Cards */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>TIME</span>
                  </div>
                  <span className="text-[#3D4F47] text-[11px] font-medium block leading-tight">Programme Baseline</span>
                </div>

                <div className="p-3.5 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Coins className="w-3.5 h-3.5 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>COST</span>
                  </div>
                  <span className="text-[#3D4F47] text-[11px] font-medium block leading-tight">Commercial Control</span>
                </div>

                <div className="p-3.5 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>QUALITY</span>
                  </div>
                  <span className="text-[#3D4F47] text-[11px] font-medium block leading-tight">Right-First-Time</span>
                </div>

                <div className="p-3.5 bg-[#F8F6ED] border border-[#E2DDD0] border-t-2 border-t-[#C69A36] space-y-1 shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all group">
                  <div className="flex items-center space-x-1.5 text-[#C69A36] font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#C69A36] group-hover:scale-110 transition-transform" />
                    <span>SAFETY</span>
                  </div>
                  <span className="text-[#3D4F47] text-[11px] font-medium block leading-tight">Zero-Incident HSE</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.16em] text-[#064A32] hover:text-[#C69A36] transition-colors group"
                >
                  <span>Explore Company Profile & Values</span>
                  <ArrowRight className="w-4 h-4 text-[#C69A36] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Large Striking Architectural Image (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#D5CDBE] bg-[#F8F6ED] p-3 shadow-2xl">
                <div className="relative overflow-hidden aspect-[4/5] bg-[#14251E]">
                  <img
                    src="/images/control%20tower%20architecture.png"
                    alt="Control tower architecture"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#14251E]/95 text-[#DFBE65] font-mono-tech text-[10px] px-2.5 py-1 border border-[#284439]">
                    CONTROL TOWER ARCHITECTURE
                  </div>
                </div>

                <div className="p-4 bg-[#FFFFFF] border-t border-[#E2DDD0] space-y-1">
                  <span className="text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-wider block">
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

      {/* 3. SECTION 6: UNIQUE PROJECT SHOWCASE (15,00,000 SQ. FT. IT SOFTWARE PARK) */}
      <section className="bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-[#284439] gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF]">
                Proposed Framework <br />
                <span className="gold-gradient-text"></span>
              </h2>
              <p className="text-sm text-[#CBD8D2] leading-relaxed">
                Proposed PMC Framework integrating design, construction, building services, procurement, quality, safety, and commissioning under a single control architecture.
              </p>
            </div>
          </div>

          {/* Reference Disclaimer Notice */}
          {/* <div className="my-6 p-4 bg-[#0C1A14] border border-[#213A30] text-xs font-mono-tech text-[#A3B8B0] flex items-start space-x-3">
            <Info className="w-4 h-4 text-[#DFBE65] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#DFBE65]">Framework Designation:</strong> Presented as a professional project profile and proposed PMC capability framework based on the stated 15,00,000 Sq. Ft. requirement. Specifications and packages can be formally tailored upon client appointment.
            </p>
          </div> */}

          {/* Immersive Scope Explorer */}
          <div className="pt-6">
            <ScopeExplorer showPackageStatus />
          </div>

          <div className="mt-8 pt-6 border-t border-[#284439] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#8EA49A] font-mono-tech">
              Extensible PMC architecture ready for commercial towers, tech campuses, and infrastructure.
            </span>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors shrink-0"
            >
              <span>View Full Project Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTION 7: SERVICES — AVOID REPETITIVE CARDS */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              PMC SERVICE PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#064A32]">
              Nine Core Consulting Responsibilities
            </h2>
            <p className="text-base text-[#4A5D54] leading-relaxed">
              Presented through an interactive specification manual detailing technical scopes, constructability checks, and auditable client outputs.
            </p>
          </div>

          {/* Interactive Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav List (4 Cols) */}
            <div className="lg:col-span-4 border border-[#E2DDD0] bg-[#F8F6ED] divide-y divide-[#E2DDD0]">
              {services.map((svc, idx) => {
                const isSelected = idx === selectedServiceIndex;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceIndex(idx)}
                    className={`w-full text-left p-4.5 transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#064A32] text-[#F8F6ED]'
                        : 'hover:bg-[#EAE5D6] text-[#14251E]'
                    }`}
                  >
                    <div className="flex items-baseline space-x-3">
                      <span className={`font-mono-tech text-xs font-bold ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">
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

            {/* Right Detailed Expandable Panel (8 Cols) - Editorial Architectural Card */}
            <div className="lg:col-span-8 bg-[#F8F6ED] border border-[#E2DDD0] p-6 sm:p-8 lg:p-10 space-y-6 shadow-md relative overflow-hidden">
              {/* Header with Title and Content-Specific Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-[#E2DDD0]">
                <div className="md:col-span-7 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
                    <span>DISCIPLINE 0{selectedServiceIndex + 1}</span>
                    <span>•</span>
                    <span className="text-[#064A32] font-bold bg-[#EAE5D6] px-2 py-0.5">PMC CORE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32]">
                    {activeService.title}
                  </h3>
                  <p className="text-xs text-[#5C6E66] font-medium leading-relaxed">
                    Standardized multidisciplinary interface management, technical verification, and executive control.
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="relative group overflow-hidden border-2 border-[#064A32] p-1 bg-[#FFFFFF] shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#14251E]">
                      <img
                        src={serviceImagesMap[activeService.id] || '/images/hero-campus.jpg'}
                        alt={activeService.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14251E]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono-tech text-[#DFBE65] font-bold uppercase tracking-wider truncate">
                        {activeService.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibility Overview */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono-tech text-[#7A8C84] uppercase tracking-wider block">
                  PMC RESPONSIBILITY SUMMARY
                </span>
                <p className="text-sm sm:text-base text-[#14251E] font-medium leading-relaxed bg-[#FFFFFF] p-5 border-l-4 border-[#064A32] shadow-sm">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Key Deliverables for this Service */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono-tech text-[#7A8C84] uppercase tracking-wider block">
                  MANDATED AUDITABLE DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] text-xs font-medium text-[#2C3E36] flex items-center space-x-2.5 shadow-sm hover:border-[#C69A36] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#5C6E66]">
                  Standardized in Pavana Projects Project Execution Plan (PEP).
                </span>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.16em] text-[#064A32] hover:text-[#C69A36] transition-colors"
                >
                  <span>Explore All 9 Disciplines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 8: PROJECT PROCESS — SCROLL-DRIVEN EXPERIENCE */}
      <section className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
               HOW WE MANAGE COMPLEX PROJECTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#064A32]">
              Eight-Stage Delivery Lifecycle
            </h2>
            <p className="text-base text-[#4A5D54] leading-relaxed">
              Maintaining an unbroken line of sight from strategic developer objectives to physical occupancy and statutory handover.
            </p>
          </div>

          {/* Progressive Stage Navigator */}
          <div className="bg-[#FFFFFF] border border-[#E2DDD0] p-6 sm:p-10 shadow-sm space-y-8">
            {/* Stage Bar */}
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 pb-6 border-b border-[#E2DDD0]">
              {lifecycleStages.map((stg, idx) => {
                const isSelected = idx === processStageIndex;
                return (
                  <button
                    key={stg.step}
                    onClick={() => setProcessStageIndex(idx)}
                    className={`p-3 text-left transition-all border ${
                      isSelected
                        ? 'bg-[#064A32] text-[#F8F6ED] border-[#064A32] ring-2 ring-[#C69A36]'
                        : 'bg-[#F8F6ED] text-[#2C3E36] border-[#E2DDD0] hover:bg-[#EAE5D6]'
                    }`}
                  >
                    <div className={`text-[11px] font-mono-tech font-bold ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
                      {stg.step}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider truncate mt-0.5">
                      {stg.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-mono-tech font-bold text-[#C69A36]">
                    {activeStage.step}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#064A32] block">
                      STAGE FOCUS: {activeStage.focus}
                    </span>
                    <h4 className="text-2xl font-bold text-[#14251E]">
                      {activeStage.name} STAGE
                    </h4>
                  </div>
                </div>

                <p className="text-base text-[#3C4E46] leading-relaxed">
                  {activeStage.description}
                </p>

                <div className="flex items-center space-x-3 pt-2">
                  <button
                    disabled={processStageIndex === 0}
                    onClick={() => setProcessStageIndex((prev) => Math.max(0, prev - 1))}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                      processStageIndex === 0
                        ? 'border-[#E2DDD0] text-[#A3B8B0] cursor-not-allowed'
                        : 'border-[#064A32] text-[#064A32] hover:bg-[#064A32] hover:text-[#F8F6ED]'
                    }`}
                  >
                    Previous
                  </button>

                  <button
                    disabled={processStageIndex === lifecycleStages.length - 1}
                    onClick={() => setProcessStageIndex((prev) => Math.min(lifecycleStages.length - 1, prev + 1))}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 ${
                      processStageIndex === lifecycleStages.length - 1
                        ? 'border border-[#E2DDD0] text-[#A3B8B0] cursor-not-allowed'
                        : 'bg-[#064A32] text-[#F8F6ED] hover:bg-[#14251E]'
                    }`}
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#DFBE65]" />
                  </button>
                </div>
              </div>

              {/* Deliverables Box */}
              <div className="lg:col-span-5 bg-[#F8F6ED] p-6 border border-[#E2DDD0] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#064A32] block">
                  Mandatory Phase Deliverables
                </span>
                <ul className="space-y-2 text-xs text-[#2C3E36]">
                  {activeStage.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C69A36] shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 9: PROJECT CONTROLS — ENGINEERING INTELLIGENCE */}
      <section className="bg-[#14251E] cad-grid-dark border-b border-[#284439] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ControlsDashboardInteractive />
        </div>
      </section>

      {/* 7. SECTION 10: ABOUT, VALUES, QUALITY & SAFETY SHOWCASE */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              FOUNDATION & GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#064A32]">
              Grounded in Six Core Values
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Right-first-time execution supported by inspections, testing, documentation, and client-focused governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {foundation.values.map((val, idx) => {
              const IconComp = valueIcons[val.name] || ShieldCheck;
              return (
                <div
                  key={val.name}
                  className="group relative p-7 bg-[#FFFFFF] border border-[#E2DDD0] space-y-4 shadow-sm hover:shadow-xl hover:border-[#C69A36] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top Animated Gold Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C69A36] via-[#DFBE65] to-[#C69A36] opacity-40 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 bg-[#064A32] text-[#DFBE65] rounded-none shadow-inner group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono-tech font-bold text-[#C69A36]">
                        TENET 0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#064A32] bg-[#F8F6ED] px-2 py-0.5 border border-[#E2DDD0]">
                      Standard
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                    {val.name}
                  </h3>

                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {val.meaning}
                  </p>

                  {/* Corner Accent Line */}
                  <div className="pt-2 flex justify-end">
                    <span className="text-[11px] font-mono-tech text-[#C69A36]/60 group-hover:text-[#C69A36] transition-colors">
                      + PMC DISCIPLINE
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quality & Safety Highlight Banner */}
          <div className="bg-[#064A32] text-[#F8F6ED] p-8 sm:p-10 border border-[#C69A36]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-widest">
                BUILT RIGHT. DELIVERED SAFELY.
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                Zero-Compromise QA/QC & Site HSE Governance
              </h3>
              <p className="text-sm text-[#CBD8D2] leading-relaxed">
                Inspection & Test Plans (ITPs), material approvals, method statements, and Non-Conformance Report (NCR) tracking with root-cause closure.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
              >
                <span>Read Governance Specs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 11: CONTACT EXPERIENCE — "HAVE A LANDMARK IN MIND?" */}
      <section className="bg-[#F8F6ED] py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Headline & Verified Address Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
                  INITIATE CONSULTATION
                </div>
                {/* Required Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32] leading-tight">
                  Have a Landmark <br />
                  <span className="text-[#14251E] italic font-semibold">
                    in Mind?
                  </span>
                </h2>
                <p className="text-sm text-[#4C5D56] leading-relaxed">
                  Connect with our Project Management Consultancy leadership to structure your commercial, IT/ITES software park, or infrastructure development.
                </p>
              </div>

              {/* Exact Address from PDF */}
              <div className="bg-[#FFFFFF] p-6 border-l-4 border-[#064A32] border-t border-r border-b border-[#E2DDD0]">
                <div className="space-y-3">
                <span className="text-xs font-mono-tech uppercase font-bold text-[#064A32] block">
                  REGISTERED OFFICE
                </span>
                <address className="not-italic text-xs text-[#2C3E36] leading-relaxed font-mono-tech">
                  #543, 14th ‘A’ Main, <br />
                  HMT Layout, Gokula 1st Stage, <br />
                  1st Phase, Mathikere, <br />
                  Bangalore – 560054, Karnataka, India
                </address>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E2DDD0] p-6 sm:p-10 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#064A32] text-[#DFBE65] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#064A32]">
                    Inquiry Received, {contactData.name}
                  </h3>
                  <p className="text-xs text-[#4C5D56] max-w-md mx-auto leading-relaxed">
                    Your brief for <strong className="text-[#14251E]">{contactData.company}</strong> has been logged. Our PMC directors will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactData({ name: '', company: '', email: '', phone: '', enquiry: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#064A32] text-[#F8F6ED] text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#E2DDD0] pb-3">
                    <h3 className="text-xl font-bold text-[#064A32]">Project Consultation Request</h3>
                    <p className="text-xs text-[#5C6E66]">Please provide verified particulars for your upcoming development.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#14251E] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder="Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6ED] border border-[#E2DDD0] rounded-none focus:bg-[#FFFFFF] focus:border-[#064A32]"
                      />
                      {formErrors.name && <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#14251E] mb-1">
                        Developer / Entity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={contactData.company}
                        onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                        placeholder="Apex Commercial Pvt Ltd"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6ED] border border-[#E2DDD0] rounded-none focus:bg-[#FFFFFF] focus:border-[#064A32]"
                      />
                      {formErrors.company && <p className="text-[10px] text-red-500 mt-1">{formErrors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#14251E] mb-1">
                        Official Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="rajesh@apex.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6ED] border border-[#E2DDD0] rounded-none focus:bg-[#FFFFFF] focus:border-[#064A32]"
                      />
                      {formErrors.email && <p className="text-[10px] text-red-500 mt-1">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#14251E] mb-1">
                        Contact Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6ED] border border-[#E2DDD0] rounded-none focus:bg-[#FFFFFF] focus:border-[#064A32]"
                      />
                      {formErrors.phone && <p className="text-[10px] text-red-500 mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#14251E] mb-1">
                      Project Scope & Enquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={contactData.enquiry}
                      onChange={(e) => setContactData({ ...contactData, enquiry: e.target.value })}
                      placeholder="Outline development built-up area (Sq. Ft.), location, current phase (Design / Tender / Construction), and specific PMC scopes needed."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6ED] border border-[#E2DDD0] rounded-none focus:bg-[#FFFFFF] focus:border-[#064A32]"
                    />
                    {formErrors.enquiry && <p className="text-[10px] text-red-500 mt-1">{formErrors.enquiry}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#064A32] text-[#F8F6ED] hover:bg-[#14251E] px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-3.5 h-3.5 text-[#DFBE65]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
