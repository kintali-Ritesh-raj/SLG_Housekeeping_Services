import * as React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="SLG Housekeeping Services">
            <Logo />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-cyan-700' : 'text-white'}`}>
              SLG Housekeeping Services
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Clients', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors hover:text-cyan-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+919949191912"
              className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md transition-all hover:bg-cyan-700"
            >
              <Phone size={18} className="mr-2" />
              <span>Call Us</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Clients', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium transition-colors hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+919949191912"
              className="flex items-center justify-center bg-cyan-600 text-white px-4 py-2 rounded-md transition-all hover:bg-cyan-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              <span>Call Us</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;