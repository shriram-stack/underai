import React from 'react';
import { ArrowRight, Check, Sparkles, Cpu, Workflow, Database, Bot } from 'lucide-react';
import { LeftReveal, CardStagger, Tilt3DCard } from './ScrollAnimations';

interface AiAutomationSectionProps {
  onNavigate: (path: string) => void;
}

export const AiAutomationSection: React.FC<AiAutomationSectionProps> = ({ onNavigate }) => {
  const bulletPoints = [
    'Intelligent workflow automation',
    'AI-powered business processes',
    'API integrations',
    'Data processing',
    'AI assistants',
    'Custom AI solutions'
  ];

  return (
    <section className="py-16 lg:py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Large Abstract AI Graphic */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <CardStagger index={0} className="w-full">
              <Tilt3DCard className="w-full">
                <div className="relative w-full max-w-lg mx-auto aspect-square rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Status Badge */}
                  <div className="flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#6D28D9] shadow-xs">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>AI Automation Pipeline</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Operational
                    </span>
                  </div>

                  {/* Central Abstract Connected Node Workflow Graphic */}
                  <div className="relative my-8 flex items-center justify-center">
                    
                    {/* Flowing animated background lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" fill="none">
                      <path d="M 50 100 Q 150 20 250 100" stroke="#8B5CF6" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" />
                      <path d="M 50 100 Q 150 180 250 100" stroke="#7C3AED" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    </svg>

                    {/* Workflow Nodes */}
                    <div className="relative z-10 grid grid-cols-3 gap-5 w-full max-w-xs text-center">
                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center gap-1.5">
                        <Database className="w-6 h-6 text-[#6D28D9]" />
                        <span className="text-[11px] font-extrabold text-slate-900">Data Input</span>
                      </div>

                      <div className="p-3.5 bg-[#7C3AED] text-white rounded-2xl shadow-xl shadow-purple-500/25 flex flex-col items-center gap-1.5 transform scale-110 ring-4 ring-purple-200">
                        <Bot className="w-6 h-6 animate-bounce" style={{ animationDuration: '2s' }} />
                        <span className="text-[11px] font-extrabold">AI Core</span>
                      </div>

                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center gap-1.5">
                        <Workflow className="w-6 h-6 text-[#8B5CF6]" />
                        <span className="text-[11px] font-extrabold text-slate-900">Auto Output</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="bg-slate-100 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between text-xs font-bold text-slate-900 z-10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#6D28D9]" />
                      <span>Efficiency Gain</span>
                    </div>
                    <span className="text-[#6D28D9] font-extrabold font-mono text-sm">+85% Automated</span>
                  </div>

                </div>
              </Tilt3DCard>
            </CardStagger>
          </div>

          {/* Right: Text & Checklist */}
          <div className="lg:col-span-6 space-y-5 text-left">
            
            <LeftReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
                Intelligent Automation
              </div>
            </LeftReveal>

            <LeftReveal delay={0.08}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.15]">
                Automate the work.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]">Accelerate the future.</span>
              </h2>
            </LeftReveal>

            <LeftReveal delay={0.16}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                We design intelligent workflows that reduce repetitive work, improve decision-making and help teams focus on what matters.
              </p>
            </LeftReveal>

            {/* Checklist with Hover Lift */}
            <LeftReveal delay={0.24}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {bulletPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#7C3AED]/50 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-xs hover:shadow-md cursor-pointer backdrop-blur-md">
                    <div className="w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-xs shrink-0 font-bold">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </LeftReveal>

            {/* CTA Button */}
            <LeftReveal delay={0.32}>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services')}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all shadow-lg shadow-purple-500/25 cursor-pointer active:scale-95"
                >
                  <span>Explore AI Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </LeftReveal>

          </div>

        </div>

      </div>
    </section>
  );
};


