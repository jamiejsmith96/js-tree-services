import React from 'react';
import { Image as MantineImage, Box, Skeleton } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
  radius?: number | string;
  fit?: 'contain' | 'cover';
  fallback?: string;
  blur?: boolean;
  loading?: 'lazy' | 'eager';
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  height,
  width,
  radius,
  fit = 'cover',
  fallback = '/assets/placeholder.jpg',
  blur = true,
  loading = 'lazy'
}) => {
  const { ref, entry } = useIntersection({
    threshold: 0.1,
  });

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <Box ref={ref} style={{ position: 'relative' }}>
      {!isLoaded && <Skeleton height={height} width={width} radius={radius} />}
      {entry?.isIntersecting && (
        <MantineImage
          src={error ? fallback : src}
          alt={alt}
          height={height}
          width={width}
          radius={radius}
          fit={fit}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            filter: blur && !isLoaded ? 'blur(10px)' : 'none',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      )}
    </Box>
  );
};

export default ResponsiveImage;