import * as constants from './constants'
import axios from 'axios';
import { List, fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (List) => ({
  type: constants.ADD_ARTICLE_LIST,
  List: fromJS(List)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result))
    })
  }
}

export const toggleTopShow =(state) =>({
  type:constants.TOGGLE_SCROLL_TOP,
  state
})