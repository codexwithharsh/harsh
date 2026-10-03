import React, { useEffect, useState } from 'react';
import { CaseStudyData } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, ArrowRight, CheckCircle2, Layers, Palette, Type, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

const ELARA_FASHION_LOOKBOOK = [
  {
    url: 'https://i.pinimg.com/originals/c8/09/0b/c8090b81f03759e3ba9438f2a805e6de.jpg',
    pinUrl: 'https://in.pinterest.com/pin/53972895530989157/',
    title: 'Autumn Grace Luxury Editorial Campaign',
    tag: 'Editorial Campaign',
  },
  {
    url: 'https://i.pinimg.com/originals/8a/53/5b/8a535b2007b4ecd7b6dc73482837f141.jpg',
    pinUrl: 'https://in.pinterest.com/pin/51439620740368504/',
    title: 'Red Vishnupuri Silk Saree with Abstract Monochrome Prints',
    tag: 'Silk Saree Collection',
  },
  {
    url: 'https://i.pinimg.com/originals/6b/b7/ee/6bb7ee34e8941031cc876d8e8e8cf0cc.jpg',
    pinUrl: 'https://in.pinterest.com/pin/911064199637442572/',
    title: 'Mustard Yellow Vishnupuri Silk Saree with Black Chevron Prints',
    tag: 'Workwear Elegance',
  },
  {
    url: 'https://i.pinimg.com/originals/e6/d9/e4/e6d9e4df8cbe877f4609220f25dbe541.jpg',
    pinUrl: 'https://in.pinterest.com/pin/255438610111380872/',
    title: 'Clothes with QR Code — Monochromatic Streetwear & Apparel',
    tag: 'Graphic Apparel',
  },
  {
    url: 'https://i.pinimg.com/originals/25/1c/1f/251c1ff800584eae1b5c19dc2d64fba2.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1055599908945150/',
    title: 'Colorful Boho Mughal Indian Pattern & Textile Artwork',
    tag: 'Textile Pattern',
  },
  {
    url: 'https://i.pinimg.com/originals/7c/a4/15/7ca41543681046277627888f62b7ac19.jpg',
    pinUrl: 'https://in.pinterest.com/pin/996280748838309634/',
    title: 'Intricate Fabric Pattern & Artisanal Textile Design',
    tag: 'Artisanal Fabric',
  },
  {
    url: 'https://i.pinimg.com/originals/0b/40/70/0b40700c821f47045e75296218268b2c.jpg',
    pinUrl: 'https://in.pinterest.com/pin/2814818512963904/',
    title: 'Abstract Geometric Textile Motif & Color Study',
    tag: 'Pattern Motif',
  },
  {
    url: 'https://i.pinimg.com/originals/f1/f7/38/f1f73896755ddab6c94a27c2c1ed0d18.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1143773636622539205/',
    title: 'Traditional Silk Saree Digital Prints & Luxury Pallu',
    tag: 'Traditional Silk',
  },
  {
    url: 'https://i.pinimg.com/originals/1d/34/07/1d340728473b012a8d3ac111dfa4ed14.jpg',
    pinUrl: 'https://in.pinterest.com/pin/68750127169/',
    title: 'Fabric Pattern Architecture & Paisley Textile Guide',
    tag: 'Pattern Guide',
  },
];

interface CaseStudyModalProps {
  project: CaseStudyData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeElaraIndex, setActiveElaraIndex] = useState(0);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0A0A0C] border border-white/10 rounded-2xl overflow-hidden my-auto shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E]">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-white/60">{project.type}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-10 space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
              Harsh Gaurav Portfolio Archive / {project.year}
            </span>
            <h2 id="case-study-title" className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg md:text-xl text-[#B8B8B8] font-serif-editorial italic">
              {project.heroTagline}
            </p>
          </div>

          {/* Large Visual Feature Representation */}
          {project.mockupType === 'elara' ? (
            <div className="space-y-5">
              <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10]">
                <img
                  src="https://cdn.dribbble.com/userupload/48233405/file/98b51390c351ecae5f13407030b7e99c.png?resize=752x&vertical=center"
                  alt="Elara Full Brand Presentation Board by Harsh Gaurav"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Editorial Campaign & Textile Lookbook Carousel */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E9C99E]" />
                    <span className="text-white font-medium">Textile, Silk Saree &amp; Fashion Lookbook</span>
                    <span className="text-white/40">·</span>
                    <span className="text-[#E9C99E]">{ELARA_FASHION_LOOKBOOK[activeElaraIndex].tag}</span>
                  </div>
                  <span className="text-white/60">
                    {activeElaraIndex + 1} / {ELARA_FASHION_LOOKBOOK.length}
                  </span>
                </div>

                <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10] group relative">
                  <div className="relative w-full aspect-[4/5] md:aspect-[16/10] max-h-[580px] bg-black flex items-center justify-center overflow-hidden">
                    {/* Blurred Backdrop */}
                    <img
                      src={ELARA_FASHION_LOOKBOOK[activeElaraIndex].url}
                      alt=""
                      aria-hidden="true"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
                    />
                    {/* Main Image */}
                    <img
                      key={ELARA_FASHION_LOOKBOOK[activeElaraIndex].url}
                      src={ELARA_FASHION_LOOKBOOK[activeElaraIndex].url}
                      alt={ELARA_FASHION_LOOKBOOK[activeElaraIndex].title}
                      referrerPolicy="no-referrer"
                      className="relative z-10 w-full h-full object-contain"
                    />

                    {/* Top Title Overlay */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-white/10 text-xs font-mono text-[#E9C99E] max-w-[70%] truncate">
                        {ELARA_FASHION_LOOKBOOK[activeElaraIndex].title}
                      </span>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveElaraIndex((prev) =>
                          prev === 0 ? ELARA_FASHION_LOOKBOOK.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-xl"
                      aria-label="Previous fashion artwork"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveElaraIndex((prev) =>
                          prev === ELARA_FASHION_LOOKBOOK.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-xl"
                      aria-label="Next fashion artwork"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Pinterest Button */}
                    <a
                      href={ELARA_FASHION_LOOKBOOK[activeElaraIndex].pinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Pin on Pinterest"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-[#E60023] hover:bg-[#b8001b] rounded-md text-xs font-mono text-white transition-colors shadow-lg"
                    >
                      <span>View Pin on Pinterest ↗</span>
                    </a>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 pt-1">
                  {ELARA_FASHION_LOOKBOOK.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveElaraIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border transition-all ${
                        activeElaraIndex === idx
                          ? 'border-[#E9C99E] ring-2 ring-[#E9C99E]/50 scale-105'
                          : 'border-white/10 hover:border-white/40 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Select ${item.title}`}
                    >
                      <img
                        src={item.url}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : project.mockupType === 'coffee' ? (
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10]">
              <img
                src="https://cdn.dribbble.com/userupload/48233403/file/c79c270e7c7ede16db54719398e9f3cb.png?resize=1504x1541&vertical=center"
                alt="Coffee Local Full Social Campaign & Packaging Board by Harsh Gaurav"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block"
              />
            </div>
          ) : project.mockupType === 'aivora' ? (
            <div className="space-y-5">
              {/* Primary Board: UI & UX DESIGNS Screen */}
              <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10] group relative">
                <a
                  href="https://dribbble.com/shots/27517440-Graphic-UI-UX-Design-Portfolio-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View full shot on Dribbble"
                  className="block"
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/48233486/file/e97da211accdd0269be07bc89aa7b935.png?resize=752x&vertical=center"
                    alt="UI & UX DESIGNS by Harsh Gaurav"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/20 rounded-md text-xs font-mono text-[#E9C99E] hover:bg-[#E9C99E] hover:text-black transition-colors">
                    <span>View Shot on Dribbble ↗</span>
                  </div>
                </a>
              </div>

              {/* Secondary Board: Graphic UI/UX Design Portfolio 2026 */}
              <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10] group relative">
                <a
                  href="https://dribbble.com/shots/27517440-Graphic-UI-UX-Design-Portfolio-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View full shot on Dribbble"
                  className="block"
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/48577910/file/00937f246de256c6d1715a64ae7a2bd1.jpg?resize=1504x846&vertical=center"
                    alt="UI & UX DESIGNS - Graphic UI/UX Design Portfolio 2026 by Harsh Gaurav"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/20 rounded-md text-xs font-mono text-[#E9C99E] hover:bg-[#E9C99E] hover:text-black transition-colors">
                    <span>Dribbble Exhibition #27517440 ↗</span>
                  </div>
                </a>
              </div>
            </div>
          ) : project.mockupType === 'purejuice' ? (
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10]">
              <img
                src="https://cdn.dribbble.com/userupload/48233404/file/86ca62465eab2e113929cf520133f568.png?resize=1504x1280&vertical=center"
                alt="Pure Juice & Sunéa Full Packaging Presentation by Harsh Gaurav"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block"
              />
            </div>
          ) : project.mockupType === 'logofolio' ? (
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10]">
              <img
                src="https://cdn.dribbble.com/userupload/48233356/file/426943973c20db16ff36426a97224612.png?resize=752x&vertical=center"
                alt="Logofolio 2026 - Identity Systems by Harsh Gaurav"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block"
              />
            </div>
          ) : project.mockupType === 'noventis' ? (
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E10]">
              <img
                src="https://cdn.dribbble.com/userupload/48233487/file/92a62a5d6b9f7a76d2b58b04cc93e539.png?resize=752x&vertical=center"
                alt="Noventis & Auréa Full Print & Editorial Presentation Board by Harsh Gaurav"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block"
              />
            </div>
          ) : (
            <div className="w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <ArtworkVisual type={project.mockupType} className="w-full h-full" />
            </div>
          )}

          {/* Overview & Objective Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
                <Layers className="w-4 h-4" />
                <span>01. Project Overview</span>
              </div>
              <p className="text-sm md:text-base text-[#B8B8B8] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
                <Compass className="w-4 h-4" />
                <span>02. The Objective</span>
              </div>
              <p className="text-sm md:text-base text-[#B8B8B8] leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Creative Direction & Approach */}
          <div className="space-y-6 p-6 md:p-8 bg-[#0E0E10] border border-white/[0.08] rounded-xl">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E9C99E]">
              03. Creative Direction &amp; Design Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#B8B8B8] leading-relaxed">
              <div>
                <strong className="text-white block font-sans mb-1">Direction:</strong>
                {project.creativeDirection}
              </div>
              <div>
                <strong className="text-white block font-sans mb-1">System Approach:</strong>
                {project.designApproach}
              </div>
            </div>
          </div>

          {/* Typography & Color Palette Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Typography */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
                <Type className="w-4 h-4" />
                <span>Typography Anatomy</span>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg space-y-2 text-xs">
                <div>
                  <span className="text-white/40 block font-mono">PRIMARY DISPLAY:</span>
                  <span className="text-white font-medium text-sm">{project.typography.primary}</span>
                </div>
                <div>
                  <span className="text-white/40 block font-mono">SECONDARY BODY:</span>
                  <span className="text-white font-medium">{project.typography.secondary}</span>
                </div>
                <p className="text-white/60 text-[11px] pt-1 border-t border-white/5">
                  {project.typography.details}
                </p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#E9C99E]">
                <Palette className="w-4 h-4" />
                <span>Color System</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.colorPalette.map((swatch) => (
                  <div key={swatch.hex} className="p-2.5 bg-white/[0.02] border border-white/[0.06] rounded-lg space-y-1.5">
                    <div
                      className="w-full h-8 rounded border border-white/10 shadow-inner"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="text-[10px] font-mono">
                      <span className="text-white block truncate">{swatch.name}</span>
                      <span className="text-white/50">{swatch.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Final Outcome */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase block mb-1">Production Tools</span>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#E9C99E] uppercase block">Final Outcome</span>
              <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans">
                {project.finalOutcome}
              </p>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg text-xs text-[#B8B8B8] font-serif-editorial italic">
              <strong>Designer Reflection: </strong>
              {project.reflection}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 md:px-10 py-5 bg-[#070709] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/50">
          <span>Harsh Gaurav Design Architecture</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#E9C99E] transition-colors"
          >
            Close Project [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
