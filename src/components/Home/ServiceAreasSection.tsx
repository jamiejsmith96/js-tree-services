import React from 'react';
import { Box, Container, Title, Text, Grid, Card, Stack, Group, Badge, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { ServicePoint } from '../../types/home';
import InteractiveMap from '../Map/InteractiveMap';

interface ServiceAreasSectionProps {
  servicePoints: ServicePoint[];
  highlightedArea: string | null;
  onAreaHover: (area: string | null) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ 
  servicePoints, 
  highlightedArea, 
  onAreaHover 
}) => {
  return (
    <Box py="var(--space-xl)" className="service-areas-section">
      <Container size="xl">
        <Stack gap="var(--space-xl)">
          <Box className="section-decorator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Title order={2} ta="center">Service Areas</Title>
              <Text 
                c="dimmed" 
                size="xl" 
                ta="center" 
                maw={800} 
                mx="auto" 
                mt="md"
              >
                Professional tree services across Hampshire, with rapid response times 
                and comprehensive coverage in key areas.
              </Text>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              withBorder
              padding={0}
              radius="md"
              className="hover-card"
              style={{ height: '100%' }}
            >
              <div className="map-wrapper">
                <InteractiveMap highlightedArea={highlightedArea} />
              </div>
            </Card>
          </motion.div>

          <Grid gutter="var(--space-lg)">
            {servicePoints.map((point, index) => (
              <Grid.Col key={point.area} span={{ base: 12, sm: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    withBorder 
                    padding="var(--space-xl)"
                    radius="md"
                    className="hover-card"
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: highlightedArea === point.area ? 'translateY(-10px)' : 'none',
                      boxShadow: highlightedArea === point.area ? 'var(--shadow-lg)' : 'none'
                    }}
                    onMouseEnter={() => onAreaHover(point.area)}
                    onMouseLeave={() => onAreaHover(null)}
                  >
                    <Stack gap="var(--space-md)">
                      <Stack gap="md">
                        <Box>
                          <motion.div
                            animate={highlightedArea === point.area ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 15, 0]
                            } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            <IconMapPin
                              size={32}
                              color="var(--mantine-color-green-filled)"
                            />
                          </motion.div>
                          <Title order={3} mt="xs">{point.area}</Title>
                        </Box>
                        <Box>
                          <Badge
                            color="green"
                            size="lg"
                            variant="light"
                          >
                            {point.coverage}
                          </Badge>
                        </Box>
                      </Stack>

                      <Stack gap="xs">
                        <Group gap="xs">
                          <Box 
                            style={{ 
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: 'var(--mantine-color-green-filled)'
                            }}
                          />
                          <Text size="sm">Response time: {point.response}</Text>
                        </Group>
                      </Stack>

                      <Box 
                        style={{ 
                          borderTop: '1px solid var(--mantine-color-gray-2)',
                          paddingTop: 'var(--space-md)'
                        }}
                      >
                        <Text size="sm" fw={500} mb="xs">Available Services:</Text>
                        <Stack gap="xs">
                          {point.services.map((service) => (
                            <Group key={service} gap="xs">
                              <Box 
                                style={{ 
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  backgroundColor: 'var(--mantine-color-green-filled)'
                                }}
                              />
                              <Text size="sm">{service}</Text>
                            </Group>
                          ))}
                        </Stack>
                      </Box>

                      <Button
                        variant="light"
                        color="green"
                        component={Link}
                        to="/contact"
                        className="interactive-element"
                        mt="xs"
                        fullWidth
                      >
                        Request Service
                      </Button>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <Text c="dimmed" size="sm">
              * Response times are estimates and may vary based on current workload and weather conditions
            </Text>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};