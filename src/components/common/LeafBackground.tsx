import React from 'react';
import { motion } from 'framer-motion';

const LeafSVG: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5 22l1-1c1.49-1.25 2.5-2.37 3.5-3.5 1.95 3.1 4.05 5.5 8.5 5.5v-4c-2.5 0-3-2.5-3-2.5l8-7C24 7 22 2.5 17 8z" />
  </svg>
);

const LeafBackground: React.FC = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 2,
      pointerEvents: 'none'
    }}>
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            color: '#4CAF50',
            opacity: 0.3,
            transformOrigin: 'center',
          }}
          initial={{
            top: -50,
            rotate: 0,
            scale: Math.random() * 0.4 + 0.4
          }}
          animate={{
            top: ['0%', '120%'],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360 + Math.random() * 360]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: -Math.random() * 20
          }}
        >
          <LeafSVG />
        </motion.div>
      ))}
    </div>
  );
};

export default LeafBackground;
