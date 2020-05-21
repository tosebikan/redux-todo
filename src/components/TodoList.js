import React from 'react';
import './TodoList.css';

const Todo = ({content, onDelete, id}) =>{
  return(
    <div className="List">
      {content}
      <button className="Toggle"
      onClick={()=> {onDelete(id)}}> </button>
    </div>
  )
}

const TodoList = ({task, onDelete}) => {
  const todos = task.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={onDelete}/>
  })
  return (
    <div className="TodoList">
      {todos}
    </div>
  )
}

export default TodoList;
