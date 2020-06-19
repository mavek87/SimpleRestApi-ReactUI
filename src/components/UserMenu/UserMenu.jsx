import React from 'react';
import UserList from '../../containers/UserList/UserList';
import UserControlPanel from '../../containers/UserControlPanel/UserControlPanel'
import CreateUserModal from '../../containers/Modal/CreateUserModal/CreateUserModal';
import EditUserModal from '../../containers/Modal/EditUserModal/EditUserModal';

const UserMenu = ({controller: controller}) => {
  const {state} = controller.state;
  return (
      <>
        <h1>User Menu</h1>
        <UserList 
          selected={controller.state.selectedUsersIds}
          users={controller.state.users}
          onSelectUser={controller.onChangeUserSelectionHandler}
          onSelectAllUsers={controller.onChangeAllUsersSelectionHandler}
          />
        <br/>
        <UserControlPanel 
          selected={controller.state.selectedUsersIds} 
          onCreate={controller.createModeHandler}
          onEdit={controller.editModeHandler}
          onRemove={controller.deleteUserHandler} />
        <br/>
        <CreateUserModal
          show={controller.state.isCreateModeOn}
          modalClosed={controller.cancelEditModeHandler}
          name={controller.state.user}
          onChangeName={controller.editUserNameHandler}
          age={controller.state.age} 
          onChangeAge={controller.editUserAgeHandler}
          onSave={controller.saveUserHandler}
        />
        <EditUserModal
          show={controller.state.isEditModeOn}
          modalClosed={controller.cancelEditModeHandler}
          name={controller.state.user}
          onChangeName={controller.editUserNameHandler}
          age={controller.state.age} 
          onChangeAge={controller.editUserAgeHandler}
          onSave={controller.saveUserHandler}
        />
      </>
    );
}

export default UserMenu;
