import React, { useEffect, useRef, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import * as styles from './styles';

import useWindowInnerWidth from '../../../Hooks/useWindowInnerWidth';
import useWindowInnerHeight from '../../../Hooks/useWindowInnerHeight';

import { what, why, how } from '../../../Static/Article/Article';

import StoryArticle from '../StoryArticle/StoryArticle';
import FadeIn from '../../common/FadeIn/FadeIn';

const Story = () => {
  const [howTurn, setHow] = useState(false);
  const [whyTurn, setWhy] = useState(false);

  const howRef = useRef(null);
  const whyRef = useRef(null);

  const viewportWidth = useWindowInnerWidth(-1);
  const viewportHeight = useWindowInnerHeight(-1);
  const ratio = viewportWidth / viewportHeight;

  const articleTranslateYOffset =
    ratio > 1.95
      ? '-80.2%'
      : ratio > 1.9
      ? '-91.05%'
      : ratio > 1.7
      ? '-85%'
      : ratio >= 1.54
      ? '-84.8%'
      : ratio >= 0.95
      ? '-87%'
      : ratio > 0.55
      ? '-87%'
      : '-89%';

  const handelScroll = () => {
    if (howRef.current) {
      const { top } = howRef.current.getBoundingClientRect();

      if (top < 130) {
        setHow(true);
      } else {
        setHow(false);
      }
    }

    if (whyRef.current) {
      const { top } = whyRef.current.getBoundingClientRect();

      if (top < 130) {
        setHow(false);
        setWhy(true);
      } else {
        setWhy(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelScroll);
    return () => window.removeEventListener('scroll', handelScroll);
  }, []);

  return (
    <div>
      <Controller>
        <Scene duration={3000} pin triggerHook="onLeave">
          {(progress) => (
            <div>
              <div css={styles.ProgressBar}>
                <Timeline totalProgress={progress} paused>
                  <Tween from={{ width: '0%' }} to={{ width: '100%' }}>
                    <div css={styles.Progress} />
                  </Tween>
                </Timeline>
              </div>
              <section css={styles.StorySection}>
                <div ccs={styles.TopDim} />
                <div css={styles.BottomDim} />
                <div css={styles.ContentWrapper}>
                  <div css={styles.TitleWrapper}>
                    <FadeIn delay={0}>
                      <h2 css={styles.WhatTitle({ howTurn, whyTurn })}>
                        당근마켓
                        <br />
                        프로덕트 디자이너는
                        <br />
                        이런 일을 해요
                      </h2>
                    </FadeIn>
                    <h2 css={styles.HowTitle({ howTurn })}>
                      당근마켓
                      <br />
                      프로덕트 디자이너는
                      <br />
                      이렇게 일해요
                    </h2>
                    <h2 css={styles.WhyTitle({ whyTurn })}>
                      프로덕트 디자이는
                      <br />
                      왜 당근마켓을
                      <br />
                      선택했을까요?
                    </h2>
                  </div>
                  <div style={{ overfolw: 'hidden' }}>
                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{ transform: 'translate3d(0,0,0)' }}
                        to={{ transform: `translate3d(0,${articleTranslateYOffset},0)` }}
                      >
                        <div css={styles.ArticleWrapper}>
                          <div>
                            {what.map((article) => (
                              <StoryArticle key={article.title} title={article.title} desc={article.description} />
                            ))}
                          </div>
                          <div ref={howRef}>
                            {how.map((article) => (
                              <StoryArticle key={article.title} title={article.title} desc={article.description} />
                            ))}
                          </div>
                          <div ref={whyRef}>
                            {why.map((article) => (
                              <StoryArticle key={article.title} title={article.title} desc={article.description} />
                            ))}
                          </div>
                        </div>
                      </Tween>
                    </Timeline>
                  </div>
                </div>
              </section>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default Story;
