import React, { Component } from 'react';

//计数器 + - 
class Counter extends Component {
  state = {}
  render() {
    const { value, onIncrement,onDecrement } = this.props
    return (
      <div>
        {value} 
        <div>
          <button onClick={onIncrement}> + </button>
        </div>
        <div>
          <button onClick={onDecrement}> - </button>
        </div>
      </div>
    );
  }
}

export default Counter;