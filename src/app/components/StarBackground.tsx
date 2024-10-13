// src/app/components/StarBackground.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './StarBackground.module.css';

interface Star {
  id: number;
  size: number;
  style: React.CSSProperties;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = (count: number, size: number) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        size,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 100 + 50}s`,
          animationDelay: `${Math.random() * 100}s`,
        },
      }));
    };

    setStars([
      ...generateStars(400, 1),  // Small stars
      ...generateStars(200, 2),   // Medium stars
      ...generateStars(50, 3),   // Large stars
    ]);
  }, []);

  return (
    <div className={styles.starBackground}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            ...star.style,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
