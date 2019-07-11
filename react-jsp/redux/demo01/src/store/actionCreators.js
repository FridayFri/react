import {  ADD_INPUT, DELETE,CHANGE_INPUT} from './actionTypes'

export const changeInputAction = (value) =>({
  type:CHANGE_INPUT,
  value
})
export const addItemAction  = () =>({
  type:ADD_INPUT
})
export const deleteItemAction  = (index) =>({
  type:DELETE,
  index
})