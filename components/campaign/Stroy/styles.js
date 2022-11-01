import { css, keyframes } from '@emotion/react';

export const ProgressBar = css`
  padding-top: 4.5rem;
  display: grid;
`;
export const Progress = css`
  background: linear-gradient(90deg, #ff6f0f, #8482f3);
  height: 4px;
  transition: background 0.3s;
`;

export const StorySection = css`
  height: 100vh;
  margin-inline: 1.5rem;
  overflow: hidden;
  padding-top: 4rem;
  position: relative;
`;
export const TopDim = css`
  background: linear-gradient(180deg, rgba(33, 33, 36, 0), #212124);
  height: 6.875rem;
  z-index: 1;
  transform: rotate(180deg);
  position: absolute;
  top: 0;
  width: 100%;
`;

export const BottomDim = css`
  background: linear-gradient(180deg, rgba(33, 33, 36, 0), #212124);
  height: 6.875rem;
  z-index: 1;
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const ContentWrapper = css`
  gap: 6.875rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const TitleWrapper = css`
  max-width: 34.875rem;
  position: relative;
  width: 29.625rem;
`;

const titleKeyframes = keyframes`
  from {
    transform: translateY(10%);
  }
  to{
    transform: translateY(0);
  }
`;

export const WhatTitle = (props) => css`
  background-image: linear-gradient(180deg, #ff6f0f, #8482f2);
  opacity: ${props.howTurn === true || props.whyTurn === true ? 0 : 1};
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.75rem;
  line-height: 135%;
  margin: 0 auto;
  text-align: left;
  transition: opacity 0.25s;
  will-change: transform, opacity;
  position: absolute;
  left: 0;
  top: 0;
`;
export const HowTitle = (props) => css`
  opacity: ${props.howTurn ? 1 : 0};
  background-image: linear-gradient(180deg, #8482f3, #01b594);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.75rem;
  line-height: 135%;
  margin: 0 auto;
  text-align: left;
  transform: translateY(${props.howTurn ? 0 : '10%'});
  transition: transform 1s;
  will-change: transform, opacity;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${titleKeyframes} 0.5s;
`;
export const WhyTitle = (props) => css`
  opacity: ${props.whyTurn ? 1 : 0};
  background-image: linear-gradient(180deg, #00b493, #ff8fff);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.75rem;
  line-height: 135%;
  margin: 0 auto;
  text-align: left;
  transform: translateY(${props.whyTurn ? 0 : '10%'});
  transition: transform 0.5s;
  will-change: transform, opacity;
  position: absolute;
  left: 0;
  top: 0;
`;

export const ArticleWrapper = css`
  transform: translate(0px, 0px);
  translate: none;
  rotate: none;
  scale: none;
  flex-shrink: 0;
  max-width: 34.875rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;
