import React, { useState } from 'react';
import { X, Star, Check, ShoppingBag, ShieldCheck, Truck, RotateCcw, ThumbsUp } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'features' | 'howTo' | 'specs' | 'reviews'>('features');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-[#FAF9F6] max-w-3xl w-full shadow-2xl border border-[#1A1A1A]/15 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#EFEBE3] hover:bg-[#E5E1D8] text-[#1A1A1A] flex items-center justify-center transition-colors"
          aria-label="Close product details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Product Left Image Area */}
          <div className="md:col-span-5 bg-[#F9F7F2] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1A1A1A]/10">
            <div className="aspect-square bg-white border border-[#1A1A1A]/10 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Guarantees Under Image */}
            <div className="mt-6 space-y-2.5 text-xs text-[#1A1A1A]/70 bg-[#EFEBE3] p-4 border border-[#1A1A1A]/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                <span>60-Day Surface Restoration Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                <span>Complimentary Delivery over $35</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                <span>100% Reusable, Zero Disposable Tape</span>
              </div>
            </div>
          </div>

          {/* Product Right Details Area */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Badges and Category */}
              <div className="flex items-center gap-2 mb-2">
                {product.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-[#E5E1D8] text-[#1A1A1A]">
                    {product.badge}
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/50">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-tight">
                {product.name}
              </h2>

              {/* Ratings */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-current'
                          : 'text-[#1A1A1A]/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#1A1A1A]">{product.rating}</span>
                <span className="text-xs text-[#1A1A1A]/50">
                  ({product.reviewCount.toLocaleString()} verified appraisals)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4 pb-4 border-b border-[#1A1A1A]/10">
                <span className="font-serif text-3xl font-normal text-[#1A1A1A]">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-[#1A1A1A]/40 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#E5E1D8] px-2 py-0.5 border border-[#1A1A1A]/10">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>

              {/* Tabs Navigation */}
              <div className="flex border-b border-[#1A1A1A]/15 mt-5">
                {[
                  { id: 'features', label: 'Features' },
                  { id: 'howTo', label: 'Protocol' },
                  { id: 'specs', label: 'Specifications' },
                  { id: 'reviews', label: `Reviews (${product.reviews.length})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`text-xs uppercase tracking-wider font-semibold py-2.5 px-3 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#1A1A1A] text-[#1A1A1A]'
                        : 'border-transparent text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="py-4 text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed min-h-[140px]">
                {activeTab === 'features' && (
                  <div className="space-y-3">
                    <p className="text-[#1A1A1A]/80 text-xs mb-3">{product.description}</p>
                    <ul className="space-y-2">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#1A1A1A]/80">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'howTo' && (
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                      Professional Restoration Sequence:
                    </div>
                    {product.howToUse.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 bg-[#E5E1D8] text-[#1A1A1A] font-bold text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-[#1A1A1A]/80">{step}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="divide-y divide-[#1A1A1A]/10 text-xs">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="py-2 flex justify-between gap-4">
                        <span className="font-semibold text-[#1A1A1A]/60">{k}</span>
                        <span className="text-[#1A1A1A] text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                    {product.reviews.map((rev) => (
                      <div key={rev.id} className="bg-[#F9F7F2] p-3 border border-[#1A1A1A]/10">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-[#1A1A1A]">{rev.author}</span>
                          <span className="text-[#1A1A1A]/40">{rev.date}</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-0.5">
                          Pet: {rev.petType}
                        </div>
                        <div className="font-serif text-xs font-semibold text-[#1A1A1A] mt-1">
                          "{rev.title}"
                        </div>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Add to Cart Row */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-[#1A1A1A]/20 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 text-[#1A1A1A] hover:bg-[#E5E1D8] font-bold flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-[#1A1A1A]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 text-[#1A1A1A] hover:bg-[#E5E1D8] font-bold flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add {quantity} to Bag • ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
