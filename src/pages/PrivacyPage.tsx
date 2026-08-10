import React from 'react';
import { Sparkles } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#03050A] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Legal Policy</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-[#070A12] border border-slate-800/80 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          <p>
            UnderAI respects your privacy. When you interact with our website or submit project inquiries through our contact form, we collect information you provide directly to us, such as your name, business name, email address, phone number, and project details.
          </p>

          <h2 className="text-xl font-bold text-white">2. How We Use Information</h2>
          <p>
            We use the information we collect to communicate with you regarding your technology service inquiries, understand your business requirements, and provide professional consultation for website development, AI integration, cybersecurity, and cloud solutions.
          </p>

          <h2 className="text-xl font-bold text-white">3. Data Protection & Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal and business information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-bold text-white">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact UnderAI through our contact page.
          </p>
        </div>

      </div>
    </div>
  );
};
