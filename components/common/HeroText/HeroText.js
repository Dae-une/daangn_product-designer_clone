import React from 'react';
import * as styles from './styles';
import { Timeline, Tween } from 'react-gsap';

const teaserTitleText = {
  title: '당근마켓\n프로덕트 디자이너를\n소개합니다.',
  subTitle: '당근마켓 FOCUS 채용',
};

const HeroText = ({ progress }) => {
  return (
    <div css={styles.TitleWrapper}>
      <div css={styles.SubtitleWrapper}>
        <Timeline
          target={<h2 css={styles.SubTitleText}>{teaserTitleText.subTitle}</h2>}
          totalProgress={progress}
          paused
        >
          <Tween
            from={{
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
            }}
            to={{
              backgroundImage: 'linear-gradient(180deg, #FF6F0F 0%, #FF6F0F 100%)',
            }}
          />
        </Timeline>
      </div>
      <div css={styles.MainTitleWrapper}>
        <Timeline
          paused
          totalProgress={progress}
          target={
            <h1 css={styles.TitleText}>
              당근마켓
              <br />
              프로덕트 디자이너를
              <br />
              기다립니다
            </h1>
          }
        >
          <Tween
            from={{
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
            }}
            to={{
              backgroundImage: 'linear-gradient(180deg, #FF6F0F 0%, #8482F2 100%)',
            }}
          />
        </Timeline>
        <Timeline
          paused
          totalProgress={progress}
          target={
            <div css={styles.Label}>
              아쉽게도 본 캠페인의 서류접수는 마감되었어요.
              <br />
              이후 지원은 당근마켓 채용 페이지의 상시 채용을 이용해주세요
            </div>
          }
        >
          <Tween
            from={{
              backgroundImage: 'linear-gradient(180deg,white 0%, white 100%)',
            }}
            to={{
              backgroundImage: 'linear-gradient(180deg, #adb1ba; 0%, #adb1ba;100%)',
            }}
          />
        </Timeline>
      </div>
      <div css={styles.BottomButton}>
        <a css={styles.ButtonAnchor} href="https://github.com/Dae-une">
          <button css={styles.GitButton}>깃허브 바로가기</button>
        </a>
      </div>
    </div>
  );
};

export default HeroText;
