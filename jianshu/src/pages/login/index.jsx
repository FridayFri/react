import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux'
// import * as actionCreators from './store/actionCreators'

class Login extends Component {
  state = {}
  render() {
    return (
     <div>login</div>
    );
  }
}
const mapStateToProps = (state) => ({
 
})
const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);