import React from 'react';
import { DESIGN_THINKING_STAGES } from '../data/portfolioData';
import { Compass, Lightbulb, PenTool, CheckCircle, Search, Layers } from 'lucide-react';

export const DesignThinking: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Search className="w-4 h-4 text-[#E9C99E]" />;
      case 1: return <Compass className="w-4 h-4 text-[#F4D3D7]" />;
      case 2: return <Lightbulb className="w-4 h-4 text-amber-300" />;
      case 3: return <Layers className="w-4 h-4 text-cyan-400" />;
      case 4: return <PenTool className="w-4 h-4 text-blue-400" />;
      case 5: return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      default: return null;
    }
  };

  return (
    <section id="design-thinking" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              09 — Scientific Creative Rigor
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              DESIGN THINKING
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            “I approach creative projects by understanding the problem before designing the solution.”
          </p>
        </div>

        {/* 6-Stage Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_THINKING_STAGES.map((stage, idx) => (
            <div
              key={stage.id}
              className="p-6 md:p-8 bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20 rounded-2xl transition-all duration-300 space-y-4 text-left flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-white/50">
                  <div className="flex items-center gap-2">
                    {getIcon(idx)}
                    <span>{stage.phase}</span>
                  </div>
                  <span className="text-[#E9C99E]">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#E9C99E] transition-colors">
                  {stage.title}
                </h3>

                <p className="text-xs md:text-sm text-[#B8B8B8] leading-relaxed font-sans">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#E9C99E]">
                <span className="text-white/40 block mb-0.5 font-mono">Actionable Output:</span>
                <span className="text-white font-medium">{stage.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
