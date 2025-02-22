import React from 'react';
import { Container, Title, Text, Grid, Card, Group, Stack, Badge, Button, Box, ThemeIcon } from '@mantine/core';
import { IconPhone, IconMailFilled, IconClock, IconMapPin, IconTruck, IconAward } from '@tabler/icons-react';
import InteractiveMap from '../components/Map/InteractiveMap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Map: React.FC = () => {
  const servicePoints = [
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

  const benefits = [
    {
      icon: IconTruck,
      title: 'Rapid Response',
      description: 'Quick arrival times across all service areas, with priority emergency response available 24/7.'
    },
    {
      icon: IconClock,
      title: 'Flexible Scheduling',
      description: 'Convenient appointment times to suit your schedule, including weekend services.'
    },
    {
      icon: IconAward,
      title: 'Local Expertise',
      description: 'Deep knowledge of local tree species and conditions in Hampshire.'
    }
  ];

  return (
    <>
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container size="xl" py="var(--space-xxxl)">
        <Stack gap="var(--space-xxxl)">
          <Box className="section-decorator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title order={1} ta="center">Service Areas</Title>
              <Text 
                c="dimmed" 
                size="xl" 
                ta="center" 
                mt="var(--space-lg)" 
                maw="var(--content-width-md)"
                mx="auto"
              >
                Comprehensive tree care services across Hampshire, with rapid response times 
                and expert local knowledge in every area we serve.
              </Text>
            </motion.div>
          </Box>

          {/* Interactive Map Section */}
          <Card 
            withBorder 
            padding="var(--space-xl)" 
            radius="md" 
            className="hover-card"
          >
            <Box className="map-container">
              <InteractiveMap />
            </Box>
          </Card>

          {/* Service Areas Grid */}
          <Grid gutter={{ base: 'xl', sm: 'var(--space-xl)' }}>
            {servicePoints.map((point, index) => (
              <Grid.Col key={point.area} span={{ base: 12, sm: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    withBorder 
                    padding="var(--space-xl)"
                    radius="md"
                    className="hover-card"
                  >
                    <Stack gap="var(--space-lg)">
                      <Group justify="space-between" align="flex-start">
                        <ThemeIcon size={40} radius="md" color="green">
                          <IconMapPin size={20} />
                        </ThemeIcon>
                        <Group gap="xs">
                          <Badge 
                            color="green" 
                            size="lg"
                            radius="md"
                          >
                            {point.response} response
                          </Badge>
                        </Group>
                      </Group>
                      
                      <div>
                        <Title order={3} mb="var(--space-xs)">{point.area}</Title>
                        <Text c="dimmed">
                          {point.details}
                        </Text>
                      </div>

                      <Stack gap="var(--space-xs)">
                        <Text fw={500}>Available Services:</Text>
                        {point.services.map((service) => (
                          <Text key={service} size="sm" c="dimmed">
                            • {service}
                          </Text>
                        ))}
                      </Stack>

                      <Button
                        variant="light"
                        color="green"
                        fullWidth
                        component={Link}
                        to="/contact"
                        className="interactive-element"
                      >
                        Request Service
                      </Button>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>

          {/* Benefits Section */}
          <Box>
            <Box className="section-decorator" mb="var(--space-xl)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Title order={2} ta="center">Why Choose Us</Title>
                <Text 
                  c="dimmed" 
                  size="xl" 
                  ta="center" 
                  mt="var(--space-lg)"
                  maw="var(--content-width-md)"
                  mx="auto"
                >
                  Experience reliable, professional tree care services with our expert team.
                </Text>
              </motion.div>
            </Box>

            <Grid gutter={{ base: 'xl', sm: 'var(--space-xl)' }}>
              {benefits.map((benefit, index) => (
                <Grid.Col key={benefit.title} span={{ base: 12, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      withBorder 
                      padding="var(--space-xl)"
                      radius="md"
                      className="hover-card"
                    >
                      <Stack align="center" gap="var(--space-lg)">
                        <ThemeIcon size={40} radius="md" color="green">
                          <benefit.icon size={20} />
                        </ThemeIcon>
                        <Stack gap="var(--space-xs)" align="center">
                          <Title order={3} ta="center">{benefit.title}</Title>
                          <Text ta="center">{benefit.description}</Text>
                        </Stack>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          {/* Call to Action Section */}
          <Grid gutter={{ base: 'xl', sm: 'var(--space-xl)' }}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  withBorder 
                  padding="var(--space-xl)"
                  radius="md"
                  className="hover-card"
                >
                  <Stack gap="var(--space-lg)" align="center">
                    <Title order={3} ta="center">Need Emergency Service?</Title>
                    <Text ta="center">
                      Our emergency team is available 24/7 for urgent tree care situations 
                      across all our service areas.
                    </Text>
                    <Button
                      component="a"
                      href="tel:+441234567890"
                      size="lg"
                      color="red"
                      leftSection={<IconPhone size={20} />}
                      className="interactive-element"
                    >
                      Emergency Hotline
                    </Button>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card 
                  withBorder 
                  padding="var(--space-xl)"
                  radius="md"
                  className="hover-card"
                >
                  <Stack gap="var(--space-lg)" align="center">
                    <Title order={3} ta="center">Get a Free Quote</Title>
                    <Text ta="center">
                      Not sure if you're in our service area? Contact us for a free consultation 
                      and quote for your tree care needs.
                    </Text>
                    <Button
                      component={Link}
                      to="/contact"
                      size="lg"
                      leftSection={<IconMailFilled size={20} />}
                      className="interactive-element"
                    >
                      Contact Us
                    </Button>
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

export default Map;