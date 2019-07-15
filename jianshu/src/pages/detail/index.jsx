import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Detail extends Component {
  state = {}
  render() {
    return (
      <div className="detailWrapper">
        <div className="header">
        什么是真正教育？
          </div>
        <div className="content">
          <img src={"https://upload-images.jianshu.io/upload_images/4652891-11a863274e8b0453.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"}alt="" />
          <p>前几天，看到一篇微信文章，说的是一个初中毕业的服务员，通过学会使用搜索引擎，
          在网络上学习，陆续在城市里考过了人力资源师，学会了项目策划，文案策划等等，
          搜索引擎就是她的老师，她的高中，她的大学。这让我想起了刘润老师曾经在2018年
          招聘新媒体写作人员的时候，他的素质要求一行这样写道：</p>
          <p>前几天，看到一篇微信文章，说的是一个初中毕业的服务员，通过学会使用搜索引擎，
          在网络上学习，陆续在城市里考过了人力资源师，学会了项目策划，文案策划等等，
          搜索引擎就是她的老师，她的高中，她的大学。这让我想起了刘润老师曾经在2018年
          招聘新媒体写作人员的时候，他的素质要求一行这样写道：</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  desc: state.get('desc'),
  img: state.get('img'),
  title: state.get('title')
})
const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail);