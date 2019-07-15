import React, { Component } from 'react';
import './index.css'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { focused, list, page } = this.props
    const List = list.toJS()
    const pageList = []
    if (List.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <li key={List[i]}>{List[i]}</li>
        )
      }
    }
    const showList = () => {
      const { focused, page, mouseIn, totalPage,
        handleMouseEnter, handleMouseLeave,
        handleChangePage
      } = this.props
      if (focused || mouseIn) {
        return (
          <div className="searchInfo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="search-title">
              热门搜索
            <div className="serach-switch" onClick={() => handleChangePage(page, totalPage)}>
                <i className="iconfont spin">&#xe851;</i>换一换
            </div>
            </div>
            <div className="serach-item">
              {
                pageList
              }
            </div>
          </div>
        )
      } else {
        return null
      }
    }
    return (
      <div className="logo">
        <Link className="logo-a"  to="/"></Link>
        <div className="nav">
          <div className="nav-item left active">首页</div>
          <div className="nav-item left">下载App</div>
          <div className="nav-item right">登录</div>
          <div className="nav-item right">
            <i className="iconfont">&#xe636;</i>
          </div>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames='slide'
          >
            <div
              className={focused ? 'search focused' : 'search'}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            >
              <input placeholder="搜索"
              />
              <i className="iconfont icon">&#xe614;</i>
              {showList(focused)}
            </div>
          </CSSTransition>
          <div className="addition">
            <div className="button red">注册</div>
            <div className="button writte">
              <i className="iconfont">&#xe615;</i>
              写文章</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFous())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < 5) 
      {  
         dispatch(actionCreators.changePage(page+1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);  