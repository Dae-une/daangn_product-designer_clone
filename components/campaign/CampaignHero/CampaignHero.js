import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Hero from '../../common/Hero/Hero';
import HeroText from '../../common/HeroText/HeroText';

import * as styles from './styles';
import useWindowInnerWidth from '../../../Hooks/useWindowInnerWidth';

const CampaignHero = () => {
  const viewportWidth = useWindowInnerWidth(-1);

  const backgroundSize = viewportWidth > 992 ? 140 : viewportWidth > 576 ? 108 : 80;
  const transparentOffset = backgroundSize + 27;

  return (
    <Controller>
      <Scene duration={2200} pin triggerHook="onLeave">
        {(progress) => (
          <div>
            <section
              style={{
                backgroundSize: `${backgroundSize}px`,
              }}
            >
              <Hero />
              <Timeline target={<div css={styles.ShadowBox} />} totalProgress={progress} paused>
                <Tween
                  from={{
                    backgroundImage: `repeating-linear-gradient(90deg, #212124 0px 0px, transparent 0px ${backgroundSize}px)`,
                  }}
                  to={{
                    backgroundImage: `repeating-linear-gradient(90deg, #212124 0px ${transparentOffset}px, transparent 0px ${backgroundSize}px)`,
                  }}
                />
              </Timeline>
              <HeroText link={false} label="2022.10.14 - 10.30" progress={progress} />
            </section>
          </div>
        )}
      </Scene>
    </Controller>
  );
};
export default CampaignHero;
