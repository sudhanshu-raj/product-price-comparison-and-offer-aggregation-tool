import React from 'react';
import { Share2, Copy } from 'lucide-react';

interface ShareOptionsProps {
  productUrl: string;
}

export function ShareOptions({ productUrl }: ShareOptionsProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this product',
          url: productUrl
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      // You could add a toast notification here
    } catch (err) {
      console.error('Error copying:', err);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={handleShare}
        className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        title="Share"
      >
        <Share2 className="w-5 h-5" />
      </button>
      <button
        onClick={handleCopyLink}
        className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        title="Copy Link"
      >
        <Copy className="w-5 h-5" />
      </button>
    </div>
  );
}