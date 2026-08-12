import React from 'react';
import { LeftReveal } from './ScrollAnimations';

export const TrustStrip: React.FC = () => {
  const items = [
    'AI Automation',
    'Cybersecurity',
    'Cloud Infrastructure',
    'DevOps Engineering',
    'Web Development',
    'Custom AI/ML'
  ];

  return (
    <section className="py-7 bg-white/90 backdrop-blur-md border-y border-slate-200/80 overflow-hidden relative z-20 shadow-xs">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
        <LeftReveal delay={0}>
          <div className="flex flex-wrap items-center justify-start lg:justify-between gap-5 sm:gap-8 md:gap-10 text-xs sm:text-sm font-bold tracking-wide uppercase text-slate-700">
            {items.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="hover:text-[#6D28D9] transition-colors duration-200 cursor-default flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] shadow-xs shadow-purple-500/30" />
                  {item}
                </span>
                {idx < items.length - 1 && (
                  <span className="hidden sm:inline-block text-slate-300 font-normal">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </LeftReveal>
      </div>
    </section>
  );
};
