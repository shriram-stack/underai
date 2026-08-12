import React from 'react';
import { Lightbulb, Shield, TrendingUp, Award } from 'lucide-react';
import { SectionHeader, CardStagger, Tilt3DCard } from './ScrollAnimations';

interface WhyUnderAiProps {
  onNavigate?: (path: string) => void;
}

export const WhyUnderAi: React.FC<WhyUnderAiProps> = ({ onNavigate }) => {
  const cards = [
    {
      title: 'Innovation First',
      description: 'Modern technologies designed around real business needs.',
      icon: Lightbulb
    },
    {
      title: 'Security by Design',
      description: 'Security is integrated from architecture to deployment.',
      icon: Shield
    },
    {
      title: 'Built to Scale',
      description: 'Solutions designed to grow with your business.',
      icon: TrendingUp
    },
    {
      title: 'Engineering Excellence',
      description: 'Clean, reliable and maintainable technology.',
      icon: Award
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative bg-white overflow-hidden border-t border-slate-200">
      
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header directly on background */}
        <SectionHeader
          badge="The UnderTheAI Advantage"
          title="Why UnderTheAI?"
          description="We combine high-performance software engineering with practical artificial intelligence to deliver lasting value."
        />

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <CardStagger key={idx} index={idx}>
                <Tilt3DCard
                  onClick={() => onNavigate && onNavigate('/about')}
                  className="group bg-slate-50 border border-slate-200/90 hover:border-[#7C3AED]/50 rounded-2xl p-6.5 transition-all duration-300 ease-out shadow-md hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col items-start cursor-pointer h-full backdrop-blur-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center mb-5 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#6D28D9] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {card.description}
                  </p>
                </Tilt3DCard>
              </CardStagger>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const WhyUnderTheAi = WhyUnderAi;



