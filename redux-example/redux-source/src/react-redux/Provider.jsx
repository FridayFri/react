import React, { Component } from 'react';
import { Provider } from './context'
class EnhancedProvider extends Component {
  state = {}
  render() {
    const { store } = this.props
    return (
      <Provider value={store}>
        {}
      </Provider>
    );
  }
}

export default EnhancedProvider;