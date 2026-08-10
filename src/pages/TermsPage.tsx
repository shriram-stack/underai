import React from 'react';
import { Sparkles } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#03050A] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-[#070A12] border border-slate-800/80 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using UnderAI's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, please do not use our services.
          </p>

          <h2 className="text-xl font-bold text-white">2. Technology Services</h2>
          <p>
            UnderAI provides professional technology services including website design and development, AI model integration, AI automation, AI chat support, cybersecurity, cloud solutions, DevOps, and IT support & maintenance.
          </p>

          <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
          <p>
            All content, visual architecture, branding, logos, and software code provided on the UnderAI website are the property of UnderAI and protected under applicable intellectual property laws.
          </p>

          <h2 className="text-xl font-bold text-white">4. Limitation of Liability</h2>
          <p>
            UnderAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our website or services.
          </p>
        </div>

      </div>
    </div>
  );
};
