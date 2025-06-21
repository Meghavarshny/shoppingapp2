
import React from 'react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              ShopHub
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </a>
            
            <button
              onClick={onCartClick}
              className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H19" />
              </svg>
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
