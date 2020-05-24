import React from 'react';
import './TodoList.css';

const Todo = ({content, onDelete, id, onCheck}) => {
  const [complete, setComplete] = React.useState(false)
  const strikeStyle = { textDecorationLine: 'line-through' };

  const handleCheck = (e) => {
    //e.preventDefault();
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

const TodoList = ({task, onDelete, onCheck}) => {
  const todos = task.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={onDelete} onCheck={onCheck}/>
  })
  return (
    <div className="TodoList">
      {todos}
    </div>
  )
}

export default TodoList;
