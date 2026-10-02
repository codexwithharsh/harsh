export type ProjectCategory = 
  | 'Brand Identity' 
  | 'Social Media Design' 
  | 'Luxury Fashion Campaign' 
  | 'Banner Design' 
  | 'UI/UX Design' 
  | 'AI-Assisted Creative Design'
  | 'Packaging Design'
  | 'Print Media'
  | 'Editorial / Portfolio Design';

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  type: 'Concept Project' | 'Personal Project' | 'Client Work';
  year: string;
  heroTagline: string;
  overview: string;
  objective: string;
  creativeDirection: string;
  designApproach: string;
  visualLanguage: string;
  typography: {
    primary: string;
    secondary: string;
    details: string;
  };
  colorPalette: {
    name: string;
    hex: string;
    role: string;
  }[];
  toolsUsed: string[];
  finalOutcome: string;
  reflection: string;
  keyMetrics?: string[];
  mockupType: 'elara' | 'coffee' | 'aivora' | 'purejuice' | 'logofolio' | 'noventis';
}

export interface GalleryImage {
  url: string;
  pinUrl: string;
  label?: string;
}

export interface SocialGalleryItem {
  id: string;
  title: string;
  category: 'Fashion' | 'Food' | 'Lifestyle' | 'Marketing' | 'Product' | 'Campaign' | 'Editorial';
  tools: string[];
  description: string;
  aspectRatio: string;
  palette: string[];
  tag: string;
  renderType: 'coffee-cup' | 'burger-promo' | 'burger-special' | 'fashion-elara' | 'wellness-care' | 'tech-crypto' | 'juice-clean' | 'fashion-sale';
  imageUrl?: string;
  pinUrl?: string;
  galleryImages?: GalleryImage[];
}

export interface BannerItem {
  id: string;
  title: string;
  niche: 'Fashion' | 'Food' | 'Jewelry' | 'Luxury Campaign';
  dimensions: string;
  tools: string[];
  headline: string;
  subheadline: string;
  palette: string[];
  bgStyle: string;
  ctaText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
}
