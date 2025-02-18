export interface GalleryItem {
  id: number;
  imageUrl: string;
  description: string;
  category: string;
  location: string;
  date: string;
  aspectRatio?: number;
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
  };
  tags?: string[];
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description: string;
}

export type GalleryCategory = 
  | 'All'
  | 'Tree Felling'
  | 'Crown Reduction'
  | 'Stump Removal'
  | 'Emergency Work'
  | 'Before & After';

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Tree Felling',
  'Crown Reduction',
  'Stump Removal',
  'Emergency Work',
  'Before & After'
];