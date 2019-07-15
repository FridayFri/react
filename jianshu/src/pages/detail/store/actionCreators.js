import * as constants from './constants'
import axios from 'axios';


const changeDetail = (result) => ({
  type: constants.CHANGE_DETAIL,
  title: result.title,
  img: result.img,
  desc: result.desc
})

export  const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result))
      console.log(result)
    })
  }
}

