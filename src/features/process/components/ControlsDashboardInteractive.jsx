import React, { useState } from 'react';
import {
  Clock, DollarSign, PackageCheck, Award, ShieldAlert, BarChart3,
  TrendingUp, AlertCircle, CheckCircle2, ChevronRight, FileText, ArrowRight
} from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

const controlTabs = [
  { id: 'programme', label: 'Programme Control', icon: Clock, frequency: 'Weekly / Monthly' },
  { id: 'cost', label: 'Cost Control', icon: DollarSign, frequency: 'Monthly / As Required' },
  { id: 'procurement', label: 'Procurement Control', icon: PackageCheck, frequency: 'Weekly' },
  { id: 'quality', label: 'Quality Control', icon: Award, frequency: 'Daily / Weekly' },
  { id: 'hse', label: 'HSE Safety Control', icon: ShieldAlert, frequency: 'Daily / Weekly' },
  { id: 'reporting', label: 'Executive Dashboard', icon: BarChart3, frequency: 'Monthly' }
];

export default function ControlsDashboardInteractive() {
  const [activeTab, setActiveTab] = useState('programme');

  return (
    <div className="bg-[#14251E] text-[#F8F6ED] border border-[#284439] p-4 sm:p-6 lg:p-8 relative overflow-hidden">

      <div className="absolute inset-0 arch-grid-dark opacity-30 pointer-events-none" />


      <div className="relative flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#284439] gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase mb-1">
            <span>CONTROL TOWER</span>
            <span>•</span>
            <span>PROJECT CONTROLS SIMULATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
            Integrated Project Control Center
          </h3>
          <p className="text-xs text-[#A3B8B0] mt-1">
            Converting site activity into actionable management information for developer decision-makers.
          </p>
        </div>

        <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#0C1A14] border border-[#213A30] text-[11px] text-[#DFBE65]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Control Matrix</span>
        </div>
      </div>


      <div className="relative flex overflow-x-auto space-x-2 py-4 no-scrollbar border-b border-[#284439]">
        {controlTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-medium tracking-wide whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#C69A36] text-[#064A32] border-[#C69A36] font-bold shadow-sm'
                  : 'bg-[#1A2E26] text-[#A3B8B0] border-[#254135] hover:border-[#C69A36]/50 hover:text-[#FFFFFF]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>


      <div className="relative pt-6">
        {activeTab === 'programme' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Planned vs Actual</span>
                <div className="text-2xl font-bold text-[#FFFFFF] mt-1">78.5% <span className="text-sm font-normal text-[#DFBE65]">vs 76.2%</span></div>
                <div className="w-full bg-[#0C1A14] h-2 mt-2 rounded-none overflow-hidden">
                  <div className="bg-[#C69A36] h-full" style={{ width: '76.2%' }} />
                </div>
                <span className="text-[10px] text-amber-300 mt-1 block">Variance: -2.3% (Within Recovery Threshold)</span>
              </div>

              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Critical Path Float</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1">0 Days Float</div>
                <p className="text-[11px] text-[#A3B8B0] mt-1">Structural RCC podium slab cycle maintained on critical path.</p>
              </div>

              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Reporting Cycle</span>
                <div className="text-2xl font-bold text-[#DFBE65] mt-1">Weekly / Monthly</div>
                <p className="text-[11px] text-[#A3B8B0] mt-1">Look-ahead schedule reviewed every Tuesday with package leads.</p>
              </div>
            </div>

            <div className="bg-[#0C1A14] p-4 border border-[#213A30]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE65] mb-2 flex items-center justify-center text-center">
                <span>Key Programme Outputs Under Pavana PMC Framework</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#CBD8D2]">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69A36] shrink-0" />
                  <span>Master Project Schedule & Baseline Programme (Primavera P6 / MSP)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69A36] shrink-0" />
                  <span>4-Week Look-Ahead Schedules with physical work-front readiness checks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69A36] shrink-0" />
                  <span>Milestone Slippage Tracking with resource-loaded recovery strategies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C69A36] shrink-0" />
                  <span>Interface Milestone Matrices across Civil, Façade & MEP trade contractors</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Approved Budget</span>
                <div className="text-xl font-bold text-[#FFFFFF] mt-1">Target Baseline</div>
                <span className="text-[10px] text-[#DFBE65] block mt-1">100% Allocated</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Committed Packages</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">Awarded Scopes</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Locked Under Contract</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Variation Log</span>
                <div className="text-xl font-bold text-amber-300 mt-1">Audit Controlled</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Formal Change Protocol</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Cost-to-Complete</span>
                <div className="text-xl font-bold text-[#DFBE65] mt-1">Forecast Visibility</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Monthly Certification</span>
              </div>
            </div>

            <div className="bg-[#0C1A14] p-4 border border-[#213A30]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE65] mb-2">
                Cost Control Governance Workflow
              </h4>
              <p className="text-xs text-[#CBD8D2] leading-relaxed">
                Pavana Projects enforces strict financial discipline: every proposed scope change requires technical justification, contractual assessment, cost implication modeling, and developer sign-off before site instruction. No verbal variations are recognized.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'procurement' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Long-Lead Tracker</span>
                <div className="text-xl font-bold text-[#FFFFFF] mt-1">Chillers / Transformers / DG</div>
                <span className="text-[10px] text-emerald-400 block mt-1">Critical dates mapped to site front readiness</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Technical-Commercial Bids</span>
                <div className="text-xl font-bold text-[#DFBE65] mt-1">Side-by-Side Matrix</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Transparent tender comparison dossiers</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Inspection & FAT</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">Factory Testing</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Witnessing before dispatch</span>
              </div>
            </div>

            <div className="bg-[#0C1A14] p-4 border border-[#213A30]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE65] mb-2">
                Procurement & Site Alignment
              </h4>
              <p className="text-xs text-[#CBD8D2] leading-relaxed">
                Equipment orders are synchronized with physical readiness on site: basement civil cures, shaft readiness, and crane hoisting access are verified before high-value MEP equipment leaves the factory floor.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'quality' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">ITP Implementation</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">100% Packages</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Standardized Hold Points</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Material Approvals</span>
                <div className="text-xl font-bold text-[#DFBE65] mt-1">Lab Certified</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Prior to Bulk Delivery</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">NCR Resolution</span>
                <div className="text-xl font-bold text-amber-300 mt-1">Root Cause Action</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Closed with Test Evidence</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Mock-Up Approvals</span>
                <div className="text-xl font-bold text-[#FFFFFF] mt-1">On-Site Benchmarks</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Façade & Finishes Standard</span>
              </div>
            </div>

            <div className="bg-[#0C1A14] p-4 border border-[#213A30]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE65] mb-2">
                Right-First-Time Quality Assurance
              </h4>
              <p className="text-xs text-[#CBD8D2] leading-relaxed">
                Rather than post-construction snag rectification, Pavana Projects mandates Inspection Requests (IRs) prior to concreting, concealment, or commissioning. Every trade contractor must adhere to predefined hold points.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'hse' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Safety Induction</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">100% Workforce</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Daily Morning Toolbox Brief</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">High-Risk Activity</span>
                <div className="text-xl font-bold text-[#DFBE65] mt-1">Permit-to-Work</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Height & Hot Work Gates</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Near-Miss Reporting</span>
                <div className="text-xl font-bold text-amber-300 mt-1">Zero-Blame Culture</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Preventive Site Actions</span>
              </div>
              <div className="bg-[#1A2E26] p-4 border border-[#254135]">
                <span className="text-[11px] text-[#A3B8B0] uppercase tracking-wider block">Emergency Preparedness</span>
                <div className="text-xl font-bold text-[#FFFFFF] mt-1">Drills & First Aid</div>
                <span className="text-[10px] text-[#A3B8B0] block mt-1">Equipped Medical Post</span>
              </div>
            </div>

            <div className="bg-[#0C1A14] p-4 border border-[#213A30]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE65] mb-2">
                Proactive Health, Safety & Environmental Culture
              </h4>
              <p className="text-xs text-[#CBD8D2] leading-relaxed">
                The PMC safety team conducts continuous daily walks, enforcing PPE compliance, scaffold tags, edge protection, crane certification, and environmental controls for dust, noise, and storm water management.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'reporting' && (
          <div className="space-y-6">
            <div className="bg-[#1A2E26] p-5 border border-[#254135]">
              <div className="flex items-center justify-between border-b border-[#254135] pb-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DFBE65]">
                  Monthly Executive Dashboard — Headline Indicators
                </span>
                <span className="text-[11px] text-[#A3B8B0]">Client Leadership Pack</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] block">
                    1. SCHEDULE
                  </span>
                  <div className="text-sm text-[#CBD8D2]">
                    Planned vs. actual progress curves, critical-path status, look-ahead commitments, and contractor milestone recovery.
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] block">
                    2. COST
                  </span>
                  <div className="text-sm text-[#CBD8D2]">
                    Budget vs. commitment, pending variations log, certified contractor valuations, and anticipated cost-to-complete.
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] block">
                    3. QUALITY & RISK
                  </span>
                  <div className="text-sm text-[#CBD8D2]">
                    Open vs. closed NCR observations, material test certifications, and top 5 project risks requiring developer intervention.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0C1A14] p-4 border border-[#213A30] text-xs text-[#A3B8B0] leading-relaxed">
              <strong className="text-[#DFBE65]">Pavana Projects Reporting Philosophy:</strong> “The purpose of PMC reporting is not simply to record progress. It is to give the client an early view of what is on track, what is at risk, what requires a decision, and what action is required next.”
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
