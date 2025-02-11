import React from 'react';
import { Group, Button, Burger, Drawer, Stack, Text, Box, ActionIcon, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPhone } from '@tabler/icons-react';

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      <Group gap="md">
        {links.map((link) => (
          <motion.div
            key={link.to}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              component={Link}
              to={link.to}
              variant={location.pathname === link.to ? 'filled' : 'subtle'}
              color={location.pathname === link.to ? 'green' : 'gray'}
              size="sm"
              styles={(theme) => ({
                root: {
                  color: 'white',
                  fontWeight: 500,
                  padding: '8px 16px',
                  transition: 'all 0.2s ease',
                  borderRadius: theme.radius.md,
                  '&:hover': {
                    backgroundColor: link.to === '/contact' 
                      ? theme.colors.green[7] 
                      : 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-1px)'
                  }
                }
              })}
            >
              {link.label}
            </Button>
          </motion.div>
        ))}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            component={Link}
            to="/contact"
            variant="gradient"
            gradient={{ from: '#2F9E44', to: '#37B24D', deg: 45 }}
            size="sm"
            ml="md"
            styles={{
              root: {
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: '6px'
              }
            }}
          >
            Get Quote
          </Button>
        </motion.div>
      </Group>
    </motion.nav>
  );

  return (
    <>
      <header>
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Group>
                  <img
                    src="/assets/logo.png"
                    alt="JS Tree Services"
                    height={40}
                    style={{ filter: 'brightness(1.1)' }}
                  />
                  <Text
                    size="xl"
                    fw={700}
                    style={{
                      color: 'white',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    JS Tree Services
                  </Text>
                </Group>
              </Link>
            </motion.div>

            <Box hiddenFrom="md" style={{ display: 'flex', alignItems: 'center' }}>
              <Burger
                opened={opened}
                onClick={toggle}
                color="white"
                size="sm"
              />
            </Box>

            <Box visibleFrom="md" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
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
          header: { padding: '16px' },
          body: { padding: '16px' },
          content: { backgroundColor: '#fff' }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Stack gap="md">
            {links.map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                variant={location.pathname === link.to ? 'filled' : 'subtle'}
                color={location.pathname === link.to ? 'green' : 'gray'}
                size="lg"
                fullWidth
                onClick={close}
                styles={{
                  root: {
                    height: '50px',
                    fontSize: '1.1rem',
                    padding: '0 20px',
                    borderRadius: '8px',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      transition: 'transform 0.2s ease'
                    }
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
            <Stack gap="md" mt="xl">
              <Button
                component={Link}
                to="/contact"
                variant="gradient"
                gradient={{ from: '#2F9E44', to: '#37B24D', deg: 45 }}
                size="lg"
                onClick={close}
                styles={{
                  root: {
                    height: '54px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      transition: 'transform 0.2s ease'
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
                styles={{
                  root: {
                    height: '54px',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      transition: 'transform 0.2s ease'
                    }
                  }
                }}
              >
                Call Now
              </Button>
            </Stack>
          </Stack>
        </motion.div>
      </Drawer>

      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 1000,
            }}
          >
            <ActionIcon
              component="a"
              href="tel:+441234567890"
              color="green"
              variant="filled"
              radius="xl"
              size={64}
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              <IconPhone size={32} />
            </ActionIcon>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;