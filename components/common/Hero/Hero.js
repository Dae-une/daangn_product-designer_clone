import React from 'react';
import * as styles from './styles';

import useWindowInnerWidth from '../../../Hooks/useWindowInnerWidth';
import uesWindowInnerHeight from '../../../Hooks/useWindowInnerHeight';
import { getHeroTeaserVars } from '../../../utils/heroVars';

const Hero = () => {
  const width = useWindowInnerWidth(-1);
  const height = uesWindowInnerHeight(-1);
  const vars = getHeroTeaserVars(width);
  const ratio = width / height;

  const SlideProps = {
    shadeOffset: `${vars.web.shadeOffset}px`,
    textOffset: `${vars.web.textOffset}px`,
    animationDuration: `${vars.web.animationDuration}s`,
  };

  return (
    <div css={styles.TeaserWrap}>
      <div css={styles.Teaser1} />
      <div css={styles.Teaser2} />
      <div css={styles.Teaser3} />
      <div css={styles.Teaser4} />
    </div>
  );
};

export default Hero;
