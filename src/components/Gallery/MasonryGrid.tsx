import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';

interface MasonryGridProps {
  children: React.ReactNode[];
  columns?: number;
  spacing?: number;
  itemHeight?: number;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ 
  children, 
  columns = 3,
  spacing = 16,
  itemHeight = 280
}) => {
  const [items, setItems] = useState<React.ReactNode[][]>(() =>
    Array(columns).fill(null).map(() => [])
  );

  useEffect(() => {
    // Create empty columns array
    const newItems: React.ReactNode[][] = Array(columns).fill(null).map(() => []);
    const heights = Array(columns).fill(0);

    // Distribute items among columns
    React.Children.forEach(children, (child) => {
      if (!child) return;
      
      // Find column with smallest height
      const smallestColumn = heights.indexOf(Math.min(...heights));
      
      // Add item to column
      newItems[smallestColumn] = [...newItems[smallestColumn], child];
      heights[smallestColumn] += itemHeight + spacing;
    });

    setItems(newItems);
  }, [children, columns, spacing, itemHeight]);

  return (
    <Box 
      style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: spacing,
        width: '100%'
      }}
    >
      {items.map((column, i) => (
        <Box 
          key={i} 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: spacing 
          }}
        >
          {column.map((item, index) => (
            <Box
              key={index}
              className="fade-in-up"
              style={{
                animationDelay: `${(i * column.length + index) * 0.1}s`
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