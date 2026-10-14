import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, DollarSign, PackageCheck, FileCode, Award, ShieldAlert, 
  AlertTriangle, BarChart3, CheckCircle2, ArrowRight, Info, AlertCircle 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import ControlsDashboardInteractive from '@/features/process/components/ControlsDashboardInteractive';
import { companyProfile } from '@/data/company-profile';

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
        title="Project Controls"
        description="Explore Pavana Projects' comprehensive Project Controls system: Programme, Cost, Procurement, Design, Quality, HSE, Risk, and Executive Dashboard Reporting."
      />

      <PageHero
        sectionNumber="07"
        sectionTitle="CONTROL TOWER ARCHITECTURE"
        title="Project Controls"
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
                  className="bg-gradient-to-br from-[#1A2E26] to-[#14251E] p-6 border border-[#254135] border-t-2 border-t-[#C69A36] hover:border-[#DFBE65] transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 group relative"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#254135]">
                      <span className="text-xs font-mono-tech font-bold text-[#DFBE65]">
                        CTRL-0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono-tech uppercase text-[#CBD8D2] bg-[#064A32] border border-[#284439] px-2.5 py-0.5">
                        {ctrl.frequency}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 mt-4">
                      <div className="w-9 h-9 bg-[#064A32] text-[#DFBE65] border border-[#C69A36]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#DFBE65] transition-colors">
                        {ctrl.area}
                      </h3>
                    </div>

                    <p className="text-xs text-[#CBD8D2] mt-3 leading-relaxed">
                      {ctrl.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#254135] bg-[#0E1B15]/70 -mx-6 -mb-6 p-4 border-b border-b-transparent group-hover:border-b-[#DFBE65] transition-colors">
                    <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider text-[#DFBE65] block mb-1">
                      Mandated Outputs:
                    </span>
                    <p className="text-[11px] text-[#A3B8B0] font-mono-tech leading-snug">
                      {ctrl.outputs}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Operational Integrity Disclaimer */}
          <div className="mt-12 bg-[#F8F6ED] p-6 border-l-4 border-[#064A32] border border-[#E5E0CE] text-xs text-[#4C5D56] leading-relaxed flex items-start space-x-3.5 shadow-sm">
            <Info className="w-5 h-5 text-[#064A32] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] uppercase tracking-wide block mb-1">
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
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-l-4 border-l-[#064A32] hover:border-l-[#C69A36] hover:shadow-md transition-all duration-300 flex items-center space-x-3.5 group">
                  <span className="w-7 h-7 bg-[#064A32] group-hover:bg-[#C69A36] text-[#DFBE65] group-hover:text-[#064A32] flex items-center justify-center font-mono-tech text-xs font-bold shrink-0 transition-colors">1</span>
                  <span className="text-xs font-semibold text-[#14251E] group-hover:text-[#064A32] transition-colors">What is currently on schedule and within budget?</span>
                </div>
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-l-4 border-l-[#064A32] hover:border-l-[#C69A36] hover:shadow-md transition-all duration-300 flex items-center space-x-3.5 group">
                  <span className="w-7 h-7 bg-[#064A32] group-hover:bg-[#C69A36] text-[#DFBE65] group-hover:text-[#064A32] flex items-center justify-center font-mono-tech text-xs font-bold shrink-0 transition-colors">2</span>
                  <span className="text-xs font-semibold text-[#14251E] group-hover:text-[#064A32] transition-colors">What is at risk of deviation, and what is the quantified impact?</span>
                </div>
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-l-4 border-l-[#064A32] hover:border-l-[#C69A36] hover:shadow-md transition-all duration-300 flex items-center space-x-3.5 group">
                  <span className="w-7 h-7 bg-[#064A32] group-hover:bg-[#C69A36] text-[#DFBE65] group-hover:text-[#064A32] flex items-center justify-center font-mono-tech text-xs font-bold shrink-0 transition-colors">3</span>
                  <span className="text-xs font-semibold text-[#14251E] group-hover:text-[#064A32] transition-colors">What specific decision or approval is urgently required from the client?</span>
                </div>
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] border-l-4 border-l-[#064A32] hover:border-l-[#C69A36] hover:shadow-md transition-all duration-300 flex items-center space-x-3.5 group">
                  <span className="w-7 h-7 bg-[#064A32] group-hover:bg-[#C69A36] text-[#DFBE65] group-hover:text-[#064A32] flex items-center justify-center font-mono-tech text-xs font-bold shrink-0 transition-colors">4</span>
                  <span className="text-xs font-semibold text-[#14251E] group-hover:text-[#064A32] transition-colors">What remedial recovery action is being enforced on the contractor?</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#C69A36]/40 p-2.5 bg-[#FFFFFF] shadow-xl relative group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="/images/project-controls-room.jpg"
                    alt="Pavana Projects Control Tower Review Session"
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#064A32]/90 backdrop-blur-xs text-[#DFBE65] text-[10px] font-mono-tech px-2.5 py-1 border border-[#C69A36]/40">
                  EXECUTIVE REVIEW
                </div>
              </div>
              <div className="p-3 bg-[#064A32] text-[#DFBE65] text-xs font-serif-arch text-center tracking-widest uppercase border-t-2 border-[#C69A36]">
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
