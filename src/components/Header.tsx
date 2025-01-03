import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Mail, Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-gray-900">PriceScope</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-indigo-600">
            <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center text-gray-600 hover:text-indigo-600">
            <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center text-gray-600 hover:text-indigo-600">
            <Mail className="h-5 w-5 mr-1" />
              <span>Contact</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-1 mt-2">
              <Link to="/" className="block text-gray-600 hover:text-indigo-600">
                Home
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-indigo-600">
                About
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-indigo-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}