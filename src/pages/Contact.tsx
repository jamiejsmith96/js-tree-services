import React, { useState } from 'react';
import { Container, Title, Text, Grid, Card, TextInput, Textarea, Button, Group, Stack, ThemeIcon, SimpleGrid, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPhone, IconMail, IconMapPin, IconClock, IconBrandWhatsapp, IconSend, IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { notifications } from '@mantine/notifications';
import InteractiveMap from '../components/Map/InteractiveMap';
import { submitContactForm } from '../services/api';
const MotionDiv = motion.div;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'Name must be at least 2 characters' : null,
      email: (value) => !/^\S+@\S+$/.test(value) ? 'Invalid email address' : null,
      phone: (value) => !/^[\d\s+()-]{10,}$/.test(value) ? 'Invalid phone number' : null,
      message: (value) => value.trim().length < 10 ? 'Message must be at least 10 characters' : null,
    },
  });

  const contactInfo = [
    {
      icon: IconPhone,
      title: 'Phone',
      content: '+44 1234 567890',
      link: 'tel:+441234567890',
    },
    {
      icon: IconMail,
      title: 'Email',
      content: 'info@jstreeservices.com',
      link: 'mailto:info@jstreeservices.com',
    },
    {
      icon: IconMapPin,
      title: 'Address',
      content: '123 Tree Street, Aldershot, Hampshire, GU11 1AA',
      link: 'https://maps.google.com/?q=123+Tree+Street+Aldershot+Hampshire',
    },
    {
      icon: IconClock,
      title: 'Hours',
      content: 'Mon-Fri: 8am-6pm\nSat: 9am-4pm\nEmergency: 24/7',
    },
  ];

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(values);
      notifications.show({
        title: 'Success!',
        message: 'Thank you for your enquiry. We will contact you shortly.',
        color: 'green',
        icon: <IconCheck size={16} />,
      });
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong. Please try again or call us directly.',
        color: 'red',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container size="xl" py={80}>
      <Stack gap={60}>
        <div>
          <Title order={1} size="3rem" ta="center">Contact Us</Title>
          <Text c="dimmed" size="xl" ta="center" mt="md" maw={800} mx="auto">
            Get in touch with our expert team for a free quote or emergency service. 
            We're here to help with all your tree care needs.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          {contactInfo.map((info, index) => (
            <MotionDiv
              key={index}
              style={{
                padding: '24px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f8f9fa',
                cursor: info.link ? 'pointer' : 'default',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onClick={() => info.link && window.open(info.link, '_blank')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={info.link ? { backgroundColor: '#f1f3f5' } : undefined}
            >
              <ThemeIcon size={50} radius="md" color="green" variant="light">
                <info.icon size={26} />
              </ThemeIcon>
              <Text size="lg" fw={500} mt="md">{info.title}</Text>
              <Text size="sm" c="dimmed" mt="sm" style={{ whiteSpace: 'pre-line' }}>
                {info.content}
              </Text>
            </MotionDiv>
          ))}
        </SimpleGrid>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="xl" radius="md" pos="relative">
              <LoadingOverlay visible={isSubmitting} />
              <Title order={2} size="h2" mb="xl">Send Us a Message</Title>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <TextInput
                    required
                    label="Name"
                    placeholder="Your full name"
                    {...form.getInputProps('name')}
                    disabled={isSubmitting}
                  />
                  <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                    disabled={isSubmitting}
                  />
                  <TextInput
                    required
                    label="Phone"
                    placeholder="+44 1234 567890"
                    {...form.getInputProps('phone')}
                    disabled={isSubmitting}
                  />
                  <TextInput
                    label="Service Required"
                    placeholder="e.g., Tree Felling, Crown Reduction"
                    {...form.getInputProps('service')}
                    disabled={isSubmitting}
                  />
                  <Textarea
                    required
                    label="Message"
                    placeholder="Please describe your requirements"
                    minRows={4}
                    {...form.getInputProps('message')}
                    disabled={isSubmitting}
                  />
                  <Group justify="flex-end" mt="md">
                    <Button
                      type="submit"
                      size="lg"
                      color="green"
                      leftSection={<IconSend size={20} />}
                      loading={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Group>
                </Stack>
              </form>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Card withBorder padding="xl" radius="md">
                <Title order={2} size="h2" mb="md">Emergency Service</Title>
                <Text mb="xl">
                  Need urgent tree care? Our emergency team is available 24/7 for immediate assistance.
                </Text>
                <Group>
                  <Button
                    component="a"
                    href="tel:+441234567890"
                    size="lg"
                    color="red"
                    leftSection={<IconPhone size={20} />}
                  >
                    Emergency Hotline
                  </Button>
                  <Button
                    component="a"
                    href="https://wa.me/441234567890"
                    size="lg"
                    variant="light"
                    color="green"
                    leftSection={<IconBrandWhatsapp size={20} />}
                  >
                    WhatsApp
                  </Button>
                </Group>
              </Card>

              <Card withBorder padding="xl" radius="md">
                <Title order={2} size="h2" mb="xl">Service Area</Title>
                <div style={{ height: 300 }}>
                  <InteractiveMap />
                </div>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Contact;
