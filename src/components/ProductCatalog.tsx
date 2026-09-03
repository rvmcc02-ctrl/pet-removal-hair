import React, { useState, useMemo } from 'react';
import { Filter, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product, SurfaceType, HairType } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  selectedSurface: string;
  onSelectSurface: (surface: string) => void;
  searchQuery: string;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedSurface,
  onSelectSurface,
  searchQuery,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedHair, setSelectedHair] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'bestseller' | 'rating' | 'price-asc' | 'price-desc'>('bestseller');

  const surfaceTabs = [
    { id: 'all', label: 'All Tools' },
    { id: 'furniture', label: '🛋️ Sofas & Velvet' },
    { id: 'carpet', label: '🧶 Rugs & Carpets' },
    { id: 'car', label: '🚗 Car Interiors' },
    { id: 'laundry', label: '🧺 Laundry & Linens' },
    { id: 'clothing', label: '🧥 Clothes & Suits' },
    { id: 'pets', label: '🐕 Direct Pet Coat' },
  ];

  const hairFilters = [
    { id: 'all', label: 'All Fur Types' },
    { id: 'double-coat', label: 'Dense Double-Coat (Golden/Husky)' },
    { id: 'fine', label: 'Fine Flying Hair (Cat/Rabbit)' },
    { id: 'short', label: 'Short Prickly (Pug/Boxer)' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Surface filter
        if (selectedSurface !== 'all' && !p.surfaces.includes(selectedSurface as SurfaceType)) {
          return false;
        }
        // Hair type filter
        if (selectedHair !== 'all' && !p.bestForHair.includes(selectedHair as HairType)) {
          return false;
        }
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchTagline = p.tagline.toLowerCase().includes(q);
          const matchSurfaces = p.surfaces.some((s) => s.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchTagline && !matchSurfaces) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price-desc') {
          return b.price - a.price;
        }
        // Default bestseller sort
        return b.reviewCount - a.reviewCount;
      });
  }, [products, selectedSurface, selectedHair, searchQuery, sortBy]);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#F9F7F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-[#1A1A1A]/60 mb-2">
              The Curated Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] tracking-tight">
              Precision <span className="italic font-serif">Extraction</span> Arsenal
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
              Every tool is engineered for the unique weave tensile strength and surface shear of interior fabrics.
            </p>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/60 flex items-center gap-1.5">
              <ArrowUpDown className="w-3 h-3" />
              <span>Arrange:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF9F6] border border-[#1A1A1A]/20 px-3 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#1A1A1A] outline-none focus:border-[#1A1A1A]"
            >
              <option value="bestseller">Curator's Choice (Bestseller)</option>
              <option value="rating">Highest Acclaim (Rating)</option>
              <option value="price-asc">Price: Ascending</option>
              <option value="price-desc">Price: Descending</option>
            </select>
          </div>
        </div>

        {/* Surface Filter Tabs Bar */}
        <div className="border-b border-[#1A1A1A]/10 pb-4 mb-5 overflow-x-auto scrollbar-none">
          <div className="flex gap-2.5 min-w-max">
            {surfaceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectSurface(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all border ${
                  selectedSurface === tab.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#FAF9F6] text-[#1A1A1A]/70 hover:text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Hair Type Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/60 mr-1.5 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" />
            <span>Fiber Profile:</span>
          </span>
          {hairFilters.map((hf) => (
            <button
              key={hf.id}
              onClick={() => setSelectedHair(hf.id)}
              className={`text-[10px] uppercase tracking-wider px-3.5 py-1.5 font-semibold transition-all border ${
                selectedHair === hf.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-[#FAF9F6] text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
              }`}
            >
              {hf.label}
            </button>
          ))}

          {(selectedSurface !== 'all' || selectedHair !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                onSelectSurface('all');
                setSelectedHair('all');
              }}
              className="text-[10px] uppercase tracking-widest text-[#1A1A1A] hover:underline font-bold ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FAF9F6] border border-[#1A1A1A]/10 p-8">
            <div className="w-12 h-12 rounded-full bg-[#EFEBE3] flex items-center justify-center mx-auto mb-3 text-[#1A1A1A]/60">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-[#1A1A1A]">No Matching Tools Found</h3>
            <p className="text-xs text-[#1A1A1A]/60 mt-1 max-w-sm mx-auto leading-relaxed">
              No products match your selected fiber criteria. Clear filters to explore the entire catalog.
            </p>
            <button
              onClick={() => {
                onSelectSurface('all');
                setSelectedHair('all');
              }}
              className="mt-5 px-6 py-3 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
