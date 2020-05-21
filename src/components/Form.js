import React, {Component} from 'react'
import './Form.css';

class Form extends Component{
  state={
    term: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.term === "") return;
    this.props.onSubmit(this.state.term);
    this.setState({term: ""})

  }


  render(){
    //const {onSubmit} = this.props;
    return(
      <form className="Form" onSubmit={this.handleSubmit}>
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

export default Form;
