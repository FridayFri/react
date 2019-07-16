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
        {this.props.title}
        </div>
        <div className="content">
          <img src={this.props.img} alt="" />
          <p
            dangerouslySetInnerHTML={{__html: this.props.desc}}
          ></p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapStateToProps = (state) => ({
  desc: state.get('detail').get('desc'),
  img: state.get('detail').get('img'),
  title: state.get('detail').get('title')
})
const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail);