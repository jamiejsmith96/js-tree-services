import React from 'react';
import { Box, Container, Title, Grid, Card, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconLeaf, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import type { ServiceSummary } from '../../types/service';

interface ServicesSectionProps {
  services: ServiceSummary[];
  maxDisplay?: number;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  services,
  maxDisplay = 4 // Show first 4 services by default
}) => {
  const displayServices = services.slice(0, maxDisplay);

  return (
    <Box bg="var(--background-light)" py="var(--space-xxxl)">
      <Container size="xl">
        <Box className="section-decorator" mb="var(--space-xxl)">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title order={2} ta="center">Our Services</Title>
            <Text 
              c="dimmed" 
              size="xl" 
              ta="center" 
              mt="var(--space-lg)"
              maw="var(--content-width-md)"
              mx="auto"
            >
              Professional tree surgery services tailored to your needs
            </Text>
          </motion.div>
        </Box>

        <Grid gutter={{ base: 'xl', sm: 'var(--space-xl)' }}>
          {displayServices.map((service, index) => (
            <Grid.Col span={{ base: 12, sm: 6 }} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  padding="var(--space-xl)"
                  radius="md" 
                  withBorder
                  className="hover-card"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ 
                      display: 'inline-block',
                      background: `var(--mantine-color-${service.color}-0)`,
                      padding: 'var(--space-md)',
                      borderRadius: '50%'
                    }}
                  >
                    <service.icon 
                      size={40}
                      style={{ 
                        color: `var(--mantine-color-${service.color}-filled)`,
                        strokeWidth: 1.5
                      }}
                    />
                  </motion.div>

                  <Title order={3} mt="var(--space-xl)">{service.title}</Title>
                  <Text mt="var(--space-md)" size="lg" c="dimmed">
                    {service.description}
                  </Text>

                  <Group mt="var(--space-xl)" justify="space-between">
                    <Button 
                      variant="light" 
                      color="green" 
                      rightSection={<IconArrowRight size={16} />}
                      component={Link}
                      to={`/services/${service.slug}`}
                      className="interactive-element"
                      styles={{
                        root: {
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateX(4px)'
                          }
                        }
                      }}
                    >
                      Learn More
                    </Button>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="subtle"
                        color="green"
                        rightSection={<IconLeaf size={16} />}
                        component={Link}
                        to="/contact"
                        className="interactive-element"
                      >
                        Book Now
                      </Button>
                    </motion.div>
                  </Group>

                  <Box 
                    mt="var(--space-xl)" 
                    pt="var(--space-md)" 
                    style={{ 
                      borderTop: '1px solid var(--mantine-color-gray-2)',
                      color: 'var(--mantine-color-dimmed)'
                    }}
                  >
                    <Text size="sm">Available 24/7 for emergency calls</Text>
                  </Box>
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
          style={{ 
            textAlign: 'center',
            marginTop: 'var(--space-xxl)'
          }}
        >
          <Button
            component={Link}
            to="/services"
            size="xl"
            variant="gradient"
            gradient={{ from: 'var(--gradient-start)', to: 'var(--gradient-end)' }}
            rightSection={<IconArrowRight size={20} />}
            className="interactive-element"
            styles={{
              root: {
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }
            }}
          >
            View All Services
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};