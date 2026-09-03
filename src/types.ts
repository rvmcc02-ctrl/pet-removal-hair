export type SurfaceType = 'carpet' | 'furniture' | 'car' | 'clothing' | 'pets' | 'laundry';

export type HairType = 'long' | 'short' | 'double-coat' | 'fine';

export interface ProductReview {
  id: string;
  author: string;
  petType: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  category: 'rollers' | 'rakes' | 'grooming' | 'auto' | 'laundry' | 'vacuums' | 'clothing';
  surfaces: SurfaceType[];
  bestForHair: HairType[];
  badge?: 'Bestseller' | 'Eco-Friendly' | 'Pro Detailer' | 'Must-Have' | 'Top Rated' | 'Pro Pick';
  inStock: boolean;
  image: string;
  secondaryImage?: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  howToUse: string[];
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CleaningTip {
  id: string;
  title: string;
  surface: string;
  summary: string;
  steps: string[];
  recommendedToolId: string;
  iconName: string;
}
