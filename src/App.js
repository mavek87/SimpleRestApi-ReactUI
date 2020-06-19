import React, {Component} from 'react';
import './App.css';
import UserMenuComponent from './components/UserMenu/UserMenuComponent';

export default class App extends Component {
  
  render() {
    return (
      <main className='App'>
        <UserMenuComponent />
      </main>
    )}
}
