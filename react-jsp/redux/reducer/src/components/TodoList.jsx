import React, { Component } from 'react';
import { List, Typography } from 'antd';
import 'antd/dist/antd.css'
import store from '../redux/store'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state =  store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  state = {}
  render() {
    return (
      <div>
        <List
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item
            onClick={this.delete.bind(this, index)}
          >{item}</List.Item>)}
          style={{ width: '422px' }}
        />
      </div>
    );
  }
  delete(index) {
    const action = {
      type:'delete',
      index
    }
    store.dispatch(action)
    console.log(123)
  }
  storeChange() {
    this.setState(store.getState())
  }
}

export default TodoList;