import React from 'react';
import { Group, Button, Burger, Drawer, Stack, Box, ActionIcon, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconPhone } from '@tabler/icons-react';
import { ResponsiveImage } from './ResponsiveImage';

const Header: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Blog', to: '/blog' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ];

  const DesktopNavigation = () => (
    <Group gap="md">
      {links.map((link) => (
        <Button
          key={link.to}
          component={Link}
          to={link.to}
          variant={location.pathname === link.to ? 'filled' : 'subtle'}
          color="green"
          size="sm"
          className={`interactive-element ${location.pathname === link.to ? 'active' : ''}`}
          styles={{
            root: {
              color: 'white',
              fontWeight: 500,
              padding: 'var(--space-sm) var(--space-md)',
              backgroundColor: location.pathname === link.to 
                ? 'var(--mantine-color-green-filled)'
                : 'transparent',
              '&:hover': {
                backgroundColor: location.pathname === link.to 
                  ? 'var(--mantine-color-green-filled-hover)'
                  : 'rgba(255, 255, 255, 0.1)',
              }
            }
          }}
        >
          {link.label}
        </Button>
      ))}
      <Button
        component={Link}
        to="/quote"
        variant="gradient"
        gradient={{ from: 'var(--gradient-start)', to: 'var(--gradient-end)' }}
        size="sm"
        className="interactive-element"
        styles={{
          root: {
            boxShadow: 'var(--shadow-sm)',
            fontWeight: 600,
            padding: 'var(--space-sm) var(--space-lg)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 'var(--shadow-md)',
            }
          }
        }}
      >
        Get Quote
      </Button>
    </Group>
  );

  return (
    <>
      <header>
        <Container size="xl" h="100%" px="xl">
          <Group justify="space-between" h="100%">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src="/logo.png"
                alt="JS Tree Services"
                height={40}
                style={{
                  filter: 'brightness(1.1)',
                  transition: 'transform 0.2s ease',
                }}
                className="interactive-element"
              />
            </Link>

            <Box hiddenFrom="md" style={{ marginLeft: 'auto' }}>
              <Burger
                opened={opened}
                onClick={toggle}
                color="white"
                size="sm"
                className="interactive-element"
              />
            </Box>

            <Box visibleFrom="md" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              <DesktopNavigation />
            </Box>
          </Group>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="md"
        withCloseButton
        styles={{
          header: { padding: 'var(--space-md)' },
          body: { padding: 'var(--space-md)' },
          content: { 
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            color: 'white'
          }
        }}
      >
        <Stack gap="var(--space-md)">
          {links.map((link) => (
            <Button
              key={link.to}
              component={Link}
              to={link.to}
              variant={location.pathname === link.to ? 'filled' : 'light'}
              color="green"
              size="lg"
              fullWidth
              onClick={close}
              className={`interactive-element ${location.pathname === link.to ? 'active' : ''}`}
              styles={{
                root: {
                  height: '50px',
                  fontSize: '1.1rem',
                  backgroundColor: location.pathname === link.to
                    ? 'var(--mantine-color-green-filled)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: location.pathname === link.to
                      ? 'var(--mantine-color-green-filled-hover)'
                      : 'rgba(255, 255, 255, 0.2)',
                  }
                }
              }}
            >
              {link.label}
            </Button>
          ))}
          <Stack gap="var(--space-md)" mt="var(--space-xl)">
            <Button
              component={Link}
              to="/quote"
              variant="gradient"
              gradient={{ from: 'white', to: '#f8f9fa' }}
              size="lg"
              onClick={close}
              className="interactive-element"
              styles={{
                root: {
                  height: '54px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                  color: 'var(--gradient-start)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 'var(--shadow-md)',
                  }
                }
              }}
            >
              Get Quote
            </Button>
            <Button
              component="a"
              href="tel:+441234567890"
              variant="light"
              color="green"
              size="lg"
              leftSection={<IconPhone size={24} />}
              className="interactive-element"
              styles={{
                root: {
                  height: '54px',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': {
                    backgroundColor: 'white',
                    transform: 'translateY(-2px)'
                  }
                }
              }}
            >
              Call Now
            </Button>
          </Stack>
        </Stack>
      </Drawer>

      {!opened && (
        <ActionIcon
          component="a"
          href="tel:+441234567890"
          color="green"
          variant="filled"
          radius="xl"
          size={56}
          className="hover-card sticky-call-button"
        >
          <IconPhone className="sticky-call-button-icon" />
        </ActionIcon>
      )}
    </>
  );
};

export default Header;