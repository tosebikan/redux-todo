import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo, toggleTodo} from '../actions';
import './TodoList.css';

const Todo = ({content, onDelete, id, onCheck, reduxDelete, reduxToggle, todo}) => {
  //const [complete, setComplete] = React.useState(false)
  const strikeStyle = { textDecorationLine: 'line-through' };
  console.log('todo', content)
  {/*const handleCheck = (e) => {
    setComplete(!complete)
  }*/}
  return(
    <div className="List" onClick={()=> reduxToggle(id)} style={content.completed ? strikeStyle : null}>
      {content.text}
      <button className="Toggle"
      onClick={()=> reduxDelete(id)}> </button>
    </div>
  )
}

const TodoList = ({reduxTodo, reduxToggle, task, onDelete, onCheck, reduxDelete}) => {
  const todos = reduxTodo.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={onDelete} reduxDelete={reduxDelete}
    reduxToggle={reduxToggle} complete={todo.complete} onCheck={onCheck} />
  })
  return (
    <div className="TodoList">
      {todos}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    reduxTodo: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  reduxDelete: (id) => {
    dispatch(deleteTodo(id))
  },
  reduxToggle: (id) => {
    dispatch(toggleTodo(id))
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
