import { TablerIconsProps } from '@tabler/icons-react';

export interface MainBenefit {
  icon: (props: TablerIconsProps) => JSX.Element;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  color: string;
  slug?: string;
}

export interface Testimonial {
  content: string;
  author: string;
  location: string;
  rating: number;
  avatar?: string;
}

export interface ServicePoint {
  area: string;
  response: string;
  coverage: string;
  services: string[];
  details?: string;
}