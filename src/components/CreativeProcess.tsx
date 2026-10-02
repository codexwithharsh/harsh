import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const CreativeProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              07 — How I Work
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              CREATIVE PROCESS
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Structured 6-phase journey from initial inquiry to platform-ready delivery.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group p-8 bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/40 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 text-left relative overflow-hidden"
            >
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] group-hover:bg-[#E9C99E]/5 rounded-bl-full transition-colors pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-[#E9C99E] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                    STAGE
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-[#E9C99E] mt-0.5">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-[#B8B8B8] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-white/50 flex items-center justify-between">
                <span>Output:</span>
                <span className="text-white font-medium truncate max-w-[170px]">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
