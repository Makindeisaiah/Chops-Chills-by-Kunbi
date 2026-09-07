import React from 'react';
import { Phone, MessageCircle, Instagram, MapPin, ArrowUp, Heart } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/servicesData';
import { BRAND_ASSETS } from '../data/brandAssets';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-md bg-gradient-to-tr from-[#e91e8c] to-[#6b2d8c]">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="Chops & Chills Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-script text-2xl font-bold leading-none select-none text-white absolute -z-10">C&C</span>
              </div>
              <div>
                <span className="font-script text-3xl font-bold text-white block leading-none">
                  Chops & Chills
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-pink-400">
                  by Kunbi
                </span>
              </div>
            </div>

            <p className="font-script text-xl text-pink-300 font-medium">
              good food, good vibes
            </p>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Your premier food, drinks & event planning business based in Mushin, Lagos State.
              Handcrafted cocktails, mouth-watering small chops, and certified event coordination.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-pink-500 hover:bg-pink-600/20 text-pink-400 flex items-center justify-center transition-all"
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={BUSINESS_CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500 hover:bg-purple-600/20 text-purple-400 flex items-center justify-center transition-all"
                aria-label="TikTok profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.91-4.49V8.62a8.28 8.28 0 0 0 4.86 1.57v-3.5Z" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-emerald-500 hover:bg-emerald-600/20 text-emerald-400 flex items-center justify-center transition-all"
                aria-label="WhatsApp chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={`tel:${BUSINESS_CONTACT.phone}`}
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 hover:bg-blue-600/20 text-blue-400 flex items-center justify-center transition-all"
                aria-label="Phone call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-300">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('hero');
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Services & Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('gallery');
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  About Kunbi
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact & Order
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Repeated Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-300">
              Contact & Location
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{BUSINESS_CONTACT.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONTACT.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_CONTACT.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={BUSINESS_CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_CONTACT.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 text-center font-bold text-xs text-purple-400">♪</span>
                <a
                  href={BUSINESS_CONTACT.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @{BUSINESS_CONTACT.tiktokHandle}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Chops & Chills by Kunbi. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-pink-500 fill-pink-500 inline" /> in Lagos, Nigeria.
            </span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors py-1 px-3 rounded-full bg-gray-900 border border-gray-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
