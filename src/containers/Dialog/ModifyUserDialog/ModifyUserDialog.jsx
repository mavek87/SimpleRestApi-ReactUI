import React from 'react';
import Dialog from '../Dialog';
import InputBlock from '../../InputBlock/InputBlock';

const ModifyUserDialog = (props) => {
  return (
    <>
      <Dialog title={`Edit user ${props.name}`}>
        <InputBlock 
          title='User' 
          type='text'
          value={props.name} 
          maxLength='20'
          onChange={props.onChangeName} 
          placeholder='insert a user name'
        />
        <br/>
        <InputBlock 
          title='Age'
          type='number' 
          value={props.age}
          onChange={props.onChangeAge} 
          placeholder='insert an age'
        />
        <br/>
        <button 
          onClick={props.onClick}>Save</button>
      </Dialog>
    </>
  );
}

export default ModifyUserDialog;