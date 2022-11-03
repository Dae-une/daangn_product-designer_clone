import React from 'react';
import * as styles from './styles';
import { faqs } from '../../../Static/Faq/faq';
import { AnimatePresence } from 'framer-motion';
import FadeIn from '../../common/FadeIn/FadeIn';
import FaqItem from '../FaqItem/FaqItem';

const initialState = {
  lastAction: '',
  id: '',
};

const faqInit = {
  lastAction: '',
  menu: '지원 관련',
};

const reducer = (state, action) => {
  const reset = state.id === action.id && state.lastAction === action.type;
  return reset ? initialState : { lastAction: action.type, id: action.id };
};

const faeqReducer = (state, action) => {
  return {
    lastAction: action.type,
    menu: action.menu,
  };
};
const Faq = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [faqState, faqDispatch] = React.useReducer(faeqReducer, faqInit);
  const currentFaq = React.useDeferredValue(faqs[faqState.menu]);
  return (
    <section css={styles.Container}>
      <FadeIn delay={0}>
        <h3 css={styles.Title}>자주 묻는 질문</h3>
        <div css={styles.MenuWrapper}>
          <ul css={styles.MenuList}>
            {Object.keys(faqs).map((faq) => (
              <li key={faq} css={styles.Menus}>
                {faq}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      <FadeIn>
        <div css={styles.FaqWrapper}>
          <AnimatePresence initial={false}>
            {currentFaq.items.map((faq) => (
              <FaqItem
                key={faq.question}
                id={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={state.id === faq.question}
                onClick={() => dispatch({ type: 'CLICK', id: faq.question })}
              />
            ))}
          </AnimatePresence>
        </div>
      </FadeIn>
    </section>
  );
};

export default Faq;
