import React from 'react';
import { SimpleReveal } from 'simple-reveal';
import 'simple-reveal/index.css';

const FadeIn = ({ children, delay }) => {
  return (
    <SimpleReveal
      render={({ ref, cn, style }) => (
        <div ref={ref} className={cn()} style={style}>
          {children}
        </div>
      )}
      duration={450}
      delay={delay}
      initialTransform="translateY(70px)"
    />
  );
};

export default FadeIn;
