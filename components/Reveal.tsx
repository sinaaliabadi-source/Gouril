'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const controls = useAnimationControls();
  const MotionTag = motion[as];

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <MotionTag
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {children}
    </MotionTag>
  );
}
