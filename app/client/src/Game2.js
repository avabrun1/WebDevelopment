import React from 'react';
import './Game2.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext.js
import text from './data.json'

 
function Game2() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage(); // Use the custom hook to get the current language

  return(
    <div className="game2Page">
        <h2>{text[currentLanguage].game2.name}</h2>
        <h1>{text[currentLanguage].gameHeaders.gameHeadersDescription}</h1>
        <p>{text[currentLanguage].game2.description}</p>
        <h1>{text[currentLanguage].gameHeaders.gameHeadersInstructions}</h1>
        <p>{text[currentLanguage].game2.instructions}</p>

        <div id="game2Area">

        </div>
    </div>
  );
}

export default Game2;
