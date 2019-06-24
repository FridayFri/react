import React, { Component } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['项目一', '项目二', '项目三']
    }
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="js">增加：</label>
          <input id="js" className="input" value={this.state.inputValue} onChange={
            this.inputChange.bind(this)
          }></input>
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                  <XiaojiejieItem
                  key={index+item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}/>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }

  inputChange(e) {
    console.log(e)
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deleteItem(index) {
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
export default Xiaojiejie