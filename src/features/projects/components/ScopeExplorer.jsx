import React, { useState } from 'react';
import { 
  Building, LayoutGrid, Zap, Wind, Droplets, Network, Cpu, Trees, CheckCircle2, 
  ChevronRight, ArrowRight 
} from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

const packageIcons = {
  'civil-structural': Building,
  'arch-interiors': LayoutGrid,
  'electrical': Zap,
  'hvac': Wind,
  'plumbing-fire': Droplets,
  'elv-ict': Network,
  'bms-controls': Cpu,
  'external-dev': Trees,
  'testing-commissioning-pkg': CheckCircle2
};

export default function ScopeExplorer() {
  const { referenceProject } = companyProfile;
  const [activePkgId, setActivePkgId] = useState(referenceProject.packages[0].id);

  const activePkg = referenceProject.packages.find((p) => p.id === activePkgId) || referenceProject.packages[0];
  const ActiveIcon = packageIcons[activePkg.id] || Building;

  return (
    <div className="bg-[#FFFFFF] border border-[#E5E0CE] shadow-sm overflow-hidden">
      {/* Top Banner */}
      <div className="bg-[#14251E] text-[#F8F6ED] p-6 sm:p-8 border-b border-[#284439] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-serif-arch text-[#DFBE65] tracking-widest uppercase block mb-1">
            IT SOFTWARE PARK INTEGRATED SCOPE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
            15,00,000 Sq. Ft. Reference Package Architecture
          </h3>
          <p className="text-xs text-[#A3B8B0] mt-1 max-w-2xl">
            Multidisciplinary interface management connecting civil, structural, architectural, MEP services, and external works into a unified delivery framework.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-2xl font-bold text-[#DFBE65] font-serif-arch">
            15,00,000
          </div>
          <div className="text-[11px] text-[#A3B8B0] uppercase tracking-wider">
            Sq. Ft. Reference Scale
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left List of 9 Packages (5 Cols) */}
        <div className="lg:col-span-5 bg-[#F8F6ED] border-r border-[#E5E0CE] divide-y divide-[#E5E0CE] max-h-[580px] overflow-y-auto">
          {referenceProject.packages.map((pkg, idx) => {
            const isSelected = pkg.id === activePkgId;
            const IconComp = packageIcons[pkg.id] || Building;
            return (
              <button
                key={pkg.id}
                onClick={() => setActivePkgId(pkg.id)}
                className={`w-full text-left p-4 sm:p-4.5 transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#064A32] text-[#F8F6ED]'
                    : 'hover:bg-[#EAE6D6]/70 text-[#2C3E36]'
                }`}
              >
                <div className="flex items-center space-x-3 pr-2">
                  <div
                    className={`p-2 rounded-none ${
                      isSelected
                        ? 'bg-[#C69A36] text-[#064A32]'
                        : 'bg-[#FFFFFF] text-[#064A32] border border-[#E5E0CE] group-hover:border-[#C69A36]'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-[11px] font-serif-arch ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
                        PKG 0{idx + 1}
                      </span>
                    </div>
                    <div className={`text-sm font-bold tracking-tight ${isSelected ? 'text-[#FFFFFF]' : 'text-[#14251E]'}`}>
                      {pkg.title}
                    </div>
                  </div>
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

        {/* Right Detail Pane (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E0CE]">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#064A32] text-[#DFBE65]">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-serif-arch text-[#C69A36] tracking-wider uppercase block">
                    Integrated Package Specification
                  </span>
                  <h4 className="text-2xl font-bold text-[#064A32]">
                    {activePkg.title}
                  </h4>
                </div>
              </div>

              <span className="text-[11px] font-semibold text-[#064A32] bg-[#F8F6ED] px-3 py-1 border border-[#E5E0CE]">
                {activePkg.status}
              </span>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#C69A36] mb-2">
                Core PMC Interface Scope (From Profile PDF)
              </h5>
              <p className="text-base text-[#14251E] font-medium leading-relaxed bg-[#F8F6ED] p-4 border-l-2 border-[#C69A36]">
                {activePkg.scope}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#064A32] mb-2">
                Technical Execution & Coordination Focus
              </h5>
              <p className="text-sm text-[#4C5D56] leading-relaxed">
                {activePkg.detail}
              </p>
            </div>
          </div>

          {/* Package Footer Disclaimer */}
          <div className="pt-4 border-t border-[#E5E0CE] bg-[#FDFCF8] p-3 text-[11px] text-[#6E8077] flex items-center justify-between">
            <span>Proposed PMC Framework for 15,00,000 Sq. Ft. IT Park</span>
            <span className="text-[#C69A36] font-medium">Pavana Projects PMC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
