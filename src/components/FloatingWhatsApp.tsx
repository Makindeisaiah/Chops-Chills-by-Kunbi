import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=Hello%20Kunbi!%20I'd%20like%20to%20place%20an%20order%20or%20inquire%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/80"
        aria-label="Order or chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
};
