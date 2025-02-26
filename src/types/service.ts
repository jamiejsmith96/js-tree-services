import { Icon } from '@tabler/icons-react';

export interface ServiceSummary {
  title: string;
  slug: string;
  icon: Icon;
  description: string;
  color: string;
}

export interface ServiceDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  safetyMeasures: string[];
  image: string;
  galleryImages: string[];
}

export interface ServiceRequest {
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: {
    street: string;
    city: string;
    postcode: string;
  };
  date: Date | null;
  description: string;
  attachments?: File[];
  preferredContact: 'email' | 'phone';
  urgency: 'normal' | 'urgent';
}

export interface ServiceBookingFormValues {
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: {
    street: string;
    city: string;
    postcode: string;
  };
  date: Date | null;
  description: string;
  preferredContact: 'email' | 'phone';
  urgency: 'normal' | 'urgent';
}