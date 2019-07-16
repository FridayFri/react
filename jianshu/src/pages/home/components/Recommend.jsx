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
        <div className="download">
          <div className="twoCode">
            <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          </div>
          <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <div className="info">
            < div className="title">下载简书手机App ></div>
            <div className="description">随时随地发现和创作内容</div>
         </div>
        </div>
      </div>
     );
  }
}
 const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-top:10px;
`;
 

const mapState = (state) => ({
  list: state.get('home').get('recommendList')
})
export default connect(mapState, null)(Recommend);
