import axios from 'axios';
import type { BlogPost } from '../types/blog';

const API_URL = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

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
    author: post.attributes.author.data.attributes.name,
    category: post.attributes.category,
    tags: post.attributes.tags || [],
    readTime: post.attributes.readTime || '5 min read',
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
