import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.scss';

export default (props) => {
  return (
    <div class='modal'>
      <Link to="/" className='close' onClick={props.close}>close</Link>
      {props.children}
    </div>
  );
}