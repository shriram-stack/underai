import React from 'react';
import { UNDERAI_SOLUTIONS } from '../data/underaiData';
import { Building2, Store, Rocket, TrendingUp, Check, ArrowRight, Sparkles } from 'lucide-react';
import { LeftReveal, CardStagger, Tilt3DCard } from '../components/ScrollAnimations';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'small-businesses': return <Building2 className="w-6 h-6 text-[#6D28D9]" />;
      case 'retail': return <Store className="w-6 h-6 text-[#6D28D9]" />;
      case 'startups': return <Rocket className="w-6 h-6 text-[#6D28D9]" />;
      case 'growing-businesses': return <TrendingUp className="w-6 h-6 text-[#6D28D9]" />;
      default: return <Building2 className="w-6 h-6 text-[#6D28D9]" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Left Aligned */}
        <LeftReveal delay={0} className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Technology for businesses at every stage.
          </h1>
          <p className="text-slate-600 text-lg font-normal leading-relaxed">
            Whether you run a local retail shop, a small business, a startup, or a growing enterprise, UnderTheAI provides purpose-built technology solutions.
          </p>
        </LeftReveal>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UNDERAI_SOLUTIONS.map((sol, idx) => (
            <CardStagger key={sol.id} index={idx}>
              <Tilt3DCard className="bg-white border border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between hover:border-[#7C3AED]/50 transition-all duration-300 shadow-md hover:shadow-2xl backdrop-blur-xl h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-xs">
                      {getSolutionIcon(sol.id)}
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6D28D9] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200/80">
                      {sol.targetAudience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading mb-3 text-left">
                    {sol.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal text-left">
                    {sol.description}
                  </p>

                  <div className="space-y-3 mb-8 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6D28D9]">
                      Tailored Advantages:
                    </h4>
                    {sol.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-slate-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      onNavigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-500/25 active:scale-95"
                  >
                    <span>Explore {sol.title} Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Tilt3DCard>
            </CardStagger>
          ))}
        </div>

      </div>
    </div>
  );
};

