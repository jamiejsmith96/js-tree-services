import React from 'react';
import { Container, Grid, Card, Text, Title, Box, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { MainBenefit } from '../../types/home';

interface MainBenefitsProps {
  benefits: MainBenefit[];
}

export const MainBenefits: React.FC<MainBenefitsProps> = ({ benefits }) => {
  return (
    <Box bg="var(--background-light)" py="var(--space-xl)">
      <Container size="xl">
        <Box className="section-decorator" mb="var(--space-xl)">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title order={2} ta="center">Why Choose Us</Title>
            <Text c="dimmed" size="xl" ta="center" mt="md">
              Professional service with a focus on quality and safety
            </Text>
          </motion.div>
        </Box>

        <Grid gutter="var(--space-lg)">
          {benefits.map((benefit, index) => (
            <Grid.Col key={benefit.title} span={{ base: 12, sm: 6, md: 3 }}>
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
                  <Stack align="center" gap="var(--space-md)">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      style={{ 
                        display: 'inline-block',
                        background: 'var(--mantine-color-green-0)',
                        padding: 'var(--space-md)',
                        borderRadius: '50%'
                      }}
                    >
                      <benefit.icon 
                        size={48} 
                        style={{ 
                          color: 'var(--mantine-color-green-filled)',
                          strokeWidth: 1.5
                        }} 
                      />
                    </motion.div>

                    <Stack gap="xs" align="center">
                      <Text 
                        size="xl" 
                        fw={600}
                        ta="center"
                        style={{ color: 'var(--mantine-color-dark-7)' }}
                      >
                        {benefit.title}
                      </Text>
                      <Text 
                        size="md" 
                        c="dimmed" 
                        ta="center"
                        style={{ lineHeight: 1.6 }}
                      >
                        {benefit.description}
                      </Text>
                    </Stack>
                  </Stack>

                  <motion.div
                    className="card-highlight"
                    initial={false}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'var(--mantine-color-green-filled)',
                      transformOrigin: 'left',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
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
        >
          <Text 
            c="dimmed" 
            ta="center" 
            mt="var(--space-xl)"
            size="lg"
            maw={700}
            mx="auto"
          >
            Our team of certified arborists provides expert tree care services
            with a commitment to safety, quality, and customer satisfaction.
          </Text>
        </motion.div>
      </Container>

      <style>
        {`
          .hover-card:hover .card-highlight {
            transform: scaleX(1);
          }
        `}
      </style>
    </Box>
  );
};