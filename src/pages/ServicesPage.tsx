import React from 'react';
import { UNDERAI_SERVICES } from '../data/underaiData';
import { ArrowRight, CheckCircle2, Sparkles, Layout, Cpu, Workflow, MessageSquareCode, ShieldCheck, Cloud, Terminal, Wrench } from 'lucide-react';
import { LeftReveal, CardStagger, Tilt3DCard } from '../components/ScrollAnimations';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-[#6D28D9]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#6D28D9]" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-[#6D28D9]" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-6 h-6 text-[#6D28D9]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#6D28D9]" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-[#6D28D9]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#6D28D9]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#6D28D9]" />;
      default: return <Layout className="w-6 h-6 text-[#6D28D9]" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Header - Left Aligned */}
        <LeftReveal delay={0} className="text-left max-w-3xl xl:max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight">
            Technology solutions for every business need.
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            From intelligent automation and cybersecurity to cloud infrastructure and web development, explore UnderTheAI's complete service offerings.
          </p>
        </LeftReveal>

        {/* Services List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {UNDERAI_SERVICES.map((service, idx) => (
            <CardStagger key={service.id} index={idx}>
              <Tilt3DCard className="bg-white border border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between hover:border-[#7C3AED]/50 transition-all duration-300 shadow-md hover:shadow-2xl backdrop-blur-xl h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-xs">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6D28D9] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200/80">
                      UnderTheAI Service
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading mb-3 text-left">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal text-left">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3 mb-8 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6D28D9]">
                      Key Capabilities & Features:
                    </h4>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0" />
                        <span className="text-sm font-bold text-slate-800">{feat}</span>
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
                    className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-500/25 active:scale-95"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Tilt3DCard>
            </CardStagger>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <LeftReveal delay={0.2} className="mt-20">
          <Tilt3DCard className="w-full">
            <div className="bg-gradient-to-r from-white via-slate-50 to-purple-50/40 border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-left space-y-6 shadow-xl backdrop-blur-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Need a custom technology solution?
              </h2>
              <p className="text-slate-600 max-w-xl text-sm sm:text-base font-normal leading-relaxed">
                Tell us about your business goals and let's discuss how UnderTheAI can build, automate, and protect your operations.
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

