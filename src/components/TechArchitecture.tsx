import React, { useState } from 'react';
import { Shield, Lock, Eye, CheckCircle2, Cloud, Terminal, Server, Radio, ArrowRight, Activity } from 'lucide-react';
import { SectionHeader, CardStagger, LeftReveal, Tilt3DCard } from './ScrollAnimations';

interface TechArchitectureProps {
  onNavigate: (path: string) => void;
}

export const TechArchitecture: React.FC<TechArchitectureProps> = ({ onNavigate }) => {
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  const securityPillars = [
    {
      title: 'Threat Detection',
      desc: 'Proactive detection of malicious behavior and automated incident alerts.',
      icon: Eye
    },
    {
      title: 'Application Security',
      desc: 'Secure coding practices, dependency scanning, and API hardening.',
      icon: Shield
    },
    {
      title: 'Network Security',
      desc: 'Encrypted communication channels, VPN access, and firewall protection.',
      icon: Lock
    },
    {
      title: 'Security Monitoring',
      desc: 'Continuous auditing, log aggregation, and real-time security dashboards.',
      icon: Activity
    },
    {
      title: 'Vulnerability Management',
      desc: 'Automated patch management, penetration testing, and risk remediation.',
      icon: CheckCircle2
    },
    {
      title: 'Security Automation',
      desc: 'Automated policy enforcement, key rotation, and compliance verification.',
      icon: Terminal
    }
  ];

  const pipelineSteps = [
    { name: 'Code', detail: 'Git commit trigger, code linting & static analysis' },
    { name: 'Build', detail: 'Docker containerization & security image scan' },
    { name: 'Test', detail: 'Automated unit, integration & vulnerability test suites' },
    { name: 'Deploy', detail: 'Blue/Green zero-downtime cloud infrastructure deployment' },
    { name: 'Monitor', detail: 'Continuous APM telemetry, uptime tracking & log analytics' }
  ];

  return (
    <div className="bg-slate-50">
      
      {/* CYBERSECURITY SECTION */}
      <section className="py-16 lg:py-24 relative border-t border-slate-200 overflow-hidden">
        
        {/* Background Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Enterprise Defense"
            title="Security built into everything."
            description="Protect applications, infrastructure and data with modern cybersecurity practices."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <CardStagger key={idx} index={idx}>
                  <Tilt3DCard className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#7C3AED]/50 transition-all duration-300 ease-out shadow-md hover:shadow-2xl hover:shadow-purple-500/10 group cursor-pointer h-full backdrop-blur-xl">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center mb-4 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-[#6D28D9] transition-colors">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{pillar.desc}</p>
                  </Tilt3DCard>
                </CardStagger>
              );
            })}
          </div>


        </div>
      </section>

      {/* CLOUD + DEVOPS SECTION */}
      <section className="py-16 lg:py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
        
        {/* Background Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Cloud & DevOps Pipeline"
            title="Modern Cloud & DevOps Delivery"
            description="Accelerate release cycles with automated infrastructure, Docker, Kubernetes, AWS, and continuous deployment pipelines."
          />

          {/* Interactive Pipeline Visual */}
          <LeftReveal delay={0.2}>
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-2xl">
              <div className="text-xs font-mono font-extrabold text-[#6D28D9] uppercase tracking-wider mb-6 text-left">
                AUTOMATED DEVOPS CI/CD PIPELINE
              </div>

              {/* Pipeline Flow Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8 relative">
                {pipelineSteps.map((step, idx) => {
                  const isActive = idx === activePipelineStep;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePipelineStep(idx)}
                      className={`p-4 rounded-2xl border text-center transition-all duration-200 ease-out flex flex-col items-center justify-center cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] border-[#7C3AED] text-white shadow-md shadow-purple-500/25 font-bold scale-[1.02]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-purple-50/50 hover:border-[#7C3AED]/40 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="text-xs font-mono opacity-80 mb-1">0{idx + 1}</div>
                      <div className="text-sm font-bold font-heading">{step.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Pipeline Stage Detail */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div>
                  <span className="text-xs font-mono text-[#6D28D9] font-bold">STAGE DETAIL // {pipelineSteps[activePipelineStep].name}</span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {pipelineSteps[activePipelineStep].detail}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all cursor-pointer shrink-0 shadow-md shadow-purple-500/20"
                >
                  <span>View Cloud Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Cloud Ecosystem Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-start gap-6 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2"><Cloud className="w-4 h-4 text-[#6D28D9]" /> AWS / GCP / Azure</span>
                <span className="flex items-center gap-2"><Server className="w-4 h-4 text-[#6D28D9]" /> Docker & Kubernetes</span>
                <span className="flex items-center gap-2"><Terminal className="w-4 h-4 text-[#6D28D9]" /> Infrastructure as Code</span>
                <span className="flex items-center gap-2"><Radio className="w-4 h-4 text-[#6D28D9]" /> 24/7 APM Monitoring</span>
              </div>

            </div>
          </LeftReveal>

        </div>
      </section>

    </div>
  );
};

