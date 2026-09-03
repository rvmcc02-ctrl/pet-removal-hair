import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, ThumbsUp, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ToolFinderQuizProps {
  isOpen?: boolean;
  onClose?: () => void;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export const ToolFinderQuiz: React.FC<ToolFinderQuizProps> = ({
  isOpen = true,
  onClose,
  onAddToCart,
  onViewProduct,
}) => {
  const [surface, setSurface] = useState<string>('');
  const [petType, setPetType] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [result, setResult] = useState<{
    product: Product;
    matchScore: number;
    proTip: string;
  } | null>(null);

  const handleCalculate = () => {
    // Recommendation logic
    let targetProductId = 'fursweep-roller-pro';
    let proTip = 'Use quick, alternating back-and-forth strokes to charge the electrostatic velvet pads.';

    if (surface === 'carpet') {
      targetProductId = 'carpet-rake-max';
      proTip = 'Hold the copper edge at 45 degrees and use short pulls toward yourself to unlock deep carpet roots.';
    } else if (surface === 'car') {
      targetProductId = 'auto-detailer-blade';
      proTip = 'Use the coarse triangular edge first, then switch to the pointed corner for seat crevices.';
    } else if (surface === 'laundry') {
      targetProductId = 'laundry-fur-catchers';
      proTip = 'Toss dry blankets into the dryer for 10 minutes with the discs BEFORE washing to capture 80% dry fur.';
    } else if (surface === 'pets') {
      targetProductId = 'gentle-deshedding-glove';
      proTip = 'Gently stroke along the natural grain of their coat; peels off in one giant satisfying fur sheet.';
    } else if (frequency === 'deep' && surface === 'furniture') {
      targetProductId = 'cyclone-mini-vac';
      proTip = 'The motorized beater head dislodges hairs that have been ground into cushions for months.';
    }

    const matchedProduct = PRODUCTS.find((p) => p.id === targetProductId) || PRODUCTS[0];
    setResult({
      product: matchedProduct,
      matchScore: 99,
      proTip,
    });
  };

  const handleReset = () => {
    setSurface('');
    setPetType('');
    setFrequency('');
    setResult(null);
  };

  const content = (
    <div className="bg-[#FAF9F6] border border-[#1A1A1A]/10 shadow-sm overflow-hidden">
      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 relative">
        <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FAF9F6]/60 mb-2">
          Diagnostic Consultation
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white">
          Discover Your <span className="italic font-serif">Tailored</span> Fabric Tool
        </h3>
        <p className="text-[#FAF9F6]/70 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
          Different weaves and fur types require calibrated physical extraction mechanics. Complete this 3-point diagnostic for precision tool matching.
        </p>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {!result ? (
          <>
            {/* Step 1: Surface */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-3">
                1. Target Problem Surface
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'furniture', label: 'Couch & Velvet', icon: '🛋️' },
                  { id: 'carpet', label: 'Carpets & Wool Rugs', icon: '🧶' },
                  { id: 'car', label: 'Automotive Liners', icon: '🚗' },
                  { id: 'laundry', label: 'Laundry & Bedding', icon: '🧺' },
                  { id: 'pets', label: 'Direct Pet Coat', icon: '🐕' },
                  { id: 'all', label: 'Multi-Surface Home', icon: '✨' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSurface(item.id)}
                    className={`p-3.5 border text-left flex items-center gap-3 transition-all text-xs uppercase tracking-wider font-semibold ${
                      surface === item.id
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-sm'
                        : 'bg-[#F9F7F2] border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#EFEBE3]'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fur Type */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-3">
                2. Shedding Fiber Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'double', title: 'Dense Undercoat (Heavy)', desc: 'Golden Retriever, Husky, Shepherd' },
                  { id: 'fine', title: 'Fine Electrostatic Cat Hair', desc: 'Persian, Ragdoll, Domestic Longhair' },
                  { id: 'short', title: 'Short Prickly Fibers', desc: 'Bulldog, Pug, Boxer, Labrador' },
                  { id: 'multi', title: 'Multi-Pet Habitat', desc: 'Dogs + Cats + Small Animals' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPetType(item.id)}
                    className={`p-4 border text-left transition-all ${
                      petType === item.id
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-sm'
                        : 'bg-[#F9F7F2] border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#EFEBE3]'
                    }`}
                  >
                    <div className={`text-xs uppercase tracking-widest font-bold ${petType === item.id ? 'text-white' : 'text-[#1A1A1A]'}`}>{item.title}</div>
                    <div className={`text-xs mt-1 ${petType === item.id ? 'text-[#FAF9F6]/80' : 'text-[#1A1A1A]/60'}`}>{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Cleaning Priority */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]/70 mb-3">
                3. Primary Maintenance Requirement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'quick', title: 'Daily Preservation', desc: 'Quick zero-waste maintenance sweep' },
                  { id: 'deep', title: 'Deep Fiber Extraction', desc: 'Dredge compacted underlayers' },
                  { id: 'prevent', title: 'Preventative Coat Care', desc: 'Catch loose roots directly at coat' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrequency(item.id)}
                    className={`p-4 border text-left transition-all ${
                      frequency === item.id
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-sm'
                        : 'bg-[#F9F7F2] border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#EFEBE3]'
                    }`}
                  >
                    <div className={`text-xs uppercase tracking-widest font-bold ${frequency === item.id ? 'text-white' : 'text-[#1A1A1A]'}`}>{item.title}</div>
                    <div className={`text-xs mt-1 ${frequency === item.id ? 'text-[#FAF9F6]/80' : 'text-[#1A1A1A]/60'}`}>{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                disabled={!surface || !petType || !frequency}
                onClick={handleCalculate}
                className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] hover:bg-[#333] disabled:bg-[#E5E1D8] disabled:text-[#1A1A1A]/40 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2.5 transition-colors"
              >
                <span>Calculate Precision Match</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        ) : (
          /* Result Card */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] bg-[#EFEBE3] border border-[#1A1A1A]/10 px-3 py-1">
                  {result.matchScore}% Match Index
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] mt-2">
                  Your Recommended <span className="italic font-serif">Preservation</span> Tool
                </h4>
              </div>
              <button
                onClick={handleReset}
                className="text-[11px] uppercase tracking-wider font-semibold text-[#1A1A1A]/70 hover:text-[#1A1A1A] flex items-center gap-1.5 px-3 py-1.5 border border-[#1A1A1A]/15 bg-white"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Matched Product Banner */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#F9F7F2] p-6 border border-[#1A1A1A]/10">
              <img
                src={result.product.image}
                alt={result.product.name}
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover border border-[#1A1A1A]/10 shrink-0"
              />
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/60">
                  Primary Recommendation
                </div>
                <h5 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A]">
                  {result.product.name}
                </h5>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 line-clamp-2 leading-relaxed">
                  {result.product.tagline}
                </p>
                <div className="flex items-baseline justify-center sm:justify-start gap-3 pt-2">
                  <span className="text-2xl font-serif font-bold text-[#1A1A1A]">
                    ${result.product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-[#1A1A1A]/40 line-through">
                    ${result.product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] bg-[#E5E1D8] px-2 py-0.5">
                    Save ${(result.product.originalPrice - result.product.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Pro Tip Box */}
            <div className="bg-[#EFEBE3] border border-[#1A1A1A]/10 p-4 flex items-start gap-3">
              <ThumbsUp className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                  Curator Protocol Note:
                </span>
                <p className="text-xs text-[#1A1A1A]/80 mt-0.5 leading-relaxed">
                  {result.proTip}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onAddToCart(result.product);
                  if (onClose) onClose();
                }}
                className="flex-1 py-4 px-6 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add Recommended Tool to Bag</span>
              </button>

              <button
                onClick={() => {
                  onViewProduct(result.product);
                  if (onClose) onClose();
                }}
                className="py-4 px-6 border border-[#1A1A1A] bg-transparent hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                View Specifications
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (!onClose) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
        >
          ✕
        </button>
        {content}
      </div>
    </div>
  );
};
