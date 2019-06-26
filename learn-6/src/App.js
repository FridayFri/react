import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child'
import Father from './father'

class App extends Component {
  state = { 
    list:['1','2','3']
   }
   addTodo(){
     this.state.list.push(this.refs.todoVal.value)
     this.setState({
       list:this.state.list
     })
     this.refs.todoVal.value=''
   }
  render() { 
    return ( 
      <div>
        <input type="text" ref="todoVal"/>
        <button onClick={this.addTodo.bind(this)}>+</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          } 
        </ul>
        <Father/>
      </div>
     );
  }
}
 
export default App;
