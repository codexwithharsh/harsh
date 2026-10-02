import React, { useState } from 'react';
import { Sparkles, Palette, Type, Layout, ZoomIn, X, ExternalLink } from 'lucide-react';

export const BrandingDeepDive: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const elaraImageUrl = 'https://cdn.dribbble.com/userupload/48233405/file/98b51390c351ecae5f13407030b7e99c.png?resize=752x&vertical=center';

  return (
    <section id="branding" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              04 — Brand Identity Deep Dive
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              IDENTITY ARCHITECTURE
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Case study feature: ELARA Luxury Fashion Identity System.
          </p>
        </div>

        {/* Feature Case Study: ELARA */}
        <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-12 space-y-12">
          {/* Top Lockup Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#E9C99E] uppercase tracking-widest block mb-1">
                Luxury Fashion Brand Identity
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">
                ELARA — “GRACE IN EVERY THREAD”
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-white/50">
              <span>Concept Project</span>
              <span aria-hidden="true">·</span>
              <span>Monochromatic Plum System</span>
              <span aria-hidden="true">·</span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-[#E9C99E] hover:underline flex items-center gap-1 font-mono"
              >
                <span>Inspect Full Artwork</span>
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Full Uncropped High-Resolution Brand Identity Presentation Board */}
          <div
            className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E10] shadow-2xl transition-all duration-300 hover:border-white/30"
            onClick={() => setIsLightboxOpen(true)}
          >
            <div className="relative w-full flex items-center justify-center bg-[#0a060a]">
              <img
                src={elaraImageUrl}
                alt="Full Elara Luxury Fashion Brand Identity Presentation Board by Harsh Gaurav"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-2xl block"
                loading="eager"
              />
              
              {/* Floating Inspection Prompt on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-6 py-3 bg-white text-black text-xs font-bold font-mono tracking-widest rounded-lg uppercase shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                  <span>CLICK FOR FULLSCREEN ZOOM VIEW</span>
                </span>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="p-4 md:px-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60 bg-[#070507]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-medium">Full Uncropped Brand Presentation Board</span>
                <span className="text-white/30">·</span>
                <span>Wordmark · Typography · Collateral · Packaging Mockups</span>
              </div>
              <div className="flex items-center gap-2 text-[#E9C99E]">
                <span>Click image to expand full size</span>
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Grid Breakdown: Logo Anatomy, Typography, Color Tokens */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Wordmark Presentation Hero */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#2D1424] via-[#3B1B2F] to-[#12050D] p-8 md:p-12 rounded-xl border border-white/10 flex flex-col justify-between min-h-[360px] text-center relative overflow-hidden">
              <div className="absolute top-4 left-6 text-[10px] font-mono text-[#E9C99E]/80 tracking-widest uppercase">
                Custom Wordmark Anatomy
              </div>
              <div className="absolute top-4 right-6 text-[10px] font-mono text-white/40 tracking-widest uppercase">
                Negative Space Balance
              </div>

              <div className="my-auto py-8">
                <h4 className="text-5xl md:text-7xl font-serif font-normal tracking-tight text-[#FAF7F2] drop-shadow-lg">
                  elara
                </h4>
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#E9C99E] mt-3 font-medium font-sans">
                  GRACE IN EVERY THREAD
                </p>
              </div>

              {/* Anatomy Notes */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/10 text-left text-[11px] font-mono text-white/70">
                <div>
                  <span className="text-[#E9C99E] block mb-0.5">Custom Serif</span>
                  <span className="text-[10px] opacity-70">Editorial &amp; Timeless</span>
                </div>
                <div>
                  <span className="text-[#E9C99E] block mb-0.5">Deep Plum</span>
                  <span className="text-[10px] opacity-70">Luxury &amp; Femininity</span>
                </div>
                <div>
                  <span className="text-[#E9C99E] block mb-0.5">High Contrast</span>
                  <span className="text-[10px] opacity-70">Refined Elegance</span>
                </div>
              </div>
            </div>

            {/* Typography and Swatches Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Color System */}
              <div className="p-6 bg-[#0E0E10] border border-white/[0.08] rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#E9C99E]">
                  <Palette className="w-4 h-4" />
                  <span>Color Architecture</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-3 p-2 bg-white/[0.02] border border-white/5 rounded">
                    <span className="w-6 h-6 rounded-full bg-[#3B1B2F] border border-white/20 shadow-inner" />
                    <div className="text-[11px] font-mono">
                      <span className="text-white block">Deep Plum</span>
                      <span className="text-white/40">#3B1B2F</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/[0.02] border border-white/5 rounded">
                    <span className="w-6 h-6 rounded-full bg-[#632B4F] border border-white/20 shadow-inner" />
                    <div className="text-[11px] font-mono">
                      <span className="text-white block">Royal Mauve</span>
                      <span className="text-white/40">#632B4F</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/[0.02] border border-white/5 rounded">
                    <span className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-white/20 shadow-inner" />
                    <div className="text-[11px] font-mono">
                      <span className="text-white block">Alabaster</span>
                      <span className="text-white/40">#FAF7F2</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/[0.02] border border-white/5 rounded">
                    <span className="w-6 h-6 rounded-full bg-[#E9C99E] border border-white/20 shadow-inner" />
                    <div className="text-[11px] font-mono">
                      <span className="text-white block">Champagne</span>
                      <span className="text-white/40">#E9C99E</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Applications List */}
              <div className="p-6 bg-[#0E0E10] border border-white/[0.08] rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#E9C99E]">
                  <Layout className="w-4 h-4" />
                  <span>Physical &amp; Digital Applications</span>
                </div>
                <ul className="space-y-2 text-xs text-[#B8B8B8]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9C99E]" />
                    <span>Garment Hangtags with Linen Texture &amp; Blind Emboss</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9C99E]" />
                    <span>Matte Packaging Boxes &amp; Custom Ribbons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9C99E]" />
                    <span>Editorial Billboard Campaign Mockup (OOH)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9C99E]" />
                    <span>Instagram Aesthetic Grid &amp; Lookbook Micro-site</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Elara High-Res Artwork */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Controls */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-0.5">
              <span className="text-xs font-mono text-[#E9C99E] uppercase tracking-widest">
                ELARA BRAND IDENTITY SPECIFICATION
              </span>
              <h4 className="text-sm font-semibold text-white">Full Brand Architecture Board — Harsh Gaurav</h4>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={elaraImageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded border border-white/10 transition-colors"
              >
                <span>Original File</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close high-res lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container: Full Scrollable Board */}
          <div
            className="my-auto py-4 w-full flex-1 overflow-y-auto flex items-start justify-center max-h-[85vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-3xl w-full mx-auto bg-[#0A0A0C] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={elaraImageUrl}
                alt="Elara Luxury Fashion Brand Identity Full Specification by Harsh Gaurav"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Lightbox Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50" onClick={(e) => e.stopPropagation()}>
            <span>Harsh Gaurav · Visual Designer</span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="text-[#E9C99E] hover:underline"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

