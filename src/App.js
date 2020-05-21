import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: ['todo 1', 'todo 2', 'todo 3']
  }

  handleDelete = (index) => {
    const newArr = [...this.state.todo]
    newArr.splice(index, 1)
    this.setState({todo: newArr})
  }

  render(){
  return (
    <div className="App">
      <div className="Card frame">
        <Header todoLength={this.state.todo.length}/>
        <TodoList task={this.state.todo} onDelete={this.handleDelete}/>
        <h3>submit</h3>
      </div>
    </div>
  );
}
}

export default App;
