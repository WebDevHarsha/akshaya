"use client"
import { useState } from 'react';
import { Utensils, Menu, X, Heart, Soup, PersonStanding, Phone, LogOut, User } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  // Mock auth state for demonstration - replace with actual Firebase hooks
  type UserType = { displayName?: string; email?: string } | null;
  const [user, ] = useState<UserType>(null); // This would come from useAuthState(auth)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock user session check
  const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      // In real implementation: await signOut(auth);
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('user');
      }
      // router.push('/sign-up'); - would redirect here
      console.log('User logged out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
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
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user || userSession ? (
              // Authenticated user menu
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <Link href="/dashboard">
                    <span className="text-sm text-gray-700">
                    {user?.displayName || user?.email || 'User'}
                  </span>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              // Guest user buttons
              <>
                <a
                  href="/login"
                  className="text-green-600 hover:text-green-700 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4 rotate-180" />
                  <span>Login</span>
                </a>
                <a
                  href="/signup"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Sign Up</span>
                </a>
              </>
            )}
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
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  <span>{link.label}</span>
                </a>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="pt-4 space-y-2">
                {user || userSession ? (
                  // Authenticated user in mobile
                  <>
                    <div className="px-3 py-2 text-base font-medium text-gray-900 flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span>{user?.displayName || user?.email || 'User'}</span>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2 w-full text-left"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  // Guest user in mobile
                  <>
                    <a
                      href="/login"
                      className="text-green-600 hover:text-green-700 hover:bg-green-50  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <LogOut className="h-5 w-5 rotate-180" />
                      <span>Login</span>
                    </a>
                    <a
                      href="/signup"
                      className="bg-green-600 text-white hover:bg-green-700  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-5 w-5" />
                      <span>Sign Up</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}