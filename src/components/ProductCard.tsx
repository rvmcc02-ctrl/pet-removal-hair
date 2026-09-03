import React, { useState } from 'react';
import { Star, Check, ShoppingBag, Eye, Zap } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const getSurfaceLabel = (surface: string) => {
    switch (surface) {
      case 'furniture': return 'Couches';
      case 'carpet': return 'Rugs & Carpet';
      case 'car': return 'Car Detail';
      case 'laundry': return 'Laundry';
      case 'pets': return 'Grooming';
      case 'clothing': return 'Clothes';
      default: return surface;
    }
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group bg-[#FAF9F6] border border-[#1A1A1A]/10 overflow-hidden hover:border-[#1A1A1A]/40 transition-colors duration-200 flex flex-col cursor-pointer"
    >
      {/* Thumbnail with overlay badges */}
      <div className="relative aspect-[4/3] bg-[#EFEBE3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`text-[9px] uppercase tracking-[0.25em] font-bold px-2.5 py-1 border shadow-xs ${
                product.badge === 'Bestseller'
                  ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A]'
                  : product.badge === 'Eco-Friendly'
                  ? 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20'
                  : product.badge === 'Pro Detailer'
                  ? 'bg-[#E5E1D8] text-[#1A1A1A] border-[#1A1A1A]/20'
                  : 'bg-[#1A1A1A] text-white border-black'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-4 py-2 bg-[#FAF9F6] text-[#1A1A1A] border border-[#1A1A1A]/20 text-[10px] uppercase tracking-widest font-semibold shadow-md flex items-center gap-1.5 hover:bg-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>Specifications</span>
          </button>
        </div>

        {/* Reusable Icon Tag */}
        <div className="absolute bottom-3 right-3 bg-[#FAF9F6]/90 backdrop-blur-sm border border-[#1A1A1A]/10 px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-[#1A1A1A]/80 flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#1A1A1A]" />
          <span>Zero Refills</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Surface Tags */}
          <div className="flex flex-wrap gap-1">
            {product.surfaces.slice(0, 3).map((surf) => (
              <span
                key={surf}
                className="text-[9px] uppercase tracking-wider font-semibold bg-[#EFEBE3] text-[#1A1A1A]/70 px-2 py-0.5"
              >
                {getSurfaceLabel(surf)}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-normal text-[#1A1A1A] leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A]/60">
            <div className="flex items-center text-[#1A1A1A]">
              <Star className="w-3 h-3 fill-current" />
              <span className="ml-1 font-bold text-[#1A1A1A]">{product.rating}</span>
            </div>
            <span>•</span>
            <span className="text-[11px] text-[#1A1A1A]/60">({product.reviewCount.toLocaleString()} reviews)</span>
          </div>

          {/* Tagline */}
          <p className="text-xs text-[#1A1A1A]/70 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Price and Cart Button Footer */}
        <div className="pt-4 mt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-serif font-bold text-[#1A1A1A]">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-[#1A1A1A]/40 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/60 font-semibold block mt-0.5">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`p-2.5 sm:px-4 sm:py-2.5 text-xs uppercase tracking-widest font-semibold transition-all flex items-center gap-1.5 ${
              justAdded
                ? 'bg-[#E5E1D8] text-[#1A1A1A] border border-[#1A1A1A]/20'
                : 'bg-[#1A1A1A] hover:bg-[#333] text-white border border-[#1A1A1A]'
            }`}
            aria-label={`Add ${product.name} to bag`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
