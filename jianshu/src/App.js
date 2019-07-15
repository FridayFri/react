import React from 'react';
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Detail from '../src/pages/detail'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
        <Header/>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
