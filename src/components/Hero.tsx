import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, RefreshCw, Zap, Shield, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onSelectSurface: (surface: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onSelectSurface }) => {
  return (
    <section className="relative overflow-hidden bg-[#F9F7F2] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:pr-8">
            <span className="inline-block text-[10px] uppercase tracking-[0.4em] font-semibold text-[#1A1A1A]/60">
              Fabric Restoration Edition
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-[0.98] tracking-tight">
              Pure Space. <br />
              <span className="italic font-serif">Pet-Free</span> Surfaces.
            </h1>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed max-w-xl">
              Experience the gold standard in fabric restoration. Our zero-refill electrostatic technology, 
              copper carpet bevels, and automotive rubber detailers lift even the most stubborn buried fibers 
              from velvet, linen, and wool without fabric compromise.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Diagnostic Quiz</span>
              </button>
            </div>

            {/* Social Proof Avatars */}
            <div className="flex items-center pt-1">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#E5E1D8] border border-white flex items-center justify-center text-[9px] font-bold text-[#1A1A1A]">F</div>
                <div className="w-7 h-7 rounded-full bg-[#D4CEC2] border border-white flex items-center justify-center text-[9px] font-bold text-[#1A1A1A]">S</div>
                <div className="w-7 h-7 rounded-full bg-[#C2BBAF] border border-white flex items-center justify-center text-[9px] font-bold text-[#1A1A1A]">P</div>
              </div>
              <span className="pl-3.5 text-[10px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold">
                +120,000 Restored Living Spaces
              </span>
            </div>

            {/* Surface quick pills */}
            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 font-semibold mb-2.5">
                Direct Surface Solutions:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Couches & Velvet', value: 'furniture' },
                  { label: 'Rugs & Carpeting', value: 'carpet' },
                  { label: 'Automotive Interiors', value: 'car' },
                  { label: 'Laundry & Bedding', value: 'laundry' },
                  { label: 'Direct Pet Coat', value: 'pets' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onSelectSurface(item.value);
                      const el = document.getElementById('products');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[10px] uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Value Guarantees / 3-Column Editorial Grid */}
            <div className="pt-6 border-t border-[#1A1A1A]/10 grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">Sustainability</span>
                <span className="text-xs font-semibold text-[#1A1A1A]">100% Reusable Zero Refills</span>
              </div>

              <div className="flex flex-col space-y-1 border-x border-[#1A1A1A]/10 px-4">
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">Performance</span>
                <span className="text-xs font-semibold text-[#1A1A1A]">99.4% Fiber Extraction</span>
              </div>

              <div className="flex flex-col space-y-1 pl-2">
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">Guarantee</span>
                <span className="text-xs font-semibold text-[#1A1A1A]">60-Day Trial Window</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card Showcase with Editorial Arch & Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#EFEBE3] p-4 sm:p-6 border border-[#1A1A1A]/10">
              {/* Arched Architectural Container */}
              <div className="w-full border border-[#1A1A1A]/10 rounded-t-full bg-[#FAF9F6] overflow-hidden pt-8 pb-4 px-4 flex flex-col items-center">
                <div className="w-full aspect-[4/5] rounded-t-full overflow-hidden mb-5 border border-[#1A1A1A]/5 relative">
                  <img
                    src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
                    alt="Restored interior couch and content pet"
                    className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/5" />
                </div>

                <h3 className="font-serif italic text-2xl text-[#1A1A1A]">The Signature Arsenal</h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mt-1">Engineered Fabric Preservation</span>
              </div>

              {/* Floating Editorial Quote Card */}
              <div className="sm:absolute -top-4 -left-6 bg-white p-5 shadow-xl max-w-[240px] border border-[#1A1A1A]/10 mt-4 sm:mt-0">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 mb-1.5">Featured In</p>
                <p className="font-serif text-base italic text-[#1A1A1A] leading-snug">
                  "The ultimate fabric restoration standard for modern interior spaces."
                </p>
                <p className="text-[9px] uppercase tracking-widest mt-2 text-[#1A1A1A]/50 font-semibold">
                  — Architectural Living
                </p>
              </div>

              {/* Floating Extraction Metric */}
              <div className="sm:absolute -bottom-4 -right-4 bg-[#1A1A1A] text-white p-4 shadow-xl max-w-[210px] border border-[#1A1A1A]/20 mt-4 sm:mt-0">
                <span className="text-[9px] uppercase tracking-widest text-[#FAF9F6]/60 block mb-0.5">Lab Verified</span>
                <span className="font-serif text-xl italic block text-[#FAF9F6]">99.8% Extraction</span>
                <span className="text-[9px] text-[#FAF9F6]/80 mt-1 block">Root-deep fiber release</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
