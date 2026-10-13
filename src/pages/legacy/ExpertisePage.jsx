import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarDays, DraftingCompass, FileSpreadsheet, HardHat, Coins, 
  Cpu, ClipboardCheck, ShieldAlert, CheckSquare, ArrowRight, ArrowUpRight, 
  ChevronRight, CheckCircle2, Clock, DollarSign, PackageCheck, Award, AlertCircle 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import ControlsDashboardInteractive from '@/features/process/components/ControlsDashboardInteractive';
import { companyProfile } from '@/data/company-profile';

export default function ExpertisePage() {
  const { services, deliverablesList, procurementStages, controlAreas } = companyProfile;
  const [selectedDiscipline, setSelectedDiscipline] = useState(0);

  return (
    <>
      <SEOHead
        title="EXPERTISE — PMC Services & Project Control Tower"
        description="Explore Pavana Projects' comprehensive PMC service capabilities, Control Tower architecture, and 14 standardized project deliverables for large-scale built environments."
      />

      {/* Editorial Header */}
      <section className="bg-[#F8F6ED] cad-grid-light border-b border-[#E2DDD0] pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2DDD0] text-xs font-mono-tech text-[#5C6E66]">
            <div>02 // EXPERTISE — PMC SERVICES & GOVERNANCE ARCHITECTURE</div>
            <div className="text-[#064A32] font-bold">[NINE DISCIPLINES // CONTROL TOWER]</div>
          </div>

          <div className="pt-8 max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#064A32] leading-[1.05]">
              Discipline Across <br />
              <span className="text-[#14251E] font-light">Every Coordinate.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed max-w-2xl">
              An integrated Project Management Consultancy framework connecting architectural design intent, commercial discipline, and construction execution.
            </p>
          </div>
        </div>
      </section>

      {/* The 9 Disciplines Technical Specification Manual */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              DISCIPLINE CATALOGUE // 01-09
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Nine Core Consulting Responsibilities
            </h2>
            <p className="text-sm text-[#4A5D54] leading-relaxed">
              Every package is governed by auditable inputs, clear interface boundaries, and verified deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector (4 Cols) */}
            <div className="lg:col-span-4 border border-[#E2DDD0] bg-[#F8F6ED] divide-y divide-[#E2DDD0]">
              {services.map((svc, idx) => {
                const isSelected = idx === selectedDiscipline;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedDiscipline(idx)}
                    className={`w-full text-left p-4.5 transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#064A32] text-[#F8F6ED]'
                        : 'hover:bg-[#EAE5D6] text-[#14251E]'
                    }`}
                  >
                    <div className="flex items-baseline space-x-3">
                      <span className={`font-mono-tech text-xs ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
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

            {/* Right Specification Pane (8 Cols) */}
            <div className="lg:col-span-8 bg-[#F8F6ED] border border-[#E2DDD0] p-6 sm:p-10 space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD0]">
                {/* <div>
                  <div className="text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
                    DISCIPLINE 0{selectedDiscipline + 1} SPECIFICATION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32] mt-1">
                    {services[selectedDiscipline].title}
                  </h3>
                </div> */}

                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#FFFFFF] border border-[#E2DDD0] px-3 py-1">
                  PMC CORE
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono-tech text-[#7A8C84] uppercase block">
                  DETAILED RESPONSIBILITY DESCRIPTION
                </span>
                <p className="text-base text-[#14251E] font-medium leading-relaxed bg-[#FFFFFF] p-5 border-l-2 border-[#064A32]">
                  {services[selectedDiscipline].fullDesc}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-mono-tech text-[#7A8C84] uppercase block">
                  MANDATED AUDITABLE DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[selectedDiscipline].deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] text-xs font-medium text-[#2C3E36] flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C69A36] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Tower Architecture */}
      <section id="control-tower" className="bg-[#14251E] cad-grid-dark border-b border-[#284439] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ControlsDashboardInteractive />
        </div>
      </section>

      {/* 14 Mandated Key PMC Deliverables */}
      <section id="deliverables" className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              DOCUMENTATION STANDARDS (PDF PAGE 13)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Standardized Key PMC Deliverables
            </h2>
            <p className="text-sm text-[#4A5D54] leading-relaxed">
              The purpose of PMC reporting is to give the client an early view of what is on track, what is at risk, what requires a decision, and what action is required next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverablesList.map((del, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F8F6ED] border border-[#E2DDD0] flex items-start space-x-3 text-xs"
              >
                <span className="font-mono-tech text-[#C69A36] font-bold shrink-0 mt-0.5">
                  #{idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="text-[#2C3E36] font-medium leading-relaxed">
                  {del}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & Procurement Discipline */}
      <section className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              COMMERCIAL GOVERNANCE (PDF PAGE 11)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Protecting Time and Cost
            </h2>
            <p className="text-sm text-[#4A5D54] leading-relaxed">
              Procurement performance has a direct impact on project schedule and cost. Pavana Projects connects package planning with approvals, logistics, and site readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {procurementStages.map((stg, idx) => (
              <div
                key={stg.stage}
                className="bg-[#FFFFFF] p-5 border border-[#E2DDD0] space-y-2 text-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#E2DDD0] font-mono-tech text-[10px]">
                  <span className="text-[#C69A36] font-bold">STAGE 0{idx + 1}</span>
                  <span className="text-[#064A32]">COMMERCIAL</span>
                </div>
                <h4 className="text-sm font-bold text-[#14251E] pt-1">{stg.stage}</h4>
                <p className="text-[#4C5D56] leading-relaxed">{stg.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#064A32] text-[#F8F6ED] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono-tech text-[#DFBE65] uppercase">CUSTOM PMC SCOPE STRUCTURING</div>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mt-1">Require a customized PMC scope for your project?</h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-[#DFBE65] text-[#064A32] hover:bg-[#FFFFFF] px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
