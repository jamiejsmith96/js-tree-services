import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Grid, Stack, Title, Text, List, Button, Card, Box, ThemeIcon } from '@mantine/core';
import { IconCheck, IconArrowLeft, IconPhone, IconCalendar } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { MasonryGrid } from '../components/Gallery/MasonryGrid';
import { ResponsiveImage } from '../components/common/ResponsiveImage';
import { services, serviceDetails } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug] : null;

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
          withBorder
          style={{ cursor: 'pointer' }}
        >
          <ResponsiveImage
            src={imageUrl}
            alt={service.title}
            height={280}
            radius="md"
            className="hover-image"
          />
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container size="xl" py="var(--space-xxxl)">
        <Stack gap="var(--space-xl)">
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
              className="interactive-element"
            >
              Back to Services
            </Button>
          </motion.div>

          <Grid gutter="var(--space-xl)">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="var(--space-xxl)">
                <Box className="section-decorator">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Title order={1} mb="var(--space-lg)">{service.title}</Title>
                    <Text 
                      c="dimmed" 
                      size="xl" 
                      maw="var(--content-width-md)"
                    >
                      {service.description}
                    </Text>
                  </motion.div>
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Title order={2} mb="var(--space-xl)">Key Benefits</Title>
                  <List
                    spacing="md"
                    size="lg"
                    icon={
                      <ThemeIcon size={28} radius="xl" color="green">
                        <IconCheck size={18} />
                      </ThemeIcon>
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
                  <Title order={2} mb="var(--space-xl)">Safety Measures</Title>
                  <List
                    spacing="md"
                    size="lg"
                    icon={
                      <ThemeIcon size={28} radius="xl" color="green">
                        <IconCheck size={18} />
                      </ThemeIcon>
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
                    <MasonryGrid>
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
                  <Stack gap="var(--space-xl)">
                    <Stack gap="var(--space-md)">
                      <Title order={3} mb="var(--space-md)">Ready to Get Started?</Title>
                      <Text c="dimmed" size="lg">
                        Contact us today for a free consultation and quote for your {service.title.toLowerCase()} needs.
                      </Text>

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
        </Stack>
      </Container>
    </>
  );
};

export default ServiceDetail;