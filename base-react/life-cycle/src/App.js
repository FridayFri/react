import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context';
import Context1 from './Context1';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.objRef = React.createRef()
  }
  state = {
    count: 0,
    showChild:true
  }
  handleToggleChild = ()=>{
    const{showChild} = this.state
    this.setState({
      showChild:!showChild
    })
  }
  handleChildPropsChange = () => {
    let { count } = this.state
    // count++
    this.setState({
      count
    })
  }
  componentDidMount(){
    this.refs.stringRef.innerHTML = 'new string ref'
    this.methodRef.innerHTML = 'new method ref'
    this.objRef.current.innerHTML = 'new Object ref'
  }
  render() {
    const { count } = this.state
    const{showChild} = this.state
    return (
      <div className="App">
        <span ref="stringRef">react ref</span>
        <span ref={(ref)=>this.methodRef=ref}> method ref</span>
        <span ref={this.objRef}>object ref</span>
        {/*innerHTML */}
        
        <div dangerouslySetInnerHTML={{
          __html:`<strong>strong</strong>`
        }}>

        </div>
        <button onClick={this.handleChildPropsChange}>child component props change</button>
        <button onClick={this.handleToggleChild}>toggle Child</button>
        {
          !showChild?
        <Child count={count} />:<Child1 count={count}/>
        }
        <Context>小华
          <p>姓名</p>
        </Context>
        <Context1>
          <p>react 16.x.x</p>
        </Context1>
      </div>
    );
  }
}

export default App;
