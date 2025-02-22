import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mantine/core';
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

  const handleStart = (clientX: number) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handleEnd = () => {
    isDragging.current = false;
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
      </Box>

      {/* Slider handle */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: `${sliderPosition}%`,
          width: '2px',
          height: '100%',
          backgroundColor: 'white',
          transform: 'translateX(-50%)',
          cursor: 'col-resize',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease'
          }}
        >
          {/* Handle arrows */}
          <Box
            style={{
              width: '12px',
              height: '2px',
              backgroundColor: 'var(--mantine-color-gray-7)',
              borderRadius: '1px',
              position: 'absolute',
              left: '8px',
              transform: 'rotate(-45deg)',
              top: '19px'
            }}
          />
          <Box
            style={{
              width: '12px',
              height: '2px',
              backgroundColor: 'var(--mantine-color-gray-7)',
              borderRadius: '1px',
              position: 'absolute',
              left: '8px',
              transform: 'rotate(45deg)',
              bottom: '19px'
            }}
          />
          <Box
            style={{
              width: '12px',
              height: '2px',
              backgroundColor: 'var(--mantine-color-gray-7)',
              borderRadius: '1px',
              position: 'absolute',
              right: '8px',
              transform: 'rotate(45deg)',
              top: '19px'
            }}
          />
          <Box
            style={{
              width: '12px',
              height: '2px',
              backgroundColor: 'var(--mantine-color-gray-7)',
              borderRadius: '1px',
              position: 'absolute',
              right: '8px',
              transform: 'rotate(-45deg)',
              bottom: '19px'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};