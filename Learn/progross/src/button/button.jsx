import React, { Component } from 'react';
import './button.css'
class Button extends Component {
  state = {
    selected: true
  }
  handleClick = () => {
    console.log('test')
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    return (
    <div>
      <div className={this.state.selected?"active":"active1"}
        onClick={this.handleClick}
      >
        Button
      </div>
    </div>);
  }
}

export default Button;