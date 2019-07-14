import React, { Component } from 'react';
import '../index.css'
import { connect } from 'react-redux'

class List extends Component {
  state = {}
  render() {
    return (
      <div>
        {
          this.props.articleList.map((item) => (
            <div className="listItem" key={item.get('id')}>
              <img className="listPic" src={item.get('imgUrl')} alt="" />
              <div className="listInfo">
                <h3 className="listTitle">{item.get('title')}</h3>
                <p className="listDesc">{item.get('desc')}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
const mapState = (state) => ({
  articleList: state.get('home').get('articleList')
})
export default connect(mapState, null)(List);