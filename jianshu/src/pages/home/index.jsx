import React, { Component } from 'react';
import './index.css'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actionCreators  from '../home/store/actionCreators';

class Home extends Component {
  state = {}
  render() {
    return (
      <div className="homeWrapper">
        <div className="homeLeft">
          <img className="img" src="//upload-images.jianshu.io/upload_images/9850324-cdb5b63e76618f40.jpg" alt="" />
          <Topic />
          <List />
        </div>
        <div className="homeRight">
          <Recommend />
          <Writer />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  }
})
export default connect(null, mapDispatch)(Home);