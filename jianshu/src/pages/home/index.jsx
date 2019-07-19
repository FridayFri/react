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
          <img className="img" src="https://user-gold-cdn.xitu.io/2019/7/16/16bf8c89c41f87c1?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1" alt="" />
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