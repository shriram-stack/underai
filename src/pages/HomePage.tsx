import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ServicesSection } from '../components/ServicesSection';
import { WhyUnderAi } from '../components/WhyUnderAi';
import { SolutionsSection } from '../components/SolutionsSection';
import { ProcessSection } from '../components/ProcessSection';
import { AiAutomationSection } from '../components/AiAutomationSection';
import { TechArchitecture } from '../components/TechArchitecture';
import { FaqSection } from '../components/FaqSection';
import { FinalCta } from '../components/FinalCta';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero onNavigate={onNavigate} />
      <TrustStrip />
      <ServicesSection onNavigate={onNavigate} />
      <WhyUnderAi />
      <SolutionsSection onNavigate={onNavigate} />
      <ProcessSection />
      <AiAutomationSection onNavigate={onNavigate} />
      <TechArchitecture onNavigate={onNavigate} />
      <FaqSection />
      <FinalCta onNavigate={onNavigate} />
    </div>
  );
};
