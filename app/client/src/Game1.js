import React from 'react';
import './Game1.css';  
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; 
import text from './data.json';

function Game1() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage(); 

  return(
    <div className="game1Page">
        <h2>{text[currentLanguage].game1.name}</h2>
        <h1>Description</h1>
        <p>{text[currentLanguage].game1.description}</p>
        <h1>Instructions</h1>
        <p>{text[currentLanguage].game1.instructions}</p>
        <h1>Scoring</h1>
        <p>{text[currentLanguage].game1.scoring}</p>

        <div id="game1Area">
          
        </div>
    </div>
  );
}

export default Game1;
