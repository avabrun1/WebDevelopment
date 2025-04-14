import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext.js
import text from './data.json'

 
function Game2() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage(); // Use the custom hook to get the current language

  return(
    <div>
        <h2>Wild Words</h2>
        <p>Enter words that fit the category to the left. When you are complete, select “generate” and the program will generate a fun story with the words you gave it!</p>
    </div>

  )
}

export default Game2;
