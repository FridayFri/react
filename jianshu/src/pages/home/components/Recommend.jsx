import React, { Component } from 'react';
import '../index.css'
import { connect } from 'react-redux'
import styled from 'styled-components';

class Recommend extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="recommend">
        {
          this.props.list.map((item)=>{
            return (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            )
          })
        }
      </div>
     );
  }
}
 const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;
 

const mapState = (state) => ({
  list: state.get('home').get('recommendList')
})
export default connect(mapState, null)(Recommend);
