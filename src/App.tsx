import React, { Component } from 'react';
import './App.css';
import UserTest from './components/user-profile/'
import UserInterface from './components/user-profile/UserInterface'

class App extends Component {
  render() {
    const getUser = (): UserInterface => {
      return {
        name: 'Jarno',
        age: 18,
        address: "Pietarinkatu",
        dob: new Date()

      }
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Hello <UserTest { ...getUser() } />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
