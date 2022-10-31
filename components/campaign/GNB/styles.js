import { css } from '@emotion/react';

export const GNBcontainer = (props) => css`
  display: block;
  opacity: ${props.visible ? 1 : 0};
  background-color: #212124;
  z-index: 100;
  top: 0;
  position: fixed;
  width: 100%;
  transition: opacity 0.6s;
`;

export const NavContainer = css`
  margin-inline: auto;
  max-width: 60rem;
  padding-block: 1.0625rem;
`;

export const NavWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
`;

export const LogoWrap = css`
  margin-right: 0.75rem;
  width: 7.1875rem;
`;

export const LinkWrapper = css`
  display: flex;
  gap: 2.5rem;
  height: inherit;
  align-items: center;
`;

export const TextLinkWrapper = css``;

export const TextLinkList = css`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

export const TextLinkAnchor = css`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  line-height: 26px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export const ButtonLinkWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLinkText = css`
  color: inherit;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;
export const LinkButton = css`
  background-color: white;
  border: none;
  border-radius: 50px;
  color: black;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  padding: 0;
  padding-block: 0.4375rem;
  padding-inline: 0.75rem;
  cursor: pointer;
`;
