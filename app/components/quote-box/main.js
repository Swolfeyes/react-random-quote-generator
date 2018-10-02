import React from 'react';

import Button from '../button/main.js';
import PostLink from '../post-link/main.js';
import Icon from '../icon/main.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitterSquare, faFacebookSquare);

import styles from './main.scss';

const QuoteBox = ({ text, author, onClick, icon }) => {
  return (
    <div className={styles['quote-box']}>
      <div className={styles['quote-box__body']}>
        <div className={styles['quote-box__body__text']}>
          <h1>{text}</h1>
        </div>
        <div className={styles['quote-box__body__author']}>
          <h2>- {author} -</h2>
        </div>
      </div>
      <div className={styles['quote-box__footer']}>
        <div className={styles['quote-box__footer__item']}>
          <Button onClick={onClick} />
        </div>
        <div className={styles['quote-box__footer__item']}>
          <PostLink
            text={text}
            author={author}
            link={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(text + " - " + author)}`}
            icon={['fab', 'twitter-square']}
          />
        </div>
        <div className={styles['quote-box__footer__item']}>
          <PostLink
            text={text}
            author={author}
            link={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://swolfeyes.github.io/myPortfolio/')}`}
            icon={['fab', 'facebook-square']}
          />
        </div>
      </div>
    </div>
  );
}

QuoteBox.displayName = 'QuoteBox';

export default QuoteBox;
