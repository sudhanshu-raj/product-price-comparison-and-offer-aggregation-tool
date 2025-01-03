import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ProductCard } from './ProductCard';
import { PriceHistoryModal } from './PriceHistoryModal';
import { Footer } from './Footer';
import { exampleProducts } from '../data/products'


function Home() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
  
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">        
        <main className="flex-grow">
          <div className="bg-indigo-700 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Find the Best Prices Online</h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8">Compare prices across multiple retailers and save money on your purchases</p>
              <SearchBar />
            </div>
          </div>
  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="space-y-6 md:space-y-8">
              {exampleProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onViewHistory={() => {
                    setSelectedProduct(product.name);
                    setShowModal(true);
                  }}
                />
              ))}
            </div>
          </div>
        </main>
  
        <Footer />
  
        <PriceHistoryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          productName={selectedProduct}
        />
      </div>
    );
  }
  
  export default Home;