import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { LeftReveal, Tilt3DCard } from '../components/ScrollAnimations';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Automation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#6D28D9]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Left Aligned */}
        <LeftReveal delay={0} className="text-left space-y-4 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Let's build something intelligent.
          </h1>
          <p className="text-slate-600 text-lg font-normal leading-relaxed">
            Ready to integrate AI, automate processes or strengthen your cloud security? Send us a message to get started.
          </p>
        </LeftReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Box */}
          <LeftReveal delay={0.1} className="lg:col-span-5">
            <Tilt3DCard className="w-full">
              <div className="space-y-8 bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden text-left border border-slate-200/90 backdrop-blur-2xl">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#6D28D9] bg-purple-50 border border-purple-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-widest font-extrabold inline-block">
                    UnderTheAI HQ
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">Start a conversation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    Tell us about your technical goals, timeline, and requirements. Our engineering team responds within 24 hours.
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-slate-200 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Email Us</div>
                      <div className="font-bold text-slate-900">hello@undertheai.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Schedule a Call</div>
                      <div className="font-bold text-slate-900">+1 (800) 555-UNAI</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Engineering Office</div>
                      <div className="font-bold text-slate-900">San Francisco, CA & Remote</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 text-xs text-slate-600 font-semibold">
                  ⚡ Guaranteed response within 1 business day.
                </div>
              </div>
            </Tilt3DCard>
          </LeftReveal>

          {/* Right Contact Form */}
          <LeftReveal delay={0.2} className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-2xl text-left">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Message Sent!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-normal">
                    Thank you for reaching out to UnderTheAI. Our team will review your project details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', service: 'AI Automation', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#6D28D9] bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500' : 'border-slate-200'
                        } bg-slate-50 text-slate-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm font-medium transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        } bg-slate-50 text-slate-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm font-medium transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm font-medium transition-colors"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm font-medium transition-colors cursor-pointer"
                      >
                        <option value="AI Automation" className="bg-white text-slate-900">AI Automation</option>
                        <option value="Cybersecurity" className="bg-white text-slate-900">Cybersecurity</option>
                        <option value="Cloud Infrastructure" className="bg-white text-slate-900">Cloud Infrastructure</option>
                        <option value="DevOps" className="bg-white text-slate-900">DevOps</option>
                        <option value="Web Development" className="bg-white text-slate-900">Web Development</option>
                        <option value="AI/ML" className="bg-white text-slate-900">AI/ML Solutions</option>
                        <option value="Other" className="bg-white text-slate-900">Other Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals, scope, or questions..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-500' : 'border-slate-200'
                      } bg-slate-50 text-slate-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm font-medium transition-colors`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 shadow-lg shadow-purple-500/25 transition-all cursor-pointer text-base active:scale-95"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </LeftReveal>

        </div>

      </div>
    </div>
  );
};

