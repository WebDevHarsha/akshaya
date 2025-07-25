import { useState } from 'react';
import Link from 'next/link';
import { Utensils, Menu, X, Heart, Soup, PersonStanding, Phone, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: null },
    { href: '/about', label: 'About', icon: Heart },
    { href: '/food-log', label: 'Food Log', icon: Soup },
    { href: '/founder', label: 'Founder', icon: PersonStanding },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-green-600 p-2 rounded-full group-hover:bg-green-700 transition-colors">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Akshaya</h1>
                <p className="text-xs text-green-600 hidden sm:block">Feeding Hope, Not Landfills</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-green-600 hover:text-green-700 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/signup"
              className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 p-2 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  <span>{link.label}</span>
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2">
                <Link
                  href="/login"
                  className="text-green-600 hover:text-green-700 hover:bg-green-50  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-600 text-white hover:bg-green-700  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}