import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, Mail, Check, Lock, Scale, Info } from 'lucide-react';

interface FooterProps {
  onSelectSurface: (surface: string) => void;
  onOpenInfoModal: (tab: 'about' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSurface,
  onOpenInfoModal,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#141414] text-[#FAF9F6] pt-16 pb-12 border-t border-[#FAF9F6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FAF9F6]/10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#FAF9F6] text-[#1A1A1A] flex items-center justify-center font-serif text-lg font-bold">
                E
              </div>
              <span className="font-serif text-2xl tracking-tight text-white">
                Épuration <span className="italic font-serif text-sm opacity-70">Atelier</span>
              </span>
            </div>

            <p className="text-xs text-[#FAF9F6]/60 leading-relaxed max-w-sm">
              Precision mechanical fabric preservation for architectural living spaces. Releasing trapped undercoat and deep pet fibers with zero tape waste and zero fabric compromise.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#FAF9F6]/50">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FAF9F6]/80" />
              <span>Backed by 60-Day Surface Restoration Trial</span>
            </div>
          </div>

          {/* Col 3: Surface Categories */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#FAF9F6]/50 mb-4">
              Surface Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Couch & Linen Velvet', value: 'furniture' },
                { label: 'Wool Rugs & Carpeting', value: 'carpet' },
                { label: 'Automotive Detail Liners', value: 'car' },
                { label: 'Laundry & Bedding', value: 'laundry' },
                { label: 'Direct Coat Grooming', value: 'pets' },
              ].map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => {
                      onSelectSurface(item.value);
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-[#FAF9F6]/70 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Cleaning Guides & Atelier Legal/About */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#FAF9F6]/50 mb-4">
              Atelier & Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F6]/70">
              <li>
                <button
                  onClick={() => onOpenInfoModal('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Our Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy & Data Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a href="#cleaning-hacks" className="hover:text-white transition-colors">
                  Restoration Protocols
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  Comparative Proof Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#FAF9F6]/50 mb-4">
              The Fabric Chronicle
            </h4>
            <p className="text-xs text-[#FAF9F6]/60 mb-3 leading-relaxed">
              Quarterly shedding forecasts and professional fabric preservation studies.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-[#FAF9F6]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#1E1E1E] border border-[#FAF9F6]/20 pl-8 pr-3 py-2.5 text-xs text-white placeholder-[#FAF9F6]/40 outline-none focus:border-[#FAF9F6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-3 bg-[#FAF9F6] hover:bg-white text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Join The Chronicle</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAF9F6]/60 gap-4 border-t border-[#FAF9F6]/5">
          <p>© 2026 Épuration Atelier. All rights reserved. Zero-waste pet hair removal instruments.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px]">
            <button
              onClick={() => onOpenInfoModal('about')}
              className="text-[#FAF9F6]/70 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              About Us
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenInfoModal('privacy')}
              className="text-[#FAF9F6]/70 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenInfoModal('terms')}
              className="text-[#FAF9F6]/70 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
