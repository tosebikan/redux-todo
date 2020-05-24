import React from 'react';
import {connect} from 'react-redux';
import './Header.css';

const Header = ({todos}) => {
  return (
    <div className="Header">
    <h3 className="Header_title">You have {todos.length} Todos</h3>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    todos: state.todos
  }
}


export default connect(mapStateToProps)(Header);
