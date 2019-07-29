import React, { Component } from 'react';
import { __RouterContext as RouterContext } from '../react-router/index';
class Link extends Component {
  state = {  }
  render() { 
    return (
      <RouterContext.Consumer>
        {
          context => {
            const { history } = context;
            const { to } = this.props;
            return (
              <div>
              <a 
              href={to}
              onClick={(event) => {
                event.preventDefault();
                history.push(to);
              }}> 
                { this.props.children }
              </a></div>
            )
          }
        }
      </RouterContext.Consumer>
    );
  }
}
 
export default Link;