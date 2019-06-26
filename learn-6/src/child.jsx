import React, { Component } from 'react';

class Child extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <input type="text"/>
        <button onClick={()=>{
          this.props.sendFromChild("来自于子组件")
        }}>数据从子到父</button>
      </div>
     );
  }
}
 
export default Child;