import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from './react-router-dom/index'
import './App.css';
function Home() {
  return "Home"
}
function Detail() {
  return 'Detail'
}

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link>home</Link></li>
          <li><Link>detail</Link></li>
        </ul>
        <Route path='/' component={Home} />
        <Route path='/detail' component={Detail} />
      </BrowserRouter>
    );
  }
}

export default App;