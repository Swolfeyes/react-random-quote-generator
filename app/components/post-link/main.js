import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Icon from '../icon/main.js';

const PostLink = ({ link, icon }) => {
  return (
    <div>
      <a
      href={link}
      target="_blank">
        <Icon icon={icon} />
      </a>
    </div>
  )
}

PostLink.displayName = 'PostLink';

export default PostLink;
