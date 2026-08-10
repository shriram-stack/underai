import React from 'react';
import { UnderAiLogo } from '../components/UnderAiLogo';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Workflow, Building2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#03050A] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About UnderAI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your complete technology partner.
          </h1>
          <p className="text-slate-300 text-lg">
            Helping businesses build, automate and protect their digital operations with clarity and reliability.
          </p>
        </div>

        {/* Brand Core Card */}
        <div className="bg-[#070A12] border border-slate-800/80 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-slate-800/80">
            <UnderAiLogo size="lg" showTagline={true} />
          </div>

          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-white">UnderAI</strong> is a technology services company and complete technology partner for businesses. We help small businesses, local shop owners, retail businesses, startups, and growing companies that do not have an internal IT team.
            </p>
            <p>
              Our mission is simple: explain technical services in clear, simple language that non-technical business owners can understand, and deliver robust solutions under our core brand message:
            </p>
            <div className="bg-[#03050A] border border-blue-500/30 rounded-2xl p-6 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 font-mono tracking-tight">
                Build. Automate. Protect.
              </span>
              <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-mono">
                Intelligence Beyond Limits
              </p>
            </div>
            <p>
              Whether you need a modern responsive website, practical AI integration, automated customer support, reliable cloud infrastructure, cybersecurity hardening, or dependable IT support, UnderAI brings everything together in one place.
            </p>
          </div>
        </div>

        {/* Three Core Pillars Recap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#070A12] border border-slate-800/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Build</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Modern websites, scalable platforms, and applications built for performance and growth.
            </p>
          </div>

          <div className="bg-[#070A12] border border-slate-800/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automate</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI model integration, intelligent workflows, and 24/7 customer support automation.
            </p>
          </div>

          <div className="bg-[#070A12] border border-slate-800/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Protect</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cybersecurity hardening, cloud reliability, and dependable ongoing IT support.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#070A12] border border-slate-800/80 rounded-2xl p-8 sm:p-12 space-y-6">
          <h3 className="text-2xl font-bold text-white">Ready to work with UnderAI?</h3>
          <p className="text-slate-300 max-w-md mx-auto text-sm">
            Let's discuss how we can support your business technology needs.
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
