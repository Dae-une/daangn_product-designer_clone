import { css, keyframes } from '@emotion/react';

const backgroundAni = keyframes`
  from{
  opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ShadowBox = css`
  background-image: repeating-linear-gradient(
    90deg,
    rgb(33, 33, 36) 0px,
    rgb(33, 33, 36) 7.4277px,
    rgba(48, 48, 51, 0.93) 10.1787px,
    rgba(48, 48, 51, 0.93) 137.799px
  );

  z-index: -2;
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
`;
export const Teaser2 = css`
  background-image: url('../../../Static/Teaser/teaser_web_2.svg');
  z-index: -8;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
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
`;
export const Teaser4 = css`
  background-image: url('../../../Static/Teaser/teaser_web_4.svg');
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
`;
