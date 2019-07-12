import React, { Component } from 'react';
import './index.css'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: true
    } 
  }
  render() { 
    return ( 
      <div className="logo">
        <a href="/"></a>
        <div className="nav">
          <div className="nav-item left active">首页</div>
          <div className="nav-item left">下载App</div>
          <div className="nav-item right">登录</div>
          <div className="nav-item right">
            <i className="iconfont">&#xe636;</i>
          </div>
          <CSSTransition
            in={this.state.focused}
            timeout={200}
            classNames='slide'
          >
            <div 
              className={this.state.focused?'search focused':'search'}
              onFocus={this.handleInputFocus}
              onBlur = {this.handleInputBulr}
              >
              <input  placeholder="搜索"
              />
              <i className="iconfont">&#xe614;</i>
            </div>
          </CSSTransition>
          <div className="addition">
            <div className="button red">注册</div>
            <div className="button writte">
            <i className="iconfont">&#xe615;</i>
              写文章</div>
          </div>
        </div>
      </div>
     );
  }
  handleInputFocus=() =>{
    this.setState({
      focused:true
    })
  }
  handleInputBulr=()=>{
    this.setState({
      focused:false
    })
  }
}
 
export default Header;