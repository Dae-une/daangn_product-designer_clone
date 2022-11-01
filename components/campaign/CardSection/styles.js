import { css, keyframes } from '@emotion/react';

const CardAni = keyframes`
  from {
    transform: translateX(0);
  }
  12% {
    transform:  translateX(-200%);
  }
  25% {
    transform:  translateX(0);
  }
  50% {
    transform: translateX(200);
  }
  63% {
    transform:  translate(0);
  }
  to{
    transform: translateX(-200%);
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
  animation: ${CardAni} 1800s linear 0s infinite normal;
`;
