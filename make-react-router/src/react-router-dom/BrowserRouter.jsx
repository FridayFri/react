import React, { Component } from 'react';
import { Router } from '../react-router/index'
import { createBrowserHistory as createHistory } from "history";


class BrowserRouter extends Component {
  // #
  // react-router-native
  //createMemmoryHistory
  //h5 history api pushState
  history = createHistory(this.props);
  state = {}
  render() {
    console.log(this.history)
    return (
      <Router history={this.history}
        children={this.props.children}
      />
    );
  }
}

export default BrowserRouter;