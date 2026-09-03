import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
  onOpenInfoModal?: (tab: 'about' | 'privacy' | 'terms') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onClearCart,
  onOpenInfoModal,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Alex Rivers',
    email: 'alex.petparent@example.com',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zip: '97477',
    cardNumber: '•••• •••• •••• 4242',
    expDate: '12/28',
    cvv: '982',
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discount = subtotal * 0.20; // Default 20% discount
  const finalTotal = Math.max(0, subtotal - discount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    onClearCart();
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-[#FAF9F6] max-w-xl w-full shadow-2xl border border-[#1A1A1A]/15 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#EFEBE3] hover:bg-[#E5E1D8] text-[#1A1A1A] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="bg-[#141414] text-[#FAF9F6] p-7 border-b border-[#FAF9F6]/10">
              <span className="block text-[10px] uppercase tracking-[0.3em] font-semibold text-[#FAF9F6]/60 mb-1">
                Atelier Acquisition Protocol
              </span>
              <h3 className="font-serif text-2xl font-normal text-white">Finalize Order</h3>
              <p className="text-xs text-[#FAF9F6]/70 mt-1">
                Order Value: <span className="font-serif font-bold text-white">${finalTotal.toFixed(2)}</span> (Includes Atelier 20% Privilege & Complimentary Priority Dispatch)
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-5 bg-[#FAF9F6]">
              <div>
                <h4 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.25em] mb-3">
                  1. Delivery Destination
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="col-span-2">
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">Recipient Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#1A1A1A]/20 p-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">Dispatch Notification Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#1A1A1A]/20 p-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#1A1A1A]/20 p-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#1A1A1A]/20 p-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">Postal / Zip</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full bg-white border border-[#1A1A1A]/20 p-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1A1A1A]/10">
                <h4 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.25em] mb-3 flex items-center justify-between">
                  <span>2. Payment Method</span>
                  <span className="text-[10px] text-[#1A1A1A]/60 flex items-center gap-1 font-semibold">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Demo Verification</span>
                  </span>
                </h4>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="col-span-3">
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">Card Identifier</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.cardNumber}
                      className="w-full bg-[#EFEBE3] border border-[#1A1A1A]/15 p-2.5 text-xs text-[#1A1A1A] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">Expiry</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.expDate}
                      className="w-full bg-[#EFEBE3] border border-[#1A1A1A]/15 p-2.5 text-xs text-[#1A1A1A] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#1A1A1A]/70 uppercase tracking-wider mb-1 font-semibold">CVV</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.cvv}
                      className="w-full bg-[#EFEBE3] border border-[#1A1A1A]/15 p-2.5 text-xs text-[#1A1A1A] font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize Order • ${finalTotal.toFixed(2)}</span>
                </button>
                <p className="text-center text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 mt-2.5">
                  Backed by 60-Day Trial &bull; By authorizing, you agree to our{' '}
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal?.('terms')}
                    className="underline text-[#1A1A1A]/70 hover:text-[#1A1A1A] font-semibold"
                  >
                    Terms
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal?.('privacy')}
                    className="underline text-[#1A1A1A]/70 hover:text-[#1A1A1A] font-semibold"
                  >
                    Privacy Policy
                  </button>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-10 text-center space-y-6 bg-[#FAF9F6]">
            <div className="w-16 h-16 bg-[#E5E1D8] text-[#1A1A1A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 mb-2">
                Confirmation #EA-98421
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#1A1A1A]">
                Your Atelier Tools Are En Route
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 mt-2 max-w-sm mx-auto leading-relaxed">
                Dispatch verified. Detailed tracking notifications have been transmitted to <strong className="text-[#1A1A1A]">{formData.email}</strong>.
              </p>
            </div>

            <div className="bg-[#F9F7F2] border border-[#1A1A1A]/10 p-5 text-xs text-left space-y-2.5">
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Destination:</span>
                <span className="font-serif font-bold text-[#1A1A1A]">{formData.name}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Expected Delivery:</span>
                <span className="font-bold text-[#1A1A1A]">2-3 Business Days (Priority Express)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Service Carrier:</span>
                <span className="font-semibold text-[#1A1A1A]">EcoPost Tracked Parcel</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-4 px-6 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
