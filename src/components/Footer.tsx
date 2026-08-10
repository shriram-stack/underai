import React from 'react';
import { UnderAiLogo } from './UnderAiLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050A] border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <UnderAiLogo size="md" showTagline={true} />
            
            <p className="text-slate-300 font-mono text-xs tracking-wider uppercase">
              Build. Automate. Protect.
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              UnderAI is a technology services company and complete technology partner for businesses, helping small businesses, retail shops, startups, and growing companies thrive without an internal IT team.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleLinkClick('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/solutions')} className="hover:text-white transition-colors">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left">
                  AI Integration
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left">
                  AI Chat Support
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left">
                  Cybersecurity
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left">
                  Cloud & DevOps
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors text-left">
                  IT Support
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleLinkClick('/privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/terms')} className="hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} UnderAI. All rights reserved. Intelligence Beyond Limits.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-6">
            <button onClick={() => handleLinkClick('/privacy')} className="hover:text-slate-400 transition-colors">
              Privacy
            </button>
            <button onClick={() => handleLinkClick('/terms')} className="hover:text-slate-400 transition-colors">
              Terms
            </button>
            <button onClick={() => handleLinkClick('/contact')} className="hover:text-slate-400 transition-colors">
              Support
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
