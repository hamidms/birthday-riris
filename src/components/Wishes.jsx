'use client'

import styles from '../styles/Wishes.module.css';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Wishes = () => {
  const value = `Hari ini adalah momen yang sangat istimewa karena dunia diberkahi dengan kehadiranmu yang luar biasa.
    Hari ini adalah momen yang sangat istimewa karena dunia diberkahi dengan kehadiranmu yang luar biasa.
    Hari ini adalah momen yang sangat istimewa karena dunia diberkahi dengan kehadiranmu yang luar biasa.`;

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.6', 'start 0.2']
  })

  const words = value.split(" ")

  return (
    <p 
      className={styles.wishes}
      ref={element}
    >
      {
        words.map( (word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
        })
      }
    </p>
  );
};
  
const Word = ({children, range, progress}) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
      <span className={styles.word}>
          <span className={styles.shadow}>{children}</span>
          <motion.span style={{ opacity }}>{children}</motion.span>
      </span>
  )
}

export default Wishes