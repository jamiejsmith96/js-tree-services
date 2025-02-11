import React, { useState } from 'react';
import { Container, Title, Image, Text, Group, Button, Stack, SimpleGrid, Overlay, Modal } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { IconZoomIn, IconTag } from '@tabler/icons-react';
import { GalleryItem } from '../types';

const MotionDiv = motion.div;

const categories = [
  'All',
  'Tree Felling',
  'Crown Reduction',
  'Stump Removal',
  'Emergency Work',
  'Before & After'
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: '/assets/gallery/tree-felling-1.jpg',
      description: 'Large oak tree removal in Aldershot',
      category: 'Tree Felling',
      location: 'Aldershot',
      date: '2023-12-01'
    },
    {
      id: 2,
      imageUrl: '/assets/gallery/crown-1.jpg',
      description: 'Crown reduction of mature beech tree',
      category: 'Crown Reduction',
      location: 'Farnborough',
      date: '2023-11-15'
    },
    // Add more gallery items as needed
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Container size="xl" py={80}>
      <Stack gap={40}>
        <div>
          <Title order={1} size="3rem" ta="center">Our Work Gallery</Title>
          <Text c="dimmed" size="xl" ta="center" mt="md">
            Browse through our portfolio of professional tree surgery projects
          </Text>
        </div>

        <Group justify="center" gap="xs">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'filled' : 'light'}
              color={selectedCategory === category ? 'green' : 'gray'}
              onClick={() => setSelectedCategory(category)}
              leftSection={<IconTag size={16} />}
              radius="xl"
              size="md"
            >
              {category}
            </Button>
          ))}
        </Group>

        <AnimatePresence mode="wait">
          <SimpleGrid
            key={selectedCategory}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing="lg"
          >
            {filteredItems.map((item, index) => (
              <MotionDiv
                key={item.id}
                style={{
                  padding: '16px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
              >
                <div style={{ position: 'relative' }}>
                  <Image
                    src={item.imageUrl}
                    height={280}
                    alt={item.description}
                  />
                  <Overlay
                    opacity={0}
                    style={{ 
                      color: '#000',
                      zIndex: 1,
                      '&:hover': {
                        opacity: 0.7,
                        transition: 'opacity 200ms ease'
                      }
                    }}
                  >
                    <Group justify="center" style={{ height: '100%' }}>
                      <IconZoomIn size={32} color="white" />
                    </Group>
                  </Overlay>
                </div>

                <Stack mt="md" gap={8}>
                  <Text fw={500}>{item.description}</Text>
                  <Group justify="space-between" align="center">
                    <Text size="sm" c="dimmed">{item.category}</Text>
                    <Text size="sm" c="dimmed">{item.date}</Text>
                  </Group>
                </Stack>
              </MotionDiv>
            ))}
          </SimpleGrid>
        </AnimatePresence>

        {selectedImage && (
          <Modal
            opened={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            size="xl"
            padding={0}
            centered
          >
            <div style={{ position: 'relative' }}>
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.description}
                fit="contain"
                style={{ maxHeight: '80vh' }}
              />
              <Stack gap={8} mt="md" style={{ padding: '20px', color: 'white' }}>
                <Group justify="space-between">
                  <Text fw={500}>{selectedImage.description}</Text>
                  <Text size="sm">{selectedImage.date}</Text>
                </Group>
                <Text c="dimmed" size="sm">{selectedImage.category}</Text>
              </Stack>
            </div>
          </Modal>
        )}
      </Stack>
    </Container>
  );
};

export default Gallery;