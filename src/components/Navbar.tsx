import React, { useState, useEffect } from 'react';
import { UnderAiLogo } from './UnderAiLogo';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 pb-2 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className={`flex items-center justify-between px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-xl shadow-slate-200/60 py-3 scale-[0.99]' 
            : 'bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-md shadow-slate-200/40'
        }`}>
          {/* Left: Prominent Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-left focus:outline-none transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <UnderAiLogo size="md" variant="light" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 backdrop-blur-md border border-slate-200/80 px-2 py-1 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative px-4.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] text-white shadow-md shadow-purple-500/25'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('/contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-purple-500/25 active:scale-95 cursor-pointer overflow-hidden border border-purple-400/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-100 group-hover:rotate-12 transition-transform" />
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-purple-600 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 border border-slate-200 backdrop-blur-2xl rounded-2xl p-5 space-y-4 shadow-2xl shadow-slate-300/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#7C3AED]/15 text-[#6D28D9] font-bold border border-[#8B5CF6]/30'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 shadow-lg shadow-purple-500/25 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


