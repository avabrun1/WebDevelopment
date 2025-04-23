import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from './LanguageContext';
import text from './data.json'

function Header() {

  const { currentLanguage, toggleLanguage } = useLanguage(); 

  return (
    <div className="header">
      <h1 className="headerTitle">{text[currentLanguage].header.headerTitle}</h1>
      <nav className="navbar">
        <ul className="navbarList">
          <li><Link to="/home">{text[currentLanguage].header.home}</Link></li>
          <li><Link to="/game1">{text[currentLanguage].header.game1}</Link></li>
          <li><Link to="/game2">{text[currentLanguage].header.game2}</Link></li>
          <li><Link to="/MissionStatement">{text[currentLanguage].header.missionStatement}</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
