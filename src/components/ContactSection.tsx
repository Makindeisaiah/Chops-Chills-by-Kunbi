import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  Send,
  Sparkles,
  Calendar,
  Utensils,
  Check,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { BUSINESS_CONTACT, FOOD_AND_DRINKS, EVENTS_SERVICES } from '../data/servicesData';

interface ContactSectionProps {
  preselectedService?: {
    name: string;
    category: 'food' | 'event';
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [inquiryType, setInquiryType] = useState<'food' | 'event'>('food');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>(['Small Chops', 'Cocktails']);
  const [specialNotes, setSpecialNotes] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Sync preselected service from Services or Gallery click
  useEffect(() => {
    if (preselectedService) {
      setInquiryType(preselectedService.category);
      setSelectedItems((prev) =>
        prev.includes(preselectedService.name)
          ? prev
          : [...prev, preselectedService.name]
      );
    }
  }, [preselectedService]);

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Compile WhatsApp order message
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const greeting = `Hello Kunbi! I'm reaching out from the Chops & Chills by Kunbi website.`;
    const typeText = inquiryType === 'food' ? 'Food & Drink Order' : 'Event Booking / Coordination';
    const nameText = customerName ? `Name: ${customerName}` : 'Customer';
    const phoneText = customerPhone ? `Phone: ${customerPhone}` : '';
    const dateText = eventDate ? `Preferred Date: ${eventDate}` : '';
    const itemsText = selectedItems.length > 0 ? `Selected Items/Services: ${selectedItems.join(', ')}` : '';
    const notesText = specialNotes ? `Additional Details: ${specialNotes}` : '';

    const lines = [
      greeting,
      `*Type:* ${typeText}`,
      nameText,
      phoneText,
      dateText,
      itemsText,
      notesText,
      `*Location:* Lagos, Nigeria`,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=${message}`, '_blank');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_CONTACT.phone);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-brand-gradient-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-[#e91e8c] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ready to Satisfy Your Cravings?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Order Now &{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6b2d8c] font-normal inline-block ml-1">
              Connect With Us
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Reach out directly via phone or WhatsApp, or fill out the quick inquiry below to launch your order straight to Kunbi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#e91e8c] to-[#6b2d8c] text-white flex items-center justify-center shadow-md shadow-pink-500/20">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Chops & Chills by Kunbi
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Mushin, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-pink-50/50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#e91e8c] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Direct Phone / Call</p>
                      <a
                        href={`tel:${BUSINESS_CONTACT.phone}`}
                        className="text-base font-bold text-gray-900 hover:text-[#e91e8c] transition-colors"
                      >
                        {BUSINESS_CONTACT.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${BUSINESS_CONTACT.phone}`}
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#6b2d8c] hover:bg-[#592376] transition-colors self-center cursor-pointer"
                  >
                    Call
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-emerald-50/50 hover:bg-emerald-50 transition-colors border border-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-700 font-medium">Official WhatsApp</p>
                      <a
                        href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-emerald-950 hover:underline"
                      >
                        {BUSINESS_CONTACT.whatsapp}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=Hello%20Kunbi!%20I'd%20like%20to%20order%20food%20or%20inquire%20about%20event%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors self-center shadow-xs cursor-pointer"
                  >
                    Chat
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-pink-50/40 hover:bg-pink-50 transition-colors border border-pink-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#e91e8c] flex items-center justify-center shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Instagram</p>
                      <a
                        href={BUSINESS_CONTACT.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#e91e8c] hover:underline"
                      >
                        {BUSINESS_CONTACT.instagramHandle}
                      </a>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-600 hover:text-[#e91e8c] px-3 py-1"
                  >
                    Follow &rarr;
                  </a>
                </div>

                {/* TikTok */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-50/40 hover:bg-purple-50 transition-colors border border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#6b2d8c] flex items-center justify-center shrink-0">
                      {/* TikTok icon shape */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.91-4.49V8.62a8.28 8.28 0 0 0 4.86 1.57v-3.5Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">TikTok</p>
                      <a
                        href={BUSINESS_CONTACT.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#6b2d8c] hover:underline"
                      >
                        @{BUSINESS_CONTACT.tiktokHandle}
                      </a>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_CONTACT.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-600 hover:text-[#6b2d8c] px-3 py-1"
                  >
                    Watch &rarr;
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#6b2d8c] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Physical Base</p>
                    <p className="text-sm font-bold text-gray-900">{BUSINESS_CONTACT.location}</p>
                    <p className="text-[11px] text-gray-500">Delivering across Lagos Island & Mainland</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Call Out Card */}
            <div className="bg-gradient-to-tr from-[#6b2d8c] to-[#e91e8c] text-white rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-pink-200" />
                <span className="text-xs font-bold uppercase tracking-wider text-pink-200">
                  Fast Turnaround
                </span>
              </div>
              <h4 className="text-lg font-bold">Planning an event or urgent craving?</h4>
              <p className="text-xs text-pink-100 mt-1 leading-relaxed">
                Kunbi responds quickly on WhatsApp. We cater to emergency party platters, custom cocktail bars, and wedding calendars.
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumberDigits}?text=Hi%20Kunbi!%20Urgent%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white text-[#6b2d8c] text-center font-bold text-xs hover:bg-pink-50 transition-colors shadow-sm"
                >
                  Quick WhatsApp Ping
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Order & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-pink-100">
              
              {/* Type Switcher */}
              <div className="flex rounded-2xl bg-gray-100 p-1.5 mb-6">
                <button
                  type="button"
                  onClick={() => setInquiryType('food')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    inquiryType === 'food'
                      ? 'bg-gradient-to-r from-[#e91e8c] to-[#a82496] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Utensils className="w-4 h-4" />
                  <span>Order Food & Drinks</span>
                </button>

                <button
                  type="button"
                  onClick={() => setInquiryType('event')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    inquiryType === 'event'
                      ? 'bg-[#6b2d8c] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Event & Mixology</span>
                </button>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                
                {/* Customer Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Tunde or Chioma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 08012345678"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Event or Delivery Date */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    {inquiryType === 'food' ? 'Desired Delivery / Pickup Date' : 'Event Date'}
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm transition-all"
                  />
                </div>

                {/* Item / Service Selection Chips */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    {inquiryType === 'food'
                      ? 'Select What You Crave (Click to select multiple)'
                      : 'Select Event Services Required'}
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {inquiryType === 'food'
                      ? FOOD_AND_DRINKS.map((item) => {
                          const isSelected = selectedItems.includes(item.name);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleItem(item.name)}
                              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#e91e8c] text-white shadow-xs'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                              <span>{item.name}</span>
                            </button>
                          );
                        })
                      : EVENTS_SERVICES.map((item) => {
                          const isSelected = selectedItems.includes(item.name);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleItem(item.name)}
                              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#6b2d8c] text-white shadow-xs'
                                  : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                              <span>{item.name}</span>
                            </button>
                          );
                        })}
                  </div>
                </div>

                {/* Special Notes / Guest Count */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    {inquiryType === 'food'
                      ? 'Specific Quantities or Preferences (e.g. 2 packs of small chops, 3 cocktails)'
                      : 'Guest Count, Venue Location in Lagos & Theme'}
                  </label>
                  <textarea
                    rows={3}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder={
                      inquiryType === 'food'
                        ? 'Tell us your preferred flavors, spice level, or delivery address...'
                        : 'e.g., Birthday party in Ikeja, ~50 guests, need full cocktail bar + decor...'
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm transition-all"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-order-whatsapp-btn"
                    className="w-full py-4 px-6 rounded-2xl text-white font-bold text-base bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Inquiry to Kunbi via WhatsApp</span>
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-2.5">
                    Opens WhatsApp with your selections pre-filled for an instant, direct response!
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
