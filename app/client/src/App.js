// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import MissionStatement from './MissionStatement';

function Game1() {
  return <h2>This is Game 1</h2>;
}

function Game2() {
  return <h2>This is Game 2</h2>;
}

function App() {

  const [currentLanguage, setCurrentLanguage] = React.useState("english"); // This will be set based on user selection
  
  const switchLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === "english" ? "spanish" : "english"));
  };

  return (
    <LanguageProvider>
    <Router>
      <div className="appContainer">
        <Header currentLanguage={currentLanguage} toggleLanguage={switchLanguage} />
        <main className="mainContent">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Game1" element={<Game1 />} />
            <Route path="/Game2" element={<Game2 />} />
            <Route path="/MissionStatement" element={<MissionStatement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
