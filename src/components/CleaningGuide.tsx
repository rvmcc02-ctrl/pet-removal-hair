import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { CLEANING_TIPS } from '../data/products';
import { Product } from '../types';

interface CleaningGuideProps {
  onSelectProductById: (productId: string) => void;
}

export const CleaningGuide: React.FC<CleaningGuideProps> = ({ onSelectProductById }) => {
  const [expandedTipId, setExpandedTipId] = useState<string>(CLEANING_TIPS[0].id);

  return (
    <section id="cleaning-hacks" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-[#1A1A1A]/60 mb-2">
            The Restoration Protocols
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Curator <span className="italic font-serif">Fabric Care</span> Techniques
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
            Physics-calibrated routines developed to lift deep undercoat friction, discharge fiber static, and protect delicate vintage weaves.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {CLEANING_TIPS.map((tip) => {
            const isExpanded = expandedTipId === tip.id;
            return (
              <div
                key={tip.id}
                className="border border-[#1A1A1A]/10 overflow-hidden bg-[#FAF9F6] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setExpandedTipId(isExpanded ? '' : tip.id)}
                  className="w-full text-left p-5 sm:p-6 bg-[#F9F7F2] hover:bg-[#EFEBE3] flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 bg-[#E5E1D8] text-[#1A1A1A] shrink-0 mt-0.5">
                      {tip.surface}
                    </span>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-normal text-[#1A1A1A]">
                        {tip.title}
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/60 mt-0.5 line-clamp-1">
                        {tip.summary}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] shrink-0">
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-6 bg-[#FAF9F6] border-t border-[#1A1A1A]/10 space-y-5">
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                      {tip.summary}
                    </p>

                    <div className="bg-[#F9F7F2] p-5 border border-[#1A1A1A]/10 space-y-3">
                      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
                        Standard Protocol Steps:
                      </div>
                      <div className="space-y-2.5">
                        {tip.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-[#1A1A1A]/50">
                        Tailored for optimal results with matched tool hardware.
                      </span>
                      <button
                        onClick={() => onSelectProductById(tip.recommendedToolId)}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline"
                      >
                        <span>View Matched Tool</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
