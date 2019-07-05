 import { createStore } from 'redux'
 import reducer from './reducer'
 const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//作为参数传入

 export default store