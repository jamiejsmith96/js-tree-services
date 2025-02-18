import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Grid, Stack, Title, Text, List, Button, Card, rem, Box, Modal } from '@mantine/core';
import { IconCheck, IconArrowLeft, IconPhone, IconCalendar } from '@tabler/icons-react';
import { ServiceDetail as IServiceDetail } from '../types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { MasonryGrid } from '../components/Gallery/MasonryGrid';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Mock data - replace with actual API data
const serviceData: Record<string, IServiceDetail> = {
  'tree-removal': {
    id: 1,
    title: 'Tree Removal',
    slug: 'tree-removal',
    description: 'Professional and safe tree removal services for your property.',
    features: [
      'Complete tree removal',
      'Stump removal options',
      'Clean-up included',
      'Free assessment'
    ],
    benefits: [
      'Improves property safety',
      'Prevents property damage',
      'Enhances landscape appearance',
      'Increases property value'
    ],
    safetyMeasures: [
      'Comprehensive risk assessment',
      'Advanced safety equipment',
      'Trained professionals',
      'Emergency protocols'
    ],
    insurance: {
      coverage: 'Full public liability insurance up to £5 million',
      amount: '£5,000,000'
    },
    image: '/assets/services/tree-removal.jpg',
    galleryImages: [
      '/assets/gallery/tree-removal-1.jpg',
      '/assets/gallery/tree-removal-2.jpg',
      '/assets/gallery/tree-removal-3.jpg'
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const renderGalleryItem = (imageUrl: string) => {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Card 
          padding="xs"
          radius="md" 
          className="hover-card"
          onClick={() => setSelectedImage(imageUrl)}
          style={{ cursor: 'pointer' }}
        >
          <Box style={{ overflow: 'hidden', borderRadius: 'var(--mantine-radius-md)' }}>
            <LazyLoadImage
              src={imageUrl}
              alt={service.title}
              effect="blur"
              style={{
                width: '100%',
                height: 280,
                objectFit: 'cover'
              }}
            />
          </Box>
        </Card>
      </motion.div>
    );
  };

  return (
    <Container size="xl" py="var(--space-xl)">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          component={Link}
          to="/services"
          variant="subtle"
          color="gray"
          leftSection={<IconArrowLeft size={16} />}
          mb="var(--space-lg)"
          className="interactive-element"
        >
          Back to Services
        </Button>
      </motion.div>

      <Grid gutter="var(--space-lg)">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="var(--space-xl)">
            <Box className="section-decorator">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Title order={1} mb="var(--space-md)">{service.title}</Title>
                <Text size="xl" c="dimmed">
                  {service.description}
                </Text>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Title order={2} mb="var(--space-md)">Key Benefits</Title>
              <List
                spacing="sm"
                size="lg"
                icon={
                  <IconCheck
                    style={{ width: rem(20), height: rem(20) }}
                    color="var(--mantine-color-green-5)"
                  />
                }
              >
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <List.Item className="interactive-element">
                      {benefit}
                    </List.Item>
                  </motion.div>
                ))}
              </List>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Title order={2} mb="var(--space-md)">Safety Measures</Title>
              <List
                spacing="sm"
                size="lg"
                icon={
                  <IconCheck
                    style={{ width: rem(20), height: rem(20) }}
                    color="var(--mantine-color-green-5)"
                  />
                }
              >
                {service.safetyMeasures.map((measure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <List.Item className="interactive-element">
                      {measure}
                    </List.Item>
                  </motion.div>
                ))}
              </List>
            </motion.div>

            <Box className="section-decorator">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Title order={2} mb="var(--space-xl)">Gallery</Title>
                <MasonryGrid columns={2}>
                  {service.galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {renderGalleryItem(image)}
                    </motion.div>
                  ))}
                </MasonryGrid>
              </motion.div>
            </Box>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card 
              withBorder 
              radius="md" 
              padding="var(--space-xl)" 
              className="hover-card"
            >
              <Stack gap="var(--space-lg)">
                <div>
                  <Title order={3} mb="var(--space-xs)">Insurance Coverage</Title>
                  <Text c="dimmed">{service.insurance.coverage}</Text>
                </div>

                <Stack gap="var(--space-md)">
                  <Button
                    size="lg"
                    leftSection={<IconCalendar size={20} />}
                    component={Link}
                    to="/contact"
                    className="interactive-element"
                  >
                    Book a Service
                  </Button>

                  <Button
                    size="lg"
                    variant="light"
                    leftSection={<IconPhone size={20} />}
                    component="a"
                    href="tel:+441234567890"
                    className="interactive-element"
                  >
                    Call Us
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </motion.div>
        </Grid.Col>
      </Grid>

      <Modal
        opened={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        size="xl"
        padding={0}
        centered
        withCloseButton={false}
      >
        <Box p={0}>
          <LazyLoadImage
            src={selectedImage || ''}
            alt={service.title}
            effect="blur"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default ServiceDetail;