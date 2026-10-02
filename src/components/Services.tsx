import React from 'react';
import { SERVICES_LIST } from '../data/portfolioData';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              11 — Offerings &amp; Production
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              WHAT I CAN CREATE
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            High-caliber creative visual design services tailored for startups, brands, creators, and agency partners.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="p-8 bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/40 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-6 text-left group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#E9C99E]">
                    0{index + 1}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="p-2 rounded-full bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-colors"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#E9C99E] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm text-[#B8B8B8] leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-white/40 block">Key Deliverables:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools & CTA trigger */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-white/40 truncate max-w-[180px]">
                  {service.tools.join(' · ')}
                </span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-white hover:text-[#E9C99E] font-medium transition-colors"
                >
                  Inquire →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
