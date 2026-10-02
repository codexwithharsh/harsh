import React, { useState } from 'react';
import { TOOLKIT_CATEGORIES } from '../data/portfolioData';
import { Wrench, Sparkles, PenTool } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('design');

  const currentCategory = TOOLKIT_CATEGORIES.find((c) => c.id === activeTab) || TOOLKIT_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              06 — Skills &amp; Arsenal
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              CREATIVE TOOLKIT
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Industry software, generative intelligence, and foundational design thinking methodologies.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0E0E10] border border-white/[0.08] rounded-xl max-w-md">
          {TOOLKIT_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 px-4 text-xs font-mono tracking-wider transition-colors rounded-lg flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-[#B8B8B8] hover:text-white'
              }`}
            >
              {tab.id === 'design' && <PenTool className="w-3.5 h-3.5" />}
              {tab.id === 'ai' && <Sparkles className="w-3.5 h-3.5 text-[#E9C99E]" />}
              {tab.id === 'skills' && <Wrench className="w-3.5 h-3.5" />}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-10 space-y-8">
          <div className="space-y-1 pb-4 border-b border-white/[0.08]">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase">
              {currentCategory.name}
            </h3>
            <p className="text-xs md:text-sm text-[#B8B8B8] font-sans">
              {currentCategory.description}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.tools.map((item) => (
              <div
                key={item.name}
                className="p-5 bg-white/[0.02] border border-white/[0.06] hover:border-white/20 rounded-xl transition-all duration-200 space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-white text-sm">{item.name}</span>
                  <span className="text-[#E9C99E]">{item.level}</span>
                </div>
                <p className="text-xs text-[#B8B8B8] leading-relaxed font-sans">
                  {item.role}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
            <span>Methodology: Continuous daily experimentation</span>
            <span className="text-[#E9C99E]">Non-certified practical proficiencies</span>
          </div>
        </div>
      </div>
    </section>
  );
};
