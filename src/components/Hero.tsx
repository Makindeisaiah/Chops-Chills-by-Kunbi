import React from 'react';
import { Sparkles, ArrowRight, Calendar, Heart, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONTACT } from '../data/servicesData';

interface HeroProps {
  onOrderClick: () => void;
  onBookEventClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onBookEventClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-gradient-soft"
    >
      {/* Decorative gradient blur orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-pink-300/30 to-purple-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-200/40 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-purple-200/40 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Location & Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-pink-200/80 shadow-xs mb-5"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e91e8c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e91e8c]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#6b2d8c] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#e91e8c]" />
                <span>Mushin, Lagos State, Nigeria</span>
              </span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <span className="text-xs text-gray-600 hidden sm:inline font-medium">
                Food • Drinks • Events
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.15]"
            >
              Satisfy Your{' '}
              <span className="text-[#e91e8c]">
                Cravings!
              </span>
            </motion.h1>

            {/* Script Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-script text-3xl sm:text-4xl text-[#6b2d8c] mt-3 font-semibold"
            >
              good food, good vibes
            </motion.p>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Welcome to <strong>Chops & Chills by Kunbi</strong> — your premier destination in Mushin, Lagos for delectable small chops, craft cocktails, iced mocktails, fresh pastries, and certified event planning that turns every Lagos gathering into an unforgettable vibe.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                type="button"
                id="hero-order-now-btn"
                onClick={onOrderClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#e91e8c] to-[#6b2d8c] hover:from-[#d8157f] hover:to-[#5a2177] shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                id="hero-book-event-btn"
                onClick={onBookEventClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-[#6b2d8c] bg-white border-2 border-[#6b2d8c]/30 hover:border-[#6b2d8c] hover:bg-purple-50/60 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#e91e8c]" />
                <span>Book an Event</span>
              </button>
            </motion.div>

            {/* Value Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-pink-100/90 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#e91e8c] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Fresh To Order</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#6b2d8c] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Certified Mixology</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#e91e8c] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">100% Good Vibes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Rounded Visual Card */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-md border border-pink-200/70 shadow-2xl shadow-purple-900/10 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80"
                    alt="Chops and Chills signature cocktails and delicious party small chops"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e91e8c] text-white inline-block mb-1.5">
                      Signature Mixes & Bites
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-tight">
                      Crafted with Love in Mushin, Lagos
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
