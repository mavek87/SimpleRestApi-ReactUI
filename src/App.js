import React, {Component} from 'react';
import './App.css';
import UserMenu from './components/UserMenu/UserMenu';

export default class App extends Component {
  
  render() {
    return (
      <main className='App'>
        <UserMenu />
      </main>
    )}
}
