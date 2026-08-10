import React from 'react';
import { UNDERAI_SOLUTIONS } from '../data/underaiData';
import { Building2, Store, Rocket, TrendingUp, Check } from 'lucide-react';

interface SolutionsSectionProps {
  onNavigate: (path: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigate }) => {
  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'small-businesses': return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'retail': return <Store className="w-5 h-5 text-blue-400" />;
      case 'startups': return <Rocket className="w-5 h-5 text-blue-400" />;
      case 'growing-businesses': return <TrendingUp className="w-5 h-5 text-blue-400" />;
      default: return <Building2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#03050A] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Built For Your Business
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology for businesses at every stage.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you are opening a local shop, launching a startup, or scaling an established company, UnderAI provides tailored technology solutions.
          </p>
        </div>

        {/* 4 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UNDERAI_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-[#070A12] border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center">
                    {getSolutionIcon(sol.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    {sol.targetAudience}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {sol.title}
                </h3>

                <p className="text-slate-300 text-base mb-6 leading-relaxed">
                  {sol.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2.5 mb-8">
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
                  className="w-full py-3 rounded-xl font-medium text-white bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 transition-all duration-200 cursor-pointer"
                >
                  Discuss {sol.title} Solution
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
