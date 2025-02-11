import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Stack, Title, Text, Badge, List, Button, Card, Image, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconCheck, IconArrowLeft, IconPhone, IconCalendar } from '@tabler/icons-react';
import { ServiceDetail as IServiceDetail } from '../types';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock data - replace with actual data fetching
  const service: IServiceDetail = {
    id: 1,
    title: 'Tree Removal',
    slug: 'tree-removal',
    type: 'residential',
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
  };

  if (!service) {
    return (
      <Container size="xl" py={80}>
        <Text>Service not found</Text>
        <Button 
          component={Link} 
          to="/services" 
          leftSection={<IconArrowLeft size={16} />}
        >
          Back to Services
        </Button>
      </Container>
    );
  }

  return (
    <Container size="xl" py={80}>
      <Button
        component={Link}
        to="/services"
        variant="subtle"
        color="gray"
        leftSection={<IconArrowLeft size={16} />}
        mb={40}
      >
        Back to Services
      </Button>

      <Grid gutter={40}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap={40}>
            <div>
              <Title order={1} size="2.5rem" mb="md">{service.title}</Title>
              <Text size="xl" c="dimmed">
                {service.description}
              </Text>
            </div>

            <div>
              <Title order={2} mb="md">Key Benefits</Title>
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
                  <List.Item key={index}>{benefit}</List.Item>
                ))}
              </List>
            </div>

            <div>
              <Title order={2} mb="md">Safety Measures</Title>
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
                  <List.Item key={index}>{measure}</List.Item>
                ))}
              </List>
            </div>

            <div>
              <Title order={2} mb="xl">Gallery</Title>
              <Grid>
                {service.galleryImages.map((image, index) => (
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
                    <Image
                      src={image}
                      radius="md"
                      alt={`${service.title} gallery image ${index + 1}`}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder shadow="sm" radius="md" padding="xl">
            <Stack gap="xl">
              <div>
                <Title order={3} mb="xs">Insurance Coverage</Title>
                <Text c="dimmed">{service.insurance.coverage}</Text>
              </div>

              <Stack gap="md">
                <Button
                  size="lg"
                  leftSection={<IconCalendar size={20} />}
                  component={Link}
                  to="/contact"
                >
                  Book a Service
                </Button>

                <Button
                  size="lg"
                  variant="light"
                  leftSection={<IconPhone size={20} />}
                  component="a"
                  href="tel:+441234567890"
                >
                  Call Us
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ServiceDetail;