import React, { useEffect, useState } from 'react';
import { Box, Container, Title, Text, Button, Group, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import TypingLocation from '../common/TypingLocation';
import { IconHeartHandshake, IconTree } from '@tabler/icons-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  const locations = ['Aldershot', 'Farnborough', 'Fleet', 'Farnham'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((current) => (current + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [locations.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Box 
      className="hero-section" 
      style={{ 
        minHeight: '80vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/assets/gallery/image_fx_ (31).jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: isMobile ? 0 : y,
          opacity: 1,
          zIndex: 1
        }}
      />

      {/* Overlay */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(46,125,50,0.6), rgba(0,0,0,0.7), rgba(46,125,50,0.6))',
          backgroundSize: '200% 200%',
          animation: 'gradientMove 20s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
          zIndex: 2
        }}
      />

      {/* Content */}
      <Container size="xl" py="var(--space-xl)" style={{ position: 'relative', zIndex: 3 }}>
        <Stack gap={32} style={{ maxWidth: 700, color: 'white' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Title
              order={1}
              style={{
                fontSize: isMobile ? '2.5rem' : '4rem',
                lineHeight: 1.2,
                marginBottom: 'var(--space-md)',
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Expert Tree Care Services
              <br />
              in{' '}
              <TypingLocation
                locations={locations}
                currentLocation={currentLocation}
                color="var(--mantine-color-green-4)"
              />
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Text style={{ 
              fontSize: isMobile ? '1.25rem' : '1.5rem',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
              Professional tree surgery and maintenance in Aldershot and surrounding areas. 
              Your trees deserve the best care.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Group mt="var(--space-xl)">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  component={Link} 
                  to="/contact" 
                  size="xl" 
                  variant="gradient"
                  leftSection={<IconHeartHandshake size={24} />}
                  gradient={{ from: 'var(--gradient-start)', to: 'var(--gradient-end)' }}
                  className="interactive-element"
                  styles={{
                    root: {
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Get a Free Quote
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  component={Link} 
                  to="/services" 
                  size="xl" 
                  variant="outline"
                  color="white"
                  leftSection={<IconTree size={24} />}
                  className="interactive-element"
                  styles={{
                    root: {
                      backdropFilter: 'blur(4px)',
                      background: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Our Services
                </Button>
              </motion.div>
            </Group>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};