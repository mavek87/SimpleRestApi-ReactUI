import React from 'react';
import styles from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={styles.Dialog}>
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
}

export default Dialog;