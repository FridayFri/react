import React from 'react';
import logo from './logo.svg';
import ContextDemo from './ContextDemo.jsx'
import './App.css';
import Count from './Count'

function App() {
  return (
    <div className="App">
      <ContextDemo/>
      <Count />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
