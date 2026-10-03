import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-[#050505]">
      {/* Background Generative Flowing Vector Contour Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle elegant contour lines reminiscent of topographic / fabric flow */}
          <path
            d="M-100 200 C 300 100, 600 350, 1000 180 C 1300 40, 1500 220, 1600 300"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          <path
            d="M-100 320 C 250 200, 650 480, 1100 280 C 1350 160, 1500 340, 1600 400"
            stroke="rgba(233, 201, 158, 0.2)"
            strokeWidth="1.5"
          />
          <path
            d="M-100 440 C 200 360, 700 600, 1050 420 C 1380 260, 1480 480, 1600 520"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
          <path
            d="M-100 580 C 350 450, 800 700, 1180 540 C 1420 410, 1520 600, 1600 650"
            stroke="rgba(244, 211, 215, 0.15)"
            strokeWidth="1.2"
          />
          <path
            d="M-100 700 C 400 600, 850 820, 1250 680 C 1450 580, 1550 720, 1600 780"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Atmospheric radial ambient light */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E9C99E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-[#F4D3D7]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Tagline & Status */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B8B8B8] pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-widest uppercase text-white/90">AVAILABLE FOR FREELANCE &amp; COLLABORATIONS</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span>Hansraj College, DU</span>
            <span aria-hidden="true">·</span>
            <span>Based in Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Center Stage Dramatic Typography & Featured Visual Showcase */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtitle Roles */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm tracking-[0.2em] uppercase text-[#E9C99E] font-mono font-medium">
              <span>Graphic Designer</span>
              <span className="text-white/30">/</span>
              <span>Visual Designer</span>
              <span className="text-white/30">/</span>
              <span>AI Creative</span>
              <span className="text-white/30">/</span>
              <span>Creative Technologist</span>
            </div>

            {/* Massive Display Title */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tighter text-white uppercase leading-[0.9] text-balance">
              HARSH <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                GAURAV
              </span>
            </h1>

            {/* Intro Narrative */}
            <div className="pt-2 max-w-xl">
              <p className="text-base md:text-lg text-[#B8B8B8] font-serif-editorial italic leading-relaxed">
                “Designing bold visual experiences where creativity, technology and storytelling meet.”
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onViewWork}
                className="px-6 py-3.5 text-xs font-bold tracking-widest uppercase bg-white text-black hover:bg-[#E9C99E] transition-all duration-200 rounded-md flex items-center gap-2 group shadow-lg cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContact}
                className="px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-transparent text-white hover:text-white border border-white/20 hover:border-white/50 transition-all duration-200 rounded-md flex items-center gap-2 cursor-pointer"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4 text-[#E9C99E]" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portfolio Visual Showcase */}
          <div className="lg:col-span-5 relative w-full">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#E9C99E]/20 to-[#F4D3D7]/20 rounded-2xl blur-xl opacity-60 -z-10" />

            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0D0D10]/80 shadow-2xl backdrop-blur-md group transition-all duration-300 hover:border-[#E9C99E]/40">
              {/* Top Bar Decoration */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-black/50 text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-white/50 tracking-wider uppercase">HARSH GAURAV · PORTFOLIO</span>
                </div>
                <span className="text-[#E9C99E] font-medium tracking-wider">CREATIVE SHOWCASE</span>
              </div>

              {/* Artwork Banner Image */}
              <div className="relative aspect-[16/9] w-full bg-black/60 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/harsh-hero-portfolio.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://i.ibb.co/NdCBX52H/Harsh-Gaurav-Creative-Design-Portfolio-1.png';
                  }}
                  alt="Harsh Gaurav Creative Design Portfolio Artwork"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="px-4 py-3 bg-gradient-to-t from-black/80 to-black/40 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/80">Visual Identity &amp; Creative Direction</span>
                <span className="text-[#E9C99E] text-[11px] font-semibold">DELHI, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#B8B8B8] font-mono">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#E9C99E]" />
          <span className="tracking-wide">
            SCIENCE <span className="text-white/40">→</span> DESIGN THINKING <span className="text-white/40">→</span> GENERATIVE AI
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>06 Selected Case Studies</span>
          <span aria-hidden="true" className="text-white/20">|</span>
          <span>12+ Curated Brand Marks</span>
          <span aria-hidden="true" className="text-white/20">|</span>
          <span className="text-white">Edition 2026</span>
        </div>
      </div>
    </section>
  );
};
