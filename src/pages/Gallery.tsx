import React, { useState, useEffect } from 'react';
import { Container, Title, Text, Group, Button, Stack, Box } from '@mantine/core';
import { IconTag } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { GalleryItem, GalleryCategory, galleryCategories } from '../types/gallery';
import { MasonryGrid } from '../components/Gallery/MasonryGrid';
import { EnhancedCard } from '../components/Gallery/EnhancedCard';
import { EnhancedModal } from '../components/Gallery/EnhancedModal';
import '../styles/gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Ensure scrolling is enabled immediately
    const enableScroll = () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
      document.body.classList.remove('mantine-Drawer-opened');
    };

    // Enable scroll on mount
    enableScroll();

    // Mark initial load as complete after animations
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Re-enable scroll when category changes
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  }, [selectedCategory]);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Box
      style={{
        minHeight: '100vh',
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'auto',
        position: 'relative'
      }}
    >
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container 
        size="xl" 
        py="var(--space-xxxl)"
        style={{
          minHeight: '100vh',
          overflow: 'visible',
          position: 'relative'
        }}
      >
        <Stack gap="var(--space-xxxl)">
          <Box className="section-decorator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title order={1} ta="center">Our Work Gallery</Title>
              <Text 
                c="dimmed" 
                size="xl" 
                ta="center" 
                mt="var(--space-lg)"
                maw="var(--content-width-md)"
                mx="auto"
              >
                Browse through our portfolio of professional tree surgery projects
              </Text>
            </motion.div>
          </Box>

          <Stack gap="var(--space-xxl)">
            <Group justify="center" gap="md">
              {galleryCategories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    variant={selectedCategory === category ? 'filled' : 'light'}
                    color="green"
                    onClick={() => setSelectedCategory(category)}
                    leftSection={<IconTag size={16} />}
                    radius="xl"
                    size="lg"
                    className="interactive-element"
                    styles={{
                      root: {
                        backgroundColor: selectedCategory === category 
                          ? 'var(--mantine-color-green-filled)' 
                          : 'rgba(67, 160, 71, 0.1)',
                        color: selectedCategory === category 
                          ? 'white' 
                          : 'var(--mantine-color-green-filled)',
                        '&:not(:disabled):hover': {
                          backgroundColor: selectedCategory === category 
                            ? 'var(--mantine-color-green-filled-hover)' 
                            : 'rgba(67, 160, 71, 0.2)',
                        }
                      }
                    }}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </Group>

            <MasonryGrid>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <EnhancedCard
                    item={item}
                    onClick={() => setSelectedImage(item)}
                  />
                </motion.div>
              ))}
            </MasonryGrid>
          </Stack>
        </Stack>
      </Container>

      <EnhancedModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </Box>
  );
};

const galleryItems: GalleryItem[] = [
  // Tree Felling
  {
    id: 1,
    imageUrl: '/assets/gallery/image_fx_ (5).jpg',
    description: 'Complex tree removal in residential area',
    category: 'Tree Felling',
    location: 'Surrey',
    date: '2024-02-15'
  },
  {
    id: 2,
    imageUrl: '/assets/gallery/image_fx_ (6).jpg',
    description: 'Professional tree felling operation',
    category: 'Tree Felling',
    location: 'Hampshire',
    date: '2024-02-14'
  },
  {
    id: 3,
    imageUrl: '/assets/gallery/image_fx_ (7).jpg',
    description: 'Precision tree removal project',
    category: 'Tree Felling',
    location: 'Berkshire',
    date: '2024-02-13'
  },
  // Crown Reduction
  {
    id: 4,
    imageUrl: '/assets/gallery/image_fx_ (12).jpg',
    description: 'Expert crown reduction service',
    category: 'Crown Reduction',
    location: 'Surrey',
    date: '2024-02-12'
  },
  {
    id: 5,
    imageUrl: '/assets/gallery/image_fx_ (13).jpg',
    description: 'Crown maintenance for healthy growth',
    category: 'Crown Reduction',
    location: 'Hampshire',
    date: '2024-02-11'
  },
  // Stump Removal
  {
    id: 6,
    imageUrl: '/assets/gallery/image_fx_ (14).jpg',
    description: 'Complete stump grinding service',
    category: 'Stump Removal',
    location: 'Surrey',
    date: '2024-02-10'
  },
  {
    id: 7,
    imageUrl: '/assets/gallery/image_fx_ (15).jpg',
    description: 'Tree stump elimination',
    category: 'Stump Removal',
    location: 'Berkshire',
    date: '2024-02-09'
  },
  // Emergency Work
  {
    id: 8,
    imageUrl: '/assets/gallery/image_fx_ (16).jpg',
    description: 'Emergency storm damage response',
    category: 'Emergency Work',
    location: 'Surrey',
    date: '2024-02-08'
  },
  {
    id: 9,
    imageUrl: '/assets/gallery/image_fx_ (17).jpg',
    description: 'Urgent tree risk mitigation',
    category: 'Emergency Work',
    location: 'Hampshire',
    date: '2024-02-07'
  },
  // Before & After pairs
  {
    id: 10,
    category: 'Before & After',
    description: 'Major crown reduction transformation',
    location: 'Surrey',
    date: '2024-02-06',
    imageUrl: '/assets/gallery/image_fx_ (8).jpg',
    beforeAfter: {
      beforeImage: '/assets/gallery/image_fx_ (8).jpg',
      afterImage: '/assets/gallery/image_fx_ (9).jpg'
    }
  },
  {
    id: 11,
    category: 'Before & After',
    description: 'Complete stump removal process',
    location: 'Hampshire',
    date: '2024-02-05',
    imageUrl: '/assets/gallery/image_fx_ (10).jpg',
    beforeAfter: {
      beforeImage: '/assets/gallery/image_fx_ (10).jpg',
      afterImage: '/assets/gallery/image_fx_ (11).jpg'
    }
  },
  {
    id: 12,
    category: 'Before & After',
    description: 'Tree maintenance transformation',
    location: 'Berkshire',
    date: '2024-02-04',
    imageUrl: '/assets/gallery/image_fx_ (18).jpg',
    beforeAfter: {
      beforeImage: '/assets/gallery/image_fx_ (18).jpg',
      afterImage: '/assets/gallery/image_fx_ (19).jpg'
    }
  }
];

export default Gallery;