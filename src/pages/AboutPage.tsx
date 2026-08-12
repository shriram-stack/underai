import React from 'react';
import { UnderAiLogo } from '../components/UnderAiLogo';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Workflow, Cloud, Award } from 'lucide-react';
import { LeftReveal, Tilt3DCard, CardStagger } from '../components/ScrollAnimations';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'AI & Automation', value: '100% Tailored' },
    { label: 'Cloud & DevOps', value: '99.9% Uptime' },
    { label: 'Cybersecurity', value: 'Zero-Trust' },
    { label: 'Custom Software', value: 'Full Stack' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-6xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        {/* Header - Left Aligned */}
        <LeftReveal delay={0} className="text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About UnderTheAI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight">
            Engineering intelligence for the real world.
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl font-normal leading-relaxed">
            UnderTheAI is a technology company focused on AI, automation, cybersecurity, cloud infrastructure and modern software engineering.
          </p>
        </LeftReveal>

        {/* Brand Core Card */}
        <LeftReveal delay={0.1}>
          <Tilt3DCard className="w-full">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 mb-12 shadow-xl backdrop-blur-2xl relative overflow-hidden text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-200">
                <UnderAiLogo size="lg" showTagline={true} variant="light" />
                <span className="text-xs font-mono font-bold text-[#6D28D9] bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full">
                  ENTERPRISE AI & TECH
                </span>
              </div>

              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-900 font-extrabold">UnderTheAI</strong> helps businesses build modern websites, integrate AI, automate workflows, strengthen cybersecurity, manage cloud infrastructure and streamline DevOps.
                </p>
                <p>
                  We bridge the gap between complex artificial intelligence and operational execution. Whether you are a fast-growing startup or an established enterprise, we build reliable technology foundations under our core mandate:
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 border border-purple-200/80 rounded-2xl p-6 text-center shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#6D28D9] font-heading tracking-tight">
                    Build. Automate. Protect.
                  </span>
                  <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-extrabold">
                    INTELLIGENCE BEYOND LIMITS
                  </p>
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </LeftReveal>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <CardStagger key={idx} index={idx}>
              <Tilt3DCard className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-md hover:border-[#7C3AED]/50 transition-all backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">{stat.value}</div>
                <div className="text-xs text-[#6D28D9] font-bold mt-1 uppercase tracking-wider">{stat.label}</div>
              </Tilt3DCard>
            </CardStagger>
          ))}
        </div>

        {/* CTA */}
        <LeftReveal delay={0.2}>
          <Tilt3DCard className="w-full">
            <div className="text-left bg-gradient-to-r from-white via-slate-50 to-purple-50/40 border border-slate-200/90 rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl backdrop-blur-2xl">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Ready to build with UnderTheAI?</h3>
              <p className="text-slate-600 max-w-md text-sm sm:text-base font-normal leading-relaxed">
                Let's turn your ideas into intelligent, scalable and secure technology.
              </p>
              <button
                onClick={() => {
                  onNavigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all shadow-lg shadow-purple-500/25 cursor-pointer active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Tilt3DCard>
        </LeftReveal>

      </div>
    </div>
  );
};

