import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from '../assets/logo1.png'; 

// Define navigation items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
];

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo / Brand Section with Animation */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className="relative">
              <img
                className="h-12 w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                src={logo} 
                alt="Company Logo"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:scale-110"></div>
            </div>
            <div className="ml-3">
              <span className="text-[26px] font-semi-bold tracking-tight text-gray-900 uppercase leading-none transition-all duration-300 group-hover:text-gray-800">
                COMPANY
              </span>
              <span className="block text-[15px] text-gray-600 tracking-wider transition-all duration-300 group-hover:text-gray-800 group-hover:translate-x-1">
                business tagline
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links with Hover Animations */}
          <div className="hidden md:flex md:space-x-6 lg:space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className="relative px-1 py-2 text-base font-medium transition-all duration-300 group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeItem === item.name 
                    ? 'text-red-600 font-semibold' 
                    : 'text-gray-700 hover:text-red-600'
                }`}>
                  {item.name}
                </span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full ${
                  activeItem === item.name ? 'w-full' : ''
                }`}></span>
                
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10"></span>
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) with Enhanced Animation */}
          <div className="hidden md:block">
            <button
              className="relative px-8 py-3 text-white font-semibold text-sm rounded-full transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #FF3B30 0%, #FF0055 100%)',
                boxShadow: '0 8px 25px rgba(255, 59, 48, 0.4)',
              }}
              onClick={() => console.log('Get A Quote clicked')}
            >
              {/* Shine effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              
              <span className="relative z-10 flex items-center">
                Get A Quote
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 rounded-xl text-gray-700 hover:text-red-600 bg-white hover:bg-gray-50 focus:outline-none transition-all duration-300 transform hover:scale-110 border border-gray-200 shadow-sm hover:shadow-md"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                {isMenuOpen ? (
                  <X className="absolute inset-0 w-6 h-6 animate-spin-in" aria-hidden="true" />
                ) : (
                  <Menu className="absolute inset-0 w-6 h-6 animate-pulse-once" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-0 w-full h-screen bg-gradient-to-br from-white to-gray-50/95 backdrop-blur-sm transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
        style={{ marginTop: isScrolled ? '80px' : '96px' }}
      >
        <div className="flex flex-col items-center justify-start h-full pt-8 px-6 overflow-y-auto">
          {/* Mobile Navigation Items */}
          <div className="w-full max-w-sm space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`block w-full text-center py-4 px-6 rounded-2xl font-medium text-lg transition-all duration-500 transform ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                } ${
                  activeItem === item.name
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md hover:shadow-lg'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div 
              className={`pt-6 transition-all duration-700 transform ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${navItems.length * 100 + 200}ms` : '0ms' 
              }}
            >
              <button
                onClick={() => {
                  console.log('Get A Quote clicked (Mobile)');
                  toggleMenu();
                }}
                className="w-full px-8 py-4 text-white font-bold rounded-2xl text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(90deg, #FF3B30 0%, #FF0055 100%)',
                }}
              >
                {/* Ripple effect background */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10 flex items-center justify-center">
                  Get A Quote
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Close hint for mobile */}
          <div className={`mt-auto pb-8 text-center text-gray-500 text-sm transition-all duration-1000 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            Tap anywhere outside to close
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          onClick={toggleMenu}
          style={{ marginTop: isScrolled ? '80px' : '96px' }}
        />
      )}
    </nav>
  );
};

export default Navbar;