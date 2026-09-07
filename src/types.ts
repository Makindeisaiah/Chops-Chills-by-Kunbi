export interface ServiceItem {
  id: string;
  name: string;
  category: 'food-drinks' | 'events';
  description: string;
  iconName: string;
  tag?: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
  description: string;
}

export interface SocialLinks {
  phone: string;
  whatsapp: string;
  whatsappNumberDigits: string;
  instagram: string;
  instagramHandle: string;
  tiktok: string;
  tiktokHandle: string;
  location: string;
}
