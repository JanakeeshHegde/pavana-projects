import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarDays, DraftingCompass, FileSpreadsheet, HardHat, Coins, 
  Cpu, ClipboardCheck, ShieldAlert, CheckSquare, CheckCircle2, 
  ArrowRight, ChevronRight, FileText, Download, BarChart3, AlertTriangle,
  Award, Sliders, TrendingUp, DollarSign, Activity, FileCheck, Layers, Info,
  Clock, Truck, Search, AlertOctagon, Wrench, ShieldCheck
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import CTAButton from '@/components/shared/CTAButton';
import ControlsDashboardInteractive from '@/features/process/components/ControlsDashboardInteractive';
import BuildingBlueprint from '@/features/about/components/BuildingBlueprint';
import { companyProfile } from '@/data/company-profile';

const serviceIcons = {
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

const serviceImagesMap = {
  'planning-scheduling': '/images/service-planning.jpg',
  'design-management': '/images/service-design.jpg',
  'tender-procurement': '/images/service-procurement.jpg',
  'construction-management': '/images/service-construction.jpg',
  'cost-commercial': '/images/service-commercial.jpg',
  'mep-coordination': '/images/service-mep.jpg',
  'qa-qc-management': '/images/service-qa.jpg',
  'hse-coordination': '/images/service-hse.jpg',
  'testing-commissioning': '/images/service-commissioning.jpg',
};

const controlIcons = {
  'Programme Control': CalendarDays,
  'Cost Control': Coins,
  'Procurement Control': FileSpreadsheet,
  'Design Control': DraftingCompass,
  'Quality Control': Award,
  'HSE Control': ShieldAlert,
  'Risk Control': AlertTriangle,
  'Management Reporting': BarChart3,
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
  FileText,        // Project Execution Plan / PMC procedures
  CalendarDays,    // Master Project Schedule and baseline programme
  Layers,          // Detailed work breakdown structure and milestone plan
  DraftingCompass, // Design / drawing / submittal registers
  FileSpreadsheet, // Tender and procurement trackers
  Clock,           // Long-lead item and material approval tracker
  TrendingUp,      // Weekly progress reports and look-ahead schedules
  BarChart3,       // Monthly management dashboard
  Coins,           // Cost, commitment and variation tracking
  AlertTriangle,   // Risk and issue registers with mitigation actions
  ClipboardCheck,  // QA/QC inspection and NCR tracking
  ShieldCheck,     // HSE observations and compliance reporting
  Sliders,         // Testing & commissioning readiness tracker
  CheckSquare,     // Snag / punch-list management
  FileCheck,       // As-built, O&M and handover documentation tracker
];

export default function ServicesPage() {
  const { services, deliverablesList, controlAreas, qualitySafetyMatrix, procurementStages } = companyProfile;
  const controls = controlAreas || [];
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];
  const ActiveIcon = serviceIcons[activeService.id] || CalendarDays;

  return (
    <>
      <SEOHead
        title="Services"
        description="Explore the complete Project Management Consultancy service portfolio of Pavana Projects: Planning, Design, Procurement, Construction, Cost, MEP, QA/QC, HSE, Project Controls, and Commissioning."
      />

      <PageHero
        title="Services"
        subtitle="A multidisciplinary coordination framework bringing engineering rigor, transparent project controls, and structured quality governance to built environments."
        badge="Scope of Services & Controls"
      />

      {/* 1. EDITORIAL SERVICE SHOWCASE WITH DYNAMIC SELECTOR */}
      <section id="nine-disciplines" className="scroll-mt-36 py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>PMC RESPONSIBILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Nine Core Consulting Disciplines
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Every package is backed by clear contractual interfaces, standardized deliverables, and continuous oversight to protect developer capital and milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav List and 3D Model (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F8F6ED] border border-[#E5E0CE] divide-y divide-[#E5E0CE]">
                {services.map((svc) => {
                  const isSelected = svc.id === selectedServiceId;
                  const IconComp = serviceIcons[svc.id] || CalendarDays;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedServiceId(svc.id)}
                      className={`w-full text-left p-4 sm:p-4.5 transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#064A32] text-[#F8F6ED]'
                          : 'hover:bg-[#EAE6D6]/70 text-[#2C3E36]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComp className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#DFBE65]' : 'text-[#064A32]'}`} />
                        <span className="text-xs font-bold uppercase tracking-wide">
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

            {/* Right Interactive Detail Card (8 Cols) */}
            <div className="lg:col-span-8 bg-[#F8F6ED] border border-[#E5E0CE] p-6 sm:p-8 lg:p-10 space-y-6 shadow-md relative overflow-hidden">
              {/* Header with Title and Content-Specific Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-[#E5E0CE]">
                <div className="md:col-span-7 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-wider uppercase">
                    <span>DISCIPLINE DETAIL</span>
                    <span>•</span>
                    <span className="text-[#064A32] font-bold bg-[#EAE6D6] px-2 py-0.5">PAVANA PMC SCOPE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32]">
                    {activeService.title}
                  </h3>
                  <p className="text-xs text-[#5C6E66] font-medium leading-relaxed">
                    Multidisciplinary coordination, technical verification, and executive control.
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

              {/* Specific PMC Responsibility */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#C69A36]">
                    SPECIFIC PMC RESPONSIBILITY
                  </h4>
                  <span className="text-[10px] font-mono-tech text-[#5C6E66] uppercase bg-[#EAE6D6] px-2 py-0.5">
                    MANDATED REMIT
                  </span>
                </div>
                <div className="p-4 bg-[#FFFFFF] border-l-4 border-[#C69A36] text-sm text-[#064A32] font-semibold leading-relaxed shadow-xs">
                  “{activeService.shortDesc}”
                </div>
              </div>

              {/* Detailed Execution Scope */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#064A32]">
                  DETAILED EXECUTION SCOPE & COORDINATION
                </h4>
                <p className="text-xs sm:text-sm text-[#2C3E36] leading-relaxed bg-[#FFFFFF] p-5 border border-[#E5E0CE] shadow-xs">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Key Deliverables for this Service */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#064A32]">
                    MANDATED OUTPUTS & DELIVERABLES
                  </h4>
                  <span className="text-[10px] font-mono-tech text-[#C69A36] font-bold">
                    {activeService.deliverables.length} DELIVERABLES
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start space-x-2.5 p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] text-xs text-[#2C3E36] shadow-xs hover:border-[#C69A36] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#E5E0CE] flex flex-col sm:flex-row items-center justify-between gap-4">
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

      {/* 2. PROJECT CONTROLS TOWER & MANAGEMENT REPORTING */}
      <section id="project-controls" className="scroll-mt-36 py-20 lg:py-24 bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#DFBE65] tracking-widest uppercase">
              <span>EXECUTIVE CONTROL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              Project Controls & Management Reporting
            </h2>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              The purpose of project controls is not simply to record historical progress. It gives developer leadership an early, auditable view of what is on track, what is at risk, what requires a decision, and what action is required next.
            </p>
          </div>

          {/* 3 HEADLINE DASHBOARD INDICATORS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-[#1A2E26] border border-[#284439] border-t-2 border-t-[#DFBE65] space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65] uppercase">
                  <CalendarDays className="w-4 h-4 text-[#DFBE65]" />
                  <span>Schedule Control</span>
                </div>
              </div>
              <div className="text-lg font-bold text-[#FFFFFF]">Planned vs. Actual Progress</div>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                Critical-path variance analysis, float consumption alerts, and recovery schedule tracking across all mobilized contractor packages.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36]">FREQUENCY: WEEKLY & MONTHLY</div>
            </div>

            <div className="p-6 bg-[#1A2E26] border border-[#284439] border-t-2 border-t-[#DFBE65] space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65] uppercase">
                  <Coins className="w-4 h-4 text-[#DFBE65]" />
                  <span>Cost Control</span>
                </div>
              </div>
              <div className="text-lg font-bold text-[#FFFFFF]">Budget vs. Commitments & Forecast</div>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                Uncompromising visibility over baseline budget, awarded contracts, pending variation orders, and anticipated cost at completion.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36]">FREQUENCY: MONTHLY RECONCILIATION</div>
            </div>

            <div className="p-6 bg-[#1A2E26] border border-[#284439] border-t-2 border-t-[#DFBE65] space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65] uppercase">
                  <Award className="w-4 h-4 text-[#DFBE65]" />
                  <span>Quality & Safety Control</span>
                </div>
              </div>
              <div className="text-lg font-bold text-[#FFFFFF]">Open vs. Closed Quality Observations</div>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                Auditable digital tracking of ITP hold points, material approvals, Non-Conformance Reports (NCRs), and high-risk permit compliance.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36]">FREQUENCY: DAILY LOGS / WEEKLY AUDITS</div>
            </div>
          </div>

          {/* INTERACTIVE CONTROL TOWER SIMULATOR */}
          <div className="mb-12 shadow-2xl">
            <ControlsDashboardInteractive />
          </div>

          {/* 8 CONTROL PILLARS TABLE / GRID */}
          <div className="border border-[#284439] bg-[#14251E] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#284439] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-wider block">
                  EXECUTIVE CONTROL MATRIX
                </span>
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  The Eight Project Control Pillars
                </h3>
              </div>
              <div className="text-xs text-[#A3B8B0] font-mono-tech">
                Standardized in PMC Governance Framework
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {controls.map((ctrl, idx) => {
                const IconComp = controlIcons[ctrl.area] || BarChart3;
                return (
                  <div
                    key={ctrl.area}
                    className="p-5 bg-[#1A2E26] border border-[#284439] hover:border-[#DFBE65] space-y-2.5 transition-colors"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#284439]">
                      <div className="flex items-center space-x-2">
                        <IconComp className="w-4 h-4 text-[#DFBE65]" />
                        <span className="text-xs font-mono-tech font-bold text-[#FFFFFF]">
                          {ctrl.area}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#A3B8B0]">
                      <strong className="text-[#DFBE65] block mb-0.5">Key Outputs:</strong>
                      {ctrl.outputs}
                    </div>

                    <div className="pt-2 border-t border-[#284439] flex items-center justify-between text-[10px] font-mono-tech">
                      <span className="text-[#8BA49A]">REPORTING:</span>
                      <span className="text-[#DFBE65] font-bold">{ctrl.frequency}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE & SAFETY MANAGEMENT */}
      <section id="quality-safety" className="scroll-mt-36 py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>ZERO-COMPROMISE ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Quality Assurance & Safety Management
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Quality and safety are integrated into project management from inception rather than treated as end-stage checks. The PMC framework establishes inspection, documentation and corrective-action mechanisms throughout execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* QUALITY MANAGEMENT */}
            <div className="bg-[#F8F6ED] border-2 border-[#064A32] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0CE]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#064A32] text-[#DFBE65]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-serif-arch text-[#C69A36] uppercase tracking-wider block">
                      QUALITY ASSURANCE & STANDARDS
                    </span>
                    <h3 className="text-xl font-bold text-[#064A32]">
                      Quality Management (QA/QC)
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#FFFFFF] px-3 py-1 border border-[#E5E0CE]">
                  7 Protocols
                </span>
              </div>

              <div className="space-y-3">
                {qualitySafetyMatrix.quality.map((q, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] hover:border-[#C69A36] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#14251E]">
                        <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0" />
                        <span>{q.item}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#C69A36] bg-[#F8F6ED] px-2 py-0.5 border border-[#E5E0CE]">Verified</span>
                    </div>
                    <p className="text-xs text-[#5C6E66] pl-6 leading-relaxed">
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* HSE MANAGEMENT */}
            <div className="bg-[#F8F6ED] border-2 border-[#C69A36] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0CE]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#C69A36] text-[#064A32]">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-serif-arch text-[#064A32] uppercase tracking-wider block">
                      SITE SAFETY & HSE
                    </span>
                    <h3 className="text-xl font-bold text-[#14251E]">
                      HSE & Site Safety Management
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#FFFFFF] px-3 py-1 border border-[#E5E0CE]">
                  7 Protocols
                </span>
              </div>

              <div className="space-y-3">
                {qualitySafetyMatrix.safety.map((s, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] hover:border-[#064A32] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#14251E]">
                        <CheckCircle2 className="w-4 h-4 text-[#064A32] shrink-0" />
                        <span>{s.item}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#FFFFFF] px-2 py-0.5 border border-[#E5E0CE]">Active Gate</span>
                    </div>
                    <p className="text-xs text-[#5C6E66] pl-6 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* THE 4-STEP NCR TRACKING & RESOLUTION CYCLE */}
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
                  <span>Identification</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Deviation Tagging</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  PMC engineer identifies variance against approved drawing or ITP hold point with photographic proof.
                </p>
              </div>

              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <AlertOctagon className="w-4 h-4 text-[#DFBE65]" />
                  <span>Issuance</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Stop-Work & Notice</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  Formal NCR issued to contractor defining severity level and halting work front if safety or integrity is impacted.
                </p>
              </div>

              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <Wrench className="w-4 h-4 text-[#DFBE65]" />
                  <span>Remediation</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">Method Repair & Test</h4>
                <p className="text-xs text-[#A3B8B0] leading-relaxed">
                  Contractor submits repair method statement, performs rectification, and witnesses re-testing under PMC hold-point.
                </p>
              </div>

              <div className="p-4 bg-[#1A2E26] border border-[#284439] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#DFBE65]">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBE65]" />
                  <span>Close-Out</span>
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

      {/* 4. PROCUREMENT & COMMERCIAL MANAGEMENT */}
      <section id="commercial" className="scroll-mt-36 py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>PROTECTING TIME AND COST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Procurement & Commercial Management
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Procurement performance has a direct impact on project schedule and cost. Pavana Projects' PMC approach connects package planning with approvals, procurement, logistics, and site readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {procurementStages.map((stg) => {
              const StageIcon = procurementStageIcons[stg.stage] || Layers;
              return (
                <div
                  key={stg.stage}
                  className="group relative bg-[#FFFFFF] p-6 border border-[#E5E0CE] hover:border-[#C69A36] space-y-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C69A36] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
                    <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:border-[#C69A36] group-hover:bg-[#064A32] flex items-center justify-center transition-all">
                      <StageIcon className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                    {stg.stage}
                  </h4>

                  <p className="text-xs text-[#4C5D56] leading-relaxed">
                    {stg.focus}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-[#FFFFFF] border-l-4 border-[#C69A36] text-xs text-[#064A32] leading-relaxed">
            “Commercial discipline is supported by visibility, documentation and early escalation—helping the client make informed decisions before cost or schedule impacts become difficult to recover.”
          </div>
        </div>
      </section>

      {/* 5. 14 KEY PMC DELIVERABLES */}
      <section id="deliverables" className="scroll-mt-36 py-20 lg:py-24 bg-[#14251E] text-[#F8F6ED] border-b border-[#284439] relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-dark opacity-35 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase">
              <span>DOCUMENTATION & DECISION SUPPORT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              Standardized Key PMC Deliverables
            </h2>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              The purpose of PMC reporting is not simply to record progress. It is to give the client an early view of what is on track, what is at risk, what requires a decision, and what action is required next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverablesList.map((del, idx) => {
              const IconComp = deliverableIcons[idx] || FileText;
              return (
                <div
                  key={idx}
                  className="group relative p-4.5 bg-[#1A2E26] border border-[#254135] hover:border-[#C69A36] transition-all duration-300 shadow-sm hover:shadow-lg flex items-start space-x-3.5 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C69A36] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-8 h-8 rounded-[4px] bg-[#0E1A15] border border-[#284439] group-hover:border-[#C69A36]/70 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <IconComp className="w-4 h-4 text-[#DFBE65] group-hover:text-[#FFFFFF] transition-colors" />
                  </div>
                  <div className="text-xs text-[#E5E0CE] font-medium leading-relaxed group-hover:text-[#FFFFFF] transition-colors pt-1">
                    {del}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-5 bg-[#0C1A14] border border-[#213A30] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A3B8B0]">
              <strong className="text-[#DFBE65]">Contractual Auditability:</strong> All 14 deliverables are mapped to baseline schedules and executive sign-off milestones.
            </div>
            <CTAButton to="/contact" variant="gold" className="shrink-0">
              Consult on Deliverables
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 bg-[#064A32] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              CUSTOMIZED PMC SCOPE
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Need a Custom PMC Scope for Your Development?
            </h3>
            <p className="text-xs text-[#CBD8D2]">
              We structure scopes from complete 360° PMC to targeted MEP, QA/QC, or Project Controls mandates.
            </p>
          </div>

          <CTAButton to="/contact" variant="gold" className="shrink-0">
            Request Scope Formulation
          </CTAButton>
        </div>
      </section>
    </>
  );
}
