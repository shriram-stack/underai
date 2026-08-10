import React from 'react';
import { AI_CAPABILITIES } from '../data/underaiData';
import { Cpu, Workflow, MessageSquareCode, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const AiAutomationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#03050A] relative border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI & Automation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Make technology work smarter.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UnderAI helps businesses adopt AI in practical ways — from intelligent workflows and model integration to customer support automation.
            </p>

            <div className="space-y-4 pt-2">
              {AI_CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#070A12] border border-slate-800/80 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{cap.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Futuristic Visual: Input -> AI -> Automation -> Business Result */}
          <div className="lg:col-span-6">
            <div className="bg-[#070A12] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest shadow-lg">
                Conceptual Pipeline
              </div>

              <div className="space-y-6">
                
                {/* Step 1: Input */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 font-mono text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Business Data & Inquiries</div>
                      <div className="text-xs text-slate-400">Customer requests, documents, operational data</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-500/20">
                    Input
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-blue-500/50" />
                </div>

                {/* Step 2: UnderAI Model & Workflow */}
                <div className="bg-blue-950/20 border border-blue-500/30 p-5 rounded-xl space-y-3 relative shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">UnderAI Processing Engine</div>
                        <div className="text-xs text-blue-300">LLM Integration & Smart Routing</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-blue-400 animate-pulse">Active</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-blue-500/50" />
                </div>

                {/* Step 3: Result */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Automated Business Result</div>
                      <div className="text-xs text-slate-400">Instant customer replies, clean data, saved hours</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/20">
                    Success
                  </span>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
                Designed for practical business efficiency without complexity.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
