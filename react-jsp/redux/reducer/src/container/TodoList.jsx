import { connect } from 'react-redux'
import TodoList from '../components/TodoList'


const mapDispatchToProps = (dispatch) => {
  return {
    addCurrentValue: (value) => {
      dispatch(addList(value))
    }
  }
}
export default connect(null, mapDispatchToProps)(TodoList);