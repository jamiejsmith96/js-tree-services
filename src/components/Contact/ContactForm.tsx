import React, { useState } from 'react';
import { LoadingOverlay, TextInput, Textarea, Button, Stack, Card, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (values: ContactFormData) => Promise<void>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
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

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card 
      withBorder 
      padding="var(--space-xl)" 
      radius="md" 
      className="hover-card"
      style={{ position: 'relative' }}
    >
      <LoadingOverlay 
        visible={isSubmitting}
        loaderProps={{ size: 'xl', color: 'green' }}
        overlayProps={{ blur: 2 }}
      />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="var(--space-md)">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TextInput
              required
              label="Name"
              placeholder="Your full name"
              {...form.getInputProps('name')}
              disabled={isSubmitting}
              className="interactive-element"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
              disabled={isSubmitting}
              className="interactive-element"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TextInput
              required
              label="Phone"
              placeholder="+44 1234 567890"
              {...form.getInputProps('phone')}
              disabled={isSubmitting}
              className="interactive-element"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TextInput
              label="Service Required"
              placeholder="e.g., Tree Felling, Crown Reduction"
              {...form.getInputProps('service')}
              disabled={isSubmitting}
              className="interactive-element"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Textarea
              required
              label="Message"
              placeholder="Please describe your requirements"
              minRows={4}
              {...form.getInputProps('message')}
              disabled={isSubmitting}
              className="interactive-element"
            />
          </motion.div>

          <Group justify="flex-end" mt="var(--space-md)">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                size="lg"
                color="green"
                leftSection={<IconSend size={20} />}
                loading={isSubmitting}
                className="interactive-element"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};