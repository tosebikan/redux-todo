import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo, toggleTodo} from '../actions';
import './TodoList.css';

const Todo = ({content,id,reduxDelete, reduxToggle}) => {
  const strikeStyle = { textDecorationLine: 'line-through' };
  return(
    <div className="List" onClick={()=> reduxToggle(id)} style={content.completed ? strikeStyle : null}>
      {content.text}
      <button className="Toggle"
      onClick={()=> reduxDelete(id)}> </button>
    </div>
  )
}

const TodoList = ({reduxTodo, reduxToggle, reduxDelete}) => {
  const todos = reduxTodo.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} reduxDelete={reduxDelete}
    reduxToggle={reduxToggle} complete={todo.complete}/>
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
