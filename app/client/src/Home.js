// Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext.js


var text = {
  "english": {
    "homeTitle": "Welcome to our Bilingual Gaming Page!",
    "homeDescription": "This webpage was made to make learning Spanish & English a fun experience for kids! Through these interactive games, kids and people of all ages can build their understanding of a language while having a good time.",
    "homeDescription2": "Our mission is to create a playful learning environment, while still encouraging curiosity and confidence in a new language. By intertwining education with entertainment, this project entices kids to explore bilingualism in a way that feels like playing—not work!",
    "game1": "Word Box",
    "game2": "Word Search",
    "click": "Click here to play!",
  },
  "spanish": {
    "homeTitle": "¡Bienvenido a nuestra página de juegos bilingües!",
    "homeDescription": "Esta página web fue creada para hacer que aprender español e inglés sea una experiencia divertida para los niños. A través de estos juegos interactivos, los niños y personas de todas las edades pueden construir su comprensión de un idioma mientras se divierten.",
    "homeDescription2": "Nuestra misión es crear un ambiente de aprendizaje lúdico, al mismo tiempo que fomentamos la curiosidad y la confianza en un nuevo idioma. Al entrelazar la educación con el entretenimiento, este proyecto invita a los niños a explorar el bilingüismo de una manera que te hace sentir como si estuvieras jugando, no trabajando.",
    "game1": "Caja de palabras",
    "game2": "Búsqueda de palabras",
    "click": "¡Haz clic aquí para jugar!",
  }
  }

 
function Home() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage(); // Use the custom hook to get the current language

  return (
    <div className="homePage">
      <h1 className="homeTitle">{text[currentLanguage].homeTitle}</h1>
      <p className="homeDescription">{text[currentLanguage].homeDescription}</p>
      <p className="homeDescription">{text[currentLanguage].homeDescription2}</p>

      <div className="gameSelection">
        <div
          className="gameBox game1"
          onClick={() => navigate('/game1')}
        >
          <h2>{text[currentLanguage].game1}</h2>
          <p>{text[currentLanguage].click}</p>
        </div>
        <div
          className="gameBox game2"
          onClick={() => navigate('/game2')}
        >
          <h2>{text[currentLanguage].game2}</h2>
          <p>{text[currentLanguage].click}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
