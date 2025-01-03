
import { ExternalLink } from 'lucide-react';
import type { Platform } from '../../types/product';

interface PlatformComparisonProps {
  platforms: Platform[];
}

export function PlatformComparison({ platforms }: PlatformComparisonProps) {
  return (
    <div className="space-y-3">
      {platforms.map((platform, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 gap-3 sm:gap-4"
        >
          <div className="flex items-center space-x-3">
            <img
              src={platform.logo}
              alt={platform.name}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
            <div>
              <p className="font-medium text-gray-900 text-sm md:text-base">{platform.name}</p>
              <p className="text-xs md:text-sm text-gray-500">
                {platform.condition}
                {platform.shipping && ` • ${platform.shipping}`}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 sm:gap-4">
            <span className="font-bold text-base md:text-lg">₹ {platform.price}</span>
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 border border-transparent text-xs md:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap"
            >
              Buy Now
              <ExternalLink className="ml-1.5 h-3 w-3 md:h-4 md:w-4" />
            </a>
          </div>
        </div>
      ))}
       <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          More Products
        </button>
      </div>
    </div>
  );
}