import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ToolFinderQuiz } from './components/ToolFinderQuiz';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CleaningGuide } from './components/CleaningGuide';
import { AboutSection } from './components/AboutSection';
import { InfoModal, InfoModalTab } from './components/InfoModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  // Cart State with localStorage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fursweep_cart');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    // Default initial cart item for instant demonstration
    return [
      {
        product: PRODUCTS[0],
        quantity: 1,
      },
    ];
  });

  // UI Modal & Drawer States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoModalTab, setInfoModalTab] = useState<InfoModalTab>('about');
  const [inspectedProduct, setInspectedProduct] = useState<Product | null>(null);

  // Filter and Search States
  const [selectedSurface, setSelectedSurface] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleOpenInfoModal = (tab: InfoModalTab = 'about') => {
    setInfoModalTab(tab);
    setIsInfoModalOpen(true);
  };

  // Save Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('fursweep_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSelectToolByName = (toolName: string) => {
    const found = PRODUCTS.find((p) => p.name.toLowerCase().includes(toolName.toLowerCase()));
    if (found) {
      setInspectedProduct(found);
    } else {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setInspectedProduct(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] font-sans text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F9F7F2]">
      {/* Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
        onOpenInfoModal={handleOpenInfoModal}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizModalOpen(true)}
          onSelectSurface={setSelectedSurface}
        />

        {/* Interactive Before & After Slider */}
        <BeforeAfterSlider onSelectTool={handleSelectToolByName} />

        {/* Interactive Tool Matcher Diagnostic Section */}
        <section className="py-20 bg-[#FAF9F6] border-b border-[#1A1A1A]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ToolFinderQuiz
              isOpen={true}
              onAddToCart={(p) => {
                handleAddToCart(p);
                setIsCartOpen(true);
              }}
              onViewProduct={(p) => setInspectedProduct(p)}
            />
          </div>
        </section>

        {/* Product Catalog with Surface and Fur Texture Filters */}
        <ProductCatalog
          products={PRODUCTS}
          selectedSurface={selectedSurface}
          onSelectSurface={setSelectedSurface}
          searchQuery={searchQuery}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onQuickView={(p) => setInspectedProduct(p)}
        />

        {/* Cleaning Tricks and Hacks Guide */}
        <CleaningGuide onSelectProductById={handleSelectProductById} />

        {/* About Us & Atelier Philosophy Section */}
        <AboutSection onOpenInfoModal={handleOpenInfoModal} />
      </main>

      {/* Footer */}
      <Footer
        onSelectSurface={setSelectedSurface}
        onOpenInfoModal={handleOpenInfoModal}
      />

      {/* Cart Drawer Slide-Over */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenInfoModal={handleOpenInfoModal}
      />

      {/* Product Detail Inspection Modal */}
      <ProductModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
        onAddToCart={(p, qty) => {
          handleAddToCart(p, qty);
          setIsCartOpen(true);
        }}
      />

      {/* Quiz Modal when launched from header or hero */}
      {isQuizModalOpen && (
        <ToolFinderQuiz
          isOpen={true}
          onClose={() => setIsQuizModalOpen(false)}
          onAddToCart={(p) => {
            handleAddToCart(p);
            setIsCartOpen(true);
          }}
          onViewProduct={(p) => setInspectedProduct(p)}
        />
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
        onOpenInfoModal={handleOpenInfoModal}
      />

      {/* About Us, Privacy Policy, Terms & Conditions Modal */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        initialTab={infoModalTab}
      />
    </div>
  );
}
