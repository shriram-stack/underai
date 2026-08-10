import React from 'react';
import { WHY_UNDERAI_FEATURES } from '../data/underaiData';
import { CheckCircle2 } from 'lucide-react';

export const WhyUnderAi: React.FC = () => {
  return (
    <section className="py-24 bg-[#070A12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Why UnderAI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            One technology partner. Multiple ways to move your business forward.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We combine software craftsmanship, practical AI integration, and robust infrastructure so you never have to juggle multiple vendors.
          </p>
        </div>

        {/* 6 Clean Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_UNDERAI_FEATURES.map((item) => (
            <div
              key={item.number}
              className="bg-[#03050A] border border-slate-800/80 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(37,99,235,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
