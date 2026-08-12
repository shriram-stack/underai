import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LeftReveal, Tilt3DCard } from './ScrollAnimations';

interface FinalCtaProps {
  onNavigate: (path: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Light Glassmorphic Gradient Container */}
        <LeftReveal delay={0}>
          <Tilt3DCard className="w-full">
            <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-purple-50/40 border border-slate-200/90 p-8 sm:p-16 lg:p-20 text-left shadow-xl backdrop-blur-2xl overflow-hidden">
              
              {/* Subtle Ambient Glowing Background Orbs */}
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl xl:max-w-4xl relative z-10 space-y-6 lg:space-y-8">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>Let's Partner Up</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.12]">
                  Ready to build what's next?
                </h2>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                  Let's turn your ideas into intelligent, scalable and secure technology.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-start gap-4">
                  <button
                    onClick={() => {
                      onNavigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all shadow-lg shadow-purple-500/25 cursor-pointer active:scale-95"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('/services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm font-bold text-slate-900 bg-white hover:bg-purple-50/50 border border-slate-200 transition-all cursor-pointer shadow-sm hover:border-[#7C3AED] active:scale-95 backdrop-blur-md"
                  >
                    Explore Services
                  </button>
                </div>

              </div>

            </div>
          </Tilt3DCard>
        </LeftReveal>

      </div>
    </section>
  );
};


