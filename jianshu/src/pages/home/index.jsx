import React, { Component } from 'react';
import './index.css'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import * as actionCreators from '../home/store/actionCreators';

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(20, 20)
  }
  render() {
    return (
      <div className="homeWrapper">
        <div className="homeLeft">
          <img className="img" src="https://upload-images.jianshu.io/upload_images/4458735-5a168eb01a15d818.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="" />
          <Topic />
          <List />
        </div>
        <div className="homeRight">
          <Recommend />
          <Writer />
        </div>
        {
          this.props.showScroll ?
            <div className="backTop"
              onClick={this.handleScrollTop}
            >
             顶部
        </div> : null
        }
      </div>
    );
  }
  componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 500) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState, mapDispatch)(Home);