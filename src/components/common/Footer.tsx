import React from 'react';
import { Container, Grid, Group, Stack, Text, ActionIcon, Button, Divider, Title } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  link: string;
}

interface FooterSections {
  services: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
}

const sections: FooterSections = {
  services: [
    { label: 'Tree Removal', link: '/services/tree-removal' },
    { label: 'Tree Pruning', link: '/services/tree-pruning' },
    { label: 'Stump Grinding', link: '/services/stump-grinding' },
    { label: 'Emergency Services', link: '/services/emergency' },
  ],
  company: [
    { label: 'About', link: '/about' },
    { label: 'Blog', link: '/blog' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact', link: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Terms of Service', link: '/terms' },
  ],
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--background-light)', borderTop: '1px solid #e9ecef' }}>
      <Container size="xl" py={40}>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md" className="fade-in-up">
              <Group className="interactive-element">
                <img src="/assets/logo.png" alt="JS Tree Services" height={40} />
                <Title order={3}>JS Tree Services</Title>
              </Group>
              <Text c="dimmed">
                Fully qualified and insured arborists at your service.
              </Text>
              <Group gap="xs">
                <ActionIcon 
                  size="lg" 
                  variant="light" 
                  color="green" 
                  component="a" 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element"
                >
                  <IconBrandFacebook size={18} />
                </ActionIcon>
                <ActionIcon 
                  size="lg" 
                  variant="light" 
                  color="green" 
                  component="a" 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element"
                >
                  <IconBrandTwitter size={18} />
                </ActionIcon>
                <ActionIcon 
                  size="lg" 
                  variant="light" 
                  color="green" 
                  component="a" 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element"
                >
                  <IconBrandInstagram size={18} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="xs" className="fade-in-up delay-1">
              <Text fw={600} mb={6}>Services</Text>
              {sections.services.map((link) => (
                <Text
                  key={link.link}
                  component={Link}
                  to={link.link}
                  size="sm"
                  c="dimmed"
                  className="interactive-element"
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Text>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="xs" className="fade-in-up delay-2">
              <Text fw={600} mb={6}>Company</Text>
              {sections.company.map((link) => (
                <Text
                  key={link.link}
                  component={Link}
                  to={link.link}
                  size="sm"
                  c="dimmed"
                  className="interactive-element"
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Text>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 12, md: 3 }}>
            <Stack gap="xs" className="fade-in-up delay-3">
              <Text fw={600} mb={6}>Contact</Text>
              <Group gap="xs" wrap="nowrap">
                <IconPhone size={16} />
                <Text
                  component="a"
                  href="tel:+441234567890"
                  size="sm"
                  c="dimmed"
                  className="interactive-element"
                  style={{ textDecoration: 'none' }}
                >
                  +44 1234 567890
                </Text>
              </Group>
              <Group gap="xs" wrap="nowrap">
                <IconMail size={16} />
                <Text
                  component="a"
                  href="mailto:info@jstreeservices.com"
                  size="sm"
                  c="dimmed"
                  className="interactive-element"
                  style={{ textDecoration: 'none' }}
                >
                  info@jstreeservices.com
                </Text>
              </Group>
              <Group gap="xs" wrap="nowrap" align="flex-start">
                <IconMapPin size={16} />
                <Text size="sm" c="dimmed">
                  123 Tree Street<br />
                  Aldershot<br />
                  Hampshire<br />
                  GU11 1AA
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my={24} />

        <Group justify="space-between" pt={4}>
          <Text size="sm" c="dimmed">
            © {year} JS Tree Services. All rights reserved.
          </Text>
          <Group gap="xs">
            {sections.legal.map((link) => (
              <Button
                key={link.link}
                component={Link}
                to={link.link}
                variant="subtle"
                color="gray"
                size="xs"
                className="interactive-element"
              >
                {link.label}
              </Button>
            ))}
          </Group>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;