import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Update with your Strapi API URL

export const fetchBlogPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/blog-posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

export const fetchGalleryItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/gallery-items`);
        return response.data;
    } catch (error) {
        console.error('Error fetching gallery items:', error);
        throw error;
    }
};

export const fetchServiceDetails = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data;
    } catch (error) {
        console.error('Error fetching service details:', error);
        throw error;
    }
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  // In a real application, this would send to your backend
  // For now, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Thank you for your enquiry. We will contact you shortly.' });
    }, 1000);
  });
};

export const subscribeToNewsletter = async (email: string) => {
  // Simulate newsletter subscription
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Successfully subscribed to newsletter!' });
    }, 1000);
  });
};