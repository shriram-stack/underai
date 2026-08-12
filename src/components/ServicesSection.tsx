import React from 'react';
import { Cpu, ShieldCheck, Cloud, Terminal, Globe, Brain, ArrowRight } from 'lucide-react';
import { SectionHeader, CardStagger, LeftReveal, Tilt3DCard } from './ScrollAnimations';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const servicesList = [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description: 'Streamline operations with custom AI workflows, intelligent document processing, and automated lead management.',
      icon: Cpu,
      tag: 'Smart Workflows'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect applications, cloud infrastructure, and sensitive data with end-to-end zero-trust security frameworks.',
      icon: ShieldCheck,
      tag: 'Zero-Trust Defense'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Architect, migrate, and optimize resilient multi-cloud environments built for high availability and performance.',
      icon: Cloud,
      tag: 'Multi-Cloud Scale'
    },
    {
      id: 'devops-engineering',
      title: 'DevOps Engineering',
      description: 'Accelerate release velocity with continuous integration, automated testing, container orchestration, and IaC.',
      icon: Terminal,
      tag: 'Automated CI/CD'
    },
    {
      id: 'web-app-development',
      title: 'Web & Application Development',
      description: 'Build fast, responsive, and secure web applications using React, Next.js, and modern serverless architectures.',
      icon: Globe,
      tag: 'Modern Stack'
    },
    {
      id: 'ai-ml-solutions',
      title: 'AI/ML Solutions',
      description: 'Custom machine learning models, RAG document search pipelines, and LLM fine-tuning for proprietary enterprise data.',
      icon: Brain,
      tag: 'Custom Models'
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative bg-slate-50 overflow-hidden">
      
      {/* Background Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header directly on background */}
        <SectionHeader
          badge="Our Core Capabilities"
          title="Technology that moves your business forward."
          description="From intelligent automation to secure infrastructure, we build solutions designed for scale."
        />

        {/* Services Grid with Hover Lift and Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <CardStagger key={service.id} index={idx}>
                <Tilt3DCard
                  onClick={() => {
                    onNavigate('/services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative bg-white border border-slate-200/90 hover:border-[#7C3AED]/50 rounded-2xl p-6.5 transition-all duration-300 ease-out shadow-md hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between cursor-pointer h-full backdrop-blur-xl"
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] transition-colors duration-300 shadow-xs">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-bold text-[#6D28D9] bg-purple-50 border border-purple-200/80 px-3 py-1 rounded-full shadow-xs">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#6D28D9] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-sm font-bold text-[#6D28D9]">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#7C3AED]" />
                  </div>
                </Tilt3DCard>
              </CardStagger>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <LeftReveal delay={0.3} className="text-left mt-12">
          <button
            onClick={() => {
              onNavigate('/services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-slate-900 bg-white border border-slate-200 hover:bg-purple-50/50 hover:border-[#7C3AED] transition-all cursor-pointer shadow-md hover:shadow-xl backdrop-blur-md"
          >
            <span>Explore Full Technical Services</span>
            <ArrowRight className="w-4 h-4 text-[#6D28D9]" />
          </button>
        </LeftReveal>

      </div>
    </section>
  );
};

