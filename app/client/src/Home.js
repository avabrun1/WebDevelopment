// Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext.js
import text from './data.json'

 
function Home() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage(); // Use the custom hook to get the current language

  return (
    <div className="homePage">
      <h1 className="homeTitle">{text[currentLanguage].home.homeTitle}</h1>
      <p className="homeDescription">{text[currentLanguage].home.homeDescription}</p>
      <p className="homeDescription">{text[currentLanguage].home.homeDescription2}</p>

      <div className="gameSelection">
        <div
          className="gameBox game1"
          onClick={() => navigate('/game1')}
        >
          <h2>{text[currentLanguage].home.game1}</h2>
          <p>{text[currentLanguage].home.click}</p>
        </div>
        <div
          className="gameBox game2"
          onClick={() => navigate('/game2')}
        >
          <h2>{text[currentLanguage].home.game2}</h2>
          <p>{text[currentLanguage].home.click}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
