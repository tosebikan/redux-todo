import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todo: ['todo 1', 'todo 2', 'todo 3']
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
}

export default App;
