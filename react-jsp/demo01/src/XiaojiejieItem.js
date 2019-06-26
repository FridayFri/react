import React, { Component } from 'react';
import PropTypes from 'prop-types'



class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps')
  // }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true
    }else
    return false
  }
  render() {
    console.log('render')
    return (
      <li onClick={this.handleClick}>
        {this.props.avname} 11111 {this.props.content}
          </li>
    );
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}
XiaojiejieItem.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps={
  avname:'123'
}

export default XiaojiejieItem;