import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';
export const searchFous = () =>({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () =>({
  type: constants.SEARCH_BLUR
});
export const mouseLeave = () =>({
  type: constants.MOUSE_LEAVE
})
export const mouseEnter = () =>({
  type: constants.MOUSE_ENTER
})
export const changePage = (page) =>({
  type: constants.CHANGE_PAGE,
  page
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
   data: fromJS(data),
   totalPage: Math.ceil(data.length / 10)
})
export const getList = () =>{
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() =>{
      console.log('error')
    })
  }
}
