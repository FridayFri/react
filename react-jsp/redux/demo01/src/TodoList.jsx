import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button, List } from 'antd'
import store from './store'
import { ADD_INPUT, DELETE,CHANGE_INPUT } from './store/actionTypes'
import { changeInputAction,deleteItemAction,addItemAction } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state =  store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div>
          <Input placeholder ={this.state.inputValue}
          style={{width:'250px', marginRight:'10px'}}
          onChange={this.changeInputValue}
          value = {this.state.inputValue}
           />
          <Button type="Primary"
          onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style ={{margin:'10px',width:'300px'}}>
          <List dataSource={this.state.list}
          renderItem={(item,index)=>(<List.Item
          onClick={this.delete.bind(this,index)}
          >{item}</List.Item>)} />
        </div>
      </div>
     );
  }
  delete(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
    
  }
  storeChange() {
    this.setState(store.getState())
  }
  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
}
 
export default TodoList;