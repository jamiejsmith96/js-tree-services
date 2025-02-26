import { MainBenefit, Testimonial, ServicePoint } from '../types/home';
import {
  IconCertificate, IconShieldCheck, IconClock, IconTruck
} from '@tabler/icons-react';

export const mainBenefits: MainBenefit[] = [
  { icon: IconCertificate, title: 'Certified Arborists', description: 'Fully qualified and experienced team' },
  { icon: IconShieldCheck, title: 'Fully Insured', description: 'Comprehensive insurance coverage' },
  { icon: IconClock, title: 'Prompt Service', description: 'Quick response and efficient work' },
  { icon: IconTruck, title: 'Free Site Visit', description: 'Complimentary assessment and quote' },
];

export const testimonials: Testimonial[] = [
  { 
    content: "The team was incredibly professional and thorough. They handled our large oak removal with precision and care.", 
    author: "John D.", 
    location: "Aldershot",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  { 
    content: "Outstanding emergency service when a storm damaged our trees. Responsive, professional, and reasonably priced.", 
    author: "Sarah M.", 
    location: "Farnborough",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  { 
    content: "Excellent crown reduction work that preserved our tree's health while addressing our safety concerns.", 
    author: "Michael R.", 
    location: "Fleet",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3"
  },
];

export const servicePoints: ServicePoint[] = [
  {
    area: 'Aldershot',
    response: '20 minutes',
    coverage: 'Full service area',
    services: ['Emergency Response', 'Tree Removal', 'Crown Reduction', 'Stump Grinding', 'Regular Maintenance', 'Tree Health Care'],
  },
  {
    area: 'Farnborough',
    response: '25 minutes',
    coverage: 'Full service area',
    services: ['Emergency Response', 'Tree Removal', 'Crown Reduction', 'Stump Grinding', 'Regular Maintenance', 'Tree Health Care'],
  },
  {
    area: 'Fleet',
    response: '30 minutes',
    coverage: 'Full service area',
    services: ['Emergency Response', 'Tree Removal', 'Crown Reduction', 'Stump Grinding', 'Regular Maintenance', 'Tree Health Care'],
  },
  {
    area: 'Farnham',
    response: '35 minutes',
    coverage: 'Full service area',
    services: ['Emergency Response', 'Tree Removal', 'Crown Reduction', 'Stump Grinding', 'Regular Maintenance', 'Tree Health Care'],
  }
];