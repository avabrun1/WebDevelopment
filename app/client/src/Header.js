import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from './LanguageContext';

// variable for text -> NEED TO FIGURE OUT HOW TO PUT THIS SOMEWHERE ELSE
var text= { 
  "english" : {

      "headerTitle": "Welcome to our Bilingual Gaming Page!",
      "changeLanguage": "Change Language",
      "home": "Home",
      "game1": "Game 1",
      "game2": "Game 2",
      "missionStatement": "Mission Statement",
      "missionStatementText": "This webpage was made to make learning Spanish & English a fun experience for kids! Through these interactive games, kids and people of all ages can build their understanding of a language while having a good time. Our mission is to create a playful learning environment, while still encouraging curiosity and confidence in a new language. By intertwining education with entertainment, this project entices kids to explore bilingualism in a way that makes you feel like you’re playing, not work!"

  },

  "spanish" : {

      "headerTitle": "¡Bienvenido a nuestra página de juegos bilingües!",
      "changeLanguage": "Cambiar idioma",
      "home": "Inicio",
      "game1": "Juego 1",
      "game2": "Juego 2",
      "missionStatement": "Declaración de misión",
      "missionStatementText": "Esta página web fue creada para hacer que aprender español e inglés sea una experiencia divertida para los niños. A través de estos juegos interactivos, los niños y personas de todas las edades pueden construir su comprensión de un idioma mientras se divierten. Nuestra misión es crear un ambiente de aprendizaje lúdico, al mismo tiempo que fomentamos la curiosidad y la confianza en un nuevo idioma. Al entrelazar la educación con el entretenimiento, este proyecto invita a los niños a explorar el bilingüismo de una manera que te hace sentir como si estuvieras jugando, no trabajando."

  }

}


function Header() {

  const { currentLanguage, toggleLanguage } = useLanguage(); 

  return (
    <div className="header">
      <h1 className="headerTitle">{text[currentLanguage].headerTitle}</h1>
      <button onClick = {toggleLanguage}>{text[currentLanguage].changeLanguage}</button>
      <nav className="navbar">
        <ul className="navbarList">
          <li><Link to="/home">{text[currentLanguage].home}</Link></li>
          <li><Link to="/game1">{text[currentLanguage].game1}</Link></li>
          <li><Link to="/game2">{text[currentLanguage].game2}</Link></li>
          <li><Link to="/MissionStatement">{text[currentLanguage].missionStatement}</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
