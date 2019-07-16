import React, { Component } from 'react';
import '../index.css'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
  state = {}
  render() {
    return (
      <div>

        {
          this.props.articleList.map((item, index) => (
            <Link to={"/detail/" + item.get('id') } key={index} >
              <div className="listItem" key={index}>
                <img className="listPic" src={item.get('imgUrl')} alt="" />
                <div className="listInfo">
                  <h3 className="listTitle">{item.get('title')}</h3>
                  <p className="listDesc">{item.get('desc')}</p>
                </div>
              </div>
            </Link>
          ))
        }
        <div className="loadMore" onClick={this.props.getMoreList}>
          +加载更多
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({
  articleList: state.get('home').get('articleList')
})
const mapDispatch = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList())
  }
})
export default connect(mapState, mapDispatch)(List);