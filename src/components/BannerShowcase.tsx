import React, { useState } from 'react';
import { BANNER_SHOWCASE } from '../data/portfolioData';
import { BannerItem } from '../types';
import { ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

export const BannerShowcase: React.FC = () => {
  const [activeBanner, setActiveBanner] = useState<BannerItem>(BANNER_SHOWCASE[0]);

  return (
    <section id="banners" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              05 — Digital Display Campaigns
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              BANNER DESIGN SHOWCASE
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            High-converting digital display banners engineered for e-commerce, food, jewelry, and luxury apparel.
          </p>
        </div>

        {/* Banner Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {BANNER_SHOWCASE.map((banner) => (
            <button
              key={banner.id}
              onClick={() => setActiveBanner(banner)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeBanner.id === banner.id
                  ? 'bg-white/10 border-white text-white shadow-lg'
                  : 'bg-[#0E0E10] border-white/[0.08] text-[#B8B8B8] hover:border-white/20'
              }`}
            >
              <span className="text-[10px] font-mono uppercase text-[#E9C99E] block mb-1">
                {banner.niche}
              </span>
              <h4 className="text-sm font-bold font-sans truncate text-white">
                {banner.title.split('—')[0]}
              </h4>
              <span className="text-[10px] font-mono text-white/40 block mt-1">
                {banner.dimensions}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Wide Banner Stage (Behance / Dribbble Presentation Frame) */}
        <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-10 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-white/50 pb-3 border-b border-white/[0.08]">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E9C99E]" />
              SPEC: {activeBanner.dimensions}
            </span>
            <span>TOOLS: {activeBanner.tools.join(' · ')}</span>
          </div>

          {/* Full Banner Visual Canvas */}
          <div
            className={`w-full min-h-[220px] md:min-h-[280px] rounded-xl p-8 md:p-12 flex flex-col justify-between bg-gradient-to-r ${activeBanner.bgStyle} border border-white/10 shadow-2xl relative overflow-hidden`}
          >
            <div className="relative z-10 flex justify-between items-center text-xs font-mono text-white/70">
              <span className="uppercase tracking-widest">{activeBanner.niche} SPECIAL CAMPAIGN</span>
              <span className="text-[#E9C99E] font-medium">HARSH GAURAV STUDIO</span>
            </div>

            <div className="relative z-10 my-auto py-6 space-y-3 max-w-xl">
              <h3 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                {activeBanner.headline}
              </h3>
              <p className="text-xs md:text-sm text-white/80 font-sans leading-relaxed">
                {activeBanner.subheadline}
              </p>
            </div>

            {/* If banner-2 (Craft Burger Co.), showcase both authentic Pinterest burger artworks */}
            {activeBanner.id === 'banner-2' && (
              <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center gap-3">
                <a
                  href="https://in.pinterest.com/pin/17662623534209442/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Super Delicious Burger — View on Pinterest"
                  className="w-32 md:w-40 h-44 md:h-52 rounded-xl overflow-hidden shadow-2xl border border-amber-400/30 bg-black/60 p-1.5 group/art transition-transform hover:scale-105 block"
                >
                  <img
                    src="https://i.pinimg.com/originals/6e/d1/3d/6ed13d1233c0ab3d676bd28e82064e1d.jpg"
                    alt="Super Delicious Burger Campaign Artwork"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                  />
                  <div className="text-[9px] font-mono text-center text-amber-300 pt-0.5">
                    Design 01 ↗
                  </div>
                </a>
                <a
                  href="https://in.pinterest.com/pin/1123648175799392998/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Artisan Burger Menu — View on Pinterest"
                  className="w-32 md:w-40 h-44 md:h-52 rounded-xl overflow-hidden shadow-2xl border border-amber-400/30 bg-black/60 p-1.5 group/art transition-transform hover:scale-105 block"
                >
                  <img
                    src="https://i.pinimg.com/originals/db/a8/3d/dba83d55a52a9c88ae4d897d3e11e97e.png"
                    alt="Craft Burger Special Offer Poster"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                  />
                  <div className="text-[9px] font-mono text-center text-amber-300 pt-0.5">
                    Design 02 ↗
                  </div>
                </a>
              </div>
            )}

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/50">High-DPI Vector Export</span>
              <div className="px-4 py-2 bg-white text-black text-xs font-bold font-mono tracking-widest uppercase rounded shadow hover:bg-[#E9C99E] transition-colors flex items-center gap-1.5">
                <span>{activeBanner.ctaText}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Banner Meta Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-white/40 block mb-1">Target Niche</span>
              <span className="text-white font-medium">{activeBanner.niche}</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-white/40 block mb-1">Color Palette</span>
              <div className="flex gap-2 items-center mt-1">
                {activeBanner.palette.map((c) => (
                  <span
                    key={c}
                    className="w-4 h-4 rounded-full border border-white/20"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-white/40 block mb-1">Deliverables</span>
              <span className="text-white font-medium">IAB Leaderboard, Billboard &amp; Stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
