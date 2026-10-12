import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Compass, Network, Sliders, CheckCircle2, Building2, 
  ArrowRight, Users, Target, CheckCircle, ChevronRight, MapPin 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import { companyProfile } from '@/data/company-profile';

const valueIcons = {
  Integrity: ShieldCheck,
  Planning: Compass,
  Coordination: Network,
  Control: Sliders,
  Quality: CheckCircle2,
  Delivery: Building2
};

export default function AboutPage() {
  const { foundation, organisationRoles } = companyProfile;

  return (
    <>
      <SEOHead
        title="About Pavana Projects — Our Foundation & Organisation"
        description="Learn about Pavana Projects, a professional Project Management Consultancy (PMC) founded on integrity, planning, coordination, control, quality, and delivery."
      />

      {/* Hero */}
      <PageHero
        sectionNumber="01 & 02"
        sectionTitle="OUR FOUNDATION"
        title="Disciplined Delivery for Built Environments"
        subtitle="Bringing clarity, control, and accountability to complex projects from project initiation through commissioning and handover."
        badge="About Pavana Projects"
        image="/images/facade-detail.jpg"
      />

      {/* 1. COMPANY OVERVIEW */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>01 | COMPANY OVERVIEW</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Strategic Interface for Complex Developments
              </h2>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Pavana Projects is positioned as a professional <strong>Project Management Consultancy (PMC)</strong> focused on structured planning, multidisciplinary coordination, project controls and delivery management for large-scale built-environment projects.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Our approach is built around one objective: <strong>bringing clarity, control and accountability</strong> to complex projects from project initiation through commissioning and handover.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                Pavana Projects is designed to act as the client’s project-management interface across consultants, contractors, vendors, statutory stakeholders and specialist agencies—ensuring that the developer’s interests in Time, Cost, Quality, and Safety are protected at every stage.
              </p>

              <div className="p-4 bg-[#F8F6ED] border-l-4 border-[#C69A36] text-xs text-[#064A32] font-semibold leading-relaxed">
                “CREATING LANDMARKS, SHAPING FUTURES.” — Grounded in engineering rigor, transparent documentation, and accountable leadership.
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#14251E] text-[#F8F6ED] p-8 border border-[#284439] space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 arch-grid-dark opacity-30 pointer-events-none" />
                <div className="relative">
                  <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block mb-1">
                    FOUNDATION METRICS
                  </span>
                  <h3 className="text-xl font-bold text-[#FFFFFF]">
                    Methodology Benchmarks
                  </h3>
                </div>

                <div className="space-y-4 relative text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                    <span className="text-[#A3B8B0]">Reference Scale</span>
                    <span className="text-[#DFBE65] font-bold font-serif-arch text-sm">15,00,000 Sq. Ft.</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                    <span className="text-[#A3B8B0]">PMC Approach</span>
                    <span className="text-[#FFFFFF] font-semibold">360° Integrated Coordination</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#284439]">
                    <span className="text-[#A3B8B0]">Delivery Priorities</span>
                    <span className="text-[#DFBE65] font-semibold">Time, Cost, Quality, Safety & Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A3B8B0]">Registered HQ</span>
                    <span className="text-[#FFFFFF]">Mathikere, Bangalore – 560054</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] py-3 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Connect With Our Directors</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>02 | OUR FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Vision, Mission & Guiding Principles
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Every system and procedure at Pavana Projects is designed to align architectural intent with physical constructability and financial predictability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="bg-[#FFFFFF] p-8 sm:p-10 border border-[#E5E0CE] space-y-4 relative shadow-sm">
              <div className="text-xs font-serif-arch font-bold uppercase tracking-widest text-[#C69A36]">
                OUR VISION
              </div>
              <h3 className="text-2xl font-bold text-[#14251E]">
                A Trusted Partner for Landmark Developments
              </h3>
              <p className="text-base text-[#3C4E46] leading-relaxed">
                “{foundation.vision}”
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#064A32] text-[#F8F6ED] p-8 sm:p-10 border border-[#C69A36]/40 space-y-4 relative shadow-sm">
              <div className="text-xs font-serif-arch font-bold uppercase tracking-widest text-[#DFBE65]">
                OUR MISSION
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF]">
                Professional Systems Aligning Project Execution
              </h3>
              <p className="text-base text-[#CBD8D2] leading-relaxed">
                “{foundation.mission}”
              </p>
            </div>
          </div>

          {/* 6 CORE VALUES FROM PDF PAGE 3 */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase mb-4">
              <span>CORE VALUES & WHAT THEY MEAN</span>
            </div>
            <h3 className="text-2xl font-bold text-[#064A32] mb-8">
              The Six Tenets of Pavana Projects Delivery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundation.values.map((val, idx) => {
                const IconComp = valueIcons[val.name] || ShieldCheck;
                return (
                  <div
                    key={val.name}
                    className="bg-[#FFFFFF] p-6 border border-[#E5E0CE] hover:border-[#C69A36] transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#E5E0CE]">
                      <span className="text-xs font-serif-arch font-bold text-[#C69A36]">
                        VALUE 0{idx + 1}
                      </span>
                      <IconComp className="w-4 h-4 text-[#064A32]" />
                    </div>

                    <h4 className="text-xl font-bold text-[#14251E]">
                      {val.name}
                    </h4>

                    <p className="text-xs text-[#4C5D56] leading-relaxed">
                      {val.meaning}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPOSED PMC ORGANISATION STRUCTURE (PAGE 12) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>11 | PEOPLE & ACCOUNTABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Proposed PMC Organisation Structure
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              The PMC organisation can be scaled to suit project phase, package complexity and site requirements. The following structure provides clear reporting lines and specialist interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organisationRoles.map((role, idx) => (
              <div
                key={role.role}
                className="p-6 bg-[#F8F6ED] border border-[#E5E0CE] space-y-3 hover:border-[#064A32] transition-colors"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E0CE]">
                  <span className="text-xs font-serif-arch font-bold text-[#C69A36]">
                    ROLE 0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#064A32] bg-[#EAE6D6] px-2 py-0.5">
                    Accountability
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#14251E]">
                  {role.role}
                </h4>

                <p className="text-xs text-[#4C5D56] leading-relaxed">
                  {role.responsibility}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#F8F6ED] p-6 border border-[#E5E0CE] text-xs text-[#4C5D56] leading-relaxed flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-[#C69A36] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#064A32] block mb-0.5">Phased Deployment Model:</strong>
              The team can be deployed in phases, allowing the PMC structure to remain lean during planning and mobilization, while expanding to provide specialized full-time site supervision, MEP witnessing, and safety inspectors as work fronts peak.
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGISTERED PRESENCE CALLOUT */}
      <section className="py-16 bg-[#14251E] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              HEADQUARTERS & ENGAGEMENT
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Ready to Explore a Tailored PMC Framework?
            </h3>
            <p className="text-xs text-[#A3B8B0]">
              Visit our Mathikere, Bangalore office or request a formal project briefing.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Schedule Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
