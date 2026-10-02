import React, { useState } from 'react';
import { Sparkles, ArrowRight, Terminal, Sliders, Check, Copy } from 'lucide-react';

export const AiDesignSection: React.FC = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const workflowSteps = [
    { name: 'IDEA', desc: 'Creative seed & context thesis' },
    { name: 'PROMPT', desc: 'Syntactic constraints & visual grammar' },
    { name: 'EXPERIMENT', desc: 'Multi-model rapid exploration' },
    { name: 'DESIGN', desc: 'Vector curation & spatial framing' },
    { name: 'REFINE', desc: 'Color correction & kerning precision' },
    { name: 'FINAL VISUAL', desc: 'Platform-calibrated deliverable' },
  ];

  const promptRecipes = [
    {
      label: 'Editorial Fashion Direction',
      tool: 'Gemini + Firefly',
      prompt: 'Minimalist high-fashion lookbook editorial spread, monochromatic deep plum and warm alabaster surfaces, debossed serif typography, tactile linen stock texture, studio rim lighting, 35mm film aesthetic, anti-slop restraint --no neon, --no plastic gloss',
      outcome: 'Conceptual moodboard for the ELARA brand identity exploration.',
    },
    {
      label: 'Specialty Coffee Packaging',
      tool: 'Firefly + Illustrator',
      prompt: 'Isometric studio product photograph of artisanal matte crimson paper coffee cup with white takeaway lid, fresh roasted coffee beans scattered on travertine stone, soft morning light, shallow depth of field --ar 4:3',
      outcome: 'Hero visual asset generated for Coffee Local campaign mockups.',
    },
    {
      label: 'Futuristic HUD Telemetry',
      tool: 'Gemini + Canva',
      prompt: 'Clean dark mode UI dashboard mockup with glowing cyan telemetry rings, deep obsidian background, modular data grids, high contrast tabular numerals, razor-sharp glassmorphism --no clutter',
      outcome: 'UI & UX designs before/after dashboard redesign visual assets.',
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-design" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              08 — Creative Technologist Lens
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              DESIGN × AI
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Ethical amplification of human creativity through prompt architecture and generative tooling.
          </p>
        </div>

        {/* Core AI Stance Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-[#0E0E10] via-[#16161A] to-[#0E0E10] border border-white/10 rounded-2xl relative overflow-hidden space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E9C99E]">
            <Sparkles className="w-4 h-4" />
            <span>Guiding Stance</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-display font-bold text-white max-w-3xl leading-snug">
            “I use AI as a creative partner—not as a replacement for design thinking.”
          </h3>

          <p className="text-sm md:text-base text-[#B8B8B8] max-w-2xl leading-relaxed">
            Generative intelligence does not decide what is meaningful. Human intention, empathy, and artistic judgment remain irreplaceable. I harness Google Gemini, Adobe Firefly, Higgsfield AI, and advanced prompt engineering to compress research cycles, explore non-obvious visual metaphors, and accelerate production fidelity.
          </p>

          {/* Supported capabilities grid */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-white/80">
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-[#E9C99E] block mb-1">01</span>
              <span>Concept Exploration</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-[#E9C99E] block mb-1">02</span>
              <span>Moodboard Synthesis</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-[#E9C99E] block mb-1">03</span>
              <span>Prompt Architecture</span>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
              <span className="text-[#E9C99E] block mb-1">04</span>
              <span>Rapid Prototyping</span>
            </div>
          </div>
        </div>

        {/* Interactive Pipeline: IDEA -> PROMPT -> EXPERIMENT -> DESIGN -> REFINE -> FINAL */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
              The Systematic Workflow Pipeline
            </span>
            <span className="text-xs font-mono text-[#E9C99E]">Linear Verification Cycle</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.name}
                className="p-4 bg-[#0A0A0C] border border-white/[0.08] rounded-xl flex flex-col justify-between space-y-3 relative group hover:border-[#E9C99E]/40 transition-colors text-left"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#E9C99E]">
                  <span>Step 0{idx + 1}</span>
                  {idx < 5 && <ArrowRight className="w-3 h-3 text-white/20 hidden lg:block" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold font-mono text-white tracking-wide">
                    {step.name}
                  </h4>
                  <p className="text-[11px] text-[#B8B8B8] mt-1 font-sans leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Prompt Laboratory (Proof of Prompt Engineering Skills) */}
        <div className="p-6 md:p-8 bg-[#0A0A0C] border border-white/10 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#E9C99E]" />
              <h3 className="text-sm font-mono uppercase tracking-widest text-white">
                Prompt Laboratory &amp; Syntax Breakdown
              </h3>
            </div>
            
            {/* Prompt Selector */}
            <div className="flex gap-2">
              {promptRecipes.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setSelectedPromptIndex(i)}
                  className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                    selectedPromptIndex === i
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Prompt Code View */}
          <div className="space-y-4">
            <div className="relative p-5 bg-[#050505] border border-white/10 rounded-xl font-mono text-xs md:text-sm text-white/90 leading-relaxed group">
              <div className="text-[10px] text-white/40 uppercase mb-2 flex items-center justify-between">
                <span>Model Engine: {promptRecipes[selectedPromptIndex].tool}</span>
                <button
                  onClick={() => handleCopy(promptRecipes[selectedPromptIndex].prompt)}
                  className="flex items-center gap-1 text-[11px] text-[#E9C99E] hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Prompt'}</span>
                </button>
              </div>
              <p className="text-emerald-400 font-mono">
                {promptRecipes[selectedPromptIndex].prompt}
              </p>
            </div>

            <div className="text-xs font-mono text-[#B8B8B8] flex items-center gap-2">
              <span className="text-[#E9C99E]">Practical Outcome:</span>
              <span>{promptRecipes[selectedPromptIndex].outcome}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
