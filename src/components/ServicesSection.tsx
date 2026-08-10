import React from 'react';
import { UNDERAI_SERVICES } from '../data/underaiData';
import { Layout, Cpu, Workflow, MessageSquareCode, ShieldCheck, Cloud, Terminal, Wrench, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-blue-400" />;
      default: return <Layout className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#03050A] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology built around your business.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From websites and AI to cybersecurity, cloud and IT support, UnderAI brings the technology your business needs together in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNDERAI_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate('/services')}
              className="group relative bg-[#070A12] border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Learn More link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-blue-400 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to View All Services */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              onNavigate('/services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>View All Services & Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
