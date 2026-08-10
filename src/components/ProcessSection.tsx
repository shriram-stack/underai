import React from 'react';
import { PROCESS_STEPS } from '../data/underaiData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070A12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From idea to ongoing support.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A structured, collaborative approach to bringing the right technology solutions to your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-blue-500/50 to-slate-800 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#03050A] border border-slate-800/80 rounded-2xl p-6 relative flex flex-col justify-between shadow-lg hover:border-blue-500/40 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-blue-400 text-lg mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
