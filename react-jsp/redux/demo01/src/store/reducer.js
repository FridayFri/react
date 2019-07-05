const defaultState = {
  inputValue: 'Write Something',
  list: [
    '132131',
    '4546696',
    '789797979'
  ]
}
export default (state = defaultState, action) => {
  console.log(state,action)
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState

  }
  return state
}