import React from 'react';
import FadeIn from '../../common/FadeIn/FadeIn';
import * as styles from './styles';

const StoryArticle = ({ title, desc }) => {
  return (
    <FadeIn delay={0}>
      <div css={styles.ArticleWrapper}>
        <h3 css={styles.Title}>{title}</h3>
        <p css={styles.Desc}>{desc}</p>
      </div>
    </FadeIn>
  );
};

export default StoryArticle;
