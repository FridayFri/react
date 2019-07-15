import React, { Component } from 'react';
import '../index.css'
import { connect } from 'react-redux'

class Topic extends Component {
  state = {}
  render() {
    return (
      <div className="topicWrapper">
        {
          this.props.list.map((item) => (
              <div className="topicItem" key={item.get('id')}>
                <img className="topicPic" src={item.get('imageUrl')} alt="" />
                {item.get('title')}
              </div>
            
          ))
        }
      </div>
    );
  }
}
const mapState = (state) => ({
  list: state.get('home').get('topicList')
})
export default connect(mapState, null)(Topic);