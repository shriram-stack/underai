import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const UnderAiLogo: React.FC<LogoProps> = ({ className = '', showTagline = false, size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Futuristic U Mark with circuit lines and blue AI accent */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0f172a] to-[#030712] border border-slate-800/80 shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-105 ${iconSizes[size]}`}>
        {/* Subtle circuit nodes */}
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-400 rounded-full" />
        
        {/* Futuristic U Symbol */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          {/* Circuit connection line */}
          <path
            d="M6 5v7a6 6 0 1 0 12 0V5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Blue AI accent terminal */}
          <path
            d="M18 5h2"
            stroke="#3b82f6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M4 5h2"
            stroke="#3b82f6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark and optional tagline */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight text-white flex items-center gap-1.5 ${textSizes[size]}`}>
          <span>Under</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
            Intelligence Beyond Limits
          </span>
        )}
      </div>
    </div>
  );
};
