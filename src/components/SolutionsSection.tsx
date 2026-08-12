import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Shield, Cloud, Workflow, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader, LeftReveal } from './ScrollAnimations';

interface SolutionsSectionProps {
  onNavigate: (path: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(0);

  const solutionCategories = [
    {
      id: 'ai-applications',
      title: 'AI-Powered Applications',
      icon: Sparkles,
      tagline: 'Custom intelligent apps built for enterprise workflows.',
      description: 'We build user-facing web apps and internal enterprise portals enhanced with AI capabilities, RAG knowledge stores, and real-time generation.',
      benefits: [
        'Custom LLM agent integrations',
        'Natural language search across business data',
        'Automated document summarization & extraction',
        'Secure token & key management'
      ]
    },
    {
      id: 'intelligent-automation',
      title: 'Intelligent Automation',
      icon: Workflow,
      tagline: 'Automate high-volume repetitive tasks seamlessly.',
      description: 'Connect disparate software systems into unified self-healing pipelines that process data, handle exceptions, and trigger instant alerts.',
      benefits: [
        'End-to-end API orchestration',
        'Real-time webhook routing & transformation',
        'Automated CRM & ERP synchronization',
        'Audit logs and status monitoring'
      ]
    },
    {
      id: 'cloud-modernization',
      title: 'Cloud Modernization',
      icon: Cloud,
      tagline: 'Scale infrastructure with modern serverless architecture.',
      description: 'Upgrade monolithic applications into modular cloud microservices for maximum elasticity, resilience, and operational cost savings.',
      benefits: [
        'Multi-cloud strategy (AWS, GCP, Azure)',
        'Serverless & auto-scaling containers',
        'High availability & load balancing',
        'Disaster recovery & automated backups'
      ]
    },
    {
      id: 'secure-infrastructure',
      title: 'Secure Digital Infrastructure',
      icon: Shield,
      tagline: 'Enterprise defense integrated into every architectural layer.',
      description: 'Protect codebases, cloud environments, and internal networks with proactive security audits, identity management, and threat prevention.',
      benefits: [
        'Zero-Trust network access control',
        'Continuous compliance & threat detection',
        'Encrypted data storage and transit',
        'Vulnerability mitigation & patching'
      ]
    },
    {
      id: 'devops-transformation',
      title: 'DevOps Transformation',
      icon: Layers,
      tagline: 'Streamline code delivery from commit to production.',
      description: 'Establish automated CI/CD pipelines, container registries, and Infrastructure-as-Code to enable fast, reliable software deployment.',
      benefits: [
        'Automated testing & linting gates',
        'Terraform / Pulumi IaC scripts',
        'Docker & Kubernetes cluster management',
        'Comprehensive telemetry & APM'
      ]
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      icon: Code,
      tagline: 'Tailored web platforms engineered for longevity.',
      description: 'Full-stack software engineering customized to your exact operational specifications with modern UX and clean code standards.',
      benefits: [
        'Tailored web & mobile user interfaces',
        'Scalable RESTful & GraphQL APIs',
        'Relational & vector database schemas',
        'Complete source code ownership'
      ]
    }
  ];

  const currentCategory = solutionCategories[activeTab];

  return (
    <section className="py-16 lg:py-24 relative bg-slate-50 overflow-hidden">
      
      {/* Background Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header directly on background */}
        <SectionHeader
          badge="Tailored Industry Solutions"
          title="Solutions built for what's next."
          description="Explore how UnderTheAI delivers end-to-end technical solutions engineered for modern growth."
        />

        {/* Tab Selection Buttons */}
        <LeftReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 xl:gap-4 mb-8">
            {solutionCategories.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-2xl border text-center transition-all duration-300 ease-out flex flex-col items-center justify-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#7C3AED] text-[#6D28D9] shadow-xl ring-2 ring-purple-100 font-bold scale-[1.03]'
                      : 'bg-white/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-[#7C3AED]/40 shadow-xs backdrop-blur-md'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-[#7C3AED] text-white shadow-xs' : 'bg-purple-50 text-[#6D28D9]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold leading-tight line-clamp-2">{item.title}</span>
                </button>
              );
            })}
          </div>
        </LeftReveal>

        {/* Active Solution Interactive Feature Panel with Smooth Fade/Slide */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentCategory.id}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold shadow-xs">
                <span>{currentCategory.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                {currentCategory.title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {currentCategory.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentCategory.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-[#7C3AED]/50 transition-colors">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#6D28D9] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/solutions')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all shadow-lg shadow-purple-500/25 cursor-pointer active:scale-95"
                >
                  <span>Explore Solution Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[300px] shadow-sm">
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#6D28D9] tracking-wider uppercase">
                    SOLUTION ARCHITECTURE
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-800 shadow-xs flex items-center justify-between">
                    <span>INPUT: Enterprise Request</span>
                    <span className="text-[#6D28D9] font-bold">200 OK</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-800 shadow-xs flex items-center justify-between">
                    <span>ENGINE: UnderTheAI Pipeline</span>
                    <span className="text-emerald-600 font-bold">Automated</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-800 shadow-xs flex items-center justify-between">
                    <span>OUTPUT: High-Availability Deployment</span>
                    <span className="text-[#6D28D9] font-bold">Active</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 text-xs font-semibold text-slate-500 text-left">
                Integrated security & continuous monitoring standard.
              </div>
            </div>

          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
};

