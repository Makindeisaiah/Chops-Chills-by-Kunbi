import React, { useState } from 'react';
import { Camera, ZoomIn, X, Sparkles, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/servicesData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOrderFoodItem: (itemName: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOrderFoodItem }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-[#e91e8c] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            A Taste for{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6b2d8c] font-normal inline-block ml-1">
              Your Eyes
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Freshly prepared small chops, artisan brunch favorites, and handcrafted drinks.
            Click any picture for an expanded view.
          </p>
        </div>

        {/* Gallery Grid / Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-pink-100 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container with subtle hover animation */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#6b2d8c] shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Hover Action Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="w-4 h-4 text-[#e91e8c]" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-pink-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swap note banner */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-pink-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-pink-100 text-[#e91e8c] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-semibold text-[#6b2d8c]">Photography Placeholder Note:</span> You can easily swap in your own photography anytime.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOrderFoodItem('Custom Platter / Mix')}
            className="text-xs font-bold text-[#e91e8c] hover:text-[#6b2d8c] hover:underline shrink-0"
          >
            Order Custom Platter &rarr;
          </button>
        </div>

      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-gray-950">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-[#6b2d8c]">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Chops & Chills by Kunbi</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {selectedItem.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-gray-500">
                    Made fresh in Mushin, Lagos. Custom quantities available.
                  </p>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => {
                        const itemTitle = selectedItem.title;
                        setSelectedItem(null);
                        onOrderFoodItem(itemTitle);
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#6b2d8c] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order This Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
