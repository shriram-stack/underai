import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Cloud, Workflow, Terminal, Zap } from 'lucide-react';
import { UnderAiLogo } from './UnderAiLogo';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[98vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#03050A]">
      {/* Background cinematic radial lighting & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(3,5,10,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Cinematic purple/blue aura lights */}
      <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Animated Flowing Data / Circuit Lines Connecting Sides to Center */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path d="M100 400 Q 400 250 720 400" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="6 6" className="animate-[pulse_3s_infinite]" />
          <path d="M1340 400 Q 1040 250 720 400" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="6 6" className="animate-[pulse_3s_infinite_1.5s]" />
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* LEFT SIDE: Futuristic AI Neural Core & Particle Orb */}
      <div 
        className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-64 lg:w-80 h-[520px] pointer-events-none hidden md:block transition-transform duration-300 ease-out z-10"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/5 to-transparent blur-3xl rounded-full" />
          
          {/* 3D Neural Core SVG */}
          <div className="relative w-64 h-64 animate-[spin_30s_linear_infinite]">
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#1d4ed8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#03050A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Outer Orbital Rings */}
              <circle cx="150" cy="150" r="130" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="8 8" className="opacity-40 animate-[spin_20s_linear_infinite]" />
              <circle cx="150" cy="150" r="105" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="12 6" className="opacity-60 animate-[spin_15s_linear_infinite_reverse]" />
              <circle cx="150" cy="150" r="80" fill="none" stroke="#93c5fd" strokeWidth="1" className="opacity-50" />

              {/* Neural Network Web */}
              <g className="stroke-blue-400/60" strokeWidth="1">
                <line x1="150" y1="70" x2="100" y2="120" />
                <line x1="150" y1="70" x2="200" y2="120" />
                <line x1="100" y1="120" x2="80" y2="180" />
                <line x1="200" y1="120" x2="220" y2="180" />
                <line x1="80" y1="180" x2="150" y2="230" />
                <line x1="220" y1="180" x2="150" y2="230" />
                <line x1="100" y1="120" x2="150" y2="150" />
                <line x1="200" y1="120" x2="150" y2="150" />
                <line x1="150" y1="230" x2="150" y2="150" />
              </g>

              {/* Glowing Nodes / Particles */}
              <circle cx="150" cy="70" r="5" className="fill-blue-400 animate-ping" />
              <circle cx="100" cy="120" r="4" className="fill-cyan-300 animate-pulse" />
              <circle cx="200" cy="120" r="4" className="fill-cyan-300 animate-pulse" />
              <circle cx="80" cy="180" r="4.5" className="fill-blue-500 animate-ping" />
              <circle cx="220" cy="180" r="4.5" className="fill-blue-500 animate-ping" />
              <circle cx="150" cy="230" r="5" className="fill-indigo-400 animate-pulse" />

              {/* Central Energy Sphere */}
              <circle cx="150" cy="150" r="45" fill="url(#coreGlow)" />
              <circle cx="150" cy="150" r="20" className="fill-white animate-pulse" />
            </svg>
          </div>

          {/* Core Info Badge */}
          <div className="mt-6 px-4 py-2 rounded-xl bg-slate-950/90 border border-blue-500/40 text-xs font-mono text-blue-300 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.3)] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>AI NEURAL CORE // ACTIVE</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Cybersecurity Shield & Cloud Infrastructure Core */}
      <div 
        className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-64 lg:w-80 h-[520px] pointer-events-none hidden md:block transition-transform duration-300 ease-out z-10"
        style={{ transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)` }}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-600/20 via-blue-600/5 to-transparent blur-3xl rounded-full" />
          
          {/* 3D Security Shield & Cloud Core SVG */}
          <div className="relative w-64 h-64 animate-[spin_35s_linear_infinite_reverse]">
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]">
              <defs>
                <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#03050A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Outer Cloud & Shield Orbital Rings */}
              <circle cx="150" cy="150" r="130" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="10 6" className="opacity-40 animate-[spin_25s_linear_infinite]" />
              <circle cx="150" cy="150" r="105" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="8 8" className="opacity-60 animate-[spin_18s_linear_infinite_reverse]" />
              <circle cx="150" cy="150" r="80" fill="none" stroke="#a5b4fc" strokeWidth="1" className="opacity-50" />

              {/* Cloud & Security Circuit Lines */}
              <g className="stroke-indigo-400/60" strokeWidth="1">
                <path d="M100,120 Q120,90 150,110 Q180,90 200,120" fill="none" />
                <line x1="150" y1="110" x2="150" y2="190" />
                <line x1="110" y1="150" x2="190" y2="150" />
                <line x1="120" y1="190" x2="180" y2="190" />
              </g>

              {/* Glowing Shield Nodes */}
              <circle cx="150" cy="110" r="5" className="fill-indigo-400 animate-ping" />
              <circle cx="110" cy="150" r="4" className="fill-blue-300 animate-pulse" />
              <circle cx="190" cy="150" r="4" className="fill-blue-300 animate-pulse" />
              <circle cx="150" cy="190" r="5.5" className="fill-indigo-500 animate-ping" />

              {/* Central Shield / Cloud Core */}
              <circle cx="150" cy="150" r="45" fill="url(#shieldGlow)" />
              <path d="M150,130 L165,140 L165,165 C165,175 150,185 150,185 C150,185 135,175 135,165 L135,140 Z" fill="none" stroke="#ffffff" strokeWidth="2.5" className="animate-pulse" />
            </svg>
          </div>

          {/* Core Info Badge */}
          <div className="mt-6 px-4 py-2 rounded-xl bg-slate-950/90 border border-indigo-500/40 text-xs font-mono text-indigo-300 backdrop-blur-md shadow-[0_0_25px_rgba(99,102,241,0.3)] flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span>CLOUD & SECURITY // SECURE</span>
          </div>
        </div>
      </div>

      {/* Main Center Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="space-y-8 flex flex-col items-center">
          
          {/* Eyebrow / Logo badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-md">
            <UnderAiLogo size="sm" />
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-blue-400">
              Intelligence Beyond Limits
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl">
            Build smarter.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
              Automate faster.
            </span><br />
            Stay protected.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            UnderAI helps businesses build modern websites, integrate AI, automate workflows, strengthen cybersecurity, manage cloud infrastructure and streamline DevOps.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md">
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] cursor-pointer text-base"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 text-base cursor-pointer backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-8 grid grid-cols-3 gap-6 sm:gap-12 border-t border-slate-800/80 w-full max-w-xl text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Tailored Solutions</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">24/7</div>
              <div className="text-xs text-slate-400 mt-0.5">AI-Ready Systems</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">End-to-End</div>
              <div className="text-xs text-slate-400 mt-0.5">Technology Partner</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
