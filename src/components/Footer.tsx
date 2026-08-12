import React from 'react';
import { UnderAiLogo } from './UnderAiLogo';
import { Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 pt-16 pb-12">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <UnderAiLogo size="md" variant="light" />
            </button>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed font-normal">
              UnderTheAI builds intelligent AI solutions, automation systems, secure applications, cloud infrastructure and modern DevOps platforms.
            </p>
            <div className="pt-2 text-xs font-semibold uppercase tracking-widest text-[#6D28D9]">
              INTELLIGENCE BEYOND LIMITS
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <button onClick={() => handleLinkClick('/')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/solutions')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/about')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/contact')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">Legal & Connect</h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <button onClick={() => handleLinkClick('/privacy')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/terms')} className="hover:text-[#6D28D9] transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#7C3AED] text-slate-600 hover:text-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#7C3AED] text-slate-600 hover:text-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#7C3AED] text-slate-600 hover:text-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} UnderTheAI Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Engineering Intelligence for the Real World</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
