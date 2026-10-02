import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  prefilledService?: string;
  onViewWork: () => void;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, onViewWork }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledService || 'Brand Identity Concepts',
    budget: '$500 - $1,500',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = 'harshgaurav9517@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              12 — Initiate Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              CONTACT &amp; INQUIRY
            </h2>
          </div>
          <p className="text-xs font-mono text-[#B8B8B8] max-w-sm">
            Currently accepting select graphic design, branding, and AI creative projects.
          </p>
        </div>

        {/* Big Editorial Headline Banner */}
        <div className="space-y-4">
          <p className="text-xs font-mono tracking-widest uppercase text-[#E9C99E]">
            HAVE AN IDEA?
          </p>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white uppercase tracking-tight leading-none text-balance">
            LET'S CREATE SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9C99E] to-white/70">
              MEMORABLE.
            </span>
          </h3>
          <p className="text-base md:text-lg text-[#B8B8B8] font-serif-editorial italic max-w-xl pt-2">
            “Have a project, collaboration or creative idea? Let’s turn it into a strong visual experience.”
          </p>
        </div>

        {/* 2-Column Split: Direct Channels vs Working Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Email Card with Copy Trigger */}
            <div className="p-6 bg-[#0E0E10] border border-white/10 rounded-2xl space-y-4">
              <span className="text-xs font-mono text-white/50 uppercase block">
                Primary Contact Channel
              </span>
              <div className="flex items-center justify-between gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <div className="flex items-center gap-2.5 truncate font-mono text-sm text-white">
                  <Mail className="w-4 h-4 text-[#E9C99E] shrink-0" />
                  <span className="truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-white/5 hover:bg-white text-white hover:text-black transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-[#B8B8B8] font-sans">
                Typically responds within 24 hours for creative briefings, freelance quotes, or portfolio inquiries.
              </p>
            </div>

            {/* Social Platform Links */}
            <div className="p-6 bg-[#0E0E10] border border-white/10 rounded-2xl space-y-4">
              <span className="text-xs font-mono text-white/50 uppercase block">
                Online Creative Archives
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 rounded-lg text-white flex items-center justify-between transition-colors group"
                >
                  <span>Behance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#E9C99E] transition-colors" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 rounded-lg text-white flex items-center justify-between transition-colors group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#E9C99E] transition-colors" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 rounded-lg text-white flex items-center justify-between transition-colors group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#E9C99E] transition-colors" />
                </a>

                <a
                  href="https://dribbble.com/shots/27517440-Graphic-UI-UX-Design-Portfolio-2026"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/[0.02] border border-white/5 hover:border-[#EA4C89]/50 rounded-lg text-white flex items-center justify-between transition-colors group"
                >
                  <span className="group-hover:text-[#EA4C89] transition-colors">Dribbble Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#EA4C89] transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={onViewWork}
                className="px-6 py-3 bg-white text-black hover:bg-[#E9C99E] text-xs font-bold font-mono uppercase tracking-wider rounded-md transition-colors shadow"
              >
                VIEW MY WORK
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Briefing Form */}
          <div className="lg:col-span-7 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-10 text-left">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white uppercase">
                  INQUIRY TRANSMITTED
                </h4>
                <p className="text-sm text-[#B8B8B8] max-w-md mx-auto">
                  Thank you for reaching out. Harsh Gaurav will review your creative brief and reply directly to your email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase rounded transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#E9C99E] uppercase tracking-widest block">
                    PROJECT INQUIRY FORM
                  </span>
                  <h4 className="text-xl font-display font-bold text-white uppercase">
                    Tell Me About Your Project
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#E9C99E] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#E9C99E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#E9C99E] transition-colors"
                    >
                      <option value="Social Media Graphics">Social Media Graphics</option>
                      <option value="Brand Identity Concepts">Brand Identity Concepts</option>
                      <option value="Posters & Campaign Design">Posters &amp; Campaign Design</option>
                      <option value="Digital Banners & Ads">Digital Banners &amp; Ads</option>
                      <option value="Packaging & Editorial Layouts">Packaging &amp; Editorial Layouts</option>
                      <option value="AI-Assisted Visual Direction">AI-Assisted Visual Direction</option>
                      <option value="Other Creative Collaboration">Other Creative Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60">Target Timeline / Budget</label>
                    <input
                      type="text"
                      placeholder="e.g. 2-3 weeks / Flexible"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#E9C99E] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white/60">Project Vision &amp; Objectives *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your brand, key deliverable requirements, or collaboration goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#E9C99E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-black hover:bg-[#E9C99E] text-xs font-bold font-mono tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT BRIEF</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
