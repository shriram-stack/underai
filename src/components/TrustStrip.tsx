import React from 'react';

export const TrustStrip: React.FC = () => {
  const items = [
    'Websites',
    'AI Integration',
    'Automation',
    'Cybersecurity',
    'Cloud',
    'DevOps',
    'IT Support'
  ];

  return (
    <section className="py-8 bg-[#03050A] border-y border-slate-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400">
          {items.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="hover:text-blue-400 transition-colors duration-200 cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                {item}
              </span>
              {idx < items.length - 1 && (
                <span className="hidden md:inline-block text-slate-800">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
