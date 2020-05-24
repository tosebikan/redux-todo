import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';

class App extends Component {
  state = {
    todo: ['todo 1', 'todo 2', 'todo 3'],
  }

  handleDelete = (index) => {
    const newArr = [...this.state.todo]
    newArr.splice(index, 1)
    this.setState({todo: newArr})
  }

  handleSubmit = (todo) => {
    this.setState({todo: [...this.state.todo, todo]})
  }

  handleCheck = (index) => {
    this.setState({complete: !this.state.complete})
  }

  render(){
  return (
    <div className="App">
      <div className="Card frame">
        <Header todoLength={this.state.todo.length}/>
        <TodoList task={this.state.todo}
         onDelete={this.handleDelete} onCheck={this.handleCheck}/>
        <Form onSubmit={this.handleSubmit}/>
      </div>
    </div>
  );
}
}

export default App;
