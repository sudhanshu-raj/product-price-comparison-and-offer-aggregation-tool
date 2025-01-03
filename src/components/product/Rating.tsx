import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  rating: number;
  totalReviews: number;
}

export function Rating({ rating, totalReviews }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />}
      </div>
      <span className="text-sm text-gray-600">
        ({totalReviews.toLocaleString()} reviews)
      </span>
    </div>
  );
}