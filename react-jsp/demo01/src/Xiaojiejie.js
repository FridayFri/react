import React, { Component } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['项目一', '项目二', '项目三']
    }
  }
  // componentWillMount(){
  //   console.log('will')
  // }
  // componentDidMount(){
  //   console.log('did')
  // }
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate')
  //   return true
  // }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res)) })
      .catch((error) => { console.log('axios 获取数据失败' + error) })
  }
  render() {
    // console.log('render')
    return (
      <div>
        <div>
          <label htmlFor="js">增加：</label>
          <input
            id="js"
            className="input"
            value={this.state.inputValue} onChange={
              this.inputChange.bind(this)}
            ref={(input) => { this.input = input }}></input>
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                    <XiaojiejieItem
                      key={index + item}
                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)} />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Boss></Boss>
      </div>
    )
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
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
