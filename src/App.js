import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';

class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="Card frame">
        <Header/>
        <TodoList/>
        <Form/>
      </div>
    </div>
  );
}
}

export default App;
