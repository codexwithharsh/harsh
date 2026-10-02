import React from 'react';
import { ArtworkVisual } from './ArtworkVisual';
import { Compass, Lightbulb, Cpu, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              01 — Profile &amp; Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              ABOUT HARSH GAURAV
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-xs">
            Intersection of chemical science discipline and contemporary visual communication.
          </p>
        </div>

        {/* 2-Column Split: Narrative vs Editorial Designer Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-[#B8B8B8] text-base md:text-lg leading-relaxed font-sans">
              <p className="text-white font-medium text-xl md:text-2xl leading-snug font-serif-editorial italic">
                “I’m Harsh Gaurav, a Chemistry undergraduate at Hansraj College, University of Delhi, with a dedicated focus on graphic design, visual storytelling, creative technology, and AI-powered workflows.”
              </p>

              <p>
                I explore the intersection of design, technology, and strategic concepts to craft visual experiences that are modern, purposeful, and memorable. My work spans social media design, branding systems, campaign creatives, editorial layouts, digital graphics, and AI-assisted creative production.
              </p>

              <p>
                Coming from a science background, I approach design with curiosity, hypothesis testing, structural rigor, and deliberate problem-solving. Every color decision, typographic scale, and spatial division is grounded in intentional purpose rather than superficial decoration.
              </p>
            </div>

            {/* Core Philosophy Callout */}
            <div className="p-6 md:p-8 bg-[#0E0E10] border-l-2 border-[#E9C99E] rounded-r-xl border-y border-r border-white/5 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E9C99E] font-mono block">
                Design Philosophy
              </span>
              <p className="text-lg md:text-xl font-serif-editorial italic text-white leading-relaxed">
                “Good design is not decoration. It is a way of thinking, communicating and creating meaning.”
              </p>
            </div>

            {/* Visual Identity 4-Pillars Matrix */}
            <div className="pt-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono block">
                The Creative Matrix
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#E9C99E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-mono font-bold text-white">DESIGN THINKER</h3>
                    <p className="text-xs text-[#B8B8B8] mt-1">Grounded in empathy, context analysis, and iterative user problem-solving.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#F4D3D7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-mono font-bold text-white">VISUAL STORYTELLER</h3>
                    <p className="text-xs text-[#B8B8B8] mt-1">Transforming abstract concepts into arresting, emotionally resonant narratives.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-mono font-bold text-white">AI EXPLORER</h3>
                    <p className="text-xs text-[#B8B8B8] mt-1">Prompt engineering and generative tooling as an extension of human imagination.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-mono font-bold text-white">PROBLEM SOLVER</h3>
                    <p className="text-xs text-[#B8B8B8] mt-1">Applying scientific rigor to compositional balance and production handoffs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Profile Card (Inspired by the Reference Designer Board) */}
          <div className="lg:col-span-5 space-y-4">
            <ArtworkVisual type="harsh-portrait" className="w-full" />

            {/* Quick Skills & Academic Verification Bar */}
            <div className="p-6 bg-[#0E0E10] border border-white/[0.08] rounded-2xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#E9C99E]">
                Undergraduate Journey &amp; Focus
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#B8B8B8]">Institution</span>
                  <span className="text-white font-medium">Hansraj College, University of Delhi</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#B8B8B8]">Major</span>
                  <span className="text-white font-medium">B.Sc. Chemistry</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#B8B8B8]">Creative Practice</span>
                  <span className="text-white font-medium">Graphic &amp; Visual Design</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#B8B8B8]">Primary Methodology</span>
                  <span className="text-[#E9C99E] font-mono">Science → Curiosity → Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
