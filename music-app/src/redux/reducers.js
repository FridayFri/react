import * as Actiontype from './actionTypes'
import {combineReducers } from 'redux'
const initialState = {
  showStatus: false,
  song:{},
  songs:[]
}
// {type: ' SHOW_PLAYER ', showStatus: true}
function showStatus(showStatus = initialState.showStatus,action){
  switch (action.type){
    case Actiontype.SHOW_PLAYER:
      return action.showStatus
    default:
      return showStatus
  }
}
function song( song = initialState.song, action) {
  switch (action.type) {
    case Actiontype.CHANGE_SONG: 
      return action.song;
    default:
      return song
  }
}

export default combineReducers({
  showStatus,
  song
})