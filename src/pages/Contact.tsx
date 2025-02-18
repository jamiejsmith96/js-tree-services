import React from 'react';
import { Container, Title, Text, Grid, Card, Group, Stack, ThemeIcon, SimpleGrid, Box } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconClock, IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { notifications } from '@mantine/notifications';
import InteractiveMap from '../components/Map/InteractiveMap';
import { ContactForm } from '../components/Contact/ContactForm';
import { submitContactForm } from '../services/api';

const contactInfo = [
  {
    icon: IconPhone,
    title: 'Phone',
    content: '+44 1234 567890',
    link: 'tel:+441234567890',
    color: 'blue'
  },
  {
    icon: IconMail,
    title: 'Email',
    content: 'info@jstreeservices.com',
    link: 'mailto:info@jstreeservices.com',
    color: 'green'
  },
  {
    icon: IconMapPin,
    title: 'Address',
    content: '123 Tree Street, Aldershot, Hampshire, GU11 1AA',
    link: 'https://maps.google.com/?q=123+Tree+Street+Aldershot+Hampshire',
    color: 'orange'
  },
  {
    icon: IconClock,
    title: 'Hours',
    content: 'Mon-Fri: 8am-6pm\nSat: 9am-4pm\nEmergency: 24/7',
    color: 'grape'
  },
];

const Contact = () => {
  const handleFormSubmit = async (values: any) => {
    try {
      await submitContactForm(values);
      notifications.show({
        title: 'Success!',
        message: 'Thank you for your enquiry. We will contact you shortly.',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong. Please try again or call us directly.',
        color: 'red',
      });
      throw error;
    }
  };

  return (
    <Box>
      <Container size="xl" py="var(--space-xl)">
        <Stack gap="var(--space-xl)">
          <Box className="section-decorator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title order={1} ta="center">Contact Us</Title>
              <Text 
                c="dimmed" 
                size="xl" 
                ta="center" 
                mt="md" 
                maw={800} 
                mx="auto"
              >
                Get in touch with our expert team for a free quote or emergency service. 
                We're here to help with all your tree care needs.
              </Text>
            </motion.div>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="var(--space-lg)">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  withBorder
                  padding="var(--space-xl)"
                  radius="md"
                  className="hover-card"
                  onClick={() => info.link && window.open(info.link, '_blank')}
                  style={{
                    cursor: info.link ? 'pointer' : 'default',
                    height: '100%',
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <ThemeIcon 
                      size={50} 
                      radius="md" 
                      color={info.color}
                      variant="light" 
                      className="interactive-element"
                    >
                      <info.icon size={26} />
                    </ThemeIcon>
                  </motion.div>
                  
                  <Stack mt="var(--space-md)" gap="xs">
                    <Text size="xl" fw={600}>{info.title}</Text>
                    <Text 
                      size="sm" 
                      c="dimmed" 
                      style={{ 
                        whiteSpace: 'pre-line',
                        lineHeight: 1.6
                      }}
                    >
                      {info.content}
                    </Text>
                  </Stack>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>

          <Grid gutter="var(--space-lg)">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <ContactForm onSubmit={handleFormSubmit} />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="var(--space-lg)">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card 
                    withBorder 
                    padding="var(--space-xl)" 
                    radius="md" 
                    className="hover-card"
                    bg="var(--mantine-color-red-0)"
                  >
                    <Title order={2} mb="var(--space-md)">Emergency Service</Title>
                    <Text size="lg" mb="var(--space-xl)">
                      Need urgent tree care? Our emergency team is available 24/7 for immediate assistance.
                    </Text>
                    <Group gap="var(--space-md)">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Card
                          component="a"
                          href="tel:+441234567890"
                          padding="var(--space-md)"
                          radius="md"
                          withBorder
                          className="hover-card"
                        >
                          <Group gap="xs">
                            <IconPhone size={20} />
                            <Text size="lg" fw={500}>Emergency Hotline</Text>
                          </Group>
                        </Card>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Card
                          component="a"
                          href="https://wa.me/441234567890"
                          padding="var(--space-md)"
                          radius="md"
                          withBorder
                          className="hover-card"
                        >
                          <Group gap="xs">
                            <IconBrandWhatsapp size={20} color="green" />
                            <Text size="lg" fw={500}>WhatsApp</Text>
                          </Group>
                        </Card>
                      </motion.div>
                    </Group>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card 
                    withBorder 
                    padding="var(--space-xl)" 
                    radius="md" 
                    className="hover-card"
                  >
                    <Title order={2} mb="var(--space-xl)">Service Area</Title>
                    <Box 
                      style={{ 
                        height: '400px',
                        borderRadius: 'var(--mantine-radius-md)',
                        overflow: 'hidden'
                      }}
                    >
                      <InteractiveMap />
                    </Box>
                  </Card>
                </motion.div>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
