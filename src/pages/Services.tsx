import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Text, Box, Card, Stack } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
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
        to={`/services/${service.slug}`}
        className="hover-card"
        style={{ height: '100%' }}
      >
        <Stack gap="var(--space-xl)">
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
            <Icon 
              size={40} 
              style={{ 
                color: `var(--mantine-color-${service.color}-filled)`,
                strokeWidth: 1.5
              }}
            />
          </motion.div>

          <div>
            <Title order={3} mb="var(--space-md)">{service.title}</Title>
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
              color: `var(--mantine-color-${service.color}-filled)`,
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
              <Title order={1} ta="center">Our Services</Title>
              <Text 
                c="dimmed" 
                size="xl" 
                ta="center" 
                mt="var(--space-lg)"
                maw="var(--content-width-md)"
                mx="auto"
              >
                We provide comprehensive tree care services with a focus on safety, 
                quality, and customer satisfaction. Browse our services below.
              </Text>
            </motion.div>
          </Box>

          <Box
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
            }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </Box>

          <Box ta="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Text 
                c="dimmed" 
                size="lg" 
                maw="var(--content-width-md)" 
                mx="auto"
              >
                Not sure which service you need? Contact us for a free consultation 
                and we'll help you determine the best solution for your needs.
              </Text>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Services;