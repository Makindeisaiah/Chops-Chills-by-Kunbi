import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/servicesData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'services', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About Kunbi', id: 'about' },
    { label: 'Contact & Order', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100 py-3'
          : 'bg-white/85 backdrop-blur-sm py-4 border-b border-pink-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2 group text-left focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg p-1"
          aria-label="Chops & Chills by Kunbi Home"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e91e8c] to-[#6b2d8c] flex items-center justify-center text-white shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform duration-200">
            <span className="font-script text-2xl font-bold leading-none select-none">C&C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-script text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-[#e91e8c] transition-colors">
              Chops & Chills
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-[#6b2d8c] flex items-center gap-1">
              <span>by Kunbi</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e91e8c]"></span>
              <span className="text-[10px] text-gray-500 font-normal normal-case">Lagos</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#e91e8c] to-[#6b2d8c] shadow-sm'
                    : 'text-gray-700 hover:text-[#e91e8c] hover:bg-pink-50/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_CONTACT.phone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#6b2d8c] px-3 py-2 rounded-full border border-gray-200 hover:border-purple-300 transition-colors"
            title="Call Kunbi"
          >
            <Phone className="w-3.5 h-3.5 text-[#e91e8c]" />
            <span>08118292941</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=Hi%20Kunbi!%20I'd%20like%20to%20place%20an%20order%20or%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] px-4 py-2 rounded-full shadow-sm hover:shadow transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=Hello%20Kunbi!%20I'm%20reaching%20out%20from%20your%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white bg-[#25D366] active:scale-95 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-gray-950 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#e91e8c]" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-pink-50 text-[#6b2d8c] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles className="w-4 h-4 text-[#e91e8c]" />}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=Hi%20Kunbi!%20I'd%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-gradient-to-r from-[#e91e8c] to-[#6b2d8c] font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp (0909 814 2912)</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONTACT.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#e91e8c]" />
                <span>Call Directly: 08118292941</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
