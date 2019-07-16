import React from 'react';
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Detail from '../src/pages/detail'
import Login from '../src/pages/login'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
        <Header/>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
