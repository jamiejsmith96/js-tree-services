import React from 'react';
import { Container, Title, Text, Grid, Card, Group, Stack, Badge, Button, Box } from '@mantine/core';
import { IconPhone, IconMailFilled, IconClock, IconMapPin, IconTruck, IconAward } from '@tabler/icons-react';
import InteractiveMap from '../components/Map/InteractiveMap';
import { Link } from 'react-router-dom';

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
    <Container size="xl" py="var(--space-xl)">
      <Stack gap="var(--space-xl)">
        <Box className="section-decorator">
          <Title order={1} ta="center" className="fade-in-up">Service Areas</Title>
          <Text 
            c="dimmed" 
            size="xl" 
            ta="center" 
            mt="var(--space-md)" 
            maw={800} 
            mx="auto" 
            className="fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Comprehensive tree care services across Hampshire, with rapid response times 
            and expert local knowledge in every area we serve.
          </Text>
        </Box>

        {/* Interactive Map Section */}
        <Card 
          withBorder 
          padding="var(--space-lg)" 
          radius="md" 
          className="hover-card fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Box style={{ height: 400 }}>
            <InteractiveMap />
          </Box>
        </Card>

        {/* Service Areas Grid */}
        <Grid gutter="var(--space-md)">
          {servicePoints.map((point, index) => (
            <Grid.Col key={point.area} span={{ base: 12, sm: 6, md: 3 }}>
              <Card 
                withBorder 
                padding="var(--space-lg)"
                radius="md"
                className="hover-card fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <Stack gap="var(--space-md)">
                  <Group justify="space-between">
                    <IconMapPin size={24} color="var(--mantine-color-green-filled)" />
                    <Group gap="var(--space-xs)">
                      <Badge 
                        color="green" 
                        size="lg"
                        styles={{
                          root: {
                            padding: 'var(--space-xs) var(--space-sm)'
                          }
                        }}
                      >
                        {point.response} response
                      </Badge>
                    </Group>
                  </Group>
                  
                  <div>
                    <Title order={3}>{point.area}</Title>
                    <Text size="sm" mt="xs" c="dimmed">
                      {point.details}
                    </Text>
                  </div>

                  <Stack gap="var(--space-xs)">
                    <Text size="sm" fw={500}>Available Services:</Text>
                    {point.services.map((service) => (
                      <Text key={service} size="sm" className="interactive-element">
                        • {service}
                      </Text>
                    ))}
                  </Stack>

                  <Button
                    variant="light"
                    color="green"
                    fullWidth
                    size="sm"
                    className="interactive-element"
                    component={Link}
                    to="/contact"
                  >
                    Request Service
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Benefits Section */}
        <Grid gutter="var(--space-md)">
          {benefits.map((benefit, index) => (
            <Grid.Col key={benefit.title} span={{ base: 12, md: 4 }}>
              <Card 
                withBorder 
                padding="var(--space-lg)"
                radius="md"
                className="hover-card fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <Stack gap="var(--space-md)">
                  <benefit.icon size={32} color="var(--mantine-color-green-filled)" />
                  <Title order={3}>{benefit.title}</Title>
                  <Text>{benefit.description}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Grid gutter="var(--space-md)">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card 
              withBorder 
              padding="var(--space-lg)"
              radius="md"
              className="hover-card fade-in-up"
            >
              <Stack gap="var(--space-md)">
                <Title order={3}>Need Emergency Service?</Title>
                <Text>
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
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card 
              withBorder 
              padding="var(--space-lg)"
              radius="md"
              className="hover-card fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <Stack gap="var(--space-md)">
                <Title order={3}>Get a Free Quote</Title>
                <Text>
                  Not sure if you're in our service area? Contact us for a free consultation 
                  and quote for your tree care needs.
                </Text>
                <Button
                  component={Link}
                  to="/contact"
                  size="lg"
                  color="green"
                  leftSection={<IconMailFilled size={20} />}
                  className="interactive-element"
                >
                  Contact Us
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Map;