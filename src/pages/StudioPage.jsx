import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Compass, Network, Sliders, CheckCircle2, Building2, 
  ArrowRight, ArrowUpRight, Award, ShieldAlert, CheckSquare, Flag, 
  Calendar, Layers, FileCheck, Truck, Hammer, Activity, CheckCircle 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LifecycleInteractive from '../components/LifecycleInteractive';
import { companyProfile } from '../data/companyData';

const valueIcons = {
  Integrity: ShieldCheck,
  Planning: Compass,
  Coordination: Network,
  Control: Sliders,
  Quality: CheckCircle2,
  Delivery: Building2
};

export default function StudioPage() {
  const { foundation, organisationRoles, qualitySafetyMatrix, lifecycleStages } = companyProfile;

  return (
    <>
      <SEOHead
        title="STUDIO — Foundation, Methodology & Standards"
        description="Pavana Projects Studio — Our core values, 8-stage lifecycle methodology, quality & safety assurance protocols, and PMC leadership organisation."
      />

      {/* Editorial Header */}
      <section className="bg-[#F8F6ED] cad-grid-light border-b border-[#E2DDD0] pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2DDD0] text-xs font-mono-tech text-[#5C6E66]">
            <div>03 // STUDIO — FOUNDATION, METHODOLOGY & ORGANISATION</div>
            <div className="text-[#064A32] font-bold">[DISCIPLINED Built-Environment DELIVERY]</div>
          </div>

          <div className="pt-8 max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#064A32] leading-[1.05]">
              Integrity, Planning <br />
              <span className="text-[#14251E] font-light">& Accountability.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed max-w-2xl">
              Pavana Projects is designed to act as the client’s project-management interface across consultants, contractors, vendors, statutory stakeholders and specialist agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & 6 Values */}
      <section className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left: Vision & Mission (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
                FOUNDATION // SECTION 02
              </div>

              <div className="p-6 bg-[#F8F6ED] border-l-4 border-[#064A32] border-t border-r border-b border-[#E2DDD0] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#064A32]">OUR VISION</span>
                <p className="text-sm text-[#2C3E36] leading-relaxed font-medium">
                  “{foundation.vision}”
                </p>
              </div>

              <div className="p-6 bg-[#14251E] text-[#F8F6ED] border border-[#284439] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DFBE65]">OUR MISSION</span>
                <p className="text-sm text-[#CBD8D2] leading-relaxed">
                  “{foundation.mission}”
                </p>
              </div>
            </div>

            {/* Right: The 6 Core Values (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono-tech text-[#064A32] uppercase tracking-wider pb-2 border-b border-[#E2DDD0]">
                THE SIX VALUES OF PAVANA PROJECTS (PDF PAGE 3)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {foundation.values.map((val, idx) => {
                  const IconComp = valueIcons[val.name] || ShieldCheck;
                  return (
                    <div
                      key={val.name}
                      className="p-5 bg-[#F8F6ED] border border-[#E2DDD0] space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono-tech pb-2 border-b border-[#E2DDD0]">
                        <span className="text-[#C69A36] font-bold">0{idx + 1}</span>
                        <IconComp className="w-3.5 h-3.5 text-[#064A32]" />
                      </div>
                      <h4 className="text-base font-bold text-[#14251E] pt-1">{val.name}</h4>
                      <p className="text-[#4C5D56] leading-relaxed">{val.meaning}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Stage Delivery Lifecycle */}
      <section id="lifecycle" className="bg-[#F8F6ED] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LifecycleInteractive />
        </div>
      </section>

      {/* Quality & Safety Governance (PDF Page 10) */}
      <section id="quality-safety" className="bg-[#FFFFFF] border-b border-[#E2DDD0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#C69A36] uppercase tracking-widest">
              ASSURANCE PROTOCOLS (PDF PAGE 10)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Quality, Safety & Compliance Management
            </h2>
            <p className="text-sm text-[#4A5D54] leading-relaxed">
              Quality and safety are integrated into project management from day one rather than treated as end-stage checks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* QA/QC */}
            <div className="border border-[#064A32] bg-[#F8F6ED] p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                <h3 className="text-lg font-bold text-[#064A32]">QUALITY MANAGEMENT (QA/QC)</h3>
                <span className="text-xs font-mono-tech text-[#C69A36]">7 PROTOCOLS</span>
              </div>
              <div className="space-y-3">
                {qualitySafetyMatrix.quality.map((q, idx) => (
                  <div key={idx} className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] text-xs">
                    <div className="font-bold text-[#14251E] flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#064A32]" />
                      <span>{q.item}</span>
                    </div>
                    <p className="text-[#5C6E66] mt-1 pl-3.5 leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HSE */}
            <div className="border border-[#C69A36] bg-[#F8F6ED] p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD0]">
                <h3 className="text-lg font-bold text-[#14251E]">HSE & SITE SAFETY</h3>
                <span className="text-xs font-mono-tech text-[#C69A36]">7 PROTOCOLS</span>
              </div>
              <div className="space-y-3">
                {qualitySafetyMatrix.safety.map((s, idx) => (
                  <div key={idx} className="p-3 bg-[#FFFFFF] border border-[#E2DDD0] text-xs">
                    <div className="font-bold text-[#14251E] flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C69A36]" />
                      <span>{s.item}</span>
                    </div>
                    <p className="text-[#5C6E66] mt-1 pl-3.5 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation Structure (PDF Page 12) */}
      <section id="organisation" className="bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#DFBE65] uppercase tracking-widest">
              PEOPLE & ACCOUNTABILITY (PDF PAGE 12)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              Proposed PMC Organisation Structure
            </h2>
            <p className="text-sm text-[#CBD8D2] leading-relaxed">
              Deployable in phases to align with project intensity while maintaining clear accountability across all technical interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {organisationRoles.map((role, idx) => (
              <div
                key={role.role}
                className="bg-[#1A2E26] p-5 border border-[#254135] space-y-2 text-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#254135] font-mono-tech text-[10px]">
                  <span className="text-[#DFBE65] font-bold">ROLE 0{idx + 1}</span>
                  <span className="text-[#A3B8B0]">ACCOUNTABILITY</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF] pt-1">{role.role}</h4>
                <p className="text-[#CBD8D2] leading-relaxed">{role.responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Callout */}
      <section className="bg-[#064A32] text-[#F8F6ED] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono-tech text-[#DFBE65] uppercase">BOARDROOM BRIEFINGS</div>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mt-1">Schedule an executive consultation with our PMC leadership</h3>
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
