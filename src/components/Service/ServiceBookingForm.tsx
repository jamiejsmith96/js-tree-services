import React, { useState } from 'react';
import { 
  Card, Title, TextInput, Textarea, Button, Stack, 
  Grid, FileInput, Group
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconUpload, IconCalendar } from '@tabler/icons-react';
import type { ServiceRequest } from '../../types/service';

interface ServiceBookingFormProps {
  serviceId: string;
  onSubmit: (data: ServiceRequest) => Promise<void>;
}

type FormValues = Omit<ServiceRequest, 'attachments'>;

export const ServiceBookingForm: React.FC<ServiceBookingFormProps> = ({ serviceId, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<FormValues>({
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
      preferredDate: new Date(),
      alternativeDate: undefined,
      description: '',
    },
    validate: {
      customerName: (value) => (value.length < 2 ? 'Name is required' : null),
      customerEmail: (value) => (!/^\S+@\S+$/.test(value) ? 'Invalid email' : null),
      customerPhone: (value) => (!value ? 'Phone number is required' : null),
      address: {
        street: (value) => (!value ? 'Street address is required' : null),
        city: (value) => (!value ? 'City is required' : null),
        postcode: (value) => (!value ? 'Postcode is required' : null),
      },
      preferredDate: (value) => (!value ? 'Please select a preferred date' : null),
    }
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      const attachments = await Promise.all(
        files.map(async (file) => {
          // Here you would normally upload the file to your storage service
          // and return the URL/path
          return URL.createObjectURL(file); // This is just for demo purposes
        })
      );

      await onSubmit({
        ...values,
        attachments,
      });

      form.reset();
      setFiles([]);
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card withBorder shadow="md" radius="md" p="xl">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Title order={3}>Book This Service</Title>

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                required
                label="Full Name"
                placeholder="Your full name"
                {...form.getInputProps('customerName')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                required
                label="Email"
                placeholder="your.email@example.com"
                {...form.getInputProps('customerEmail')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                required
                label="Phone Number"
                placeholder="Your phone number"
                {...form.getInputProps('customerPhone')}
              />
            </Grid.Col>
          </Grid>

          <Title order={4} mt="md">Address Details</Title>
          <Grid gutter="md">
            <Grid.Col span={12}>
              <TextInput
                required
                label="Street Address"
                placeholder="Enter your street address"
                {...form.getInputProps('address.street')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                required
                label="City"
                placeholder="Enter your city"
                {...form.getInputProps('address.city')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                required
                label="Postcode"
                placeholder="Enter your postcode"
                {...form.getInputProps('address.postcode')}
              />
            </Grid.Col>
          </Grid>

          <Title order={4} mt="md">Service Details</Title>
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <DatePickerInput
                required
                label="Preferred Date"
                placeholder="Select preferred date"
                leftSection={<IconCalendar size={16} />}
                minDate={new Date()}
                {...form.getInputProps('preferredDate')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <DatePickerInput
                label="Alternative Date (Optional)"
                placeholder="Select alternative date"
                leftSection={<IconCalendar size={16} />}
                minDate={new Date()}
                {...form.getInputProps('alternativeDate')}
              />
            </Grid.Col>
          </Grid>

          <Textarea
            label="Additional Details"
            placeholder="Please provide any additional details about your service request"
            minRows={4}
            {...form.getInputProps('description')}
          />

          <FileInput
            label="Attachments (Optional)"
            description="Upload images or documents related to your service request"
            placeholder="Upload images or documents"
            accept="image/*,.pdf"
            multiple
            leftSection={<IconUpload size={16} />}
            value={files}
            onChange={setFiles}
          />

          <Group justify="flex-end" mt="xl">
            <Button 
              type="submit" 
              size="lg"
              loading={isSubmitting}
              className="interactive-element"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};