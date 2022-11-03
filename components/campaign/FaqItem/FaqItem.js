import React from 'react';
import * as styles from './styles';

import { motion } from 'framer-motion';
import { ReactComponent as Chevron } from '../../../Static/Chevron/Chevron.svg';

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

const transition = {
  duration: 0.8,
  ease: [0.04, 0.62, 0.23, 0.98],
};

const FaqItem = ({ id, question, answer, open, onClick }) => {
  return (
    <div css={styles.Items}>
      <div id={id} onClick={() => onClick?.(id)} css={styles.QuestionWrapper}>
        <button css={styles.QuestionButton}>
          <h4 css={styles.Label}>{question}</h4>
          <span css={styles.ChevronWrapper}>
            <Chevron css={styles.Chevron({ open })} />
          </span>
        </button>
      </div>
      <div css={styles.AnswerWrapper}>
        <motion.div
          variants={variants}
          transition={transition}
          inital="collapsed"
          animate={open ? 'open' : 'collapsed'}
        >
          <div css={styles.Answer} aria-hidden={!open} dangerouslySetInnerHTML={{ __html: answer }} />
        </motion.div>
      </div>
    </div>
  );
};

export default FaqItem;
