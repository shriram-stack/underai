import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Cpu, Shield, Cloud, Workflow, X, CheckCircle2, Sparkles, Zap, Lock, Server } from 'lucide-react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax effect on mouse movement
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const currentHero = heroRef.current;
    if (currentHero) {
      currentHero.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (currentHero) {
        currentHero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const heroRotateX = useTransform(scrollYProgress, [0, 0.8], [0, 4]);

  const featureCards = [
    {
      icon: Cpu,
      title: 'AI Automation',
      subtitle: 'Smart workflows',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      subtitle: 'Secure your systems',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable & reliable',
    },
    {
      icon: Workflow,
      title: 'DevOps',
      subtitle: 'Streamline delivery',
    }
  ];

  const techNodes = [
    {
      id: 'ai',
      label: 'AI',
      sub: 'LLMs & Agents',
      icon: Sparkles,
      color: '#7C3AED',
      glow: 'rgba(124, 58, 237, 0.25)',
      pos: 'top-1 sm:top-2 left-1/2 -translate-x-1/2'
    },
    {
      id: 'automation',
      label: 'Automation',
      sub: 'Smart Workflows',
      icon: Zap,
      color: '#0284C7',
      glow: 'rgba(2, 132, 199, 0.25)',
      pos: 'top-16 sm:top-20 -right-2 sm:right-2'
    },
    {
      id: 'cloud',
      label: 'Cloud',
      sub: 'Multi-Cloud Ops',
      icon: Cloud,
      color: '#2563EB',
      glow: 'rgba(37, 99, 235, 0.25)',
      pos: 'bottom-16 sm:bottom-20 -right-2 sm:right-2'
    },
    {
      id: 'security',
      label: 'Security',
      sub: 'Zero-Trust Shield',
      icon: Lock,
      color: '#0891B2',
      glow: 'rgba(8, 145, 178, 0.25)',
      pos: 'bottom-16 sm:bottom-20 -left-2 sm:left-2'
    },
    {
      id: 'devops',
      label: 'DevOps',
      sub: 'Automated CI/CD',
      icon: Server,
      color: '#9333EA',
      glow: 'rgba(147, 51, 234, 0.25)',
      pos: 'top-16 sm:top-20 -left-2 sm:left-2'
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-slate-50 text-slate-900 flex flex-col justify-between"
    >
      {/* ATMOSPHERIC SOFT PURPLE & VIOLET RADIAL GLOWS & PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Purple Radial Glows */}
        <div className="absolute -top-20 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_70%)] blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[700px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.1),transparent_70%)] blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)] blur-[120px]" />

        {/* Scattered Faint Glowing Purple Light Particles */}
        <div className="absolute top-1/4 right-20 w-2 h-2 rounded-full bg-[#7C3AED]/40 blur-[1px] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-12 w-3 h-3 rounded-full bg-[#8B5CF6]/30 blur-[1px] animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#A855F7]/40 blur-[1px] animate-ping" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-[#6D28D9]/30 blur-[1px] animate-pulse" />
      </div>

      <motion.div 
        style={{
          scale: heroScale,
          y: heroY,
          opacity: heroOpacity,
          rotateX: heroRotateX,
          transformStyle: 'preserve-3d',
        }}
        className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10 my-auto perspective-1200"
      >
        
        {/* MAIN HERO SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center mb-12 lg:mb-16">
          
          {/* LEFT COLUMN: STRICTLY LEFT-ALIGNED TEXT & ACTIONS */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start justify-start text-left space-y-6 lg:space-y-8 max-w-2xl xl:max-w-3xl">
            
            {/* Eyebrow Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 shadow-sm text-left backdrop-blur-md"
            >
              <div className="flex items-center gap-1.5 pr-2.5 border-r border-purple-200">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] flex items-center justify-center text-white text-[10px] font-extrabold shadow-xs shadow-purple-500/30">
                  U
                </div>
                <span className="text-xs font-extrabold text-slate-900">UnderTheAI</span>
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#6D28D9] uppercase">
                INTELLIGENCE BEYOND LIMITS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.08] text-left max-w-xl xl:max-w-2xl"
            >
              Build smarter.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]">
                Automate faster.
              </span><br />
              Stay protected.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg xl:text-xl text-slate-600 font-normal leading-relaxed max-w-xl xl:max-w-2xl text-left"
            >
              UnderTheAI helps businesses build modern websites, integrate AI, automate workflows, strengthen cybersecurity, manage cloud infrastructure and streamline DevOps.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-start gap-4 pt-2 text-left w-full"
            >
              {/* Primary Purple Gradient Pill Button */}
              <button
                onClick={() => {
                  onNavigate('/services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] hover:brightness-110 transition-all duration-200 shadow-lg shadow-purple-500/25 border border-purple-400/30 cursor-pointer active:scale-95"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Play Demo Button */}
              <button
                onClick={() => setShowDemoModal(true)}
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold text-slate-800 hover:text-purple-700 transition-all duration-200 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-purple-700 group-hover:scale-105 group-hover:border-[#7C3AED] transition-all">
                  <Play className="w-4 h-4 fill-[#7C3AED] ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: ANIMATED 3D FLOATING CORE & 5 CONNECTED TECH NODES */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[600px] w-full">
            
            {/* Interactive 3D Canvas with Parallax */}
            <div 
              className="relative w-full max-w-[540px] xl:max-w-[620px] aspect-square flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`
              }}
            >

              {/* Atmospheric Pulses & Volumetric Ambient Glow */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#6D28D9]/15 via-[#7C3AED]/15 to-[#8B5CF6]/15 blur-3xl animate-pulse-glow pointer-events-none" />

              {/* BACKGROUND CIRCUIT & DATA NETWORK PIPELINES */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" fill="none">
                <defs>
                  {/* Purple Gradient for Circuit Lines */}
                  <linearGradient id="circuitPurpleViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
                  </linearGradient>

                  {/* Soft Neon Glow Filter */}
                  <filter id="softGlowLight" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Concentric Tech Grid Orbit Lines */}
                <circle cx="250" cy="250" r="185" stroke="url(#circuitPurpleViolet)" strokeWidth="1.2" strokeDasharray="6 8" strokeOpacity="0.4" className="animate-rotate-slow" />
                <circle cx="250" cy="250" r="135" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 6" strokeOpacity="0.35" className="animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

                {/* Animated Circuit Paths Connecting Center Core (250, 250) to the 5 Nodes */}
                
                {/* 1. Center to TOP (AI Node) */}
                <path d="M 250 180 L 250 65" stroke="url(#circuitPurpleViolet)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
                <circle cx="250" cy="110" r="3.5" fill="#7C3AED" filter="url(#softGlowLight)" className="animate-ping" style={{ animationDuration: '3s' }} />

                {/* 2. Center to TOP RIGHT (Automation Node) */}
                <path d="M 290 210 L 360 160 L 410 140" stroke="url(#circuitPurpleViolet)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
                <circle cx="365" cy="158" r="3.5" fill="#8B5CF6" filter="url(#softGlowLight)" />

                {/* 3. Center to BOTTOM RIGHT (Cloud Node) */}
                <path d="M 290 290 L 360 340 L 410 360" stroke="url(#circuitPurpleViolet)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
                <circle cx="360" cy="340" r="3.5" fill="#6D28D9" filter="url(#softGlowLight)" />

                {/* 4. Center to BOTTOM LEFT (Security Node) */}
                <path d="M 210 290 L 140 340 L 90 360" stroke="url(#circuitPurpleViolet)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
                <circle cx="140" cy="340" r="3.5" fill="#7C3AED" filter="url(#softGlowLight)" />

                {/* 5. Center to TOP LEFT (DevOps Node) */}
                <path d="M 210 210 L 140 160 L 90 140" stroke="url(#circuitPurpleViolet)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
                <circle cx="140" cy="158" r="3.5" fill="#8B5CF6" filter="url(#softGlowLight)" />
              </svg>

              {/* 5 FLOATING NODES CONNECTED AROUND THE LOGO CORE */}
              {[
                {
                  id: 'ai',
                  label: 'AI',
                  sub: 'LLMs & Agents',
                  icon: Sparkles,
                  color: '#6D28D9',
                  glow: 'rgba(109, 40, 217, 0.15)',
                  pos: 'top-1 sm:top-2 left-1/2 -translate-x-1/2'
                },
                {
                  id: 'automation',
                  label: 'Automation',
                  sub: 'Smart Workflows',
                  icon: Zap,
                  color: '#7C3AED',
                  glow: 'rgba(124, 58, 237, 0.15)',
                  pos: 'top-16 sm:top-20 -right-2 sm:right-2'
                },
                {
                  id: 'cloud',
                  label: 'Cloud',
                  sub: 'Multi-Cloud Ops',
                  icon: Cloud,
                  color: '#8B5CF6',
                  glow: 'rgba(139, 92, 246, 0.15)',
                  pos: 'bottom-16 sm:bottom-20 -right-2 sm:right-2'
                },
                {
                  id: 'security',
                  label: 'Security',
                  sub: 'Zero-Trust Shield',
                  icon: Lock,
                  color: '#6D28D9',
                  glow: 'rgba(109, 40, 217, 0.15)',
                  pos: 'bottom-16 sm:bottom-20 -left-2 sm:left-2'
                },
                {
                  id: 'devops',
                  label: 'DevOps',
                  sub: 'Automated CI/CD',
                  icon: Server,
                  color: '#7C3AED',
                  glow: 'rgba(124, 58, 237, 0.15)',
                  pos: 'top-16 sm:top-20 -left-2 sm:left-2'
                }
              ].map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    className={`absolute ${node.pos} z-20 group transition-all duration-200 hover:scale-105 cursor-pointer`}
                  >
                    <div 
                      className="px-3.5 py-2 rounded-2xl bg-white/95 border border-slate-200 flex items-center gap-2.5 shadow-lg hover:shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:border-[#7C3AED]"
                      style={{
                        boxShadow: `0 8px 24px ${node.glow}`
                      }}
                    >
                      <div 
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border border-purple-200"
                        style={{ backgroundColor: `${node.color}15`, color: node.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold font-heading tracking-wide text-slate-900 group-hover:text-[#6D28D9] transition-colors leading-tight">
                          {node.label}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium hidden sm:block">
                          {node.sub}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* CENTRAL 3D FLOATING GLASS CORE WITH EXACT UNDERAI LOGO & CIRCUIT ARTWORK */}
              <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-white via-slate-50 to-slate-100 border-2 border-slate-200 shadow-[0_25px_60px_rgba(124,58,237,0.18)] backdrop-blur-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-700 overflow-hidden animate-float-particle">
                
                {/* Specular Light Reflection Ring */}
                <div className="absolute top-3 left-6 w-44 h-20 border-t-2 border-l-2 border-slate-300 rounded-t-full pointer-events-none transform -rotate-12 opacity-80" />

                {/* Internal Soft Purple Atmosphere Glow */}
                <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,1),rgba(243,232,255,0.8)_40%,rgba(233,213,255,0.5)_70%,rgba(192,132,252,0.3)_100%)] pointer-events-none" />

                {/* EXACT VECTOR RECREATION OF U LOGO, CIRCUITS, NODES AND SPARKLE STARS */}
                <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center p-2">
                  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-md">
                    <defs>
                      {/* Metallic Purple U Mark Gradient */}
                      <linearGradient id="exactULogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6D28D9" />
                        <stop offset="50%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>

                      {/* Circuit Line Purple Gradient */}
                      <linearGradient id="exactCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>

                    {/* TOP RIGHT SPARKLE STARS */}
                    {/* Primary 4-Point Diamond Sparkle */}
                    <path d="M 136 50 L 138 56 L 144 58 L 138 60 L 136 66 L 134 60 L 128 58 L 134 56 Z" fill="#7C3AED" />
                    {/* Secondary 4-Point Diamond Sparkle */}
                    <path d="M 148 68 L 149 71 L 152 72 L 149 73 L 148 76 L 147 73 L 144 72 L 147 71 Z" fill="#8B5CF6" />

                    {/* CIRCUIT TRACES EXTENDING TO THE RIGHT & UNDERNEATH */}
                    {/* Line 1 (Upper Right with open terminal node) */}
                    <path d="M 126 84 L 140 84 L 146 78 L 152 78" stroke="url(#exactCircuitGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="152" cy="78" r="2.5" fill="white" stroke="#7C3AED" strokeWidth="1.8" />

                    {/* Line 2 (Middle Right with branch and open terminal node) */}
                    <path d="M 126 98 L 142 98 L 148 104 L 156 104" stroke="url(#exactCircuitGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="156" cy="104" r="2.5" fill="white" stroke="#7C3AED" strokeWidth="1.8" />
                    {/* Branch off line 2 */}
                    <path d="M 136 98 L 140 92 L 146 92" stroke="url(#exactCircuitGrad)" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="146" cy="92" r="2" fill="#7C3AED" />

                    {/* Line 3 (Lower Right with open terminal node) */}
                    <path d="M 124 112 L 138 112 L 144 118 L 150 118" stroke="url(#exactCircuitGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="150" cy="118" r="2.5" fill="white" stroke="#7C3AED" strokeWidth="1.8" />

                    {/* Line 4 (Underneath Circuit Lines wrapping below the U) */}
                    <path d="M 102 136 L 126 136 L 134 144 L 142 144" stroke="url(#exactCircuitGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="102" cy="136" r="2" fill="#7C3AED" />

                    <path d="M 102 144 L 120 144 L 128 152 L 136 152" stroke="url(#exactCircuitGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="102" cy="144" r="2" fill="#7C3AED" />

                    <path d="M 102 152 L 114 152 L 122 160 L 128 160" stroke="url(#exactCircuitGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="102" cy="152" r="2" fill="#7C3AED" />

                    {/* MAIN UNDERAI "U" LOGO MARK */}
                    <path 
                      d="M 78 60 
                         C 78 60 84 64 92 64 
                         L 92 110 
                         C 92 122 100 130 110 130 
                         C 120 130 128 122 128 110 
                         L 128 60 
                         L 116 60 
                         L 116 108 
                         C 116 114 113 118 110 118 
                         C 107 118 104 114 104 108 
                         L 104 76 
                         L 78 60 Z" 
                      fill="url(#exactULogoGrad)" 
                    />

                    {/* GLOWING VIOLET DOT INSIDE BOTTOM LOOP OF THE U */}
                    <circle cx="103" cy="108" r="3.5" fill="#7C3AED" />
                    <circle cx="103" cy="108" r="1.5" fill="white" />
                  </svg>
                </div>

                {/* Floating Particle Trails */}
                <div className="absolute top-6 right-10 text-[#7C3AED] animate-pulse">
                  <Sparkles className="w-4 h-4 fill-[#7C3AED]/20" />
                </div>
                <div className="absolute bottom-10 left-8 text-[#8B5CF6] animate-pulse" style={{ animationDelay: '1.2s' }}>
                  <Sparkles className="w-3.5 h-3.5 fill-[#8B5CF6]/20" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FEATURE STRIP */}
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-4 hover:border-[#7C3AED]/50 transition-all duration-300 group cursor-pointer backdrop-blur-xl hover:shadow-lg hover:shadow-purple-500/10" 
                  onClick={() => onNavigate('/services')}
                >
                  <div className="p-3 rounded-xl bg-purple-50 text-[#6D28D9] border border-purple-200 shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-slate-900 font-heading group-hover:text-[#6D28D9] transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* WATCH DEMO INTERACTIVE MODAL */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-slate-900">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6D28D9] border border-purple-200 flex items-center justify-center font-bold">
                  <Play className="w-5 h-5 fill-[#6D28D9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">UnderTheAI Architecture Tour</h3>
                  <p className="text-xs text-slate-500">Interactive Platform Walkthrough</p>
                </div>
              </div>
              <button
                onClick={() => setShowDemoModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Interactive Content */}
            <div className="space-y-6 text-left">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-[#6D28D9] uppercase tracking-wider">
                    Module {demoStep + 1} of 3
                  </span>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((s) => (
                      <div
                        key={s}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          s === demoStep ? 'bg-[#7C3AED]' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {demoStep === 0 && (
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900">1. AI Workflow & Process Automation</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      UnderTheAI connects your enterprise software, databases, and APIs into automated AI workflows that execute routine tasks with 100% precision.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-[#6D28D9] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                      <span>Autonomous document extraction & LLM routing</span>
                    </div>
                  </div>
                )}

                {demoStep === 1 && (
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900">2. Zero-Trust Security & Cloud Hardening</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Every application and AI agent operates inside a zero-trust framework with continuous vulnerability scans and automated key rotation.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-[#6D28D9] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                      <span>Real-time threat detection & encrypted communication</span>
                    </div>
                  </div>
                )}

                {demoStep === 2 && (
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900">3. Multi-Cloud DevOps Delivery</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Deploy resilient microservices and AI pipelines with automated CI/CD across AWS, GCP, or Azure with zero downtime.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-[#6D28D9] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                      <span>Automated container orchestration & telemetry</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Demo Modal Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setDemoStep((prev) => Math.max(0, prev - 1))}
                  disabled={demoStep === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>

                {demoStep < 2 ? (
                  <button
                    onClick={() => setDemoStep((prev) => Math.min(2, prev + 1))}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:brightness-110 shadow-md cursor-pointer"
                  >
                    Next Module →
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowDemoModal(false);
                      onNavigate('/contact');
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] shadow-md cursor-pointer font-bold"
                  >
                    Start Your Project →
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
