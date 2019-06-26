import {combineReducers} from 'redux'
import todos from './todos'
import filterReducer from './filtter'


export default combineReducers({
  todos,filterReducer
})