import React from 'react';

import { benefits } from '../../../Static/Benefit/Benefit';
import * as styles from './styles';
import FadeIn from '../../common/FadeIn/FadeIn';

const Benefit = () => {
  return (
    <section css={styles.BenefitSection}>
      <div css={styles.TitleWrapper}>
        <FadeIn delay={0}>
          <h2 css={styles.Title}>이번 캠페인에서만 주어지는 혜택이에요</h2>
        </FadeIn>
        <FadeIn delay={50}>
          <p css={styles.Pre}>군더더기를 모두 빼고 채용의 본질에만 집중했어요.</p>
        </FadeIn>
      </div>
      <div css={styles.ContentWrapper}>
        <ul css={styles.List}>
          {benefits.map((benefit, idx) => (
            <FadeIn key={benefit.title} delay={(idx + 2) * 50}>
              <li css={styles.BenefitList}>
                <h3 css={styles.BenefitTitle}>{benefit.title}</h3>
                <p css={styles.BenefitSub}>{benefit.subTitle}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefit;
