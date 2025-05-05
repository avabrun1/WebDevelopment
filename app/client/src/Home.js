import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; 
import text from './data.json';

function Home() {
  const navigate = useNavigate();
  const { currentLanguage, toggleLanguage, setCurrentLanguage } = useLanguage(); 
  const [showModal, setShowModal] = useState(true); // Pop-up is visible initially

  // Optional: prevent showing the modal again if user visits again
  useEffect(() => {
    // REMOVE this line completely for now:
    // const hasSelectedLanguage = localStorage.getItem('languageSelected');
  
    setShowModal(true); // Force it to always show
  }, []);
  

  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language); 
    setShowModal(false);
    localStorage.setItem('languageSelected', 'true');
  };

  return (
    <div className="homePage">
      {/* Modal */}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Select Your Language</h2>
            <button onClick={() => handleLanguageSelect('english')}>English</button>
            <button onClick={() => handleLanguageSelect('spanish')}>Español</button>
          </div>
        </div>
      )}


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
