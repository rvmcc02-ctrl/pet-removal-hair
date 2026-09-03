import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
  onOpenInfoModal?: (tab: 'about' | 'privacy' | 'terms') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  onOpenInfoModal,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>('CLEANFUR20');
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 35.0;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  let discount = 0;
  if (appliedPromo === 'CLEANFUR20') {
    discount = subtotal * 0.20;
  }

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || appliedPromo === 'FREESHIP';
  const shippingCost = cart.length === 0 ? 0 : isFreeShipping ? 0 : 4.99;
  const total = Math.max(0, subtotal - discount + shippingCost);

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = () => {
    setPromoError(null);
    const code = promoInput.trim().toUpperCase();
    if (code === 'CLEANFUR20' || code === 'FREESHIP') {
      setAppliedPromo(code);
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon code. Try CLEANFUR20 for 20% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F6] shadow-2xl flex flex-col justify-between border-l border-[#1A1A1A]/15">
          {/* Cart Header */}
          <div className="p-5 border-b border-[#1A1A1A]/10 bg-[#F9F7F2] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[#1A1A1A]" />
              <h2 className="font-serif text-xl font-normal text-[#1A1A1A]">Curated Bag</h2>
              <span className="bg-[#E5E1D8] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5">
                {cart.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#E5E1D8] text-[#1A1A1A] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3.5 bg-[#EFEBE3] border-b border-[#1A1A1A]/10 text-xs text-[#1A1A1A]">
            <div className="flex items-center justify-between font-semibold mb-1.5 text-[11px] uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#1A1A1A]" />
                {amountNeededForFreeShipping === 0 ? (
                  <span>Complimentary Shipping Unlocked</span>
                ) : (
                  <span>Add ${amountNeededForFreeShipping.toFixed(2)} more for Complimentary Shipping</span>
                )}
              </span>
              <span className="font-bold">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-[#FAF9F6] h-1.5 overflow-hidden border border-[#1A1A1A]/10">
              <div
                className="bg-[#1A1A1A] h-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#1A1A1A]/10">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-14 h-14 bg-[#EFEBE3] flex items-center justify-center mx-auto text-[#1A1A1A]/60">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">Your bag is empty</h3>
                <p className="text-xs text-[#1A1A1A]/60 max-w-xs mx-auto leading-relaxed">
                  Discover our precision electrostatic rollers and copper carpet bevels to begin fabric restoration.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-6 py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-semibold"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-3.5 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover border border-[#1A1A1A]/10 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-normal text-[#1A1A1A] line-clamp-1">
                      {item.product.name}
                    </h4>
                    <div className="font-serif text-sm font-bold text-[#1A1A1A] mt-0.5">
                      ${item.product.price.toFixed(2)}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#1A1A1A]/20 bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#1A1A1A] hover:bg-[#E5E1D8]"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#1A1A1A] hover:bg-[#E5E1D8]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-serif font-bold text-[#1A1A1A]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#1A1A1A]/10 bg-[#F9F7F2] space-y-3.5">
              {/* Promo Code Input */}
              <div className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo code (e.g. CLEANFUR20)"
                      className="w-full bg-white border border-[#1A1A1A]/20 pl-8 pr-3 py-2 text-xs uppercase font-mono outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#333] text-white text-[10px] uppercase tracking-widest font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {appliedPromo && (
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#1A1A1A] bg-[#E5E1D8] px-2.5 py-1">
                    <span className="flex items-center gap-1 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      Code <code className="font-bold">{appliedPromo}</code> Applied (20% Savings)
                    </span>
                    <button
                      onClick={() => setAppliedPromo(null)}
                      className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] underline"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {promoError && (
                  <p className="text-[11px] text-red-600">{promoError}</p>
                )}
              </div>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-[#1A1A1A]/70 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif font-bold text-[#1A1A1A]">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#1A1A1A] font-semibold">
                    <span>Atelier Privilege (20% Off)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-[#1A1A1A] font-bold">COMPLIMENTARY</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-serif font-bold text-[#1A1A1A] pt-2 border-t border-[#1A1A1A]/10">
                  <span>Estimated Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-4 px-6 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 space-y-1">
                <p>🔒 256-Bit SSL Encrypted &bull; 60-Day Trial Guarantee</p>
                <div className="flex items-center justify-center gap-2 text-[10px] text-[#1A1A1A]/60">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenInfoModal?.('privacy');
                    }}
                    className="hover:underline hover:text-[#1A1A1A]"
                  >
                    Privacy
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenInfoModal?.('terms');
                    }}
                    className="hover:underline hover:text-[#1A1A1A]"
                  >
                    Terms
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenInfoModal?.('about');
                    }}
                    className="hover:underline hover:text-[#1A1A1A]"
                  >
                    Atelier Story
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
