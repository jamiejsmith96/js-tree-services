import React from 'react';
import { Box } from '@mantine/core';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
  radius?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt,
  height,
  width,
  radius = 'var(--mantine-radius-md)',
  className,
  style
}) => {
  // Function to generate srcSet from main image
  const generateSrcSet = (imagePath: string) => {
    const widths = [400, 600, 800, 1200];
    const basePath = imagePath.substring(0, imagePath.lastIndexOf('/') + 1);
    const fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    
    return widths
      .map(width => {
        const optimizedPath = `${basePath}optimized/${fileNameWithoutExt}_${width}.webp`;
        return `${optimizedPath} ${width}w`;
      })
      .join(', ');
  };

  return (
    <Box
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius,
        height,
        width,
        ...style
      }}
    >
      <img
        src={src}
        alt={alt}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease'
        }}
      />
    </Box>
  );
};