import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Search, HelpCircle, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onOpenInfoModal: (tab: 'about' | 'privacy' | 'terms') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
  onOpenInfoModal,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#1A1A1A]/10">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#1A1A1A] text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] py-2 px-4 border-b border-[#1A1A1A]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FAF9F6] text-[#1A1A1A] px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase">
              Edition
            </span>
            <span className="hidden sm:inline text-[#F9F7F2]/90">
              Complimentary Global Shipping Over $35 &bull; Code <strong className="text-white tracking-widest font-mono underline underline-offset-2">CLEANFUR20</strong> for 20% Off
            </span>
            <span className="sm:hidden text-[#F9F7F2]/90">
              Free Shipping $35+ &bull; Code: <strong className="text-white font-mono">CLEANFUR20</strong>
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[10px] text-[#F9F7F2]/80 uppercase tracking-widest font-mono">
            <span>Guaranteed Zero Waste</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4 text-[#FAF9F6]" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A]">
                FUR<span className="italic font-serif font-normal">SWEEP</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 font-semibold">PRO</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 hidden sm:block">Fabric & Fiber Restoration</p>
          </div>
        </a>

        {/* Center Search Input */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1A1A1A]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search tools by surface or fabric..."
              className="w-full bg-[#FAF9F6] hover:bg-white focus:bg-white text-xs tracking-wide pl-9 pr-8 py-2.5 border border-[#1A1A1A]/15 focus:border-[#1A1A1A] text-[#1A1A1A] placeholder-[#1A1A1A]/40 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Navigation Links and Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]/80">
            <a href="#products" className="hover:text-[#1A1A1A] hover:underline underline-offset-4 transition-all">
              Collection
            </a>
            <button
              onClick={onOpenQuiz}
              className="hover:text-[#1A1A1A] text-[#1A1A1A] flex items-center gap-1.5 border-b border-[#1A1A1A]/40 pb-0.5 hover:border-[#1A1A1A] transition-all"
            >
              <Sparkles className="w-3 h-3" />
              <span>Hair Match Quiz</span>
            </button>
            <a href="#before-after" className="hover:text-[#1A1A1A] hover:underline underline-offset-4 transition-all">
              Proof
            </a>
            <a href="#cleaning-hacks" className="hover:text-[#1A1A1A] hover:underline underline-offset-4 transition-all">
              Techniques
            </a>
            <button
              onClick={() => onOpenInfoModal('about')}
              className="hover:text-[#1A1A1A] hover:underline underline-offset-4 transition-all"
            >
              About
            </button>
          </nav>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            id="header-cart-button"
            className="relative px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#333] text-white transition-colors flex items-center gap-2 group text-xs uppercase tracking-widest font-semibold"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#FAF9F6] text-[#1A1A1A] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ml-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:opacity-60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1A1A1A]/10 bg-[#FAF9F6] px-5 py-5 space-y-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1A1A1A]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search tools..."
              className="w-full bg-white text-xs pl-9 pr-4 py-2.5 border border-[#1A1A1A]/15 outline-none text-[#1A1A1A]"
            />
          </div>

          <div className="flex flex-col space-y-2.5 text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1A1A1A]/5 hover:opacity-60"
            >
              The Collection
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="text-left py-2 border-b border-[#1A1A1A]/5 hover:opacity-60 flex items-center justify-between"
            >
              <span>Hair Match Quiz</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1A1A1A]/5 hover:opacity-60"
            >
              Before & After Proof
            </a>
            <a
              href="#cleaning-hacks"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1A1A1A]/5 hover:opacity-60"
            >
              Master Class Techniques
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfoModal('about');
              }}
              className="text-left py-2 border-b border-[#1A1A1A]/5 hover:opacity-60"
            >
              About Our Atelier
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfoModal('privacy');
              }}
              className="text-left py-2 border-b border-[#1A1A1A]/5 hover:opacity-60"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfoModal('terms');
              }}
              className="text-left py-2 border-b border-[#1A1A1A]/5 hover:opacity-60"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
