import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, Sparkles, Heart, CheckCircle2, AlertCircle, Scale, ArrowRight } from 'lucide-react';

export type InfoModalTab = 'about' | 'privacy' | 'terms';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: InfoModalTab;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'about',
}) => {
  const [activeTab, setActiveTab] = React.useState<InfoModalTab>(initialTab);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs p-4 sm:p-6 flex items-center justify-center animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div className="relative bg-[#FAF9F6] max-w-3xl w-full shadow-2xl border border-[#1A1A1A]/15 overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#EFEBE3] hover:bg-[#E5E1D8] text-[#1A1A1A] flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#141414] text-[#FAF9F6] p-6 sm:p-8 border-b border-[#FAF9F6]/10 shrink-0">
          <div className="flex items-center gap-2 text-[#FAF9F6]/70 text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FAF9F6]" />
            <span>Épuration Atelier Archive</span>
          </div>
          <h2 id="info-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-white">
            {activeTab === 'about' && 'The Atelier Philosophy & Heritage'}
            {activeTab === 'privacy' && 'Customer Privacy & Data Protection'}
            {activeTab === 'terms' && 'Terms of Service & Care Guarantee'}
          </h2>
          <p className="text-[#FAF9F6]/70 text-xs mt-1 leading-relaxed">
            {activeTab === 'about' && 'Engineered mechanical fabric preservation for architectural living spaces.'}
            {activeTab === 'privacy' && 'Transparency regarding your personal information, security, and digital rights.'}
            {activeTab === 'terms' && 'Commercial commitments, 60-day satisfaction trial, and safe usage guidelines.'}
          </p>

          {/* Navigation Tab Bar */}
          <div className="flex gap-2 sm:gap-3 mt-6 border-b border-[#FAF9F6]/15 pb-0">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-2.5 px-3 text-xs uppercase tracking-widest font-semibold transition-all border-b-2 ${
                activeTab === 'about'
                  ? 'border-white text-white'
                  : 'border-transparent text-[#FAF9F6]/60 hover:text-white'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`pb-2.5 px-3 text-xs uppercase tracking-widest font-semibold transition-all border-b-2 ${
                activeTab === 'privacy'
                  ? 'border-white text-white'
                  : 'border-transparent text-[#FAF9F6]/60 hover:text-white'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-2.5 px-3 text-xs uppercase tracking-widest font-semibold transition-all border-b-2 ${
                activeTab === 'terms'
                  ? 'border-white text-white'
                  : 'border-transparent text-[#FAF9F6]/60 hover:text-white'
              }`}
            >
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#1A1A1A] leading-relaxed text-xs sm:text-sm">
          {/* TAB 1: ABOUT US */}
          {activeTab === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <section className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/50">
                  Our Genesis
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">
                  Refusing to Sacrifice Interior Elegance for Pet Companionship
                </h3>
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  Founded in 2021 by industrial designers and lifelong pet guardians, Épuration Atelier (operating as FurSweep PRO) was conceived out of sheer frustration. For decades, pet owners were trapped in a wasteful, inefficient loop: flimsy rolls of adhesive tape that run out in seconds, deafening vacuum cleaners that terrify animals, and synthetic upholstery ruined by abrasive brushes.
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  We asked a simple question: <em className="font-serif italic font-normal text-base">What if pet hair removal was approached with the precision of watchmaking and the textile respect of haute couture?</em>
                </p>
              </section>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#F9F7F2] p-5 border border-[#1A1A1A]/10 space-y-2">
                  <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-mono text-xs font-bold">
                    01
                  </div>
                  <h4 className="font-serif text-base font-normal text-[#1A1A1A]">Zero-Waste Physics</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    By harnessing electrostatic micro-charge and tactile shear angles, our tools operate infinitely without disposable adhesive tape refills.
                  </p>
                </div>

                <div className="bg-[#F9F7F2] p-5 border border-[#1A1A1A]/10 space-y-2">
                  <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-mono text-xs font-bold">
                    02
                  </div>
                  <h4 className="font-serif text-base font-normal text-[#1A1A1A]">Fiber Integrity</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    Every bevel is calibrated to release embedded undercoat from fabric loops without snagging delicate weaves, Bouclé, or wool strands.
                  </p>
                </div>

                <div className="bg-[#F9F7F2] p-5 border border-[#1A1A1A]/10 space-y-2">
                  <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-mono text-xs font-bold">
                    03
                  </div>
                  <h4 className="font-serif text-base font-normal text-[#1A1A1A]">Architectural Form</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    Finished in warm matte neutrals, polished beechwood, and cast alloys, our instruments rest harmoniously in modern living spaces.
                  </p>
                </div>
              </div>

              {/* Verified Environmental & Quality Impact */}
              <section className="bg-[#EFEBE3] p-6 border border-[#1A1A1A]/10 space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">
                  Collective Atelier Impact
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">4.2M+</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Sticky Sheets Saved</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">180K+</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Sofas & Rugs Rescued</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">99.4%</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Acclaim Rating</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">60 Days</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 mt-1">Trial Guarantee</div>
                  </div>
                </div>
              </section>

              {/* Workshop Commitment */}
              <div className="border-t border-[#1A1A1A]/10 pt-4 flex items-center justify-between">
                <div className="text-xs text-[#1A1A1A]/60">
                  Épuration Atelier Studio &bull; Crafting sustainable textile instruments
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A]">
                  <Heart className="w-3.5 h-3.5 fill-current text-[#1A1A1A]/60" />
                  <span>Pet-Centric Design</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-[#F9F7F2] p-4 border border-[#1A1A1A]/10 flex items-start gap-3">
                <Lock className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-[#1A1A1A] font-semibold uppercase tracking-wider text-[10px]">
                    Effective Date: September 2026
                  </strong>
                  <p className="text-[#1A1A1A]/70 mt-0.5">
                    We treat your privacy with the same meticulous care we give your home fabrics. We never monetize or trade your personal information.
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">1. Information We Collect</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  When you interact with our website or place an order, we may collect:
                </p>
                <ul className="list-disc pl-5 text-xs text-[#1A1A1A]/80 space-y-1">
                  <li><strong>Contact & Logistics Data:</strong> Your name, shipping address, email address, and phone number for parcel tracking and delivery notifications.</li>
                  <li><strong>Diagnostic Quiz Responses:</strong> Surface preferences and pet coat profiles submitted during the Hair Match Quiz, used strictly in real-time to curate tailored tool recommendations.</li>
                  <li><strong>Transactional Metadata:</strong> Order timestamps, items selected, and redemption codes (e.g. CLEANFUR20). We never store raw credit card numbers.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">2. Payment Processing & Security</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  All monetary transactions are processed through tier-1 PCI-DSS compliant gateways protected by 256-bit SSL encryption. Payment credentials are tokenized directly by our secure merchant processor; our internal servers never receive or store your CVV or complete payment card numbers.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">3. Browser Storage & Cookies</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  Our application uses browser <code className="bg-[#EFEBE3] px-1 py-0.5 text-[11px] font-mono">localStorage</code> solely to preserve your curated bag items and quiz preferences across page reloads. We do not deploy invasive third-party tracking pixels or behavioral ad cookies across the web.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">4. Zero Sale of Personal Data</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  We explicitly state: <strong>We do not sell, rent, lease, or barter your personal identity or browsing records to third-party brokers, marketers, or data syndicates under any circumstances.</strong>
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">5. Your Rights (GDPR & CCPA Compliant)</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  Regardless of geography, every customer holds the right to request access to their stored contact records, request complete deletion ("Right to be Forgotten"), or opt out of our email publications with a single click. For inquiries, email our privacy steward at <span className="font-mono text-[11px] text-[#1A1A1A] underline">privacy@epuration-atelier.com</span>.
                </p>
              </section>
            </div>
          )}

          {/* TAB 3: TERMS AND CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-[#F9F7F2] p-4 border border-[#1A1A1A]/10 flex items-start gap-3">
                <Scale className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-[#1A1A1A] font-semibold uppercase tracking-wider text-[10px]">
                    Terms of Service & Usage Protocols (2026 Edition)
                  </strong>
                  <p className="text-[#1A1A1A]/70 mt-0.5">
                    Please review these terms governing your purchase, our 60-day satisfaction trial, and textile compatibility guidelines.
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">1. Agreement to Terms</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  By accessing Épuration Atelier / FurSweep PRO, exploring our guides, or purchasing our physical extraction tools, you agree to comply with and be bound by these Terms and Conditions.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">2. 60-Day "Hair-Free Furniture" Satisfaction Trial</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  We stand behind our mechanical extraction geometry. If any tool fails to liberate your fabrics from trapped dog or cat fur to your complete satisfaction, you may initiate a return within <strong>60 calendar days</strong> of receiving your shipment for a full refund of the product purchase price.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">3. Textile Safety & Appropriate Tool Usage</h4>
                <div className="bg-[#FAF9F6] border border-[#1A1A1A]/20 p-3.5 space-y-1.5 text-xs text-[#1A1A1A]/80">
                  <div className="flex items-center gap-1.5 font-semibold text-[#1A1A1A] text-[11px] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                    <span>Essential Fabric Compatibility Notice</span>
                  </div>
                  <p>
                    • <strong>Pure Copper Rakes:</strong> Engineered strictly for dense pile carpets, heavy rugs, non-loop couch fabrics, and auto carpeting. Never use pure copper blades on loose knit sweaters, pure silk, cashmere, or Bouclé loops.
                  </p>
                  <p>
                    • <strong>Electrostatic Rollers & Silicone Sweeps:</strong> Safe for all delicate upholstered furniture, microfiber, velvet, bedspreads, and everyday clothing.
                  </p>
                  <p>
                    Always test tools on an inconspicuous seam before extensive treatment. Épuration Atelier is not liable for pulls on delicate loose-knit garments resulting from failure to adhere to posted instructions.
                  </p>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">4. Orders, Fulfillment & Free Shipping</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  All prices are quoted in USD. Complimentary express delivery is unlocked automatically on orders totaling $35.00 or greater after applying promotional credits. Most orders dispatch within 24 business hours.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-base font-normal text-[#1A1A1A]">5. Intellectual Property</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  The visual design, brand naming, proprietary textile extraction protocols, and product geometry are the intellectual property of Épuration Atelier / FurSweep PRO. Unauthorized commercial reproduction is prohibited.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Bar */}
        <div className="p-4 sm:p-5 bg-[#F9F7F2] border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-[#1A1A1A]/60 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>Guaranteed by Épuration Atelier &bull; 60-Day Trial</span>
          </div>

          <div className="flex items-center gap-2">
            {activeTab !== 'about' && (
              <button
                onClick={() => setActiveTab('about')}
                className="px-3 py-2 text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline"
              >
                About Us
              </button>
            )}
            {activeTab !== 'privacy' && (
              <button
                onClick={() => setActiveTab('privacy')}
                className="px-3 py-2 text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline"
              >
                Privacy
              </button>
            )}
            {activeTab !== 'terms' && (
              <button
                onClick={() => setActiveTab('terms')}
                className="px-3 py-2 text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline"
              >
                Terms
              </button>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#1A1A1A] hover:bg-[#333] text-white text-[10px] uppercase tracking-widest font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
