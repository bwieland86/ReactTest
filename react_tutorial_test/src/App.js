import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and have fun while doing so!
        </a>
        <Hello></Hello>
      </header>
    </div>
    )
  }
}

class Hello extends Component {
  render() {
    return (
      <div className = "Hello">
      <h1>Hello Brian2!</h1>
      </div>
    )
  }
}

export default App;