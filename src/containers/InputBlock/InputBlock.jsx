import React from 'react';
import styles from './InputBlock.module.css';

const InputBlock = (props) => {
  return (
  <div className={styles.InputBlock}>
    <label>{props.title}</label>
    <input 
      type={props.type} 
      value={props.value} 
      maxLength={props.maxLength}
      placeholder={props.placeholder} 
      onChange={props.onChange} />
  </div>
  )
}

export default InputBlock;