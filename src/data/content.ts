import { IconTree, IconLeaf, IconAxe, IconPhone, IconCertificate, IconShieldCheck, IconClock, IconTruck } from '@tabler/icons-react';
import { BlogPost, ServiceItem, GalleryItem, TestimonialItem, ServiceArea } from '../types';

export const COMPANY_INFO = {
  name: 'JS Tree Services',
  phone: '+441234567890',
  email: 'info@jstreeservices.com',
  address: {
    street: '123 Tree Street',
    city: 'Aldershot',
    region: 'Hampshire',
    postcode: 'GU11 1AA',
    country: 'GB',
  },
  hours: {
    weekday: '8am-6pm',
    saturday: '9am-4pm',
    sunday: 'Closed (Emergency Only)',
    emergency: '24/7',
  },
  social: {
    facebook: 'https://facebook.com/jstreeservices',
    twitter: 'https://twitter.com/jstreeservices',
    instagram: 'https://instagram.com/jstreeservices',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Tree Felling',
    slug: 'tree-felling',
    description: 'Professional and safe removal of trees of any size. We use advanced techniques and equipment to ensure controlled felling.',
    imageUrl: '/assets/services/tree-felling.jpg',
    features: [
      'Complete tree removal',
      'Sectional dismantling',
      'Site clearance',
      'Stump removal options',
    ],
    fullDescription: `Our professional tree felling service ensures safe and efficient removal of trees of any size. 
    Using advanced techniques and specialized equipment, we carefully dismantle and remove trees while protecting 
    surrounding structures and vegetation.`,
    benefits: [
      'Prevents damage to property',
      'Creates space for new landscaping',
      'Removes diseased trees',
      'Improves safety',
    ],
    safetyMeasures: [
      'Full site assessment',
      'Advanced rigging techniques',
      'Protected drop zones',
      'Trained supervisors',
    ],
    galleryImages: [
      '/assets/gallery/felling-1.jpg',
      '/assets/gallery/felling-2.jpg',
      '/assets/gallery/felling-3.jpg',
    ],
    insurance: {
      type: 'Comprehensive',
      coverage: 'Up to £5 million public liability',
    },
  },
  // Add more services...
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 1,
    name: 'Aldershot',
    coordinates: [51.2478, -0.7783],
    radius: 5000,
    color: '#43A047',
    response: '20 minutes',
    coverage: 'Full service area',
    services: ['Emergency Response', 'Regular Maintenance', 'Tree Removal', 'Crown Reduction'],
  },
  // Add more service areas...
];

export const BENEFITS = [
  {
    icon: IconCertificate,
    title: 'Certified Arborists',
    description: 'Fully qualified and experienced team',
  },
  {
    icon: IconShieldCheck,
    title: 'Fully Insured',
    description: 'Comprehensive insurance coverage',
  },
  {
    icon: IconClock,
    title: 'Prompt Service',
    description: 'Quick response and efficient work',
  },
  {
    icon: IconTruck,
    title: 'Free Site Visit',
    description: 'Complimentary assessment and quote',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "The team was incredibly professional and thorough. They handled our large oak removal with precision and care.",
    author: "John D.",
    location: "Aldershot",
    rating: 5,
  },
  // Add more testimonials...
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    imageUrl: '/assets/gallery/tree-felling-1.jpg',
    description: 'Large oak tree removal in Aldershot',
    category: 'Tree Felling',
    location: 'Aldershot',
    date: '2023-12-01',
  },
  // Add more gallery items...
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Essential Tree Care Tips for Winter',
    content: `Winter can be harsh on trees, especially in the UK climate. Learn how to protect your trees 
    during the cold months with our expert tips on winter tree care...`,
    author: 'James Smith',
    createdAt: '2023-12-15',
    category: 'Seasonal Advice',
    imageUrl: '/assets/blog/winter-tree-care.jpg',
    readTime: '5 min read',
    tags: ['winter care', 'maintenance', 'seasonal'],
  },
  // Add more blog posts...
];

export const FAQ_CATEGORIES = [
  {
    title: 'Services',
    items: [
      {
        question: 'What tree services do you provide?',
        answer: 'We offer comprehensive tree services including tree felling, crown reduction, stump grinding, and emergency work.',
        tags: ['services', 'general'],
      },
      // Add more FAQ items...
    ],
  },
  // Add more FAQ categories...
];