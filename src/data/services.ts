import { ServiceSummary, ServiceDetail } from '../types/service';
import { IconAxe, IconTree, IconLeaf, IconPhone } from '@tabler/icons-react';

export const services: ServiceSummary[] = [
  { 
    title: 'Tree Felling',
    slug: 'tree-felling',
    icon: IconAxe, 
    description: 'Professional and safe removal of trees of any size. We use advanced techniques and equipment to ensure controlled felling.',
    color: 'green.6'
  },
  { 
    title: 'Crown Reduction',
    slug: 'crown-reduction',
    icon: IconTree, 
    description: 'Expert reshaping and size management to maintain tree health and improve appearance while ensuring safety.',
    color: 'green.7'
  },
  { 
    title: 'Stump Grinding',
    slug: 'stump-grinding',
    icon: IconLeaf, 
    description: 'Complete stump removal service using state-of-the-art grinding equipment for a clean finish.',
    color: 'green.8'
  },
  { 
    title: '24/7 Emergency Service',
    slug: 'emergency-service',
    icon: IconPhone, 
    description: 'Round-the-clock emergency response for storm damage, fallen trees, and urgent tree care needs.',
    color: 'green.9'
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  'tree-felling': {
    id: 1,
    title: 'Tree Felling',
    slug: 'tree-felling',
    description: `Our expert tree felling service provides safe and efficient removal of trees 
    of any size. Using advanced techniques and modern equipment, we ensure controlled felling 
    that protects your property and surrounding landscape.`,
    features: [
      'Complete tree removal',
      'Safe directional felling',
      'Section felling for confined spaces',
      'Site clearance included'
    ],
    benefits: [
      'Removes hazardous trees',
      'Creates space for new development',
      'Improves safety and aesthetics',
      'Prevents property damage'
    ],
    safetyMeasures: [
      'Full risk assessment',
      'Advanced rigging techniques',
      'Traffic management when needed',
      'Emergency response procedures'
    ],
    insurance: {
      coverage: 'Full public liability insurance up to £5 million',
      amount: '£5,000,000'
    },
    image: '/assets/gallery/image_fx_ (5).jpg',
    galleryImages: [
      '/assets/gallery/image_fx_ (5).jpg',
      '/assets/gallery/image_fx_ (6).jpg',
      '/assets/gallery/image_fx_ (7).jpg'
    ]
  },
  'crown-reduction': {
    id: 2,
    title: 'Crown Reduction',
    slug: 'crown-reduction',
    description: `Our crown reduction service helps manage tree size while preserving its 
    natural shape and health. We carefully reduce the height and spread of the crown to improve 
    light penetration and reduce stress on branches.`,
    features: [
      'Precise branch reduction',
      'Maintains natural shape',
      'Improves light penetration',
      'Health assessment included'
    ],
    benefits: [
      'Reduces stress on branches',
      'Improves tree aesthetics',
      'Better light to property',
      'Promotes healthy growth'
    ],
    safetyMeasures: [
      'Careful branch selection',
      'Clean cutting techniques',
      'Disease prevention methods',
      'Expert climber safety'
    ],
    insurance: {
      coverage: 'Full public liability insurance up to £5 million',
      amount: '£5,000,000'
    },
    image: '/assets/gallery/image_fx_ (12).jpg',
    galleryImages: [
      '/assets/gallery/image_fx_ (12).jpg',
      '/assets/gallery/image_fx_ (13).jpg',
      '/assets/gallery/image_fx_ (14).jpg'
    ]
  },
  'stump-grinding': {
    id: 3,
    title: 'Stump Grinding',
    slug: 'stump-grinding',
    description: `Our professional stump grinding service eliminates unwanted tree stumps 
    completely. Using advanced grinding equipment, we remove the stump and root system below 
    ground level, preparing the area for new landscaping or construction.`,
    features: [
      'Deep stump removal',
      'Root system treatment',
      'Site restoration',
      'Multiple stump discounts'
    ],
    benefits: [
      'Prevents regrowth',
      'Eliminates trip hazards',
      'Prepares area for landscaping',
      'Removes pest habitats'
    ],
    safetyMeasures: [
      'Underground service checks',
      'Protective equipment use',
      'Debris containment',
      'Site protection measures'
    ],
    insurance: {
      coverage: 'Full public liability insurance up to £5 million',
      amount: '£5,000,000'
    },
    image: '/assets/gallery/image_fx_ (15).jpg',
    galleryImages: [
      '/assets/gallery/image_fx_ (15).jpg',
      '/assets/gallery/image_fx_ (16).jpg',
      '/assets/gallery/image_fx_ (17).jpg'
    ]
  },
  'emergency-service': {
    id: 4,
    title: '24/7 Emergency Service',
    slug: 'emergency-service',
    description: `Our 24/7 emergency tree service provides immediate response to urgent 
    situations. Whether it's storm damage, fallen trees, or dangerous branches, our experienced 
    team is ready to help at any time of day or night.`,
    features: [
      '24/7 availability',
      'Rapid response times',
      'Storm damage clearing',
      'Priority assessment'
    ],
    benefits: [
      'Immediate risk mitigation',
      'Prevents further damage',
      'Peace of mind',
      'Professional assessment'
    ],
    safetyMeasures: [
      'Emergency protocols',
      'Lighting equipment',
      'Traffic management',
      'Public safety measures'
    ],
    insurance: {
      coverage: 'Full public liability insurance up to £5 million',
      amount: '£5,000,000'
    },
    image: '/assets/gallery/image_fx_ (18).jpg',
    galleryImages: [
      '/assets/gallery/image_fx_ (18).jpg',
      '/assets/gallery/image_fx_ (19).jpg',
      '/assets/gallery/image_fx_ (20).jpg'
    ]
  }
};
