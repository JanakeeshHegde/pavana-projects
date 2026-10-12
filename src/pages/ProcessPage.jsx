import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flag, Calendar, Layers, FileCheck, Truck, Hammer, Activity, CheckCircle, 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Clock, DollarSign,
  PackageCheck, FileCode, Award, ShieldAlert, AlertTriangle, BarChart3, Info
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import LifecycleInteractive from '@/features/process/components/LifecycleInteractive';
import ControlsDashboardInteractive from '@/features/process/components/ControlsDashboardInteractive';
import { companyProfile } from '@/data/company-profile';

const stageIcons = {
  '01': Flag,
  '02': Calendar,
  '03': Layers,
  '04': FileCheck,
  '05': Truck,
  '06': Hammer,
  '07': Activity,
  '08': CheckCircle,
};

const controlIcons = {
  'Programme Control': Clock,
  'Cost Control': DollarSign,
  'Procurement Control': PackageCheck,
  'Design Control': FileCode,
  'Quality Control': Award,
  'HSE Control': ShieldAlert,
  'Risk Control': AlertTriangle,
  'Management Reporting': BarChart3,
};

export default function ProcessPage() {
  const { lifecycleStages, controlAreas, governancePrinciples } = companyProfile;
  const [activeStageTab, setActiveStageTab] = useState(0);
  const [expandedGate, setExpandedGate] = useState(null);

  const selectedStage = lifecycleStages[activeStageTab];

  return (
    <>
      <SEOHead
        title="Project Process & Controls — Eight-Stage Lifecycle & Engineering Intelligence"
        description="Explore Pavana Projects' Eight-Stage Delivery Lifecycle (01 Initiate to 08 Handover) and 8 Project Controls Pillars. Structured governance for complex developments."
      />

      <PageHero
        sectionNumber="05"
        sectionTitle="PROCESS & PROJECT CONTROLS"
        title="The Eight-Stage Lifecycle & Control Tower"
        subtitle="Maintaining an unbroken line of sight from strategic developer vision to physical occupancy and auditable commercial closure."
        badge="Governance & Methodology"
        image="/images/site-execution.jpg"
      />

      {/* 1. SECTION 8: THE EIGHT-STAGE LIFECYCLE (DESKTOP PROGRESSIVE TIMELINE & STORYTELLING) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <span>01 // SECTION 06 IN PROFILE</span>
              <span>•</span>
              <span>EIGHT-STAGE LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#064A32] leading-tight">
              Sequential Delivery Architecture
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Every stage has defined deliverables, hold points, and cross-discipline coordination milestones. Select any phase to inspect the PMC execution remit.
            </p>
          </div>

          {/* Interactive Progressive Lifecycle Visual Narrative */}
          <div className="bg-[#F8F6ED] border border-[#E2DDD0] p-6 sm:p-10 shadow-sm relative">
            
            {/* 8-Stage Progress Step Bar */}
            <div className="pb-8 border-b border-[#E2DDD0]">
              <div className="flex items-center justify-between pb-3 text-xs font-mono-tech text-[#5C6E66]">
                <span>PROGRESSIVE TIMELINE // 01 INITIATE TO 08 HANDOVER</span>
                <span className="text-[#064A32] font-bold">PHASE {selectedStage.step} / 08</span>
              </div>

              {/* Progress Fill Bar */}
              <div className="w-full h-1.5 bg-[#E2DDD0] rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-[#064A32] to-[#C69A36] transition-all duration-500 ease-out"
                  style={{ width: `${((activeStageTab + 1) / 8) * 100}%` }}
                />
              </div>

              {/* 8 Clickable Stage Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {lifecycleStages.map((stg, idx) => {
                  const isSelected = idx === activeStageTab;
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
            </div>

            {/* Active Stage Detailed Panel */}
            <div className="pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Stage Narrative (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl sm:text-5xl font-mono-tech font-bold text-[#C69A36]">
                      {selectedStage.step}
                    </span>
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

                  <div className="p-4 bg-[#FFFFFF] border-l-4 border-[#064A32] text-xs text-[#4C5D56] leading-relaxed">
                    <strong className="text-[#064A32] block mb-0.5">Stage-Gate Control:</strong>
                    Formal sign-off between developer leadership, PMC Project Director, and lead consultants is required before moving into subsequent milestone packages.
                  </div>

                  {/* Stage Navigation Buttons */}
                  <div className="flex items-center space-x-3 pt-3">
                    <button
                      disabled={activeStageTab === 0}
                      onClick={() => setActiveStageTab((prev) => Math.max(0, prev - 1))}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                        activeStageTab === 0
                          ? 'border-[#E2DDD0] text-[#A3B8B0] cursor-not-allowed'
                          : 'border-[#064A32] text-[#064A32] hover:bg-[#064A32] hover:text-[#F8F6ED]'
                      }`}
                    >
                      ← Previous Stage
                    </button>

                    <button
                      disabled={activeStageTab === lifecycleStages.length - 1}
                      onClick={() => setActiveStageTab((prev) => Math.min(lifecycleStages.length - 1, prev + 1))}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 ${
                        activeStageTab === lifecycleStages.length - 1
                          ? 'border border-[#E2DDD0] text-[#A3B8B0] cursor-not-allowed'
                          : 'bg-[#064A32] text-[#F8F6ED] hover:bg-[#043624] border border-[#064A32]'
                      }`}
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#DFBE65]" />
                    </button>
                  </div>
                </div>

                {/* Mandated Stage Deliverables (5 Cols) */}
                <div className="lg:col-span-5 bg-[#FFFFFF] p-6 sm:p-7 border border-[#E2DDD0] space-y-4 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                    <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#064A32]">
                      STAGE DELIVERABLES & ARTIFACTS
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#C69A36]">
                      {selectedStage.deliverables.length} OUTPUTS
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {selectedStage.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2.5 text-xs text-[#2C3E36]">
                        <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{del}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-[#E2DDD0] text-[11px] text-[#5C6E66]">
                    Mandated in the Pavana Projects Master Quality & Handover Plan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 9: PROJECT CONTROLS — ENGINEERING INTELLIGENCE (THE CONTROL TOWER) */}
      <section className="py-20 lg:py-28 bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#DFBE65] uppercase tracking-[0.2em]">
              <span>02 // ENGINEERING INTELLIGENCE</span>
              <span>•</span>
              <span>PROJECT CONTROLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-tight">
              Project Controls Console
            </h2>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              Converting complex on-site physical reality into transparent, auditable management intelligence for developer executive leadership.
            </p>
          </div>

          {/* Interactive Engineering Console Component */}
          <ControlsDashboardInteractive />

          {/* 8 Controls Breakdown Grid */}
          <div className="mt-16 pt-12 border-t border-[#284439]">
            <div className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-wider mb-6">
              // THE EIGHT CONTROL AREAS & FREQUENCY PROTOCOLS (PDF PAGE 8)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {controlAreas.map((ctrl, idx) => {
                const IconComp = controlIcons[ctrl.area] || Clock;
                return (
                  <div
                    key={ctrl.area}
                    className="bg-[#1A2E26] p-5 border border-[#254135] hover:border-[#DFBE65] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2.5 border-b border-[#254135]">
                        <span className="text-[11px] font-mono-tech text-[#DFBE65] font-bold">
                          0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono-tech uppercase text-[#CBD8D2] bg-[#14251E] px-2 py-0.5 border border-[#284439]">
                          {ctrl.frequency}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 mt-3">
                        <IconComp className="w-4 h-4 text-[#DFBE65] shrink-0" />
                        <h4 className="text-sm font-bold text-[#FFFFFF]">
                          {ctrl.area}
                        </h4>
                      </div>

                      <p className="text-xs text-[#A3B8B0] mt-2.5 leading-relaxed">
                        {ctrl.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#254135] mt-4">
                      <span className="text-[10px] font-mono-tech text-[#DFBE65] uppercase block mb-0.5">
                        Outputs:
                      </span>
                      <p className="text-[11px] text-[#E5E0CE] font-mono-tech leading-snug">
                        {ctrl.outputs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Operational Integrity Disclaimer */}
            <div className="mt-8 bg-[#0C1A14] p-5 border border-[#213A30] text-xs text-[#A3B8B0] leading-relaxed flex items-start space-x-3">
              <Info className="w-5 h-5 text-[#DFBE65] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#DFBE65] uppercase font-mono-tech block mb-0.5">
                  OPERATIONAL INTEGRITY NOTE (PDF COMPLIANCE):
                </strong>
                Visualizations illustrate the structured PMC framework. Pavana Projects does not make unsubstantiated claims of live telemetry without connected site integrations. All operational reporting is founded on verified Primavera P6 / MS Project baseline comparisons, formal submittal trackers, and physical site measurements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE TENETS (PDF PAGE 7) */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-[0.2em]">
              <span>03 // GOVERNANCE PHILOSOPHY</span>
              <span>•</span>
              <span>PDF PAGE 7</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064A32]">
              Five Core Governance Tenets
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Every procedure across all 8 stages is underpinned by transparent reporting, auditable documentation, and unequivocal accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {governancePrinciples.map((gp, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 border border-[#E2DDD0] hover:border-[#064A32] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-xs font-mono-tech text-[#C69A36] font-bold">
                    TENET 0{idx + 1}
                  </div>
                  <p className="text-sm font-bold text-[#14251E] mt-3 leading-snug">
                    {gp}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2DDD0] text-[11px] font-mono-tech text-[#5C6E66]">
                  Enforced across all packages
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-[#064A32] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech text-[#DFBE65] tracking-widest uppercase block">
              APPOINTMENT & SCOPE STRUCTURING
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Align Your Next Development with Rigorous PMC Controls
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD8D2]">
              Schedule a technical session with our planning and project controls directors in Bangalore.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 bg-gradient-to-r from-[#C69A36] to-[#DFBE65] text-[#064A32] hover:brightness-105 px-7 py-4 text-xs font-bold uppercase tracking-widest shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span>Discuss a Project</span>
            <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
