import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Accueil', page: Page.HOME },
  { label: 'Le Cabinet', page: Page.CABINET },
  { label: 'Compétences', page: Page.COMPETENCES },
  { label: 'Honoraires', page: Page.HONORAIRES },
  { label: 'Contact', page: Page.CONTACT },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-950 text-white shadow-lg font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo / Brand */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => handleNavClick(Page.HOME)}
          >
             <span className="text-2xl font-serif font-bold text-white tracking-wide uppercase">
                Johanna Ostrowka
              </span>
              <span className="text-xs text-gold-400 tracking-[0.2em] uppercase mt-1">
                Société d'avocats
              </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 relative group py-2 ${
                  currentPage === item.page
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-400 transform origin-left transition-transform duration-300 ${currentPage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
            
            {/* CTA Button Style Goldwin */}
            <a href="tel:01XXXXXXXX" className="ml-6 bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-bold transition-colors flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              01 XX XX XX XX
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold-400 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-gray-800 absolute w-full shadow-2xl animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md ${
                  currentPage === item.page
                    ? 'text-gold-400 bg-navy-800'
                    : 'text-gray-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-700">
               <button className="w-full bg-brand-red text-white py-3 rounded font-bold uppercase tracking-wider">
                 01 XX XX XX XX
               </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};