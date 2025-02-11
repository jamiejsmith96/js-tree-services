import React, { useState } from 'react';
import { Container, Grid, Stack, Title, Text, Card, Badge, List, Button, Tabs, Group, Box } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { IconLeaf, IconTree, IconAxe, IconPhone, IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

// Create a motion component for the Card content
const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    style={{ height: '100%' }}
    whileHover={{ translateY: -5 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('residential');

  const services: Service[] = [
    {
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
      image: '/assets/services/tree-removal.jpg'
    },
    {
      id: 2,
      title: 'Commercial Tree Management',
      slug: 'commercial-tree-management',
      type: 'commercial',
      description: 'Comprehensive tree management solutions for commercial properties.',
      features: [
        'Site assessment',
        'Risk management',
        'Regular maintenance',
        'Emergency response available'
      ],
      image: '/assets/services/commercial.jpg'
    }
  ];

  const residentialServices = services.filter(service => service.type === 'residential');
  const commercialServices = services.filter(service => service.type === 'commercial');

  return (
    <Container size="xl" py={80}>
      <Stack gap={50}>
        <div>
          <Title order={1} size="3rem" ta="center" mb="xl">Our Services</Title>
          <Text size="xl" c="dimmed" maw={800} mx="auto" ta="center">
            Professional tree care services for residential and commercial properties. Our expert arborists ensure the health and safety of your trees.
          </Text>
        </div>

        <Tabs value={activeTab} onChange={setActiveTab} variant="pills">
          <Tabs.List justify="center" mb="xl">
            <Tabs.Tab value="residential">
              Residential Services
            </Tabs.Tab>
            <Tabs.Tab value="commercial">
              Commercial Services
            </Tabs.Tab>
          </Tabs.List>

          <AnimatePresence mode="wait">
            <Tabs.Panel value="residential">
              <Grid>
                {residentialServices.map((service) => (
                  <Grid.Col key={service.id} span={{ base: 12, sm: 6, lg: 4 }}>
                    <MotionWrapper>
                      <Card
                        withBorder
                        radius="md"
                        padding="lg"
                        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <Card.Section>
                          <img
                            src={service.image}
                            height={160}
                            alt={service.title}
                            style={{ objectFit: 'cover', width: '100%' }}
                          />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                          <Text fw={500} size="lg">{service.title}</Text>
                          <Badge color="green" variant="light">
                            Professional
                          </Badge>
                        </Group>

                        <Text size="sm" c="dimmed" mb="md">
                          {service.description}
                        </Text>

                        <List size="sm" spacing="sm" mb="xl">
                          {service.features.map((feature, i) => (
                            <List.Item key={i}>{feature}</List.Item>
                          ))}
                        </List>

                        <Button
                          variant="light"
                          color="green"
                          fullWidth
                          mt="auto"
                          component={Link}
                          to={`/services/${service.slug}`}
                          rightSection={<IconArrowRight size={16} />}
                        >
                          Learn More
                        </Button>
                      </Card>
                    </MotionWrapper>
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Panel>

            <Tabs.Panel value="commercial">
              <Grid>
                {commercialServices.map((service) => (
                  <Grid.Col key={service.id} span={{ base: 12, sm: 6, lg: 4 }}>
                    <MotionWrapper>
                      <Card
                        withBorder
                        radius="md"
                        padding="lg"
                        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <Card.Section>
                          <img
                            src={service.image}
                            height={160}
                            alt={service.title}
                            style={{ objectFit: 'cover', width: '100%' }}
                          />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                          <Text fw={500} size="lg">{service.title}</Text>
                          <Badge color="blue" variant="light">
                            Commercial
                          </Badge>
                        </Group>

                        <Text size="sm" c="dimmed" mb="md">
                          {service.description}
                        </Text>

                        <List size="sm" spacing="sm" mb="xl">
                          {service.features.map((feature, i) => (
                            <List.Item key={i}>{feature}</List.Item>
                          ))}
                        </List>

                        <Button
                          variant="light"
                          color="blue"
                          fullWidth
                          mt="auto"
                          component={Link}
                          to={`/services/${service.slug}`}
                          rightSection={<IconArrowRight size={16} />}
                        >
                          Learn More
                        </Button>
                      </Card>
                    </MotionWrapper>
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Panel>
          </AnimatePresence>
        </Tabs>

        <Card withBorder radius="md" padding="xl" mt={50}>
          <Stack gap="md" align="center" ta="center">
            <Title order={2}>Need Emergency Tree Service?</Title>
            <Text size="lg" c="dimmed" maw={600}>
              Available 24/7 for emergency tree removal and hazardous situation management.
            </Text>
            <Button
              size="lg"
              color="red"
              leftSection={<IconPhone size={20} />}
              component="a"
              href="tel:+441234567890"
            >
              Call Now
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default Services;