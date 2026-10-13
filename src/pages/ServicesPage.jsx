import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarDays, DraftingCompass, FileSpreadsheet, HardHat, Coins, 
  Cpu, ClipboardCheck, ShieldAlert, CheckSquare, CheckCircle2, 
  ArrowRight, ChevronRight, FileText, Download 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
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

export default function ServicesPage() {
  const { services, deliverablesList } = companyProfile;
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];
  const ActiveIcon = serviceIcons[activeService.id] || CalendarDays;

  return (
    <>
      <SEOHead
        title="PMC Service Portfolio — 9 Integrated Disciplines"
        description="Explore the complete Project Management Consultancy service portfolio of Pavana Projects: Planning, Design, Procurement, Construction, Cost, MEP, QA/QC, HSE, and Commissioning."
      />

      <PageHero
        sectionNumber="03"
        sectionTitle="SERVICE PORTFOLIO"
        title="End-to-End PMC Service Portfolio"
        subtitle="A multidisciplinary coordination framework bringing engineering rigor and structured governance to every stage of the project lifecycle."
        badge="Scope of Services"
        image="/images/mep-engineering.jpg"
      />

      {/* 1. EDITORIAL SERVICE SHOWCASE WITH DYNAMIC SELECTOR */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
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
            {/* Left Nav List (4 Cols) */}
            <div className="lg:col-span-4 bg-[#F8F6ED] border border-[#E5E0CE] divide-y divide-[#E5E0CE]">
              {services.map((svc, idx) => {
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
                      <span className={`text-[11px] font-serif-arch font-bold ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
                        0{idx + 1}
                      </span>
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

            {/* Right Interactive Detail Card (8 Cols) */}
            <div className="lg:col-span-8 bg-[#F8F6ED] border border-[#E5E0CE] p-6 sm:p-8 lg:p-10 space-y-8 shadow-sm">
              <div className="flex items-start justify-between pb-6 border-b border-[#E5E0CE]">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-wider uppercase">
                    <span>DISCIPLINE DETAIL</span>
                    <span>•</span>
                    <span>PAVANA PMC SCOPE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32]">
                    {activeService.title}
                  </h3>
                </div>

                <div className="p-3 bg-[#064A32] text-[#DFBE65]">
                  <ActiveIcon className="w-6 h-6" />
                </div>
              </div>

              {/* Responsibility Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C69A36] mb-2">
                  PMC Responsibility Description
                </h4>
                <p className="text-base text-[#14251E] font-medium leading-relaxed bg-[#FFFFFF] p-5 border-l-4 border-[#064A32]">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Key Deliverables for this Service */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#064A32] mb-3">
                  Mandated Deliverables & Outputs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start space-x-2.5 p-3 bg-[#FFFFFF] border border-[#E5E0CE] text-xs text-[#2C3E36]"
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
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-[#064A32] text-[#F8F6ED] hover:bg-[#043624] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Inquire for This Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBE65]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 12: 14 KEY PMC DELIVERABLES (AUDITABLE CHECKLIST) */}
      <section className="py-20 lg:py-24 bg-[#14251E] text-[#F8F6ED] border-b border-[#284439] relative overflow-hidden">
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
            {deliverablesList.map((del, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#1A2E26] border border-[#254135] flex items-start space-x-3 hover:border-[#C69A36] transition-colors"
              >
                <div className="text-xs font-serif-arch text-[#DFBE65] font-bold shrink-0 mt-0.5">
                  #{idx < 9 ? `0${idx + 1}` : idx + 1}
                </div>
                <div className="text-xs text-[#E5E0CE] leading-relaxed">
                  {del}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-[#0C1A14] border border-[#213A30] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A3B8B0]">
              <strong className="text-[#DFBE65]">Contractual Auditability:</strong> All 14 deliverables are mapped to baseline schedules and executive sign-off milestones.
            </div>
            <Link
              to="/project-controls"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFBE65] hover:text-[#FFFFFF] transition-colors shrink-0"
            >
              <span>Explore Control Tower</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SECTION 10: PROCUREMENT & COMMERCIAL MANAGEMENT (PAGE 11) */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
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
            {companyProfile.procurementStages.map((stg, idx) => (
              <div
                key={stg.stage}
                className="bg-[#FFFFFF] p-6 border border-[#E5E0CE] space-y-3 hover:border-[#064A32] transition-colors"
              >
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E5E0CE]">
                  <span className="text-xs font-serif-arch text-[#C69A36] font-bold">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#F8F6ED] px-2 py-0.5">
                    Commercial Focus
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#14251E]">
                  {stg.stage}
                </h4>

                <p className="text-xs text-[#4C5D56] leading-relaxed">
                  {stg.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#FFFFFF] border-l-4 border-[#C69A36] text-xs text-[#064A32] leading-relaxed">
            “Commercial discipline is supported by visibility, documentation and early escalation—helping the client make informed decisions before cost or schedule impacts become difficult to recover.” — PDF Page 11
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#064A32] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              CUSTOMIZED PMC PACKAGING
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Need a Custom PMC Scope for Your Development?
            </h3>
            <p className="text-xs text-[#CBD8D2]">
              We structure scopes from complete 360° PMC to targeted MEP, QA/QC, or Project Controls mandates.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Request Scope Formulation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
