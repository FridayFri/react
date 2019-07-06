import React, { Component } from 'react';
import { Input, Button } from 'antd';
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input size="default" placeholder="请输入" 
        style={{width:'350px',marginRight:'5px'}} />
        <Button type="primary">添加</Button>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;