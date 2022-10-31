import { css, keyframes } from '@emotion/react';

const textAni = keyframes`
  from{
  opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;

const backgroundAni = keyframes`
  to {
    transform: translateX(1%);
  }
`;

export const TeaserWrap = css`
  overflow: hidden;
  background-color: #00b493;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -12;
`;

export const Teaser1 = css`
  background-image: url('../../../Static/Teaser/teaser_web_1.svg');
  background-position: 50%;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -9;
  height: 100vh;
  width: 100vw;
  animation: ${textAni} 2s linear infinite alternate;
  animation-delay: 0.5;
`;
export const Teaser2 = css`
  background-image: url('../../../Static/Teaser/teaser_web_2.svg');
  z-index: -8;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  animation: ${backgroundAni} 4s linear infinite alternate-reverse;
  animation-delay: 1.5s;
`;
export const Teaser3 = css`
  background-image: url('../../../Static/Teaser/teaser_web_3.svg');
  background-position: 50%;
  background-repeat: no-repeat;
  z-index: -6;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  animation: ${textAni} 2s linear infinite alternate;
  animation-delay: 1.5s;
`;
export const Teaser4 = css`
  background-image: url('../../../Static/Teaser/teaser_web_4.svg');
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${backgroundAni} 4s linear infinite alternate-reverse;
  animation-delay: 0.5;
`;
