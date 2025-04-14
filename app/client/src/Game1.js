import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext.js
import text from './data.json'

 
function Game1() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage(); // Use the custom hook to get the current language

  return(
    <div>
        <h2>{text[currentLanguage].game1.name}</h2>
        <p>{text[currentLanguage].game1.description}</p>
        <p>{text[currentLanguage].game1.instructions}</p>
        <p>{text[currentLanguage].game1.scoring}</p>
    </div>
  )
}

export default Game1;
