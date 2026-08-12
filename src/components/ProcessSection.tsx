import React from 'react';
import { PROCESS_STEPS } from '../data/underaiData';
import { SectionHeader, CardStagger, Tilt3DCard } from './ScrollAnimations';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header directly on background */}
        <SectionHeader
          badge="How We Work"
          title="From idea to ongoing support."
          description="A structured, collaborative approach to bringing the right technology solutions to your business."
        />

        {/* Process Steps with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <CardStagger key={step.number} index={idx}>
              <Tilt3DCard className="bg-white border border-slate-200/90 hover:border-[#7C3AED]/50 rounded-2xl p-6.5 relative flex flex-col justify-between shadow-md hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 ease-out h-full backdrop-blur-xl">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center font-mono font-extrabold text-lg mb-5 shadow-xs">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </Tilt3DCard>
            </CardStagger>
          ))}
        </div>

      </div>
    </section>
  );
};


