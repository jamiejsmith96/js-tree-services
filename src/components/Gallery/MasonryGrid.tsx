import React, { useEffect, useState, useCallback, useLayoutEffect, useMemo } from 'react';
import { Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
    if (isLargeScreen) return 3;
    return 2;
  }, [isMobile, isTablet, isLargeScreen]);

  // Memoize column count to prevent unnecessary recalculations
  const columnCount = useMemo(() => getColumns(), [getColumns]);

  // Pre-calculate grid layout
  const gridLayout = useMemo(() => {
    const columns: React.ReactNode[][] = Array(columnCount)
      .fill(null)
      .map(() => []);
    const heights = Array(columnCount).fill(0);

    React.Children.forEach(children, child => {
      if (!child) return;
      const smallestColumn = heights.indexOf(Math.min(...heights));
      columns[smallestColumn].push(child);
      heights[smallestColumn] += itemHeight;
    });

    return columns;
  }, [children, itemHeight, columnCount]);

  return (
    <Box 
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gap: isMobile ? 'var(--space-lg)' : 'var(--space-xl)',
        width: '100%',
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        position: 'relative'
      }}
    >
      {gridLayout.map((column, columnIndex) => (
        <Box
          key={columnIndex}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {column.map((item, itemIndex) => (
            <Box
              key={itemIndex}
              style={{
                height: '100%',
                position: 'relative',
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
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