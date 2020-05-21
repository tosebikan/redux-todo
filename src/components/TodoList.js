import React from 'react';
import './TodoList.css';

const Todo = ({content}) =>{
  return(
    <div className="List">
      {content}
      <button className="Toggle"> </button>
    </div>
  )
}

const TodoList = ({task}) => {
  const todos = task.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} />
  })
  return (
    <div className="TodoList">
      {todos}
    </div>
  )
}

export default TodoList;
