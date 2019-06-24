import React, { Component } from 'react'
class Child extends Component {
  state={
  
  }
  handleAnotherFun =()=>{
    console.log('handleAnotherFun')
  }
  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      inputVal : e.target.value
    })
  }
  handleClick = (e) => {
    console.log(this)
    this.handleAnotherFun()
    console.log(e.target.innerHTML)
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.msg}
        <input type="text" value={this.state.inputVal} placeholder="请输入内容"
        onChange={this.handleChange}/>
      </div>
    )
  }
}
export default Child;