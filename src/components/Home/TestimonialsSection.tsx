import React from 'react';
import { Box, Container, Title, Text, Group, Stack, Card, Avatar } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconQuote, IconStar } from '@tabler/icons-react';
import { Testimonial } from '../../types/home';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Card 
        withBorder 
        padding="var(--space-xl)" 
        radius="md" 
        className="hover-card"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Stack gap="var(--space-xl)" style={{ height: '100%' }}>
          <Box style={{ flex: 1 }}>
            <Group gap="xs" mb="xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <IconStar
                    size={20}
                    fill={i < testimonial.rating ? 'var(--mantine-color-yellow-4)' : 'transparent'}
                    style={{
                      color: i < testimonial.rating ? 'var(--mantine-color-yellow-4)' : 'var(--mantine-color-gray-4)',
                    }}
                  />
                </motion.div>
              ))}
            </Group>

            <Box pos="relative">
              <IconQuote 
                size={40} 
                style={{ 
                  position: 'absolute',
                  top: '-1rem',
                  left: '-1rem',
                  opacity: 0.2,
                  transform: 'rotate(170deg)',
                  color: 'var(--accent-color)'
                }} 
              />
              <Text size="lg" style={{ fontStyle: 'italic' }}>
                {testimonial.content}
              </Text>
            </Box>
          </Box>

          <Group gap="md" align="center">
            <Avatar 
              src={testimonial.avatar} 
              alt={testimonial.author}
              size="lg"
              radius="xl"
            />
            <div>
              <Text fw={500} size="lg">{testimonial.author}</Text>
              <Text size="sm" c="dimmed">{testimonial.location}</Text>
            </div>
          </Group>
        </Stack>
      </Card>
    </motion.div>
  );
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <Box py="var(--space-xl)" bg="var(--background-light)">
      <Container size="xl">
        <Stack gap="var(--space-xl)">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title order={2} ta="center">What Our Clients Say</Title>
            <Text 
              c="dimmed" 
              size="xl" 
              ta="center" 
              maw={800} 
              mx="auto" 
              mt="md"
            >
              Read testimonials from our satisfied customers who have experienced 
              our professional tree care services.
            </Text>
          </motion.div>

          <Box
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.author} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};