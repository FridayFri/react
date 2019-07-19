import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {}
  render() {
    if(!this.props.loginStatus){
      return (
        <div className="loginWrapper">
          <div className="loginBox">
            <input type="text" placeholder="账号"
              id="account"
            />
            <input type="password" placeholder="密码"
              id="password"
            />
            <div className="loginButton"
              onClick={() => this.props.login(this.account, this.password)}
            >登录</div>
          </div>
        </div>
      );
    }else{
      return <Redirect to ="/" />
    }
  }
}
const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login','login'])
})
const mapDispatchToProps = (dispatch) => ({
  login() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    dispatch(actionCreators.login(account, password))
    console.log(account, password)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);