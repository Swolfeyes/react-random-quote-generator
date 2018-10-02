import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './main.scss';

const Icon = ({ icon }) => {
  return (
    <div>
      <FontAwesomeIcon
        className={styles['icon']}
        icon={icon}
      />
    </div>
  )
}

Icon.displayName = 'Icon';

export default Icon;
