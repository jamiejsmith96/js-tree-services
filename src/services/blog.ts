import type { BlogPost } from '../types/blog';
import { api, getImageUrl } from './api';

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
    content: post.attributes.content,
    coverImage: getImageUrl(
      post.attributes.coverImage?.data?.attributes?.url || null
    ),
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
  
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  return {
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    content: post.attributes.content,
    coverImage: getImageUrl(
      post.attributes.coverImage?.data?.attributes?.url || null
    ),
    publishedAt: post.attributes.publishedAt,
    author: post.attributes.author.data.attributes.name,
    category: post.attributes.category,
    tags: post.attributes.tags || [],
    readTime: post.attributes.readTime || '5 min read'
  };
};
