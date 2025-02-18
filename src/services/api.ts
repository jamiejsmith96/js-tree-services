import axios from 'axios';
import type { GalleryImage, GalleryItem } from '../types/gallery';
import type { BlogPost } from '../types/blog';
import type { Service } from '../types/home';

const API_URL = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// Gallery API calls
export const getGalleryImages = async (): Promise<GalleryImage[]> => {
  const response = await api.get('/api/gallery-images?populate=*');
  return response.data.data.map((item: any) => ({
    id: item.id,
    url: `${API_URL}${item.attributes.image.data.attributes.url}`,
    title: item.attributes.title,
    category: item.attributes.category,
    description: item.attributes.description,
  }));
};

export const getBeforeAfterImages = async (): Promise<GalleryItem[]> => {
  const response = await api.get('/api/before-after-images?populate=*');
  return response.data.data.map((item: any) => ({
    id: item.id,
    url: `${API_URL}${item.attributes.afterImage.data.attributes.url}`,
    title: item.attributes.title,
    category: 'before-after',
    description: item.attributes.description,
    beforeAfter: {
      beforeImage: `${API_URL}${item.attributes.beforeImage.data.attributes.url}`,
      afterImage: `${API_URL}${item.attributes.afterImage.data.attributes.url}`,
    },
  }));
};

// Blog API calls
export const getBlogPosts = async (page = 1, limit = 10): Promise<{
  posts: BlogPost[];
  total: number;
  pages: number;
}> => {
  const response = await api.get(`/api/blog-posts?populate=*&page=${page}&pageSize=${limit}`);
  const posts = response.data.data.map((post: any) => ({
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    excerpt: post.attributes.excerpt,
    content: post.attributes.content,
    coverImage: post.attributes.coverImage.data 
      ? `${API_URL}${post.attributes.coverImage.data.attributes.url}`
      : null,
    publishedAt: post.attributes.publishedAt,
    author: {
      name: post.attributes.author.data.attributes.name,
      avatar: post.attributes.author.data.attributes.avatar.data
        ? `${API_URL}${post.attributes.author.data.attributes.avatar.data.attributes.url}`
        : null,
    },
  }));

  return {
    posts,
    total: response.data.meta.pagination.total,
    pages: response.data.meta.pagination.pageCount,
  };
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const response = await api.get(`/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  const post = response.data.data[0];
  
  return {
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    excerpt: post.attributes.excerpt,
    content: post.attributes.content,
    coverImage: post.attributes.coverImage.data
      ? `${API_URL}${post.attributes.coverImage.data.attributes.url}`
      : null,
    publishedAt: post.attributes.publishedAt,
    author: post.attributes.author.data.attributes.name,
    category: post.attributes.category,
    tags: post.attributes.tags || [],
    readTime: post.attributes.readTime || '5 min read'
  };
};

// Contact Form API call
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const response = await api.post('/api/contact-submissions', {
    data: formData
  });
  return response.data;
};

// Services API calls
export const getServices = async (): Promise<Service[]> => {
  const response = await api.get('/api/services?populate=*');
  return response.data.data.map((service: any) => ({
    id: service.id,
    title: service.attributes.title,
    description: service.attributes.description,
    icon: service.attributes.icon,
    slug: service.attributes.slug,
    color: service.attributes.color || 'green.6',
  }));
};

export const getServiceBySlug = async (slug: string): Promise<Service> => {
  const response = await api.get(`/api/services?filters[slug][$eq]=${slug}&populate=*`);
  const service = response.data.data[0];
  
  return {
    title: service.attributes.title,
    description: service.attributes.description,
    icon: service.attributes.icon,
    slug: service.attributes.slug,
    color: service.attributes.color || 'green.6',
  };
};

export default api;