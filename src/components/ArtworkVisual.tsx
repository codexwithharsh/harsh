import React from 'react';

interface ArtworkVisualProps {
  type: 'elara' | 'coffee' | 'aivora' | 'purejuice' | 'noventis' | 'logofolio' | 'harsh-portrait';
  className?: string;
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'elara':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-[#1a0c16] rounded-xl overflow-hidden flex flex-col justify-between border border-white/10 group ${className}`}>
          {/* Real Dribbble Brand Presentation Image */}
          <img
            src="https://cdn.dribbble.com/userupload/48233405/file/98b51390c351ecae5f13407030b7e99c.png?resize=752x&vertical=center"
            alt="ELARA Brand Identity by Harsh Gaurav"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

          {/* Top header details */}
          <div className="relative z-10 flex items-center justify-between text-xs tracking-widest text-[#E9C99E] uppercase font-mono p-5">
            <span className="bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">BRAND IDENTITY</span>
            <span className="bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">2026 ARCHIVE</span>
          </div>

          {/* Bottom title & details */}
          <div className="relative z-10 p-5 pt-8 text-left space-y-1">
            <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-[#FAF7F2] drop-shadow-md">
              elara
            </h3>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E9C99E] font-sans font-medium">
              GRACE IN EVERY THREAD
            </p>
            <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-white/70">
              <span>Deep Plum #3B1B2F</span>
              <span aria-hidden="true">·</span>
              <span>Luxury Minimalist Apparel</span>
            </div>
          </div>
        </div>
      );

    case 'coffee':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-[#140508] rounded-xl overflow-hidden flex items-center justify-center border border-white/10 group ${className}`}>
          {/* Ambient blurred backdrop to match image tones smoothly */}
          <img
            src="https://cdn.dribbble.com/userupload/48233403/file/c79c270e7c7ede16db54719398e9f3cb.png?resize=1504x1541&vertical=center"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none"
          />
          {/* 100% Uncropped Full Artwork Presentation */}
          <img
            src="https://cdn.dribbble.com/userupload/48233403/file/c79c270e7c7ede16db54719398e9f3cb.png?resize=1504x1541&vertical=center"
            alt="Coffee Local Artisanal Social Media & Packaging System by Harsh Gaurav"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      );

    case 'aivora':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-[#070913] rounded-xl overflow-hidden flex items-center justify-center border border-white/10 group ${className}`}>
          {/* Ambient blurred backdrop to match image tones smoothly */}
          <img
            src="https://cdn.dribbble.com/userupload/48233486/file/e97da211accdd0269be07bc89aa7b935.png?resize=752x&vertical=center"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none"
          />
          {/* 100% Uncropped Full Artwork Presentation */}
          <img
            src="https://cdn.dribbble.com/userupload/48233486/file/e97da211accdd0269be07bc89aa7b935.png?resize=752x&vertical=center"
            alt="UI & UX DESIGNS by Harsh Gaurav"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      );

    case 'purejuice':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-[#14121a] rounded-xl overflow-hidden flex items-center justify-center border border-white/10 group ${className}`}>
          {/* Ambient blurred backdrop to match image tones smoothly */}
          <img
            src="https://cdn.dribbble.com/userupload/48233404/file/86ca62465eab2e113929cf520133f568.png?resize=1504x1280&vertical=center"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none"
          />
          {/* 100% Uncropped Full Artwork Presentation */}
          <img
            src="https://cdn.dribbble.com/userupload/48233404/file/86ca62465eab2e113929cf520133f568.png?resize=1504x1280&vertical=center"
            alt="Pure Juice & Sunéa Packaging Design by Harsh Gaurav"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      );

    case 'noventis':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-[#071410] rounded-xl overflow-hidden flex items-center justify-center border border-white/10 group ${className}`}>
          {/* Ambient blurred backdrop to match image tones smoothly */}
          <img
            src="https://cdn.dribbble.com/userupload/48233487/file/92a62a5d6b9f7a76d2b58b04cc93e539.png?resize=752x&vertical=center"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none"
          />
          {/* 100% Uncropped Full Artwork Presentation */}
          <img
            src="https://cdn.dribbble.com/userupload/48233487/file/92a62a5d6b9f7a76d2b58b04cc93e539.png?resize=752x&vertical=center"
            alt="Noventis & Auréa Print & Editorial Systems by Harsh Gaurav"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      );

    case 'logofolio':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-[#0c0c0e] rounded-xl overflow-hidden flex items-center justify-center border border-white/10 group ${className}`}>
          {/* Ambient blurred backdrop to match image tones smoothly */}
          <img
            src="https://cdn.dribbble.com/userupload/48233356/file/426943973c20db16ff36426a97224612.png?resize=752x&vertical=center"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none"
          />
          {/* 100% Uncropped Full Artwork Presentation */}
          <img
            src="https://cdn.dribbble.com/userupload/48233356/file/426943973c20db16ff36426a97224612.png?resize=752x&vertical=center"
            alt="Logofolio 2026 - Identity Systems by Harsh Gaurav"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      );

    case 'harsh-portrait':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-gradient-to-b from-[#141416] via-[#0E0E10] to-[#070708] rounded-2xl overflow-hidden p-8 flex flex-col justify-between border border-white/15 shadow-2xl ${className}`}>
          {/* Subtle lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top metadata */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#E9C99E] tracking-widest uppercase">
            <span>HARSH GAURAV</span>
            <span>DELHI, IN</span>
          </div>

          {/* Editorial Monogram & Narrative Box */}
          <div className="relative z-10 my-auto text-left py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-white/5 mb-4 shadow-inner">
              <span className="text-xl font-serif font-bold text-white tracking-widest">HG</span>
            </div>
            
            <p className="text-xs tracking-[0.25em] uppercase text-white/40 font-mono mb-2">
              CREATIVE PROFILE
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-snug">
              Harsh Gaurav
            </h3>
            <p className="text-sm text-[#B8B8B8] mt-2 font-serif italic leading-relaxed">
              “Science gives structure; design gives meaning; technology provides the canvas.”
            </p>
          </div>

          {/* Bottom Academic & Creative Anchors */}
          <div className="relative z-10 pt-4 border-t border-white/10 space-y-1.5 text-xs font-mono text-white/60">
            <div className="flex items-center justify-between">
              <span className="text-white/40">Education:</span>
              <span className="text-white/90">Hansraj College, DU</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/40">Field:</span>
              <span className="text-white/90">B.Sc. Chemistry Undergrad</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-white/40">Focus:</span>
              <span className="text-[#E9C99E]">Graphic Design · AI Creative</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
