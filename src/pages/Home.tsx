import React from 'react';
import { Container, Title, Text, Button, Grid, Card, Group, Stack, Badge, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useIntersection } from '@mantine/hooks';
import { IconTree, IconLeaf, IconAxe, IconPhone, IconCertificate, IconShieldCheck, IconClock, IconTruck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import InteractiveMap from '../components/Map/InteractiveMap';

const Home: React.FC = () => {
  const { ref: serviceRef, entry } = useIntersection({
    threshold: 0.2,
  });

  const services = [
    { 
      title: 'Tree Felling', 
      icon: IconAxe, 
      description: 'Professional and safe removal of trees of any size. We use advanced techniques and equipment to ensure controlled felling.',
      color: 'green.6'
    },
    { 
      title: 'Crown Reduction', 
      icon: IconTree, 
      description: 'Expert reshaping and size management to maintain tree health and improve appearance while ensuring safety.',
      color: 'green.7'
    },
    { 
      title: 'Stump Grinding', 
      icon: IconLeaf, 
      description: 'Complete stump removal service using state-of-the-art grinding equipment for a clean finish.',
      color: 'green.8'
    },
    { 
      title: '24/7 Emergency Service', 
      icon: IconPhone, 
      description: 'Round-the-clock emergency response for storm damage, fallen trees, and urgent tree care needs.',
      color: 'green.9'
    },
  ];

  const benefits = [
    { icon: IconCertificate, title: 'Certified Arborists', description: 'Fully qualified and experienced team' },
    { icon: IconShieldCheck, title: 'Fully Insured', description: 'Comprehensive insurance coverage' },
    { icon: IconClock, title: 'Prompt Service', description: 'Quick response and efficient work' },
    { icon: IconTruck, title: 'Free Site Visit', description: 'Complimentary assessment and quote' },
  ];

  const testimonials = [
    { 
      text: "The team was incredibly professional and thorough. They handled our large oak removal with precision and care.", 
      author: "John D.", 
      location: "Aldershot",
      rating: 5
    },
    { 
      text: "Outstanding emergency service when a storm damaged our trees. Responsive, professional, and reasonably priced.", 
      author: "Sarah M.", 
      location: "Farnborough",
      rating: 5
    },
    { 
      text: "Excellent crown reduction work that preserved our tree's health while addressing our safety concerns.", 
      author: "Michael R.", 
      location: "Fleet",
      rating: 5
    },
  ];

  return (
    <>
      <Box
        style={{
          height: 700,
          backgroundColor: 'var(--mantine-color-green-9)',
          position: 'relative'
        }}
      >
        <Box 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container size="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack gap={32} style={{ maxWidth: 700, color: 'white' }}>
                <Title order={1} style={{ fontSize: '4rem', lineHeight: 1.1 }}>
                  Expert Tree Care Services
                </Title>
                <Text style={{ fontSize: '1.5rem' }}>
                  Professional tree surgery and maintenance in Aldershot and surrounding areas. 
                  Your trees deserve the best care.
                </Text>
                <Group mt="xl">
                  <Button 
                    component={Link} 
                    to="/contact" 
                    size="xl" 
                    variant="filled" 
                    color="green"
                    style={{
                      fontSize: '1.2rem',
                      height: 'auto',
                      padding: '1.2rem 2rem',
                      lineHeight: 1.25
                    }}
                  >
                    Get a Free Quote
                  </Button>
                  <Button 
                    component={Link} 
                    to="/services" 
                    size="xl" 
                    variant="outline" 
                    color="white"
                    style={{
                      fontSize: '1.2rem',
                      height: 'auto',
                      padding: '1.2rem 2rem',
                      lineHeight: 1.25
                    }}
                  >
                    Our Services
                  </Button>
                </Group>
              </Stack>
            </motion.div>
          </Container>
        </Box>
      </Box>

      <Container size="xl" my={80}>
        <Grid ref={serviceRef}>
          {benefits.map((benefit, index) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={benefit.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={entry?.isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card shadow="sm" padding="xl" radius="md" withBorder>
                  <benefit.icon size={48} color="var(--mantine-color-green-6)" />
                  <Text size="lg" fw={500} mt="md">{benefit.title}</Text>
                  <Text size="sm" c="dimmed">{benefit.description}</Text>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <Box bg="gray.0" py={80}>
        <Container size="xl">
          <Title order={2} ta="center" mb={50}>Our Comprehensive Services</Title>
          <Grid gutter="xl">
            {services.map((service, index) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 6 }} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card shadow="sm" padding="xl" radius="md" withBorder>
                    <service.icon size={40} color={`var(--mantine-color-${service.color})`} />
                    <Text size="xl" fw={500} mt="md">{service.title}</Text>
                    <Text size="md" c="dimmed" mt="sm">{service.description}</Text>
                    <Button 
                      component={Link}
                      to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="light"
                      color="green"
                      fullWidth
                      mt="md"
                    >
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container size="xl" my={80}>
        <Title order={2} ta="center" mb={50}>What Our Clients Say</Title>
        <Grid>
          {testimonials.map((testimonial, index) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card shadow="sm" padding="xl" radius="md" withBorder>
                  <Text size="lg" style={{ fontStyle: 'italic' }}>"{testimonial.text}"</Text>
                  <Group justify="space-between" mt="md">
                    <Box>
                      <Text fw={500}>{testimonial.author}</Text>
                      <Text size="sm" c="dimmed">{testimonial.location}</Text>
                    </Box>
                    <Badge color="green" size="lg">{testimonial.rating}/5</Badge>
                  </Group>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <Box bg="gray.0" py={80}>
        <Container size="xl">
          <Title order={2} ta="center" mb={50}>Service Areas</Title>
          <InteractiveMap />
        </Container>
      </Box>
    </>
  );
};

export default Home;