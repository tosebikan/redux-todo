import React, {Component} from 'react'
import {connect} from 'react-redux';
import './Form.css';
import {addTodo} from '../actions';

class Form extends Component{
  state={
    term: ''
  }

  render(){
    const {dispatch} = this.props;
    return(
      <form className="Form" onSubmit={(e) =>{
        e.preventDefault();
        dispatch(addTodo(this.state.term))
        this.setState({term: ''})
      }}>
      <input
      type="text"
      className="input"
      placeholder="Enter Task"
      value={this.state.term}
      onChange={(e) => this.setState({term: e.target.value})}
      />
      <button className="button">
      Submit
      </button>

      </form>
    )
  }
}

export default connect()(Form);
