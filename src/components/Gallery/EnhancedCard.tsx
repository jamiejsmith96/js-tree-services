import React from 'react';
import { Card, Text, Group, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { GalleryItem } from '../../types/gallery';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ResponsiveImage } from '../common/ResponsiveImage';

interface Props {
  item: GalleryItem;
  onClick: () => void;
}

export const EnhancedCard: React.FC<Props> = ({ item, onClick }) => {
  const isBeforeAfter = item.category === 'Before & After' && item.beforeAfter;

  return (
    <Card
      withBorder
      padding="var(--space-lg)"
      radius="md"
      className="hover-card"
      onClick={onClick}
      style={{ 
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <Stack gap="var(--space-lg)" style={{ height: '100%' }}>
        <Box style={{ position: 'relative', flex: '0 0 auto' }}>
          {isBeforeAfter ? (
            <BeforeAfterSlider
              beforeImage={item.beforeAfter!.beforeImage}
              afterImage={item.beforeAfter!.afterImage}
              height={280}
            />
          ) : (
            <Box
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--mantine-radius-md)'
              }}
            >
              <ResponsiveImage
                src={item.imageUrl}
                alt={item.description}
                height={280}
                className="hover-image"
              />
              <Box
                className="image-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
                  borderRadius: 'var(--mantine-radius-md)',
                  opacity: 0,
                  transition: 'opacity 0.2s ease'
                }}
              />
            </Box>
          )}
        </Box>

        <Stack gap="var(--space-md)" style={{ flex: 1, justifyContent: 'space-between' }}>
          <Text size="lg" fw={500}>
            {item.description}
          </Text>
          <Group justify="space-between" align="center">
            <Text size="sm" c="dimmed">
              {item.category}
            </Text>
            <Text size="sm" c="dimmed">
              {new Date(item.date).toLocaleDateString('en-GB', {
                month: 'short',
                year: 'numeric'
              })}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};