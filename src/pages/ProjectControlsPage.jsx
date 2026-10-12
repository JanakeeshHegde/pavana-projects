import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, DollarSign, PackageCheck, FileCode, Award, ShieldAlert, 
  AlertTriangle, BarChart3, CheckCircle2, ArrowRight, Info, AlertCircle 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import ControlsDashboardInteractive from '../components/ControlsDashboardInteractive';
import { companyProfile } from '../data/companyData';

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

export default function ProjectControlsPage() {
  const { controlAreas } = companyProfile;

  return (
    <>
      <SEOHead
        title="Project Controls & Reporting — Control Tower Architecture"
        description="Explore Pavana Projects' comprehensive Project Controls system: Programme, Cost, Procurement, Design, Quality, HSE, Risk, and Executive Dashboard Reporting."
      />

      <PageHero
        sectionNumber="07"
        sectionTitle="CONTROL TOWER"
        title="Project Controls & Reporting Architecture"
        subtitle="Converting complex on-site construction activity into transparent, actionable management intelligence for developer leadership."
        badge="Governance & Controls"
        image="/images/project-controls-room.jpg"
      />

      {/* 1. INTERACTIVE CONTROL TOWER VISUALIZATION */}
      <section className="py-20 lg:py-24 bg-[#14251E] text-[#F8F6ED] border-b border-[#284439]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ControlsDashboardInteractive />
        </div>
      </section>

      {/* 2. THE 8 CONTROL DISCIPLINES & FREQUENCY MATRIX (PDF PAGE 8) */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>PROJECT CONTROL MATRIX (PDF PAGE 8)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Eight Pillars of Project Oversight
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Effective PMC depends on timely information. Pavana Projects structures data collection, technical audits, and executive reporting across eight rigorous control areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {controlAreas.map((ctrl, idx) => {
              const IconComp = controlIcons[ctrl.area] || Clock;
              return (
                <div
                  key={ctrl.area}
                  className="bg-[#F8F6ED] p-6 border border-[#E5E0CE] hover:border-[#C69A36] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
                      <span className="text-xs font-serif-arch font-bold text-[#C69A36]">
                        AREA 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#064A32] bg-[#EAE6D6] px-2 py-0.5">
                        {ctrl.frequency}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2.5 mt-3">
                      <div className="p-2 bg-[#064A32] text-[#DFBE65]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#14251E]">
                        {ctrl.area}
                      </h3>
                    </div>

                    <p className="text-xs text-[#4C5D56] mt-3 leading-relaxed">
                      {ctrl.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E0CE] space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C69A36] block">
                      Mandated Outputs:
                    </span>
                    <p className="text-[11px] text-[#2C3E36] font-medium leading-snug">
                      {ctrl.outputs}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Operational Integrity Disclaimer */}
          <div className="mt-12 bg-[#F8F6ED] p-5 border-l-4 border-[#064A32] text-xs text-[#4C5D56] leading-relaxed flex items-start space-x-3">
            <Info className="w-5 h-5 text-[#064A32] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] uppercase tracking-wide block mb-0.5">
                Operational Integrity & Data Discipline:
              </strong>
              Pavana Projects does not invent synthetic real-time feeds. Our controls rely on auditable site records, Primavera P6 / MS Project baseline comparisons, formal engineering submittal logs, and verified contractor measurement sheets verified by PMC engineers on the ground.
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANAGEMENT REPORTING PHILOSOPHY */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>DECISION-SUPPORT FRAMEWORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Reports Designed for Decisions, Not Shelf Space
              </h2>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Too many construction reports overwhelm developers with hundreds of pages of raw data while obscuring impending critical-path slippages and variation claims.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Pavana Projects' monthly executive dashboard distills site activity into four essential questions:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] flex items-center space-x-3 text-xs font-semibold text-[#14251E]">
                  <span className="w-6 h-6 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-serif-arch text-xs shrink-0">1</span>
                  <span>What is currently on schedule and within budget?</span>
                </div>
                <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] flex items-center space-x-3 text-xs font-semibold text-[#14251E]">
                  <span className="w-6 h-6 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-serif-arch text-xs shrink-0">2</span>
                  <span>What is at risk of deviation, and what is the quantified impact?</span>
                </div>
                <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] flex items-center space-x-3 text-xs font-semibold text-[#14251E]">
                  <span className="w-6 h-6 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-serif-arch text-xs shrink-0">3</span>
                  <span>What specific decision or approval is urgently required from the client?</span>
                </div>
                <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E0CE] flex items-center space-x-3 text-xs font-semibold text-[#14251E]">
                  <span className="w-6 h-6 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center font-serif-arch text-xs shrink-0">4</span>
                  <span>What remedial recovery action is being enforced on the contractor?</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#C69A36]/40 p-2 bg-[#FFFFFF]">
                <img
                  src="/images/project-controls-room.jpg"
                  alt="Pavana Projects Control Tower Review Session"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="p-3 bg-[#064A32] text-[#DFBE65] text-xs font-serif-arch text-center">
                CONTROL TOWER REVIEW & DECISION SUPPORT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#14251E] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              MANAGEMENT DASHBOARD CONSULTATION
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Ready for Absolute Visibility Over Your Project?
            </h3>
            <p className="text-xs text-[#A3B8B0]">
              Discover how our structured control tower protects your capital investment.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Discuss Control Protocols</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
