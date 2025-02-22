import React, { useState } from 'react';
import { LoadingOverlay, TextInput, Textarea, Button, Stack, Group, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCalendar, IconSend } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import type { ServiceRequest, ServiceBookingFormValues } from '../../types/service';

interface ServiceBookingFormProps {
  serviceId: string;
  onSubmit: (data: ServiceRequest) => Promise<void>;
}

export const ServiceBookingForm: React.FC<ServiceBookingFormProps> = ({ serviceId, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const form = useForm<ServiceBookingFormValues>({
    initialValues: {
      serviceId,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      address: {
        street: '',
        city: '',
        postcode: ''
      },
      date: null,
      description: '',
      preferredContact: 'email',
      urgency: 'normal'
    },
    validate: {
      customerName: (value: string) => (value.length < 2 ? 'Name is required' : null),
      customerEmail: (value: string) => (!/^\S+@\S+$/.test(value) ? 'Invalid email' : null),
      customerPhone: (value: string) => (!value ? 'Phone number is required' : null),
      address: {
        street: (value: string) => (!value ? 'Street address is required' : null),
        city: (value: string) => (!value ? 'City is required' : null),
        postcode: (value: string) => (!value ? 'Postcode is required' : null),
      },
      date: (value: Date | null) => (!value ? 'Please select a preferred date' : null),
    }
  });

  const handleSubmit = async (values: ServiceBookingFormValues) => {
    setIsSubmitting(true);
    try {
      const serviceRequest: ServiceRequest = {
        ...values,
        attachments
      };
      await onSubmit(serviceRequest);
      form.reset();
      setAttachments([]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <LoadingOverlay 
        visible={isSubmitting}
        loaderProps={{ size: 'xl', color: 'green' }}
        overlayProps={{ blur: 2 }}
      />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="var(--space-xl)">
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
                {...form.getInputProps('customerName')}
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
                {...form.getInputProps('customerEmail')}
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
                {...form.getInputProps('customerPhone')}
                disabled={isSubmitting}
                className="interactive-element"
              />
            </motion.div>
          </Stack>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TextInput
                required
                label="Street Address"
                placeholder="Enter your street address"
                {...form.getInputProps('address.street')}
                disabled={isSubmitting}
                className="interactive-element"
              />
            </motion.div>

            <Group grow mt="var(--space-md)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <TextInput
                  required
                  label="City"
                  placeholder="Enter your city"
                  {...form.getInputProps('address.city')}
                  disabled={isSubmitting}
                  className="interactive-element"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <TextInput
                  required
                  label="Postcode"
                  placeholder="Enter your postcode"
                  {...form.getInputProps('address.postcode')}
                  disabled={isSubmitting}
                  className="interactive-element"
                />
              </motion.div>
            </Group>
          </div>

          <Group grow>
            <div>
              <DatePickerInput
                required
                label="Preferred Date"
                placeholder="Select preferred date"
                leftSection={<IconCalendar size={16} />}
                minDate={new Date()}
                {...form.getInputProps('date')}
                disabled={isSubmitting}
                className="interactive-element"
              />
            </div>

            <Select
              label="Urgency"
              placeholder="Select urgency level"
              data={[
                { value: 'normal', label: 'Normal' },
                { value: 'urgent', label: 'Urgent' }
              ]}
              {...form.getInputProps('urgency')}
              disabled={isSubmitting}
              className="interactive-element"
            />
          </Group>

          <Textarea
            label="Additional Details"
            placeholder="Please provide any additional details about your service request"
            minRows={4}
            {...form.getInputProps('description')}
            disabled={isSubmitting}
            className="interactive-element"
          />

          <Group justify="flex-end">
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
                variant="gradient"
                gradient={{ from: 'var(--gradient-start)', to: 'var(--gradient-end)' }}
              >
                {isSubmitting ? 'Submitting...' : 'Book Service'}
              </Button>
            </motion.div>
          </Group>
        </Stack>
      </form>
    </div>
  );
};