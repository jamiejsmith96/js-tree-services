import React, { useState, useRef } from 'react';
import { Card, Text, Group, Stack } from '@mantine/core';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GalleryItem } from '../../types/gallery';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface Props {
  item: GalleryItem;
  onClick: () => void;
}

export const EnhancedCard: React.FC<Props> = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize mouse position between -0.5 and 0.5
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const isBeforeAfter = item.category === 'Before & After' && item.beforeAfter;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        padding="md"
        radius="md"
        className="hover-card"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <Card.Section>
          {isBeforeAfter ? (
            <BeforeAfterSlider
              beforeImage={item.beforeAfter!.beforeImage}
              afterImage={item.beforeAfter!.afterImage}
              height={280}
            />
          ) : (
            <motion.div
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <LazyLoadImage
                src={item.imageUrl}
                height={280}
                width="100%"
                effect="blur"
                alt={item.description}
                style={{
                  objectFit: 'cover',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out'
                }}
              />
              <motion.div
                className="image-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
                }}
              />
            </motion.div>
          )}
        </Card.Section>

        <Stack mt="md" gap={8} style={{ transform: 'translateZ(20px)' }}>
          <Text fw={500} className="fade-in-up">
            {item.description}
          </Text>
          <Group justify="space-between" align="center">
            <Text size="sm" c="dimmed" className="fade-in-up">
              {item.category}
            </Text>
            <Text size="sm" c="dimmed" className="fade-in-up">
              {item.date}
            </Text>
          </Group>
        </Stack>
      </Card>
    </motion.div>
  );
};