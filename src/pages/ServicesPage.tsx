import React from 'react';
import { UNDERAI_SERVICES } from '../data/underaiData';
import { ArrowRight, CheckCircle2, Sparkles, Layout, Cpu, Workflow, MessageSquareCode, ShieldCheck, Cloud, Terminal, Wrench } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-blue-400" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-blue-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-blue-400" />;
      default: return <Layout className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#03050A] text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technology solutions for every business need.
          </h1>
          <p className="text-slate-300 text-lg">
            From modern websites and AI integration to robust cloud infrastructure and dependable IT support, explore UnderAI's complete service offerings.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UNDERAI_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#070A12] border border-slate-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    UnderAI Core Service
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400">
                    Key Capabilities & Features:
                  </h4>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-sm text-slate-200">{feat}</span>
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
                  className="w-full py-3.5 rounded-xl font-medium text-white bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a custom technology solution?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Tell us about your business goals and let's discuss how UnderAI can build, automate, and protect your operations.
          </p>
          <button
            onClick={() => {
              onNavigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
