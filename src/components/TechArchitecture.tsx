import React from 'react';
import { ShieldCheck, Cloud, Terminal } from 'lucide-react';

export const TechArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-[#070A12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Robust Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond websites: Full-spectrum technology.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            UnderAI provides enterprise-grade foundational security, cloud elasticity, and streamlined DevOps for dependable operations.
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: SECURE */}
          <div className="bg-[#03050A] border border-slate-800/80 rounded-2xl p-8 hover:border-blue-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded border border-blue-500/20 uppercase">
                  Secure
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Cybersecurity
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Practical security solutions designed to protect your business systems, digital assets, and customer data against vulnerabilities and modern threats.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Infrastructure Hardening</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Vulnerability Assessments</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: SCALE */}
          <div className="bg-[#03050A] border border-slate-800/80 rounded-2xl p-8 hover:border-blue-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono tracking-widest text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded border border-indigo-500/20 uppercase">
                  Scale
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Cloud Solutions
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Reliable and scalable cloud infrastructure for modern businesses. We ensure high availability, fast response times, and cost-efficient scaling.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Cloud Migration & Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>High Availability & Uptime</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: DELIVER */}
          <div className="bg-[#03050A] border border-slate-800/80 rounded-2xl p-8 hover:border-blue-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded border border-blue-500/20 uppercase">
                  Deliver
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                DevOps
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Deployment, automation and infrastructure solutions for reliable software delivery, continuous integration, and smooth updates.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Automated CI/CD Pipelines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Container Orchestration</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
