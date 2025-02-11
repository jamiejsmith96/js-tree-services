import React from 'react';
import { Container, Title, Text, Grid, Card, Group, Stack, Badge, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconPhone, IconMailFilled } from '@tabler/icons-react';
import InteractiveMap from '../components/Map/InteractiveMap';
import { Link } from 'react-router-dom';

const MotionDiv = motion.div;

const Map: React.FC = () => {
  const servicePoints = [
    {
      area: 'Aldershot',
      response: '20 minutes',
      coverage: 'Full service area',
      services: ['Emergency Response', 'Regular Maintenance', 'Tree Removal', 'Crown Reduction']
    },
    {
      area: 'Farnborough',
      response: '25 minutes',
      coverage: 'Full service area',
      services: ['Emergency Response', 'Tree Removal', 'Crown Reduction', 'Stump Grinding']
    },
    {
      area: 'Fleet',
      response: '30 minutes',
      coverage: 'Selected services',
      services: ['Emergency Response', 'Tree Removal', 'Crown Reduction']
    },
    {
      area: 'Farnham',
      response: '35 minutes',
      coverage: 'Selected services',
      services: ['Emergency Response', 'Tree Removal']
    }
  ];

  return (
    <Container size="xl" py={80}>
      <Stack gap={50}>
        <div>
          <Title order={1} size="3rem" ta="center">Service Areas</Title>
          <Text c="dimmed" size="xl" ta="center" mt="md" maw={800} mx="auto">
            We provide professional tree services across Hampshire, with rapid response times 
            and comprehensive coverage in key areas.
          </Text>
        </div>

        <InteractiveMap />

        <Grid>
          {servicePoints.map((point, index) => (
            <Grid.Col key={point.area} span={{ base: 12, sm: 6, md: 3 }}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card withBorder padding="xl" radius="md">
                  <Stack gap="md">
                    <Title order={3}>{point.area}</Title>
                    <Group gap={8}>
                      <Badge color="green" size="lg">
                        {point.response} response
                      </Badge>
                      <Badge color="blue" size="lg">
                        {point.coverage}
                      </Badge>
                    </Group>
                    <Text size="sm" fw={500}>Available Services:</Text>
                    <Stack gap={8}>
                      {point.services.map((service) => (
                        <Text key={service} size="sm">
                          • {service}
                        </Text>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              </MotionDiv>
            </Grid.Col>
          ))}
        </Grid>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card withBorder padding="xl" radius="md">
                <Stack gap="md">
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
                  >
                    Emergency Hotline
                  </Button>
                </Stack>
              </Card>
            </MotionDiv>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card withBorder padding="xl" radius="md">
                <Stack gap="md">
                  <Title order={3}>Get a Free Quote</Title>
                  <Text>
                    Not sure if you're in our service area? Contact us for a free consultation 
                    and quote for your tree care needs.
                  </Text>
                  <Group>
                    <Button
                      component={Link}
                      to="/contact"
                      size="lg"
                      color="green"
                      leftSection={<IconMailFilled size={20} />}
                    >
                      Contact Us
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </MotionDiv>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Map;