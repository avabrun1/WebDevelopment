// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
  return (
    <Router>
      <div className="appContainer">
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game1" element={<Game1 />} />
            <Route path="/game2" element={<Game2 />} />
            <Route path="/MissionStatement" element={<MissionStatement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
