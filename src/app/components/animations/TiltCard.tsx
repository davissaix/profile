'use client';

import React, { ReactNode } from 'react';
import Tilt from 'react-parallax-tilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.02,
  glareEnable = true,
  glareMaxOpacity = 0.15
}) => {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={1000}
      scale={scale}
      transitionSpeed={800}
      glareEnable={glareEnable}
      glareMaxOpacity={glareMaxOpacity}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="16px"
      className={className}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;
