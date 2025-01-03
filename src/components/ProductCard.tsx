import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { ProductImage } from './product/ProductImage';
import { Rating } from './product/Rating';
import { PriceDisplay } from './product/PriceDisplay';
import { ShareOptions } from './product/ShareOptions';
import { PlatformComparison } from './product/PlatformComparison';
import { BrandBadge } from './product/BrandBadge';
import type { Product } from '../types/product';

interface ProductCardProps extends Product {
  onViewHistory: () => void;
}

export function ProductCard({
  name,
  brand,
  image,
  rating,
  totalReviews,
  currentPrice,
  originalPrice,
  discount,
  description,
  platforms,
  productUrl,
  onViewHistory
}: ProductCardProps) {
  const [showAllOptions, setShowAllOptions] = useState(false);
  const displayedPlatforms = showAllOptions ? platforms : platforms.slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <ProductImage src={image} alt={name} className="aspect-square md:aspect-auto" />
        
        <div className="space-y-3 md:space-y-4">
          <div className="space-y-2">
            <BrandBadge brand={brand} verified={true} />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{name}</h2>
          </div>
          
          <p className="text-sm md:text-base text-gray-600">{description}</p>
          
          <Rating rating={rating} totalReviews={totalReviews} />
          
          <PriceDisplay
            currentPrice={currentPrice}
            originalPrice={originalPrice}
            discount={discount}
          />
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              onClick={onViewHistory}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Price History
            </button>
            <ShareOptions productUrl={productUrl} />
          </div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">Available Options</h3>
        <PlatformComparison platforms={displayedPlatforms} />
        
        {platforms.length > 3 && (
          <button
            onClick={() => setShowAllOptions(!showAllOptions)}
            className="w-full py-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm md:text-base"
          >
            {showAllOptions ? 'Show Less' : 'Show More Options'}
          </button>
        )}
      </div>
    </div>
  );
}