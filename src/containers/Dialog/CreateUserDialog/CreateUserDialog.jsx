import React from 'react';
import Dialog from '../Dialog';
import InputBlock from '../../InputBlock/InputBlock';

const CreateUserDialog = (props) => {
  return (
    <>
      <Dialog title="Create a new user">
        <InputBlock 
          title='User' 
          type='text'
          value={props.name} 
          maxLength='20'
          onChange={props.onChangeName} 
          placeholder='insert a user name'/>
        <br/>
        <InputBlock 
          title='Age'
          type='number' 
          value={props.age}
          onChange={props.onChangeAge} 
          placeholder='insert an age'/>
        <br/>
        <button onClick={props.onClick}>Save</button>
      </Dialog>
    </>
  );
}

export default CreateUserDialog;