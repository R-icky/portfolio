// src/app/components/StarBackground.tsx

'use client';

import React, { useEffect } from 'react';
import styles from './StarBackground.module.css';

const StarBackground: React.FC = () => {
  useEffect(() => {
    const generateBoxShadows = (n: number): string => {
      let value = `${Math.floor(Math.random() * 3000)}px ${Math.floor(Math.random() * 3000)}px #FFF`;
      for (let i = 2; i <= n; i++) {
        value += `, ${Math.floor(Math.random() * 3000)}px ${Math.floor(Math.random() * 3000)}px #FFF`;
      }
      return value;
    };

    const starsElement = document.getElementById('stars');
    const stars2Element = document.getElementById('stars2');
    const stars3Element = document.getElementById('stars3');

    if (starsElement) starsElement.style.boxShadow = generateBoxShadows(1000);
    if (stars2Element) stars2Element.style.boxShadow = generateBoxShadows(250);
    if (stars3Element) stars3Element.style.boxShadow = generateBoxShadows(100);
  }, []);

  return (
    <div className={styles.starBackground}>
      <div id="stars" className={styles.stars}></div>
      <div id="stars2" className={styles.stars2}></div>
      <div id="stars3" className={styles.stars3}></div>
    </div>
  );
};

export default StarBackground;
