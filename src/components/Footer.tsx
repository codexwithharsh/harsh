import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-display font-extrabold uppercase tracking-tight text-white">
              HARSH GAURAV
            </h3>
            <p className="text-xs text-[#B8B8B8] font-mono">
              Graphic Designer · Visual Designer · AI Creative · Creative Technologist
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#B8B8B8]">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#ai-design" className="hover:text-white transition-colors">AI + Design</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto p-3 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© 2026 Harsh Gaurav. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Hansraj College, University of Delhi</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="text-[#E9C99E]">Curated Digital Exhibition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
