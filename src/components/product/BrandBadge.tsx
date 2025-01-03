import React from 'react';

interface BrandBadgeProps {
  brand: string;
  verified?: boolean;
}

export function BrandBadge({ brand, verified = false }: BrandBadgeProps) {
  return (
    <div className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 rounded-full">
      <span className="text-sm font-medium text-gray-700">{brand}</span>
      {verified && (
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )}
    </div>
  );
}