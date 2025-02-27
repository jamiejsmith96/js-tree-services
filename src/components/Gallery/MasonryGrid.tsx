import React, { useEffect, useState, useCallback } from 'react';
import { Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

interface MasonryGridProps {
  children: React.ReactNode[];
  itemHeight?: number;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ 
  children,
  itemHeight = 280
}) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

  const getColumns = useCallback(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isLargeScreen) return 4;
    return 3;
  }, [isMobile, isTablet, isLargeScreen]);

  const [items, setItems] = useState<React.ReactNode[][]>(() => {
    const cols = getColumns();
    return Array(cols).fill(null).map(() => []);
  });

  useEffect(() => {
    const currentColumns = getColumns();
    const newItems: React.ReactNode[][] = Array(currentColumns).fill(null).map(() => []);
    const heights = Array(currentColumns).fill(0);

    React.Children.forEach(children, (child) => {
      if (!child) return;
      const smallestColumn = heights.indexOf(Math.min(...heights));
      newItems[smallestColumn] = [...newItems[smallestColumn], child];
      heights[smallestColumn] += itemHeight;
    });

    setItems(newItems);
  }, [children, itemHeight, getColumns]);

  return (
    <Box 
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
        gap: isMobile ? 'var(--space-lg)' : 'var(--space-xl)',
        width: '100%',
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {items.map((column, columnIndex) => (
        <Box
          key={columnIndex}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
            touchAction: 'pan-y'
          }}
        >
          {column.map((item, itemIndex) => (
            <Box
              key={itemIndex}
              style={{
                height: '100%',
                touchAction: 'pan-y',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};