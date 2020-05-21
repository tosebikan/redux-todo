import React from 'react';
import './Header.css';

const Header = ({todoLength}) => {
  return (
    <div className="Header">
    <h3 className="Header_title">You have {todoLength} Todos</h3>
    </div>
  )
}


export default Header;
