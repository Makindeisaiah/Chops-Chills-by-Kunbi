import React, { useState } from 'react';
import {
  Wine,
  GlassWater,
  Sparkles,
  Croissant,
  UtensilsCrossed,
  Apple,
  Sandwich,
  Layers,
  Grid,
  Drumstick,
  Milk,
  CalendarHeart,
  Award,
  Palette,
  ArrowUpRight,
  Check,
  PartyPopper
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FOOD_AND_DRINKS, EVENTS_SERVICES, BUSINESS_CONTACT } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string, category: 'food' | 'event') => void;
}

// Icon mapper helper
const renderServiceIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Wine':
      return <Wine className={className} />;
    case 'GlassWater':
      return <GlassWater className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Croissant':
      return <Croissant className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Apple':
      return <Apple className={className} />;
    case 'Sandwich':
      return <Sandwich className={className} />;
    case 'Coffee':
      return <Layers className={className} />;
    case 'Cookie':
      return <Grid className={className} />;
    case 'Drumstick':
      return <Drumstick className={className} />;
    case 'Milk':
      return <Milk className={className} />;
    case 'CalendarHeart':
      return <CalendarHeart className={className} />;
    case 'Flame':
      return <Award className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'events'>('all');

  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Background soft styling */}
      <div className="absolute inset-0 bg-radial from-pink-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/70 text-[#6b2d8c] text-xs font-bold uppercase tracking-wider mb-3">
            <PartyPopper className="w-3.5 h-3.5 text-[#e91e8c]" />
            <span>What We Serve & Coordinate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Our Handcrafted{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#e91e8c] font-normal inline-block ml-1">
              Services
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From sizzling small chops and chilled cocktail pours to grand event styling across Lagos,
            explore our specialized offerings below.
          </p>

          {/* Tab Controls */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-gray-100/90 border border-gray-200/80 shadow-inner">
            <button
              type="button"
              id="tab-all-services"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-[#6b2d8c] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Services ({FOOD_AND_DRINKS.length + EVENTS_SERVICES.length})
            </button>

            <button
              type="button"
              id="tab-food-drinks"
              onClick={() => setActiveTab('food')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'food'
                  ? 'bg-gradient-to-r from-[#e91e8c] to-[#a82496] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Food & Drinks ({FOOD_AND_DRINKS.length})
            </button>

            <button
              type="button"
              id="tab-events"
              onClick={() => setActiveTab('events')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-[#6b2d8c] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Events & Planning ({EVENTS_SERVICES.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Food & Drinks Block */}
        {(activeTab === 'all' || activeTab === 'food') && (
          <div className="mb-16">
            <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e91e8c]">
                  Culinary & Bar Menu
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <span>Food & Drinks</span>
                  <span className="text-sm font-medium text-gray-500">({FOOD_AND_DRINKS.length} items)</span>
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-pink-50 text-[#e91e8c] rounded-full border border-pink-200">
                Freshly Made in Mushin
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FOOD_AND_DRINKS.map((item) => (
                <div
                  key={item.id}
                  id={`service-card-${item.id}`}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-300 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-50 to-purple-50 text-[#e91e8c] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#e91e8c] group-hover:to-[#6b2d8c] flex items-center justify-center transition-all duration-300 shadow-xs">
                        {renderServiceIcon(item.iconName, 'w-6 h-6 transition-transform group-hover:scale-110')}
                      </div>

                      {item.tag && (
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          item.popular
                            ? 'bg-pink-100 text-[#e91e8c]'
                            : 'bg-purple-50 text-[#6b2d8c]'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Label & Description */}
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#6b2d8c] transition-colors">
                      {item.name}
                    </h4>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">Ready to enjoy?</span>
                    <button
                      type="button"
                      onClick={() => onSelectService(item.name, 'food')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#e91e8c] group-hover:text-[#6b2d8c] hover:underline cursor-pointer"
                    >
                      <span>Order This</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Events & Planning Block */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <div>
            <div className="flex items-center justify-between border-b border-purple-100 pb-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6b2d8c]">
                  Celebrations & Coordination
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <span>Events & Mixology</span>
                  <span className="text-sm font-medium text-gray-500">({EVENTS_SERVICES.length} services)</span>
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-[#6b2d8c] rounded-full border border-purple-200">
                Lagos & Beyond
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EVENTS_SERVICES.map((item) => (
                <div
                  key={item.id}
                  id={`event-card-${item.id}`}
                  className="group relative bg-gradient-to-b from-white to-purple-50/40 rounded-2xl p-7 border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 text-[#6b2d8c] group-hover:bg-[#6b2d8c] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        {renderServiceIcon(item.iconName, 'w-7 h-7 transition-transform group-hover:scale-110')}
                      </div>

                      {item.tag && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-purple-100 text-[#6b2d8c]">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#6b2d8c] transition-colors">
                      {item.name}
                    </h4>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 space-y-1.5 text-xs text-gray-700 font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#e91e8c]" />
                        <span>Tailored consultation & timeline</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#e91e8c]" />
                        <span>Professional on-site execution</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-purple-100/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">Need event assistance?</span>
                    <button
                      type="button"
                      onClick={() => onSelectService(item.name, 'event')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6b2d8c] text-white text-xs font-bold hover:bg-[#582075] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Book Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
