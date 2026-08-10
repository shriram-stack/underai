export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: string;
  features: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  keyBenefits: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
