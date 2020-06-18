import React from 'react';
import Modal from '../Modal';
import InputBlock from '../../InputBlock/InputBlock';

const EditUserModal = (props) => {
  return (
    <Modal 
      title={`Edit user ${props.name}`}
      show={props.show}
      modalClosed={props.modalClosed}
    >
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
      <button onClick={props.onSave}>Save</button>
    </Modal>
  );
}

export default EditUserModal;