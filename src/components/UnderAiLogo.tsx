import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const UnderAiLogo: React.FC<LogoProps> = ({ 
  className = '', 
  showTagline = false, 
  size = 'md',
  variant = 'light'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Clean Abstract Rounded "U" + AI Icon */}
      <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] shadow-md shadow-purple-500/25 transition-transform duration-300 group-hover:scale-105 ${iconSizes[size]}`}>
        {/* Soft glowing background aura */}
        <div className="absolute inset-0 rounded-2xl bg-[#7C3AED]/40 blur-md -z-10 group-hover:blur-lg transition-all" />
        
        {/* Abstract U Symbol */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          {/* Main U curve */}
          <path
            d="M6 5V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* AI Sparkle node */}
          <circle cx="18" cy="5" r="2" fill="#EDE9FE" />
          <circle cx="6" cy="5" r="2" fill="#EDE9FE" />
          <path
            d="M12 11V15"
            stroke="#EDE9FE"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark and optional tagline */}
      <div className="flex flex-col">
        <div className={`font-bold font-heading tracking-tight flex items-center ${variant === 'dark' ? 'text-white' : 'text-slate-900'} ${textSizes[size]}`}>
          <span>UnderThe</span>
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent ml-0.5">
            AI
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] uppercase tracking-widest font-semibold ${variant === 'dark' ? 'text-slate-300' : 'text-purple-700/90'}`}>
            INTELLIGENCE BEYOND LIMITS
          </span>
        )}
      </div>
    </div>
  );
};

export const UnderTheAiLogo = UnderAiLogo;

