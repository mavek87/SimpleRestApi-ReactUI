import React, {Component} from 'react';
import UserList from '../../containers/UserList/UserList';
import UserControlPanel from '../../containers/UserControlPanel/UserControlPanel'
import CreateUserDialog from '../../containers/Dialog/CreateUserDialog/CreateUserDialog';
import ModifyUserDialog from '../../containers/Dialog/ModifyUserDialog/ModifyUserDialog';

const SERVER_URL = 'http://localhost:8899/';
const API_USERS = 'api/users';

/* TODO: da vedere se si puo usare oggetto nello state
const User = {
  name: '',
  age: 0
}
*/

export default class UserMenu extends Component {
  state = {
    user: '',
    age: 0,
    selectedUsersIds: [],
    users: []
  }

  // Utils

  isUserNameOk(username) {
    return (typeof username === 'string' && username.trim() !== '') ? true: false;
  }

  isUserAgeOk(age) {
    return (typeof age === 'number' && age >= 0) ? true : false;
  } 

  // Handlers

  onChangeUserSelectionHandler = (selectedUserId, event) => {
    let selectedUsersIds = this.state.selectedUsersIds;
    if(selectedUsersIds.includes(selectedUserId)) {
      selectedUsersIds = selectedUsersIds.filter(item => item !== selectedUserId);
    } else {
      selectedUsersIds.push(selectedUserId);
    }
    this.setState({selectedUsersIds: selectedUsersIds});
  }

  onChangeAllUsersSelectionHandler = (event) => {
    if(event.target.checked) {
      this.setState({selectedUsersIds: this.state.users.map(user => user.id), allUserSelected: true});
    } else {
      this.setState({selectedUsersIds: []});
    }
  }

  editUserNameHandler = (event) => {
    this.setState({user: event.target.value});
  }

  editUserAgeHandler = (event) => {
    this.setState({age: event.target.valueAsNumber || event.target.value});
  }

  deleteUserHandler = () => {
    const isMultipleDelete = this.state.selectedUsersIds.length > 1;
    console.log(isMultipleDelete);
    this.state.selectedUsersIds.forEach(id => {
      this.deleteUserFromApi(id, isMultipleDelete);
    });
  }

  saveUserHandler = () => {
    const username = this.state.user;
    const age = this.state.age;
    const newUserObj = {name: username, age: age};

    if(!this.isUserNameOk(username)) {
      alert('Attenzione! Nome non valido o vuoto!')
      return;
    }
    if(!this.isUserAgeOk(age)) {
      alert('Attenzione! Età non valida o vuota!')
      return;
    }
    
    fetch(SERVER_URL + API_USERS, {
      method: 'post',
      body: JSON.stringify(newUserObj)
    }).then(response => {
      return response.json();
    }).then(data => {
      alert(`Hai inserito l'utente ${username}`);
      this.setState({user: '', age: 0});
      this.getUsersFromApi();
    }).catch(err => {
      alert("Errore durante l'inserimento dell'utente");
      console.log(err);
    }); 
  }

  getUsersFromApi = () => {
    fetch(SERVER_URL + API_USERS)
    .then(response => {
      return response.json();
    }).then(data => {
      this.setState({users: data.users});
    }).catch(err => {
      console.log("Error: " + err);
    });
  }

  deleteUserFromApi = (userId, isMultipleDelete) => {
    fetch(SERVER_URL + API_USERS + '/' + userId, {
      method: 'delete'
    }).then(response => {
      return response.json();
    }).then(data => {
      if(!isMultipleDelete) {
        alert('Utente ' + data.user.name + " eliminato!");
      }
      this.getUsersFromApi();
    }).catch(err => {
      console.log("Error: " + err);
    });
  }

  // React lifecycle methods

  componentDidMount() {
    this.getUsersFromApi();
  }

  render() {
    return (
      <>
        <h1>User Menu</h1>
        <UserList 
          selected={this.state.selectedUsersIds}
          users={this.state.users}
          onSelectUser={this.onChangeUserSelectionHandler}
          onSelectAllUsers={this.onChangeAllUsersSelectionHandler}
          />
        <br/>
        <UserControlPanel 
          selected={this.state.selectedUsersIds} 
          onRemove={this.deleteUserHandler} />
        <br/>
        <CreateUserDialog 
          name={this.state.user}
          age={this.state.age} 
          onChangeName={this.editUserNameHandler}
          onChangeAge={this.editUserAgeHandler}
          onClick={this.saveUserHandler}
        />
        <ModifyUserDialog 
          name={this.state.user}
          age={this.state.age} 
          onChangeName={this.editUserNameHandler}
          onChangeAge={this.editUserAgeHandler}
          onClick={this.saveUserHandler}
        />
      </>
    );
  }
}