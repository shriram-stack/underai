import React from 'react';
import { Sparkles } from 'lucide-react';
import { LeftReveal, Tilt3DCard } from '../components/ScrollAnimations';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-8 relative z-10">
        
        {/* Header - Left Aligned */}
        <LeftReveal delay={0} className="text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-sm font-semibold">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </LeftReveal>

        <LeftReveal delay={0.1}>
          <Tilt3DCard className="w-full">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed shadow-xl backdrop-blur-2xl text-left font-normal">
              <h2 className="text-xl font-extrabold text-slate-900 font-heading">1. Acceptance of Terms</h2>
              <p>
                By accessing or using UnderTheAI's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, please do not use our services.
              </p>

              <h2 className="text-xl font-extrabold text-slate-900 font-heading">2. Technology Services</h2>
              <p>
                UnderTheAI provides professional technology services including AI automation, cybersecurity, cloud infrastructure, DevOps engineering, web application development, and custom machine learning solutions.
              </p>

              <h2 className="text-xl font-extrabold text-slate-900 font-heading">3. Intellectual Property</h2>
              <p>
                All content, visual architecture, branding, logos, and software code provided on the UnderTheAI website are the property of UnderTheAI Inc. and protected under applicable intellectual property laws.
              </p>

              <h2 className="text-xl font-extrabold text-slate-900 font-heading">4. Limitation of Liability</h2>
              <p>
                UnderTheAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our website or services.
              </p>
            </div>
          </Tilt3DCard>
        </LeftReveal>

      </div>
    </div>
  );
};

