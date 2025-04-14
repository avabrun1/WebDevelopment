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
        <h2>Word Block</h2>
        <p>Prevent the falling words from reaching the ground by typing them before they land!</p>
    </div>

  )
}

export default Game1;
