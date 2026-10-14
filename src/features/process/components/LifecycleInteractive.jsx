import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, Layers, Calendar, Flag, FileCheck, Truck, Hammer, Activity, CheckCircle } from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

export default function LifecycleInteractive() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const stages = companyProfile.lifecycleStages;
  const currentStage = stages[selectedStageIndex];

  return (
    <div className="bg-[#FFFFFF] border border-[#E5E0CE] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C69A36]/5 rounded-bl-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E0CE]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase mb-1">
            <span>HOW WE MANAGE</span>
            <span>•</span>
            <span>EIGHT-STAGE LIFECYCLE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32]">
            Project Lifecycle & Delivery Methodology
          </h3>
          <p className="text-sm text-[#4C5D56] mt-1 max-w-2xl">
            Pavana Projects' methodology is designed to maintain a continuous line of sight from strategic project objectives to final operational handover.
          </p>
        </div>

        <div className="text-xs text-[#064A32] font-semibold bg-[#F8F6ED] px-3.5 py-1.5 border border-[#E5E0CE] self-start sm:self-auto">
          Stage {currentStage.step} of 08
        </div>
      </div>

      {/* Step Selector Horizontal Bar */}
      <div className="py-6 border-b border-[#E5E0CE]">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
          {stages.map((stg, idx) => {
            const isSelected = idx === selectedStageIndex;
            return (
              <button
                key={stg.step}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-3 text-left transition-all border ${
                  isSelected
                    ? 'bg-[#064A32] text-[#F8F6ED] border-[#064A32] shadow-md ring-2 ring-[#C69A36]'
                    : 'bg-[#F8F6ED] text-[#2C3E36] border-[#E5E0CE] hover:border-[#C69A36]/60 hover:bg-[#F3EFE3]'
                }`}
              >
                <div className={`text-[11px] font-serif-arch font-bold ${isSelected ? 'text-[#DFBE65]' : 'text-[#C69A36]'}`}>
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

      {/* Active Stage Detail Showcase */}
      <div className="pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Description (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-3">
              <span className="text-4xl font-serif-arch font-bold text-[#C69A36]">
                {currentStage.step}
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#064A32] block">
                  Stage Focus: {currentStage.focus}
                </span>
                <h4 className="text-2xl font-bold text-[#14251E]">
                  {currentStage.name} STAGE
                </h4>
              </div>
            </div>

            <p className="text-base text-[#3C4E46] leading-relaxed">
              {currentStage.description}
            </p>

            {/* Stage Progress Navigation */}
            <div className="flex items-center space-x-3 pt-4">
              <button
                disabled={selectedStageIndex === 0}
                onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  selectedStageIndex === 0
                    ? 'border-[#E5E0CE] text-[#A3B8B0] cursor-not-allowed'
                    : 'border-[#064A32] text-[#064A32] hover:bg-[#064A32] hover:text-[#F8F6ED]'
                }`}
              >
                Previous Stage
              </button>

              <button
                disabled={selectedStageIndex === stages.length - 1}
                onClick={() => setSelectedStageIndex((prev) => Math.min(stages.length - 1, prev + 1))}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 ${
                  selectedStageIndex === stages.length - 1
                    ? 'border border-[#E5E0CE] text-[#A3B8B0] cursor-not-allowed'
                    : 'bg-[#064A32] text-[#F8F6ED] hover:bg-[#043624] border border-[#064A32]'
                }`}
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#DFBE65]" />
              </button>
            </div>
          </div>

          {/* Key Deliverables Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F8F6ED] p-6 border border-[#E5E0CE] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E0CE]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064A32]">
                Key PMC Deliverables
              </span>
              <span className="text-[11px] font-serif-arch text-[#C69A36]">
                Phase {currentStage.step}
              </span>
            </div>

            <ul className="space-y-3">
              {currentStage.deliverables.map((del, dIdx) => (
                <li key={dIdx} className="flex items-start space-x-2.5 text-xs text-[#2C3E36]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69A36] shrink-0 mt-0.5" />
                  <span className="leading-snug">{del}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-[#E5E0CE] text-[11px] text-[#5C6E66]">
              Controlled through stage-gate sign-offs and auditable milestone documentation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
