import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: ['todo 1', 'todo 2', 'todo 3']
  }
  render(){
  return (
    <div className="App">
      <div className="Card frame">
        <Header todoLength={this.state.todo.length}/>
        <TodoList task={this.state.todo}/>
        <h3>submit</h3>
      </div>
    </div>
  );
}
}

export default App;
