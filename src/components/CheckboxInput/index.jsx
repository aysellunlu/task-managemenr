import React from 'react';
import classes from './styles.module.css';

const CheckboxInput = ({id,name,value, className,...props}) => {
  return (
    <input type="checkbox" id={id} name={name} value={value}/>
  )
}

export default CheckboxInput