import React from 'react';
import { Container, Title, Paper, TextInput, Textarea, Select, Button, Stack, Text, Group, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { type ServiceSummary } from '../types/service';
import { services } from '../data/services';

export default function Quote() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      description: '',
      preferredDate: '',
      urgency: 'normal',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (/^[0-9\s-+()]{10,}$/.test(value) ? null : 'Invalid phone number'),
      serviceType: (value) => (!value ? 'Please select a service' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // TODO: Implement actual form submission
    console.log(values);
    notifications.show({
      title: 'Quote Request Received',
      message: 'We will contact you shortly with a detailed quote.',
      color: 'green',
    });
    form.reset();
  };

  return (
    <Container size="md" py="xl">
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper withBorder shadow="md" p={30} radius="md">
          <Stack gap="md">
            <Title order={1}>Get a Free Quote</Title>
            <Text c="dimmed">
              Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
            </Text>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Group grow>
                  <TextInput
                    required
                    label="Name"
                    placeholder="Your full name"
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                  />
                </Group>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Group grow>
                  <TextInput
                    required
                    label="Phone"
                    placeholder="Your phone number"
                    {...form.getInputProps('phone')}
                  />
                  <TextInput
                    label="Address"
                    placeholder="Service location address"
                    {...form.getInputProps('address')}
                  />
                </Group>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Select
                  required
                  label="Service Type"
                  placeholder="Select the service you need"
                  data={services.map((service: ServiceSummary) => ({
                    value: service.slug,
                    label: service.title,
                  }))}
                  {...form.getInputProps('serviceType')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Select
                  label="Urgency"
                  placeholder="How urgent is your request?"
                  data={[
                    { value: 'urgent', label: 'Urgent - As soon as possible' },
                    { value: 'normal', label: 'Normal - Within 2 weeks' },
                    { value: 'flexible', label: 'Flexible - Anytime' },
                  ]}
                  {...form.getInputProps('urgency')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TextInput
                  label="Preferred Date"
                  type="date"
                  {...form.getInputProps('preferredDate')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Textarea
                  label="Additional Details"
                  placeholder="Please provide any additional details about your requirements"
                  minRows={4}
                  {...form.getInputProps('description')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button type="submit" size="lg" fullWidth>
                  Request Quote
                </Button>
              </motion.div>
            </Stack>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Text size="sm" c="dimmed" ta="center">
              By submitting this form, you agree to be contacted about our services.
              We'll get back to you within 24 hours.
            </Text>
          </motion.div>
        </Stack>
      </Paper>
    </motion.div>
  </Container>
  );
}