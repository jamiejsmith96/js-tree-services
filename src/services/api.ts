import axios from 'axios';
import type { ContactFormData } from '../types/contact';

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337';
export const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const DEFAULT_COVER_IMAGE = '/assets/gallery/image_fx_ (15).jpg';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getImageUrl = (path: string | null): string => {
  if (!path) return DEFAULT_COVER_IMAGE;
  return path.startsWith('http') ? path : `${API_URL}${path}`;
};

export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    await api.post('/api/contact', data);
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
};