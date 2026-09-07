/**
 * Brand Assets Configuration
 * 
 * To replace the Logo or Founder Image with the owner's own files:
 * 1. Drop your logo file into the `/public/images/` folder (named `logo.png` or `logo.svg`).
 * 2. Drop your founder photo into `/public/images/` (named `founder.jpg` or `founder.png`).
 * 3. Or simply update the image paths or URLs below!
 */

export const BRAND_ASSETS = {
  // Logo image path (Default is /images/logo.svg)
  logo: '/images/logo.svg',
  
  // Fallback logo text wordmark
  logoText: 'Chops & Chills',
  logoSubtext: 'by Kunbi',

  // Founder photo candidate paths
  founderPhoto: '/founder/IMG_3226.jpeg',
  founderPhotoCandidates: [
    '/founder/IMG_3226.jpeg',
    '/images/founder/IMG_3226.jpeg',
    '/founder/IMG_3226.jpg',
    '/images/founder.jpg',
    '/images/founder.png',
  ],
  
  // Fallback if local file not yet copied
  founderFallbackUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
};
