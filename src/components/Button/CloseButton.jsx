import React from 'react';
import './Button.css';

const CloseButton = (props) => {
  return (
    <button className='close-btn' type='button' onClick={props.click}>
        X
    </button>
  )
}

export default CloseButton