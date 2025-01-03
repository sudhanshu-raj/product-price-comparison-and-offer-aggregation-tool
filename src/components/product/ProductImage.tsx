
interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className = "" }: ProductImageProps) {
  return (
    <div className={`relative ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}