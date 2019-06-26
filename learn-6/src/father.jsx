import React, { Component } from 'react';
import Child from './child'
class Father extends Component {
  constructor() {
    super();
    this.sendFromChild = this.sendFromChild.bind(this)
  }
  state = {
    msg: 'hello world'
  }
  sendFromChild(val) {
    this.setState({
      msg: val
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1><Child sendFromChild={this.sendFromChild}/>
      </div>
    );
  }
}

export default Father;