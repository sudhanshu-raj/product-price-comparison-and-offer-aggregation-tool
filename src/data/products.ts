import { Product } from '../types/product';

export const exampleProducts: Product[] = [
  {
    name: "WH-1000XM4 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    rating: 4.8,
    totalReviews: 12453,
    currentPrice: "20,790.00",
    originalPrice: "29,990.00",
    discount: 31,
    description: "Industry-leading noise canceling with Dual Noise Sensor technology",
    productUrl: "https://example.com/product",
    platforms: [
      {
        name: "Amazon",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
        price: "17,259.00",
        shipping: "Free Shipping",
        condition: "5 offers",
        url: "#"
      },
      {
        name: "Flipkart",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
        price: "18,199.99",
        shipping: "Free Shipping",
        condition: "10 offers",
        url: "#"
      },
      {
        name: "Tata CLiQ",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
        price: "21,999.00",
        shipping: "₹ 40 Shipping",
        condition: "7 offers",
        url: "#"
      }
    ]
  }
];