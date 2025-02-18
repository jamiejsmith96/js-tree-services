export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  slug: string;
  fullDescription?: string;
  benefits?: string[];
  safetyMeasures?: string[];
  galleryImages?: string[];
  insurance?: {
    coverage: string;
  };
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  description: string;
  category: string;
  location: string;
  date: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface ServiceArea {
  id: number;
  name: string;
  coordinates: [number, number];
  radius: number;
  color: string;
  response?: string;
  coverage?: string;
  services?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
}

export interface ServiceDetail extends Service {
  benefits: string[];
  safetyMeasures: string[];
  insurance: {
    coverage: string;
    amount: string;
  };
  galleryImages: string[];
}