/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const TitleWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const SubtitleWrapper = css`
  padding-top: 2.25rem;
`;

export const SubTitleText = css`
  position: relative;
  background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0 auto;
  text-align: center;
  -webkit-text-stroke: 0.5px transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const MainTitleWrapper = css`
  display: flex;
  flex-direction: column;
  background-clip: text;
  flex: 1 1 auto;
  gap: 3rem;
  justify-content: center;
`;

export const TitleText = css`
  position: relative;
  background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
  -webkit-text-stroke: 2px transparent;
  display: inline-block;
  font-size: 6.25rem;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  margin: 0 auto;
  text-align: center;
`;

export const Label = css`
  position: relative;
  font-size: 1.5rem;
  line-height: 140%;
  font-weight: 900;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 auto;
`;

export const BottomButton = css`
  display: flex;
  padding-bottom: 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const ButtonAnchor = css`
  outline: none;
  text-decoration: none;
`;
export const GitButton = css`
  position: relative;
  background-color: white;
  border: 0;
  border-radius: 60px;
  height: 5rem;
  outline: 0;
  width: 20.125rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 135%;
`;
