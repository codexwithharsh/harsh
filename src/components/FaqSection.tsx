import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, ArrowUpRight, Clock, DollarSign, RefreshCw, FileCode, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'Process' | 'Timelines' | 'Rates' | 'Deliverables';
  question: string;
  answer: string;
  keyPoints?: string[];
}

const FAQ_DATA: FaqItem[] = [
  // Process
  {
    id: 'faq-process-1',
    category: 'Process',
    question: 'How does your design process unfold from brief to final delivery?',
    answer: 'Every engagement follows a systematic 4-phase methodology rooted in strategic design thinking: 01 Discovery (analyzing your brand goals, target audience, and mood references), 02 Concept Exploration (presenting 2–3 divergent visual directions with rationale), 03 Iterative Refinement (polishing the selected direction through structured feedback rounds), and 04 Final Production & Handoff (preparing print/digital production-ready master files with comprehensive asset guidelines).',
    keyPoints: ['Comprehensive initial brief', '2–3 divergent concepts', '2–3 structured revision rounds', 'Organized production handoff'],
  },
  {
    id: 'faq-process-2',
    category: 'Process',
    question: 'What materials should I prepare before our kickoff?',
    answer: 'To ensure a swift kickoff, please provide: your primary business objectives, target audience profile, existing brand assets (vector logos, color codes, fonts), copywriting drafts, reference imagery or Pinterest moodboards, and any hard deadlines or print vendor technical specifications.',
    keyPoints: ['Brand guidelines & vector assets', 'Copywriting & messaging briefs', 'Inspiration/competitor references', 'Vendor printing specs (if applicable)'],
  },
  {
    id: 'faq-process-3',
    category: 'Process',
    question: 'How do we communicate throughout the project lifecycle?',
    answer: 'I prioritize asynchronous, high-efficiency communication via email and organized Notion project dashboards, supplemented by scheduled Google Meet milestone presentations for key concept reveals and strategic alignment checkpoints.',
    keyPoints: ['Weekly status briefs', 'Notion project dashboard', 'Asynchronous Loom/Figma feedback', 'Milestone Google Meet syncs'],
  },

  // Timelines
  {
    id: 'faq-timelines-1',
    category: 'Timelines',
    question: 'What are typical project turnaround times?',
    answer: 'Turnaround schedules depend on project scope and depth: Social media promotional campaign posters & banners typically take 3–5 business days; packaging & print collateral take 7–12 business days; while comprehensive brand identity systems take 2–3 weeks from kickoff to final asset export.',
    keyPoints: ['Social posters: 3–5 business days', 'Print & packaging: 7–12 business days', 'Full identity systems: 2–3 weeks'],
  },
  {
    id: 'faq-timelines-2',
    category: 'Timelines',
    question: 'Can you accommodate urgent or rush deadlines?',
    answer: 'Yes. Depending on calendar availability, priority rush delivery is available with turnaround times as quick as 24–48 hours for individual assets or urgent campaign drops. Rush engagements carry an expedited fee (typically 30–50%) to guarantee dedicated overnight focus.',
    keyPoints: ['24–48 hr express delivery available', 'Subject to calendar bandwidth', '30–50% rush acceleration surcharge'],
  },
  {
    id: 'faq-timelines-3',
    category: 'Timelines',
    question: 'What happens if we need additional time to review drafts?',
    answer: 'I maintain flexible review windows up to 5 business days between milestones. If your internal team requires longer review cycles, we pause project milestones gracefully and resume without penalty once feedback is aggregated.',
    keyPoints: ['Standard 3–5 day review window', 'No penalty for internal delays', 'Clear milestone resumption dates'],
  },

  // Rates & Pricing
  {
    id: 'faq-rates-1',
    category: 'Rates',
    question: 'How are your design rates structured?',
    answer: 'I work primarily on transparent, fixed-scope flat fees so there are never unexpected overages or surprise hourly billing. Typical baseline brackets: Promotional banners & single posters range from $150–$350; packaging & print systems range from $500–$1,200; and full-scale brand identity systems range from $800–$2,500 depending on collateral complexity.',
    keyPoints: ['Transparent flat-rate project pricing', 'No unexpected hourly overage', 'Formal written scope & agreement'],
  },
  {
    id: 'faq-rates-2',
    category: 'Rates',
    question: 'What payment terms and schedules do you accept?',
    answer: 'Standard engagements require a 50% non-refundable deposit to secure scheduling on the production calendar, with the remaining 50% due upon milestone approval prior to final master file exports. For enterprise or multi-month retainers, milestones can be structured across 30/30/40 or monthly billing.',
    keyPoints: ['50% booking deposit', '50% upon final draft approval', 'Invoicing via Bank Wire, Stripe, or PayPal'],
  },
  {
    id: 'faq-rates-3',
    category: 'Rates',
    question: 'Are revisions included in your quotes?',
    answer: 'Yes. Every project quote includes 2 to 3 structured rounds of revisions within the agreed scope. Revisions cover color adjustments, typography tuning, layout balancing, and copy updates. New directions that diverge from the approved creative brief are quoted transparently beforehand.',
    keyPoints: ['2–3 revision rounds included', 'Clear feedback consolidation template', 'Transparent quotes for scope expansions'],
  },

  // Deliverables & Licensing
  {
    id: 'faq-deliverables-1',
    category: 'Deliverables',
    question: 'What source file formats and specifications do you provide?',
    answer: 'You receive fully organized, layer-named master files tailored for production: Vector files (.AI, .EPS, .SVG), high-res raster files (.PSD with smart objects), print-ready CMYK PDFs (300 DPI with bleed/crop marks), and optimized digital web formats (.PNG, .JPG, .WebP) alongside optional editable Canva team templates.',
    keyPoints: ['Vector .AI / .EPS / .SVG', 'Layered .PSD master archives', 'Print-ready 300 DPI CMYK PDFs', 'Canva editable templates upon request'],
  },
  {
    id: 'faq-deliverables-2',
    category: 'Deliverables',
    question: 'Who owns the intellectual property and commercial copyright?',
    answer: 'Upon final settlement of invoices, 100% full commercial rights, intellectual property, and usage rights for approved final assets transfer exclusively to you. I retain only non-exclusive rights to showcase the completed work in my design portfolio and social case studies.',
    keyPoints: ['100% commercial ownership transfers to you', 'No recurring royalty obligations', 'Full global usage rights'],
  },
];

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-process-1', 'faq-rates-1']));

  const categories = ['All', 'Process', 'Timelines', 'Rates', 'Deliverables'];

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.keyPoints && item.keyPoints.some((pt) => pt.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              12 — Client Inquiries &amp; Protocols
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Everything you need to know about working together—from initial brainstorming and milestones to transparent rates and master asset deliveries.
          </p>
        </div>

        {/* Quick Rate & Engagement Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E] mb-2 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Standard Turnaround</span>
            </div>
            <div className="text-lg font-display font-bold text-white mb-1">3 — 5 Days</div>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Fast-track campaign graphics &amp; promotional assets. 2–3 weeks for full brand identity systems.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E] mb-2 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Pricing Model</span>
            </div>
            <div className="text-lg font-display font-bold text-white mb-1">Fixed Flat Rates</div>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Transparent project quotes upfront with 50/50 booking split. Never surprise hourly bills.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E] mb-2 uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Revisions Included</span>
            </div>
            <div className="text-lg font-display font-bold text-white mb-1">2 — 3 Rounds</div>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Structured review cycles to refine typography, color grading, and composition to perfection.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E] mb-2 uppercase tracking-wider">
              <FileCode className="w-3.5 h-3.5" />
              <span>Source Deliverables</span>
            </div>
            <div className="text-lg font-display font-bold text-white mb-1">100% Commercial IP</div>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Full vector (.AI, .EPS, .SVG), master layered .PSD, 300 DPI print-ready PDFs, and Canva templates.
            </p>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0E0E10] border border-white/[0.08] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-md whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter topics (e.g. rates, rush, PSD)..."
              className="w-full pl-10 pr-4 py-2 bg-[#0E0E10] border border-white/[0.08] focus:border-[#E9C99E]/60 rounded-lg text-xs font-mono text-white placeholder-white/30 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-white/40 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E0E12] border-[#E9C99E]/40 shadow-lg'
                      : 'bg-[#0A0A0C] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left cursor-pointer transition-colors group"
                  >
                    <div className="flex items-start md:items-center gap-3.5 pr-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9C99E]/80 shrink-0 pt-0.5 md:pt-0">
                        [{faq.category}]
                      </span>
                      <span className="text-base md:text-lg font-display font-bold text-white group-hover:text-[#E9C99E] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`p-2 rounded-lg border transition-all shrink-0 ${
                        isOpen
                          ? 'bg-[#E9C99E] text-black border-[#E9C99E] rotate-180'
                          : 'bg-white/5 text-white/60 border-white/10 group-hover:text-white group-hover:border-white/25'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 pt-1 text-left border-t border-white/[0.06] space-y-4 animate-in fade-in duration-200">
                      <p className="text-sm md:text-base text-[#B8B8B8] leading-relaxed font-sans">
                        {faq.answer}
                      </p>

                      {faq.keyPoints && faq.keyPoints.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">
                            Key Takeaways:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/80">
                            {faq.keyPoints.map((pt, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E9C99E]" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center rounded-xl bg-[#0A0A0C] border border-white/[0.08] space-y-3">
              <HelpCircle className="w-8 h-8 text-white/30 mx-auto" />
              <p className="text-sm font-mono text-[#B8B8B8]">
                No questions found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-4 py-2 text-xs font-mono text-[#E9C99E] border border-[#E9C99E]/40 hover:bg-[#E9C99E]/10 rounded-md transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-[#120E08] via-[#0E0E10] to-[#0A0A0C] border border-[#E9C99E]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E9C99E]">
              Custom Engagements &amp; Inquiries
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">
              HAVE A SPECIFIC REQUIREMENT OR TIMELINE?
            </h3>
            <p className="text-xs md:text-sm text-[#B8B8B8] leading-relaxed">
              Every design challenge is distinct. Send over your preliminary brief or project scope and receive an itemized, fixed proposal within 24 hours.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="px-6 py-3.5 text-xs font-bold tracking-widest uppercase bg-[#E9C99E] hover:bg-white text-black transition-all duration-200 rounded-md flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <span>START A PROJECT BRIEF</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
