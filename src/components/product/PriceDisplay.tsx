
interface PriceDisplayProps {
  currentPrice: string;
  originalPrice: string;
  discount?: number;
}

export function PriceDisplay({ currentPrice, originalPrice, discount }: PriceDisplayProps) {
  return (
    <div className="flex items-baseline space-x-2">
      <span className="text-2xl font-bold text-gray-900">
      ₹ {currentPrice}
      </span>
      <span className="text-lg text-gray-500 line-through">
      ₹ {originalPrice}
      </span>
      {discount && (
        <span className="text-sm font-medium text-green-600">
          {discount}% off
        </span>
      )}
    </div>
  );
}