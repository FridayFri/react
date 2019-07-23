import connect from './react-redux/connect'
import React, { Component } from 'react';

class Count extends Component {
  state = {}
  render() {
    return (
      <div className="">
        count:{this.props.count}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state
})
const mapDispatchToProps = (dispatch) => ({
    increment: () => {
      dispatch({ type: 'INCREMENT' })
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT' })
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Count);