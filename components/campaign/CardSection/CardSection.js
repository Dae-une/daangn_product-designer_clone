import React from 'react';
import * as styles from './styles';
import Card from '../Card/Card';

import { designers } from '../../../Static/Designers/Designers';

const CardSection = () => {
  return (
    <section css={styles.CardSectionWrap}>
      <div css={styles.Container}>
        <div css={styles.CardWrap}>
          {designers.map((designer) => (
            <Card key={designer.name} designer={designer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
