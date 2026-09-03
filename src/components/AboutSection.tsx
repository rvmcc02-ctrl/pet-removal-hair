import React from 'react';
import { Sparkles, ShieldCheck, Heart, ArrowRight, BookOpen, Lock, Scale } from 'lucide-react';
import { InfoModalTab } from './InfoModal';

interface AboutSectionProps {
  onOpenInfoModal: (tab: InfoModalTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInfoModal }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F9F7F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Statement & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-[#1A1A1A]/60 mb-2">
                Atelier Heritage & Craft
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] tracking-tight leading-tight">
                The Architecture of <span className="italic font-serif">Pet Living</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
              We founded Épuration Atelier (FurSweep PRO) on a fundamental conviction: sharing life with pets should never require tolerating hair-laden furniture, deafening vacuum noise, or disposable sticky sheets destined for landfills.
            </p>

            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
              Our extraction instruments combine tactile shear physics, electrostatic charge, and precision copper-edge bevels. Every tool is engineered to liberate embedded cat and dog hair from interior textiles with zero recurring waste and complete fiber preservation.
            </p>

            {/* Core Values / Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#1A1A1A]/10">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">4.2M+</div>
                <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Sticky Rolls Saved</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">180K+</div>
                <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Textiles Restored</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">60 Days</div>
                <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Trial Guarantee</div>
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenInfoModal('about')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <span>Read Full Atelier Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenInfoModal('privacy')}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#FAF9F6] border border-[#1A1A1A]/15 text-[#1A1A1A] hover:border-[#1A1A1A] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
                <span>Privacy</span>
              </button>

              <button
                onClick={() => onOpenInfoModal('terms')}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#FAF9F6] border border-[#1A1A1A]/15 text-[#1A1A1A] hover:border-[#1A1A1A] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Scale className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
                <span>Terms</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Highlight Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#FAF9F6] border border-[#1A1A1A]/10 p-6 sm:p-7 space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Recurring Refills</span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">
                Endless Mechanical Lifecycle
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Traditional adhesive rollers require constantly peeling and discarding single-use tape sheets. Our dual-chamber electrostatic rollers and copper-bevel rakes operate indefinitely with zero consumables.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#1A1A1A]/10 p-6 sm:p-7 space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Fabric Longevity</span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">
                Tension-Calibrated Extraction
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Ordinary wire brushes shred surface fibers. Épuration Atelier instruments are tuned for specific fabric densities—from plush velvet sofas to dense automotive loop carpeting—releasing hair while safeguarding delicate thread structures.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#1A1A1A]/10 p-6 sm:p-7 space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">
                <Heart className="w-3.5 h-3.5" />
                <span>Our 60-Day Commitment</span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">
                The "Hair-Free Furniture" Guarantee
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Test any instrument across your own furniture and pet coat textures for 60 calendar days. If your living surfaces are not noticeably restored, return your tool for an immediate, hassle-free refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
