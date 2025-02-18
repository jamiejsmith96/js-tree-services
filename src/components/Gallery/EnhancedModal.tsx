import React, { useState } from 'react';
import { Modal, Box, Text, Group, Stack } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GalleryItem } from '../../types/gallery';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface Props {
  item: GalleryItem | null;
  onClose: () => void;
}

export const EnhancedModal: React.FC<Props> = ({ item, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  if (!item) return null;

  const handleMouseDown = () => {
    if (!item.beforeAfter) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!item.beforeAfter) {
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(1, scale + delta), 3);
      setScale(newScale);
    }
  };

  const handleDoubleClick = () => {
    if (!item.beforeAfter) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <Modal
      opened={!!item}
      onClose={onClose}
      size="xl"
      padding={0}
      centered
      withCloseButton={false}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div style={{ position: 'relative' }}>
            {item.beforeAfter ? (
              <BeforeAfterSlider
                beforeImage={item.beforeAfter.beforeImage}
                afterImage={item.beforeAfter.afterImage}
                height={600}
              />
            ) : (
              <div
                style={{
                  overflow: 'hidden',
                  cursor: isDragging ? 'grabbing' : 'grab',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
              >
                <motion.div
                  animate={{
                    scale,
                    x: position.x,
                    y: position.y,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    scale: { duration: 0.2 },
                  }}
                >
                  <LazyLoadImage
                    src={item.imageUrl}
                    alt={item.description}
                    effect="blur"
                    style={{
                      maxHeight: '80vh',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              </div>
            )}

            <Box
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 'var(--space-md)',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)',
                color: 'white',
              }}
            >
              <Stack gap="xs">
                <Group justify="space-between">
                  <Text fw={500} size="lg">
                    {item.description}
                  </Text>
                  <Text size="sm" opacity={0.7}>
                    {item.date}
                  </Text>
                </Group>
                <Group gap="md">
                  <Text size="sm" opacity={0.7}>
                    {item.category}
                  </Text>
                  <Text size="sm" opacity={0.7}>
                    {item.location}
                  </Text>
                </Group>
              </Stack>
            </Box>
          </div>

          {!item.beforeAfter && (
            <Box 
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(0, 0, 0, 0.7)',
                padding: '8px',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px',
                backdropFilter: 'blur(4px)',
              }}
            >
              Scroll to zoom • Drag to pan • Double-click to reset
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default EnhancedModal;