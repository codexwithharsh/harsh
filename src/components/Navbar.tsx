import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'AI + Design', href: '#ai-design' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-[#E9C99E] transition-colors uppercase font-display whitespace-nowrap"
          >
            HARSH GAURAV
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-[#B8B8B8] font-medium font-sans">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E9C99E] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://dribbble.com/shots/27517440-Graphic-UI-UX-Design-Portfolio-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#E9C99E] hover:text-white border border-[#E9C99E]/30 hover:border-[#E9C99E] rounded-md transition-colors whitespace-nowrap"
            >
              <span>Dribbble Shot ↗</span>
            </a>

            <button
              onClick={onContactClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-black bg-white hover:bg-[#E9C99E] rounded-md transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              LET'S TALK
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#E9C99E] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between p-8 md:hidden pt-24 animate-in fade-in duration-200">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono">Navigation</p>
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-display font-semibold tracking-tight text-white hover:text-[#E9C99E] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/40" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <a
              href="https://dribbble.com/shots/27517440-Graphic-UI-UX-Design-Portfolio-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-mono font-bold tracking-wider text-[#EA4C89] border border-[#EA4C89]/40 hover:bg-[#EA4C89]/10 rounded-md block transition-colors"
            >
              VIEW ON DRIBBLE (2026 SHOT) ↗
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold tracking-wider text-black bg-white rounded-md"
            >
              START A PROJECT
            </button>
            <div className="text-xs text-[#B8B8B8] font-mono flex justify-between">
              <span>Harsh Gaurav</span>
              <span>Hansraj College, DU</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
