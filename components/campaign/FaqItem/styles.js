import { css } from '@emotion/react';

export const Items = css`
  border-bottom: 1px solid #34373d;
`;
export const QuestionWrapper = css`
  cursor: pointer;
  padding-bottom: 2.0625rem;
  padding-top: 1.75rem;
  display: flex;
  align-items: center;
`;
export const QuestionButton = css`
  background: none;
  border: none;
  color: #eaebee;
  cursor: pointer;
  float: 1 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  outline: none;
  padding: 0;
  width: 100%;
`;
export const Label = css`
  flex: 1 1;
  margin-right: 1.5rem;
  text-align: left;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 135%;
`;
export const ChevronWrapper = css`
  height: 1.5rem;
  width: 1.5rem;
`;
export const Chevron = (props) => css`
  color: #adb1ba;
  height: 100%;
  transition: trasform 0.3s, -webkit-transform 0.3s;
  transform: rotate(${props.open ? '180deg' : '0deg'});
`;
export const AnswerWrapper = css`
  overflow: hidden;
`;
export const Answer = css`
  color: #adb1ba;
  padding-block: 2.375rem;
  padding-inline: 1.5rem;
  font-size: 1rem;
  line-height: 150%;
`;
