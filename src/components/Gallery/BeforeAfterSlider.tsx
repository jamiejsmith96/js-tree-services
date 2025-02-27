import React, { useRef, useState, useEffect } from 'react';
import { Box, Group } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { ResponsiveImage } from '../common/ResponsiveImage';

interface Props {
  beforeImage: string;
  afterImage: string;
  height?: number;
}

export const BeforeAfterSlider: React.FC<Props> = ({ 
  beforeImage, 
  afterImage, 
  height = 280 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const frameRef = useRef<number>();

  const handleStart = (clientX: number) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    
    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const newPosition = Math.min(100, Math.max(0, (x / rect.width) * 100));
      setSliderPosition(newPosition);
    });
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;

    // Cancel any pending frame
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    
    // Schedule new frame
    frameRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const newPosition = Math.min(100, Math.max(0, (x / rect.width) * 100));
      setSliderPosition(newPosition);
    });
  };

  const handleEnd = () => {
    isDragging.current = false;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
  };

  // Mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleMouseUp = () => handleEnd();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Touch events
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const handleTouchEnd = () => handleEnd();

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      style={{ 
        position: 'relative',
        height,
        overflow: 'hidden',
        cursor: 'col-resize',
        userSelect: 'none',
        borderRadius: 'var(--mantine-radius-md)'
      }}
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
    >
      {/* After image (full) */}
      <ResponsiveImage
        src={afterImage}
        alt="After"
        height={height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {/* Labels */}
      <Box
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 500,
          opacity: sliderPosition < 80 ? 1 : 0,
          transition: 'opacity 0.15s ease'
        }}
      >
        After
      </Box>

      {/* Before image (clipped) */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${sliderPosition}%`,
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <Box style={{ position: 'relative', height: '100%' }}>
          <ResponsiveImage
            src={beforeImage}
            alt="Before"
            height={height}
            style={{
              width: `${100 * (100 / sliderPosition)}%`,
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <Box
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(0,0,0,0.6)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              opacity: sliderPosition > 20 ? 1 : 0,
              transition: 'opacity 0.15s ease'
            }}
          >
            Before
          </Box>
        </Box>
      </Box>

      {/* Slider handle */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: `${sliderPosition}%`,
          width: '3px',
          height: '100%',
          background: 'white',
          transform: 'translateX(-50%)',
          cursor: 'col-resize'
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Arrow icons */}
          <Group gap={4} wrap="nowrap">
            <IconArrowLeft size={16} stroke={2} color="var(--mantine-color-gray-7)" />
            <IconArrowRight size={16} stroke={2} color="var(--mantine-color-gray-7)" />
          </Group>
        </Box>
      </Box>
    </Box>
  );
};
