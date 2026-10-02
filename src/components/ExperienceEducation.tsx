import React from 'react';
import { GraduationCap, Briefcase, ArrowRight, BookOpen } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              10 — Background &amp; Foundations
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              EDUCATION &amp; JOURNEY
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Truthful, transparent trajectory connecting science curiosity with multidisciplinary design practice.
          </p>
        </div>

        {/* 2-Column Split: Education vs Experience Evolution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* Education Box */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundations</span>
            </div>

            <div className="p-8 bg-[#0A0A0C] border border-white/10 rounded-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-medium">Undergraduate Candidate (2025 – Present)</span>
                <h3 className="text-2xl font-display font-bold text-white">
                  B.Sc. in Chemistry
                </h3>
                <p className="text-sm font-sans text-white/90">
                  Hansraj College, University of Delhi
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-3 text-xs text-[#B8B8B8] leading-relaxed">
                <p>
                  Studying molecular symmetry, reaction kinetics, and thermodynamic principles trains the mind in rigorous pattern recognition, structural decomposition, and hypothesis-driven iteration.
                </p>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg text-white/80 font-mono text-[11px]">
                  <span className="text-[#E9C99E] block mb-1">Transferable Principle:</span>
                  “The exact same discipline required to balance a chemical equation is required to balance typographic hierarchy and negative space on a canvas.”
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-white/40">
                <span>Location: Delhi, India</span>
                <span className="text-white/80">Hansraj College Alumni Network</span>
              </div>
            </div>
          </div>

          {/* Experience Journey Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
              <Briefcase className="w-4 h-4" />
              <span>Creative Evolution</span>
            </div>

            <div className="p-8 bg-[#0A0A0C] border border-white/10 rounded-2xl space-y-8 relative">
              {/* Timeline Items */}
              <div className="space-y-6">
                {/* 2025 */}
                <div className="relative pl-6 border-l border-white/20 space-y-1">
                  <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#E9C99E]" />
                  <span className="text-xs font-mono text-[#E9C99E]">2025</span>
                  <h4 className="text-base font-bold text-white">Undergraduate Inception</h4>
                  <p className="text-xs text-[#B8B8B8] leading-relaxed">
                    Started undergraduate studies in Chemistry at Hansraj College, University of Delhi. Began formal self-directed exploration of typography, Photoshop composition, and digital layouts.
                  </p>
                </div>

                {/* 2026 */}
                <div className="relative pl-6 border-l border-white/20 space-y-1">
                  <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400">2026</span>
                  <h4 className="text-base font-bold text-white">Creative Practice Expansion</h4>
                  <p className="text-xs text-[#B8B8B8] leading-relaxed">
                    Expanded creative work across social media design systems, identity systems, AI generative tools, and digital UI prototypes for early-stage initiatives and collaborations.
                  </p>
                </div>

                {/* Present */}
                <div className="relative pl-6 border-l border-white/20 space-y-1">
                  <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">PRESENT</span>
                  <h4 className="text-base font-bold text-white">Multidisciplinary Practice</h4>
                  <p className="text-xs text-[#B8B8B8] leading-relaxed">
                    Building a focused studio practice combining science-grounded research, editorial visual design, and AI-accelerated creative workflows. Available for select freelance and internship roles.
                  </p>
                </div>
              </div>

              {/* Bottom Formula */}
              <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-[#E9C99E] flex items-center justify-between">
                <span>Core Synthesis</span>
                <span>Science + Design + AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
