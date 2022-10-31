import React from 'react';

import * as styles from './styles';

const links = [
  { text: '당근마켓 프로덕트 디자이너', url: '#' },
  { text: '채용 캠페인 일정', url: '#' },
  { text: '채용 공고', url: '#' },
  { text: '자주 묻는 질문', url: '#' },
];

const GNB = ({ visible }) => {
  return (
    <div css={styles.GNBcontainer({ visible })}>
      <nav css={styles.NavContainer}>
        <div css={styles.NavWrap}>
          <div css={styles.LogoWrap}>
            <img src="https://designer.daangn.com/logo.svg" style={{ width: '100%', height: '100%' }} />
          </div>
          <div css={styles.LinkWrapper}>
            <div css={styles.TextLinkWrapper}>
              <ul css={styles.TextLinkList}>
                {links.map((link) => (
                  <li key={link.text}>
                    <a href={link.url} css={styles.TextLinkAnchor}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div css={styles.ButtonLinkWrapper}>
              <a href="#" css={styles.ButtonLinkText}>
                <button css={styles.LinkButton}>간편 지원하기</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GNB;
