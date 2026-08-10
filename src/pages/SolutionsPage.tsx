import React from 'react';
import { UNDERAI_SOLUTIONS } from '../data/underaiData';
import { Building2, Store, Rocket, TrendingUp, Check, ArrowRight, Sparkles } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'small-businesses': return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'retail': return <Store className="w-6 h-6 text-blue-400" />;
      case 'startups': return <Rocket className="w-6 h-6 text-blue-400" />;
      case 'growing-businesses': return <TrendingUp className="w-6 h-6 text-blue-400" />;
      default: return <Building2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#03050A] text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technology for businesses at every stage.
          </h1>
          <p className="text-slate-300 text-lg">
            Whether you run a local retail shop, a small business, a startup, or a growing enterprise, UnderAI provides purpose-built technology solutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UNDERAI_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-[#070A12] border border-slate-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    {getSolutionIcon(sol.id)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-500/20">
                    {sol.targetAudience}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {sol.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {sol.description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400">
                    Tailored Advantages:
                  </h4>
                  {sol.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-slate-200">{benefit}</span>
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
                  className="w-full py-3.5 rounded-xl font-medium text-white bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore {sol.title} Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
