import React from 'react';
import styles from './UserList.module.css';

const UserList = (props) => {
  if(props.users.length === 0) {
    return null;
  } else {
    return (
      <>
        <h3>User List:</h3>
        <table className={styles.UserList}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>
                <input 
                  type='checkbox' 
                  onChange={props.onSelectAllUsers}>
                </input>
              </th>
            </tr>
          </thead>
          <tbody>
          {
            props.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <input 
                      id={'select-' + user.id} 
                      type='checkbox' 
                      checked={props.selected.includes(user.id)}
                      onChange={(e) => props.onSelectUser(user.id, e)}>
                    </input>
                  </td>
                </tr>
              );
            })
          }
          </tbody>        
        </table>
      </>
    );
  }
}

export default UserList;