import React, { useState } from 'react';
import { UNDERAI_SERVICES } from '../data/underaiData';
import { Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: UNDERAI_SERVICES[0].title,
    projectDescription: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide a brief project description.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#03050A] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact UnderAI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start your project with UnderAI.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Tell us about your business needs and let's find the right technology solution.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#070A12] border border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Project Inquiry Received</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-blue-400">{formData.service}</strong> for <strong className="text-white">{formData.businessName}</strong> has been prepared successfully.
              </p>
              <p className="text-xs text-slate-500 font-mono pt-4 border-t border-slate-800">
                Frontend validation passed successfully. Ready for backend API integration.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    businessName: '',
                    email: '',
                    phone: '',
                    service: UNDERAI_SERVICES[0].title,
                    projectDescription: ''
                  });
                }}
                className="mt-6 px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full bg-[#03050A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Business Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Jenkins Retail & Goods"
                    className={`w-full bg-[#03050A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                      errors.businessName ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.businessName && (
                    <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.businessName}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@business.com"
                    className={`w-full bg-[#03050A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-[#03050A] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Primary Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#03050A] border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  {UNDERAI_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Project Description <span className="text-blue-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Tell us about your business, your goals, and what technology solution you are looking for..."
                  className={`w-full bg-[#03050A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                    errors.projectDescription ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                  }`}
                />
                {errors.projectDescription && (
                  <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
