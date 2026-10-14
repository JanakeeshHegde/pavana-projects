import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldAlert, CheckCircle2, ShieldCheck, AlertTriangle, 
  FileCheck, HardHat, ClipboardCheck, ArrowRight, ChevronRight, CheckSquare 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import { companyProfile } from '@/data/company-profile';

export default function QualitySafetyPage() {
  const { qualitySafetyMatrix } = companyProfile;
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <SEOHead
        title="Quality & Safety"
        description="Comprehensive QA/QC and HSE Management: Inspection & Test Plans (ITPs), Material Approvals, NCR Resolution, Safety Systems, and Commissioning Readiness."
      />

      <PageHero
        sectionNumber="09"
        sectionTitle="QUALITY & SAFETY ASSURANCE"
        title="Quality & Safety"
        subtitle="Quality and safety are integrated into project management from inception rather than treated as end-stage checklists."
        badge="Quality & HSE Rigor"
        image="/images/site-execution.jpg"
      />

      {/* 1. OVERVIEW & PHILOSOPHY */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>09 | INTEGRATED ASSURANCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                A Controlled Environment with Defined Accountability
              </h2>

              <p className="text-base text-[#2C3E36] leading-relaxed">
                Quality and safety are integrated into project management rather than treated as end-stage checks. The PMC framework establishes inspection, documentation and corrective-action mechanisms throughout execution.
              </p>

              <p className="text-sm text-[#4C5D56] leading-relaxed">
                <strong>Our Outcome:</strong> A controlled project environment where workmanship, documentation, safety and compliance are continuously monitored and closed through defined accountability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all duration-300 relative group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#064A32]">
                      <div className="w-7 h-7 bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <span>Right-First-Time QA/QC</span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#C69A36] tracking-wider">[ QA-REF ]</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed pl-9">
                    Inspection hold points, sample mock-ups, third-party lab testing, and auditable NCR resolution.
                  </p>
                </div>

                <div className="p-5 bg-[#F8F6ED] border border-[#E5E0CE] border-t-2 border-t-[#C69A36] shadow-sm hover:shadow-md hover:border-[#C69A36]/60 transition-all duration-300 relative group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#064A32]">
                      <div className="w-7 h-7 bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <span>Zero-Incident HSE Culture</span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#C69A36] tracking-wider">[ HSE-REF ]</span>
                  </div>
                  <p className="text-xs text-[#5C6E66] leading-relaxed pl-9">
                    High-risk permits, daily toolbox talks, near-miss investigations, and strict site compliance audits.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#C69A36]/40 p-2.5 bg-[#F8F6ED] shadow-xl relative group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="/images/site-execution.jpg"
                    alt="Disciplined On-Site Execution and Safety Supervision"
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#064A32]/90 backdrop-blur-xs text-[#DFBE65] text-[10px] font-mono-tech px-2.5 py-1 border border-[#C69A36]/40">
                  SITE AUDIT CONTEXT
                </div>
              </div>
              <div className="p-3 bg-[#064A32] text-[#DFBE65] text-xs font-serif-arch text-center tracking-widest uppercase border-t-2 border-[#C69A36]">
                ACTIVE SITE QUALITY & HSE SUPERVISION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE DUAL QUALITY & HSE MATRIX (PDF PAGE 10) */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
              <span>CORE CAPABILITY MATRICES (PDF PAGE 10)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
              Quality Management vs. HSE Management
            </h2>
            <p className="text-base text-[#4C5D56] leading-relaxed">
              Standardized protocols mandated across every contractor, vendor, and specialist agency mobilized on site.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* QUALITY MANAGEMENT (LEFT COLUMN) */}
            <div className="bg-[#FFFFFF] border-2 border-[#064A32] p-6 sm:p-8 space-y-6 shadow-md relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0CE]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#064A32] text-[#DFBE65] shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-serif-arch text-[#C69A36] uppercase tracking-wider block">
                      PILLAR 01
                    </span>
                    <h3 className="text-xl font-bold text-[#064A32]">
                      Quality Management (QA/QC)
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#F8F6ED] px-3 py-1 border border-[#E5E0CE]">
                  7 Core Protocols
                </span>
              </div>

              <div className="space-y-3.5">
                {qualitySafetyMatrix.quality.map((q, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] hover:border-[#C69A36] hover:bg-[#FFFFFF] transition-all duration-300 relative group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#14251E]">
                        <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-[#064A32] transition-colors">{q.item}</span>
                      </div>
                      <span className="text-[10px] font-mono-tech font-bold text-[#C69A36] bg-[#FFFFFF] px-2 py-0.5 border border-[#E5E0CE]">
                        QA-0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C6E66] pl-6 leading-relaxed">
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* HSE MANAGEMENT (RIGHT COLUMN) */}
            <div className="bg-[#FFFFFF] border-2 border-[#C69A36] p-6 sm:p-8 space-y-6 shadow-md relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0CE]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#C69A36] text-[#064A32] shadow-xs">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-serif-arch text-[#064A32] uppercase tracking-wider block">
                      PILLAR 02
                    </span>
                    <h3 className="text-xl font-bold text-[#14251E]">
                      HSE & Environmental Safety
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-tech font-bold text-[#064A32] bg-[#F8F6ED] px-3 py-1 border border-[#E5E0CE]">
                  7 Core Protocols
                </span>
              </div>

              <div className="space-y-3.5">
                {qualitySafetyMatrix.safety.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-[#F8F6ED] border border-[#E5E0CE] hover:border-[#064A32] hover:bg-[#FFFFFF] transition-all duration-300 relative group shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#14251E]">
                        <ShieldCheck className="w-4 h-4 text-[#064A32] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-[#064A32] transition-colors">{s.item}</span>
                      </div>
                      <span className="text-[10px] font-mono-tech font-bold text-[#064A32] bg-[#FFFFFF] px-2 py-0.5 border border-[#E5E0CE]">
                        HSE-0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C6E66] pl-6 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NON-CONFORMANCE (NCR) & INCIDENT CLOSURE CYCLE */}
      <section className="py-20 lg:py-24 bg-[#14251E] text-[#F8F6ED] cad-grid-dark border-b border-[#284439] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase">
              <span>ROOT CAUSE DISCIPLINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              The NCR Tracking & Resolution Cycle
            </h2>
            <p className="text-base text-[#CBD8D2] leading-relaxed">
              When a defect or procedural deviation occurs, Pavana Projects prevents recurrence through formal Non-Conformance Reporting (NCR) and mandatory root cause documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="bg-gradient-to-br from-[#1A2E26] to-[#14251E] p-6 border border-[#254135] hover:border-[#DFBE65] transition-all duration-300 space-y-4 shadow-lg hover:shadow-xl hover:-translate-y-1 group relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#254135]">
                <span className="text-xs font-mono-tech font-bold text-[#DFBE65] bg-[#064A32] px-2 py-0.5 border border-[#C69A36]/40">
                  STEP 01
                </span>
                <span className="text-[10px] font-mono-tech text-[#A3B8B0]">[ IDENT-LOG ]</span>
              </div>
              <h4 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#DFBE65] transition-colors">
                Identification
              </h4>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                PMC inspection engineer spots deviation against approved drawings or ITP hold point and logs photo evidence.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-wider">
                Hold-Point Verification
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A2E26] to-[#14251E] p-6 border border-[#254135] hover:border-[#DFBE65] transition-all duration-300 space-y-4 shadow-lg hover:shadow-xl hover:-translate-y-1 group relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#254135]">
                <span className="text-xs font-mono-tech font-bold text-[#DFBE65] bg-[#064A32] px-2 py-0.5 border border-[#C69A36]/40">
                  STEP 02
                </span>
                <span className="text-[10px] font-mono-tech text-[#A3B8B0]">[ STOP-WORK ]</span>
              </div>
              <h4 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#DFBE65] transition-colors">
                Issuance & Stop-Work
              </h4>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                Formal NCR is issued to the executing contractor with defined severity level and immediate work front halt if safety is implicated.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-wider">
                Severity Level Enforced
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A2E26] to-[#14251E] p-6 border border-[#254135] hover:border-[#DFBE65] transition-all duration-300 space-y-4 shadow-lg hover:shadow-xl hover:-translate-y-1 group relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#254135]">
                <span className="text-xs font-mono-tech font-bold text-[#DFBE65] bg-[#064A32] px-2 py-0.5 border border-[#C69A36]/40">
                  STEP 03
                </span>
                <span className="text-[10px] font-mono-tech text-[#A3B8B0]">[ REMEDIATE ]</span>
              </div>
              <h4 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#DFBE65] transition-colors">
                Remediation & Retesting
              </h4>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                Contractor submits method statement for rectification, executes repair, and PMC witnesses third-party re-testing.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-wider">
                Third-Party Re-Test
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A2E26] to-[#14251E] p-6 border border-[#254135] hover:border-[#DFBE65] transition-all duration-300 space-y-4 shadow-lg hover:shadow-xl hover:-translate-y-1 group relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#254135]">
                <span className="text-xs font-mono-tech font-bold text-[#DFBE65] bg-[#064A32] px-2 py-0.5 border border-[#C69A36]/40">
                  STEP 04
                </span>
                <span className="text-[10px] font-mono-tech text-[#A3B8B0]">[ CLOSE-OUT ]</span>
              </div>
              <h4 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#DFBE65] transition-colors">
                Audit Close-Out
              </h4>
              <p className="text-xs text-[#A3B8B0] leading-relaxed">
                NCR logged in digital tracker with root-cause prevention notes before interim contractor billing is certified.
              </p>
              <div className="pt-2 text-[10px] font-mono-tech text-[#C69A36] uppercase tracking-wider">
                Billing Certification Gate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#064A32] text-[#F8F6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block">
              ZERO-COMPROMISE STANDARDS
            </span>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">
              Protect Your Built Asset with Rigorous Quality & HSE
            </h3>
            <p className="text-xs text-[#CBD8D2]">
              Inquire about specialized QA/QC auditing or full-scope site HSE management.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Discuss Quality Mandate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
