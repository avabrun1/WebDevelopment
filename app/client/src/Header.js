import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="headerTitle">Welcome to our Bilingual Gaming Page!</h1>
      <nav className="navbar">
        <ul className="navbarList">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/game1">Game 1</Link></li>
          <li><Link to="/game2">Game 2</Link></li>
          <li><Link to="/MissionStatement">Mission Statement</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
