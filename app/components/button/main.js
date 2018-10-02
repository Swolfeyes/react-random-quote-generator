import React, { Component } from 'react';

import styles from './main.scss';

const Button = ({ onClick }) => {
    return (
      <div>
        <button className={styles['button']} onClick={onClick}>
          <span>New Quote</span>
        </button>
      </div>
    )
}

Button.displayName = 'Button';

export default Button;
