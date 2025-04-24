import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useLanguage } from './LanguageContext';
import text from './data.json'

function Header() {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const location = useLocation();
  
  // Helper function to create links with current language parameter
  const createLink = (path) => {
    const params = new URLSearchParams(location.search);
    const langParam = currentLanguage === 'english' ? 'en' : 'es';
    params.set('language', langParam);
    return `${path}?${params.toString()}`;
  };

  return (
    <div className="header">
      <h1 className="headerTitle">{text[currentLanguage].header.headerTitle}</h1>
      <nav className="navbar">
      <div
        className={`languageToggleSlider ${currentLanguage === 'spanish' ? 'active' : ''}`}
        onClick={toggleLanguage}
      >
        <div className="slider-button"></div>
        <span className="label left">English</span>
        <span className="label right">Español</span>
      </div>
        <ul className="navbarList">
          <li><Link to={createLink("/home")}>{text[currentLanguage].header.home}</Link></li>
          <li><Link to={createLink("/game1")}>{text[currentLanguage].header.game1}</Link></li>
          <li><Link to={createLink("/game2")}>{text[currentLanguage].header.game2}</Link></li>
          <li><Link to={createLink("/MissionStatement")}>{text[currentLanguage].header.missionStatement}</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
