import { ServiceItem, SolutionItem, FaqItem, ProcessStep } from '../types';

export const UNDERAI_SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Design & Development',
    shortDescription: 'Modern, fast and responsive websites designed to help businesses grow.',
    fullDescription: 'We craft high-performance, responsive websites tailored for small businesses, retail shops, startups, and growing enterprises. Built with modern web standards to ensure lightning-fast loading speeds, clean aesthetics, and seamless user experiences.',
    icon: 'Layout',
    features: [
      'Custom Responsive Design',
      'Performance Optimization & Fast Loading',
      'SEO-Friendly Architecture',
      'Secure & Scalable Frontend/Backend'
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Model Integration',
    shortDescription: 'Integrate AI models and intelligent automation into business workflows.',
    fullDescription: 'Leverage state-of-the-art AI models (like Gemini and custom LLMs) directly inside your business applications. We help you connect intelligent APIs for document analysis, content generation, data synthesis, and smart decision support.',
    icon: 'Cpu',
    features: [
      'Custom LLM Integration',
      'Smart Document Analysis & Processing',
      'Intelligent Data Synthesis',
      'Secure API Orchestration'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortDescription: 'Automate repetitive business processes and create intelligent workflows.',
    fullDescription: 'Eliminate manual bottlenecks. We build intelligent workflows that connect your CRM, email, databases, and third-party tools using smart automation logic to save hours of manual effort every week.',
    icon: 'Workflow',
    features: [
      'Workflow Automation Pipelines',
      'Smart Data Routing & Processing',
      'CRM & Tool Integration',
      'Error Reduction & Monitoring'
    ]
  },
  {
    id: 'ai-chat-support',
    title: 'AI Chat Support',
    shortDescription: 'AI-powered customer support that can answer questions, assist visitors and capture leads.',
    fullDescription: 'Deploy intelligent virtual assistants trained on your business knowledge base. Provide instant, 24/7 answers to visitor questions, guide potential clients, and qualify inbound leads effortlessly.',
    icon: 'MessageSquareCode',
    features: [
      '24/7 Instant Visitor Assistance',
      'Knowledge Base Grounding',
      'Lead Capture & Qualification',
      'Seamless Human Handover'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Practical security solutions designed to protect business systems and digital assets.',
    fullDescription: 'Safeguard your digital operations against modern threats. We implement robust security hardening, vulnerability assessments, secure authentication, and compliance-ready infrastructure safeguards.',
    icon: 'ShieldCheck',
    features: [
      'Infrastructure Security Hardening',
      'Vulnerability Assessments',
      'Secure Access Control',
      'Data Protection & Encryption'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'Reliable and scalable cloud infrastructure for modern businesses.',
    fullDescription: 'Migrate and scale with confidence. We design, deploy, and manage secure cloud environments (AWS, GCP, Cloud Run) optimized for uptime, performance, and cost-efficiency.',
    icon: 'Cloud',
    features: [
      'Cloud Architecture & Migration',
      'Serverless & Containerized Deployments',
      'High Availability & Uptime',
      'Cost-Optimized Scaling'
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    shortDescription: 'Deployment, automation and infrastructure solutions for reliable software delivery.',
    fullDescription: 'Streamline your software development lifecycle with automated CI/CD pipelines, container orchestration, infrastructure as code, and continuous monitoring.',
    icon: 'Terminal',
    features: [
      'Automated CI/CD Pipelines',
      'Infrastructure as Code (IaC)',
      'Container Orchestration (Docker/Kubernetes)',
      'Reliability & Performance Monitoring'
    ]
  },
  {
    id: 'it-support',
    title: 'IT Support & Maintenance',
    shortDescription: 'Technology support and maintenance for businesses that need dependable IT.',
    fullDescription: 'Your reliable technology partner. We provide ongoing IT maintenance, system monitoring, troubleshooting, and proactive updates so you can focus entirely on running your business.',
    icon: 'Wrench',
    features: [
      'Proactive System Monitoring',
      'Rapid Technical Troubleshooting',
      'Routine Updates & Maintenance',
      'Dedicated Technical Guidance'
    ]
  }
];

export const UNDERAI_SOLUTIONS: SolutionItem[] = [
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    description: 'Technology solutions without needing a large internal IT team.',
    targetAudience: 'Local enterprises and boutique businesses',
    keyBenefits: [
      'Professional web presence',
      'Automated client inquiries',
      'Dependable tech support without overhead',
      'Secure digital operations'
    ]
  },
  {
    id: 'retail',
    title: 'Retail & Shops',
    description: 'Websites, digital tools, AI support and technology solutions for retail businesses.',
    targetAudience: 'Store owners, ecommerce merchants, and local retail stores',
    keyBenefits: [
      'Modern online storefronts',
      'Automated customer support chat',
      'Inventory & order workflow automation',
      'Secure payment & cloud setups'
    ]
  },
  {
    id: 'startups',
    title: 'Startups',
    description: 'Build and launch technology products with a scalable technical foundation.',
    targetAudience: 'Early-stage founders and product creators',
    keyBenefits: [
      'Rapid MVP development',
      'AI model integration from day one',
      'Scalable cloud & DevOps infrastructure',
      'Security-conscious architecture'
    ]
  },
  {
    id: 'growing-businesses',
    title: 'Growing Businesses',
    description: 'Upgrade websites, automate processes, strengthen security and scale infrastructure.',
    targetAudience: 'Established companies scaling their operations',
    keyBenefits: [
      'Legacy system modernization',
      'Advanced workflow automation',
      'Robust cybersecurity audits',
      'Enterprise-grade cloud reliability'
    ]
  }
];

export const WHY_UNDERAI_FEATURES = [
  {
    number: '01',
    title: 'One Technology Partner',
    description: 'Bring websites, AI, cloud, security and IT support together under one roof.'
  },
  {
    number: '02',
    title: 'Practical Solutions',
    description: 'Technology explained simply and designed around real business needs.'
  },
  {
    number: '03',
    title: 'AI-Ready Technology',
    description: 'Integrate AI into existing business workflows and digital experiences.'
  },
  {
    number: '04',
    title: 'Security-Conscious Development',
    description: 'Build technology with cybersecurity and data protection in mind.'
  },
  {
    number: '05',
    title: 'Scalable Infrastructure',
    description: 'Create technology foundations that can grow seamlessly with your business.'
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description: 'Keep business technology running with dependable support and maintenance.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand your business, goals, and specific technology requirements.'
  },
  {
    number: '02',
    title: 'Build',
    description: 'Create the right digital solution with modern architecture and clean design.'
  },
  {
    number: '03',
    title: 'Integrate',
    description: 'Connect AI, automation, cloud infrastructure, or security safeguards as needed.'
  },
  {
    number: '04',
    title: 'Support',
    description: 'Continue improving, monitoring, and maintaining your technology for long-term success.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What types of businesses does UnderTheAI work with?',
    answer: 'UnderTheAI works with small businesses, local shop owners, retail businesses, startups, and growing companies that do not have an internal IT team or want a reliable technology partner.'
  },
  {
    question: 'Can UnderTheAI build a website from scratch?',
    answer: 'Yes. We design and build modern, fast, responsive websites tailored to help your business grow and establish a strong professional presence.'
  },
  {
    question: 'Can you integrate AI into an existing business?',
    answer: 'Yes. We help businesses adopt AI in practical ways—from AI model integration and intelligent workflows to AI-powered customer support chat.'
  },
  {
    question: 'Do you provide ongoing IT support?',
    answer: 'Yes. We offer technology support and maintenance for businesses that need dependable IT operations, troubleshooting, and system monitoring.'
  },
  {
    question: 'Can you help with cybersecurity?',
    answer: 'Yes. We provide practical security solutions designed to protect your business systems, digital assets, and customer data against modern threats.'
  },
  {
    question: 'Can you manage cloud infrastructure?',
    answer: 'Yes. We deploy reliable and scalable cloud infrastructure and DevOps pipelines optimized for uptime and performance.'
  },
  {
    question: 'Can I start with just a website and add other services later?',
    answer: 'Yes. Our modular service model allows you to start with a website or specific IT need and integrate AI, automation, cloud, or security as your business grows.'
  }
];

export const AI_CAPABILITIES = [
  {
    title: 'AI Model Integration',
    desc: 'Connect advanced LLMs to your data and applications securely.'
  },
  {
    title: 'Business Automation',
    desc: 'Streamline repetitive operational tasks with smart logic.'
  },
  {
    title: 'AI Chat Support',
    desc: 'Deploy intelligent 24/7 virtual assistants for customer inquiries.'
  },
  {
    title: 'Intelligent Workflows',
    desc: 'Connect databases, CRM, and APIs into cohesive automated systems.'
  },
  {
    title: 'Customer Support Automation',
    desc: 'Qualify leads and answer customer questions instantly.'
  }
];
