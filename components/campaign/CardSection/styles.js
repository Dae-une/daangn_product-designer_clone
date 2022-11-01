import { css, keyframes } from '@emotion/react';

const CardAni = keyframes`
  from {
    transform: translateX(0%);
  }
  25% {
    transform:  translateX(-70%);
  }
  50% {
    transform:  translateX(0);
  }
  75% {
    transform: translateX(-70%);
  }
  to {
    transform:  translate(0);
  }

`;

export const CardSectionWrap = css`
  overflow: hidden;
`;

export const Container = css`
  display: flex;
`;

export const CardWrap = css`
  flex-shrink: 0;
  display: flex;
  will-change: transform;
  transform-origin: left;
  animation: ${CardAni} 300s linear 0s infinite;
`;
