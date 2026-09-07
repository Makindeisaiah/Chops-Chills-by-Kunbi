import React, { useState } from 'react';
import { Sparkles, Heart, CheckCircle, Calendar, GlassWater } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/brandAssets';

interface AboutSectionProps {
  onConnectClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onConnectClick }) => {
  const [imgSrc, setImgSrc] = useState(BRAND_ASSETS.founderPhoto);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait / Founder Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Clean outer decorative frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#e91e8c]/20 via-purple-100/30 to-[#6b2d8c]/20 border border-pink-200 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc(BRAND_ASSETS.founderFallbackUrl)}
                    alt="Kunbi - Founder, Certified Mixologist & Event Coordinator at Chops and Chills"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b2d8c]/85 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="font-script text-3xl font-bold text-pink-300">
                      Kunbi
                    </span>
                    <p className="text-xs uppercase tracking-wider font-semibold text-gray-200 mt-0.5">
                      Founder, Certified Mixologist & Event Planner
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-[#6b2d8c] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#e91e8c]" />
              <span>Meet the Heart Behind the Brand</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Hey, I'm{' '}
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#e91e8c] font-normal">
                Kunbi
              </span>
              !
            </h2>

            <p className="font-script text-2xl sm:text-3xl text-[#6b2d8c] mt-2 font-medium">
              Bringing good food and good vibes to every celebration.
            </p>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                I founded <strong>Chops & Chills by Kunbi</strong> right here in Mushin, Lagos, out of a genuine passion for two things: <span className="text-[#6b2d8c] font-semibold">finger-licking comfort bites</span> and the <span className="text-[#e91e8c] font-semibold">magic of an unforgettable party atmosphere</span>.
              </p>
              <p>
                As a <strong>certified mixologist & bartender</strong>, I believe a drink should never just be in a glass — it should be an experience! From refreshing zobo blends and creamy shakes to theatrical flaming cocktails and crisp mocktails, each recipe is tuned for pure refreshment.
              </p>
              <p>
                As an <strong>event planner and coordinator</strong>, I know how stressful hosting can be. Whether you are throwing an intimate birthday brunch, a corporate mixer, an Owambe celebration, or a cozy evening with friends, my team and I step in to handle the food, the bar, the decor, and the seamless coordination — so you can relax and actually enjoy your own party!
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/60 border border-pink-100">
                <GlassWater className="w-5 h-5 text-[#e91e8c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Certified Bar Mastery</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Custom cocktail menus, top hygiene, and live bar flair.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100">
                <Calendar className="w-5 h-5 text-[#6b2d8c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Stress-Free Coordination</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Timeline management, vendor sync, and immaculate setup.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/60 border border-pink-100">
                <CheckCircle className="w-5 h-5 text-[#e91e8c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Always Fresh Ingredients</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Crisp pastries, hot small chops, and premium spirits.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100">
                <Heart className="w-5 h-5 text-[#6b2d8c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Warm Approachable Vibe</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Friendly, reliable, and attentive to your custom preferences.</p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onConnectClick}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#e91e8c] to-[#6b2d8c] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Let's Plan Your Food or Event &rarr;
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
