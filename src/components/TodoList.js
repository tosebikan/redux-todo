import React from 'react';
import {connect} from 'react-redux';
import './TodoList.css';

const Todo = ({content,onDelete, id, onCheck}) => {
  const [complete, setComplete] = React.useState(false)
  const strikeStyle = { textDecorationLine: 'line-through' };

  const handleCheck = (e) => {
    setComplete(!complete)
  }
  return(
    <div className="List" onClick={()=> {handleCheck(id, complete)}} style={complete ? strikeStyle : null}>
      {content}
      <button className="Toggle"
      onClick={()=> {onDelete(id)}}> </button>
    </div>
  )
}

const TodoList = ({reduxTodo,task, onDelete, onCheck}) => {
  const todos = reduxTodo.map((todo, index) => {
    return <Todo content={todo.text} key={index} id={index} onDelete={onDelete} complete={todo.complete} onCheck={onCheck}/>
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

export default connect(mapStateToProps)(TodoList);
