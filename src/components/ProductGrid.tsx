
import React from 'react';
import ProductCard from './ProductCard';
import { Product, CartItem } from '../pages/Index';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  loading: boolean;
  cartItems: CartItem[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart, 
  loading,
  cartItems 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
            <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
            <div className="bg-gray-300 h-4 rounded mb-2"></div>
            <div className="bg-gray-300 h-4 rounded mb-4 w-3/4"></div>
            <div className="bg-gray-300 h-8 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          isInCart={cartItems.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
