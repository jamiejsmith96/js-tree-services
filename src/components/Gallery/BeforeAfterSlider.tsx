import React, { useRef, useState, useEffect } from 'react';
import { Box, Image } from '@mantine/core';

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

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(100, Math.max(0, newPosition)));
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
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
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
    >
      {/* After image (full) */}
      <Image
        src={afterImage}
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
        <Image
          src={beforeImage}
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
          width: '4px',
          height: '100%',
          backgroundColor: 'white',
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
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            style={{
              width: '10px',
              height: '2px',
              backgroundColor: '#666',
              borderRadius: '1px',
              position: 'absolute',
              left: '6px'
            }}
          />
          <Box
            style={{
              width: '10px',
              height: '2px',
              backgroundColor: '#666',
              borderRadius: '1px',
              position: 'absolute',
              right: '6px'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};