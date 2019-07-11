import { ADD_INPUT, DELETE,CHANGE_INPUT } from './actionTypes'

const defaultState = {
  inputValue: 'Write Something',
  list: [
    '132131',
    '4546696',
    '789797979'
  ]
}
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}