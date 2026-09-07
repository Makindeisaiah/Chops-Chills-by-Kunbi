import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<{
    name: string;
    category: 'food' | 'event';
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderNow = () => {
    setPreselectedService({
      name: 'Small Chops',
      category: 'food',
    });
    scrollToSection('contact');
  };

  const handleBookEvent = () => {
    setPreselectedService({
      name: 'Event Planning & Coordination',
      category: 'event',
    });
    scrollToSection('contact');
  };

  const handleSelectService = (serviceName: string, category: 'food' | 'event') => {
    setPreselectedService({
      name: serviceName,
      category,
    });
    scrollToSection('contact');
  };

  const handleOrderGalleryItem = (itemName: string) => {
    setPreselectedService({
      name: itemName,
      category: 'food',
    });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#e91e8c] selection:text-white">
      {/* Sticky Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOrderClick={handleOrderNow}
          onBookEventClick={handleBookEvent}
        />

        {/* 2. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Gallery Section */}
        <GallerySection onOrderFoodItem={handleOrderGalleryItem} />

        {/* 4. About Kunbi Section */}
        <AboutSection onConnectClick={() => scrollToSection('contact')} />

        {/* 5. Contact & Order Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 6. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent Floating Quick WhatsApp Order Button */}
      <FloatingWhatsApp />
    </div>
  );
}

