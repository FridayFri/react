import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  img: '',
  desc: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        img: action.img,
        desc: action.desc
      })
    default:
      return state
  }
}
