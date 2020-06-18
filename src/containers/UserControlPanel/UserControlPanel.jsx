import React from 'react'; 
import styles from './UserControlPanel.module.css';

const UserControlPanel = (props) => {
  const removeOn = props.selected.length > 0;
  const modifyOn = props.selected.length === 1;
  return (
    <div className={styles.UserControlPanel}>
      <button onClick={props.onCreate}>Create</button>
      <button disabled={!modifyOn} onClick={props.onEdit}>Modify</button>
      <button disabled={!removeOn} onClick={props.onRemove}>Remove</button>
    </div>
  );
}

export default UserControlPanel;
