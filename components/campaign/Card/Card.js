import React from 'react';

import * as styles from './styles';

const Card = ({ designer }) => {
  return (
    <div css={styles.CardWrapper} style={{ background: `${designer.background}` }}>
      <div css={styles.CommentWrap}>
        <p css={styles.Comment}>{designer.comment}</p>
      </div>
      <div css={styles.ProfileWrap}>
        <div css={styles.ContentWrap}>
          <span css={styles.Name}>{designer.name}</span>
          <div css={styles.TeamWrap}>
            <span css={styles.Team}>{designer.team}</span>
            <span css={styles.Pd}>{designer.position}</span>
          </div>
        </div>
        <div css={styles.ImageWrap}>
          <img css={styles.Image} />
        </div>
      </div>
    </div>
  );
};

export default Card;
