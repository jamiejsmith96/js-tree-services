import { MainBenefit, Service, Testimonial, ServicePoint } from '../types/home';
import {
  IconCertificate, IconShieldCheck, IconClock, IconTruck,
  IconAxe, IconTree, IconLeaf, IconPhone
} from '@tabler/icons-react';

export const mainBenefits: MainBenefit[] = [
  { icon: IconCertificate, title: 'Certified Arborists', description: 'Fully qualified and experienced team' },
  { icon: IconShieldCheck, title: 'Fully Insured', description: 'Comprehensive insurance coverage' },
  { icon: IconClock, title: 'Prompt Service', description: 'Quick response and efficient work' },
  { icon: IconTruck, title: 'Free Site Visit', description: 'Complimentary assessment and quote' },
];

export const services: Service[] = [
  { 
    title: 'Tree Felling', 
    icon: IconAxe, 
    description: 'Professional and safe removal of trees of any size. We use advanced techniques and equipment to ensure controlled felling.',
    color: 'green.6'
  },
  { 
    title: 'Crown Reduction', 
    icon: IconTree, 
    description: 'Expert reshaping and size management to maintain tree health and improve appearance while ensuring safety.',
    color: 'green.7'
  },
  { 
    title: 'Stump Grinding', 
    icon: IconLeaf, 
    description: 'Complete stump removal service using state-of-the-art grinding equipment for a clean finish.',
    color: 'green.8'
  },
  { 
    title: '24/7 Emergency Service', 
    icon: IconPhone, 
    description: 'Round-the-clock emergency response for storm damage, fallen trees, and urgent tree care needs.',
    color: 'green.9'
  },
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
    services: ['Emergency Response', 'Regular Maintenance', 'Tree Removal', 'Crown Reduction'],
    details: 'Primary service area with fastest response times. Complete range of services available.',
  },
  {
    area: 'Farnborough',
    response: '25 minutes',
    coverage: 'Full service area',
    services: ['Emergency Response', 'Tree Removal', 'Crown Reduction', 'Stump Grinding'],
    details: 'Full coverage area with comprehensive tree surgery services and rapid response.',
  },
  {
    area: 'Fleet',
    response: '30 minutes',
    coverage: 'Selected services',
    services: ['Emergency Response', 'Tree Removal', 'Crown Reduction'],
    details: 'Regular service area with core tree care solutions available.',
  },
  {
    area: 'Farnham',
    response: '35 minutes',
    coverage: 'Selected services',
    services: ['Emergency Response', 'Tree Removal'],
    details: 'Extended coverage area for essential tree services and emergency response.',
  }
];