import React, {Component} from 'react'
import './Form.css';

class Form extends Component{
  state={
    term: ''
  }
  render(){
    return(
      <form className="Form">
      <input
      type="text"
      className="input"
      placeholder="Enter Task"
      value={this.state.term}
      onChange={(e) => this.setState({term: e.target.value})}
      />
      <button className="button">Submit</button>

      </form>
    )
  }
}

export default Form;
