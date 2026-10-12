import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flag, Calendar, Layers, FileCheck, Truck, Hammer, Activity, CheckCircle, 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import LifecycleInteractive from '../components/LifecycleInteractive';
import { companyProfile } from '../data/companyData';

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

export default function MethodologyPage() {
  const { lifecycleStages, governancePrinciples } = companyProfile;
  const [expandedStage, setExpandedStage] = useState('01');

  return (
    <>
      <SEOHead
        title="Project Methodology — Eight-Stage PMC Delivery Lifecycle"
        description="Comprehensive Eight-Stage Project Management Delivery Lifecycle: Initiate, Plan, Design, Tender, Procure, Execute, Commission, and Handover."
      />

      <PageHero
        sectionNumber="06"
        sectionTitle="HOW WE MANAGE"
        title="Eight-Stage PMC Delivery Lifecycle"
        subtitle="Maintaining an unbroken line of sight from strategic developer objectives to physical occupancy and statutory handover."
        badge="Delivery Methodology"
        image="/images/site-execution.jpg"
      />

      {/* 1. INTERACTIVE LIFECYCLE COMPONENT */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LifecycleInteractive />
        </div>
      </section>

      {/* 2. DEEP DIVE: ALL 8 PHASES WITH STAGE-GATE MILESTONES */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>STAGE-GATE GOVERNANCE DEEP DIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Sequential Gates & Quality Checkpoints
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              No phase progresses to the next without verified deliverable sign-offs, preserving cost commitments and eliminating rework during on-site execution.
            </p>
          </div>

          <div className="space-y-4">
            {lifecycleStages.map((stg) => {
              const IconComp = stageIcons[stg.step] || Flag;
              const isExpanded = expandedStage === stg.step;
              return (
                <div
                  key={stg.step}
                  className="bg-[#FFFFFF] border border-[#E5E0CE] transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedStage(isExpanded ? null : stg.step)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-[#FDFCF8] transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-serif-arch font-bold text-lg shrink-0">
                        {stg.step}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#C69A36]">
                          PHASE FOCUS: {stg.focus}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#14251E]">
                          {stg.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-bold text-[#064A32]">
                      <span className="hidden sm:inline">
                        {isExpanded ? 'Collapse Phase' : 'Expand Deliverables'}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-[#C69A36] transform transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-6 sm:p-8 border-t border-[#E5E0CE] bg-[#F8F6ED] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
                      <div className="lg:col-span-7 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#064A32]">
                          Detailed PMC Responsibilities During {stg.name}
                        </h4>
                        <p className="text-sm text-[#2C3E36] leading-relaxed">
                          {stg.description}
                        </p>
                        <div className="p-4 bg-[#FFFFFF] border-l-4 border-[#C69A36] text-xs text-[#4C5D56] leading-relaxed">
                          <strong>Accountability Gate:</strong> All milestones in this stage must receive formal sign-offs between client leadership, the PMC project director, and participating engineering leads before proceeding.
                        </div>
                      </div>

                      <div className="lg:col-span-5 bg-[#FFFFFF] p-5 border border-[#E5E0CE] space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#C69A36]">
                          Mandatory Stage Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {stg.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-2 text-xs text-[#2C3E36]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#064A32] shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE PRINCIPLES */}
      <section className="py-20 lg:py-24 bg-[#14251E] text-[#F8F6ED] border-b border-[#284439]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase">
              <span>08 | GOVERNANCE PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              Five Core Governance Tenets
            </h2>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              Every procedure throughout the 8 stages is underpinned by transparent reporting, auditable documentation, and unequivocal accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {governancePrinciples.map((gp, idx) => (
              <div
                key={idx}
                className="bg-[#1A2E26] p-6 border border-[#254135] space-y-3 hover:border-[#C69A36] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-serif-arch text-[#DFBE65] font-bold">
                    TENET 0{idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#FFFFFF] mt-3 leading-snug">
                    {gp}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#254135] text-[11px] text-[#A3B8B0]">
                  Enforced across all packages
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#064A32] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              COLLABORATIVE PMC ONBOARDING
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Ready to Align Your Project Lifecycle?
            </h3>
            <p className="text-xs text-[#CBD8D2]">
              Let our planning engineers customize the Work Breakdown Structure (WBS) for your site.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Consult on Methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
