import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Text, Box, Card, Stack } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import type { ServiceSummary } from '../types/service';
import { services } from '../data/content';

const ServiceCard: React.FC<{ service: ServiceSummary; index: number }> = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        withBorder 
        radius="md"
        padding="var(--space-xl)"
        component={Link}
        to={`/services/${service.slug || service.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover-card"
        style={{ height: '100%' }}
      >
        <Stack gap="var(--space-lg)">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ display: 'inline-block' }}
          >
            <Icon 
              size={48} 
              color={`var(--mantine-color-${service.color})`}
              style={{ strokeWidth: 1.5 }}
            />
          </motion.div>

          <div>
            <Title order={3} mb="var(--space-sm)">{service.title}</Title>
            <Text c="dimmed" size="lg">
              {service.description}
            </Text>
          </div>

          <Box 
            style={{ 
              marginTop: 'auto', 
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              color: `var(--mantine-color-${service.color})`,
              fontWeight: 500
            }}
          >
            Learn more
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <IconArrowUpRight size={18} />
            </motion.div>
          </Box>
        </Stack>
      </Card>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <Box py="var(--space-xl)">
      <Container size="xl">
        <Stack gap="var(--space-xl)">
          <Box className="section-decorator" ta="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title order={1}>Our Services</Title>
              <Text 
                c="dimmed" 
                size="xl" 
                maw={800} 
                mx="auto" 
                mt="var(--space-md)"
              >
                We provide comprehensive tree care services with a focus on safety, 
                quality, and customer satisfaction. Browse our services below.
              </Text>
            </motion.div>
          </Box>

          <motion.div layout>
            <Box
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </Box>
          </motion.div>

          <Box ta="center" mt="var(--space-xl)">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Text c="dimmed" size="lg" maw={600} mx="auto">
                Not sure which service you need? Contact us for a free consultation 
                and we'll help you determine the best solution for your needs.
              </Text>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Services;