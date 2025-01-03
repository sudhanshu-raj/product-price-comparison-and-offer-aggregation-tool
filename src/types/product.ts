export interface Platform {
  name: string;
  logo: string;
  price: string;
  shipping?: string;
  condition: string;
  url: string;
}

export interface Product {
  name: string;
  brand: string;
  image: string;
  rating: number;
  totalReviews: number;
  currentPrice: string;
  originalPrice: string;
  discount: number;
  description: string;
  platforms: Platform[];
  productUrl: string;
}