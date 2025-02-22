export interface BlogAuthor {
  name: string;
  avatar: string | null;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  coverImage: string;
  readTime: string;
  tags: string[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  searchQuery?: string;
  sortBy: 'date' | 'title';
  order: 'asc' | 'desc';
}

// Component Props Types
export interface BlogPostProps extends BlogPost {
  index?: number;
  isFeatured?: boolean;
}