import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingLocationProps {
  locations: string[];
  currentLocation: number;
  color: string;
}

const TypingLocation: React.FC<TypingLocationProps> = ({ locations, currentLocation, color }) => {
  const [displayText, setDisplayText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const [firstLetter, setFirstLetter] = useState('');

  useEffect(() => {
    const current = locations[currentLocation];
    const next = locations[(currentLocation + 1) % locations.length];
    const sharedPrefix = getSharedPrefix(current, next);

    if (isErasing) {
      if (displayText.length > sharedPrefix.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsErasing(false);
      }
    } else {
      const targetText = locations[currentLocation];
      if (displayText !== targetText) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => targetText.slice(0, prev.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isErasing, locations, currentLocation]);

  useEffect(() => {
    const current = locations[currentLocation];
    const next = locations[(currentLocation + 1) % locations.length];
    const sharedPrefix = getSharedPrefix(current, next);
    setFirstLetter(sharedPrefix);

    if (!isErasing) {
      setIsErasing(true);
    }
  }, [currentLocation, locations]);

  const getSharedPrefix = (str1: string, str2: string): string => {
    let i = 0;
    while (i < str1.length && i < str2.length && str1[i].toLowerCase() === str2[i].toLowerCase()) {
      i++;
    }
    return str1.slice(0, i);
  };

  return (
    <motion.span
      style={{
        display: 'inline-block',
        color: color,
        position: 'relative'
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          background: color,
          marginLeft: '2px',
          verticalAlign: 'middle'
        }}
      />
    </motion.span>
  );
};

export default TypingLocation;
