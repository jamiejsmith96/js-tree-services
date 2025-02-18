import { TablerIconsProps } from '@tabler/icons-react';

export interface ServiceSummary {
  title: string;
  icon: React.FC<TablerIconsProps>;
  description: string;
  color: string;
  slug?: string;
}

export interface ServiceDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  safetyMeasures: string[];
  insurance: {
    coverage: string;
    amount: string;
  };
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
  preferredDate: Date;
  alternativeDate?: Date;
  description: string;
  attachments?: string[];
}