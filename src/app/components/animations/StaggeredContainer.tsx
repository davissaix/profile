'use client';

import React, { useRef, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  initialDelay = 0.2
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
}

const StaggeredItem: React.FC<StaggeredItemProps> = ({
  children,
  className = ''
}) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export { StaggeredContainer, StaggeredItem };
