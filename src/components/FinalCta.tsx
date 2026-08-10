import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onNavigate: (path: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#070A12] relative border-t border-slate-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-[#03050A] border border-slate-800/80 rounded-3xl p-8 sm:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Started with UnderAI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let’s build what’s next.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what your business needs and let's find the right technology solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                onNavigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
            >
              Explore Services
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
