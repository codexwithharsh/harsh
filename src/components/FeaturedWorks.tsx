import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudyData, ProjectCategory } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedWorksProps {
  onSelectProject: (project: CaseStudyData) => void;
}

export const FeaturedWorks: React.FC<FeaturedWorksProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Brand Identity', 'Social Media Design', 'UI/UX Design', 'Packaging Design', 'Print Media'];

  const filteredProjects = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              02 — Selected Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              FEATURED WORKS
            </h2>
          </div>

          {/* Interactive Filter Segmented Control (Allowed functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0E0E10] border border-white/[0.08] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-md whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Editorial High-Retention Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#0A0A0C] border border-white/[0.08] hover:border-white/25 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-2xl"
            >
              {/* Visual Preview Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black/40 border-b border-white/[0.08]">
                <ArtworkVisual type={project.mockupType} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 bg-white text-black text-xs font-bold font-mono tracking-widest rounded-md uppercase shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    VIEW CASE STUDY
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E]">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white/40">{project.type}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-[#E9C99E] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#E9C99E]" />
                  </h3>

                  <p className="text-xs text-[#B8B8B8] line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Footer Tools List */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span className="truncate max-w-[200px]">
                    {project.toolsUsed.slice(0, 3).join(' · ')}
                  </span>
                  <span className="text-white/80 group-hover:text-[#E9C99E] font-medium transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
