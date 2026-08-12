import React, { useState, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface LeftRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

export const LeftReveal: React.FC<LeftRevealProps> = ({
  children,
  delay = 0,
  className = '',
  distance = 50,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -distance, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface CardStaggerProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  onClick?: () => void;
}

export const CardStagger: React.FC<CardStaggerProps> = ({
  children,
  index = 0,
  className = '',
  onClick,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: 8, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  depth?: number;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  onClick,
  depth = 12,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [transformStyle, setTransformStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  if (shouldReduceMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -depth;
    const rotateY = ((x - centerX) / centerX) * depth;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransformStyle({
      rotateX,
      rotateY,
      glareX,
      glareY,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  return (
    <div className="perspective-1000 w-full" onClick={onClick}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: transformStyle.rotateX,
          rotateY: transformStyle.rotateY,
          scale: transformStyle.isHovered ? 1.02 : 1,
          translateZ: transformStyle.isHovered ? 20 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 22,
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative overflow-hidden transition-all duration-300 ${className}`}
      >
        {/* Specular glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-inherit"
          style={{
            opacity: transformStyle.isHovered ? 0.22 : 0,
            background: `radial-gradient(circle at ${transformStyle.glareX}% ${transformStyle.glareY}%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 65%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};

interface Reveal3DProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal3D: React.FC<Reveal3DProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className="perspective-1000 w-full">
      <motion.div
        initial={{ opacity: 0, y: 35, rotateX: -10, scale: 0.97, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* Scroll-Driven Parallax Layer Component */
interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // negative moves opposite scroll, positive moves with scroll
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
};

/* Floating Glassmorphism Geometric Orb Component */
interface FloatingGlassOrbProps {
  className?: string;
  size?: string;
  blur?: string;
  gradient?: string;
  speed?: number;
}

export const FloatingGlassOrb: React.FC<FloatingGlassOrbProps> = ({
  className = '',
  size = 'w-72 h-72',
  blur = 'blur-3xl',
  gradient = 'from-[#6D28D9]/20 via-[#7C3AED]/15 to-[#8B5CF6]/20',
  speed = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 120, -speed * 120]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div ref={ref} className={`absolute pointer-events-none z-0 ${className}`}>
      <motion.div
        style={{ y }}
        className={`${size} rounded-full bg-gradient-to-tr ${gradient} ${blur} animate-pulse-glow`}
      />
    </div>
  );
};

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  centered = false,
  className = '',
}) => {
  const alignClass = centered ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 lg:mb-14 ${alignClass} ${className}`}>
      {badge && (
        <LeftReveal delay={0}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 backdrop-blur-md border border-purple-200 text-[#6D28D9] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            {badge}
          </div>
        </LeftReveal>
      )}

      <LeftReveal delay={0.08}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4 leading-[1.12]">
          {title}
        </h2>
      </LeftReveal>

      {description && (
        <LeftReveal delay={0.16}>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            {description}
          </p>
        </LeftReveal>
      )}
    </div>
  );
};


