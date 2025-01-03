
import { Home, Info, Mail, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <LineChart className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PriceScope</span>
          </div>
          <nav className="flex space-x-8">
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
          </nav>
        </div>
      </div>
    </header>
  );
}