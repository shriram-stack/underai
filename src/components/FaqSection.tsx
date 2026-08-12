import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/underaiData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader, LeftReveal } from './ScrollAnimations';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header directly on background */}
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with UnderTheAI as your technology partner."
        />

        {/* Accordion List */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <LeftReveal key={index} delay={index * 0.08}>
                <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-xs ${isOpen ? 'bg-white border-[#7C3AED] shadow-xl ring-2 ring-purple-100' : 'bg-white/80 border-slate-200/90 hover:border-[#7C3AED]/40 hover:bg-white backdrop-blur-md'}`}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      {item.question}
                    </span>
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#7C3AED] text-white border-[#7C3AED]' : 'bg-slate-50 border-slate-200 text-[#6D28D9]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base font-normal leading-relaxed border-t border-slate-100 pt-4 bg-white">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </LeftReveal>
            );
          })}
        </div>


      </div>
    </section>
  );
};

