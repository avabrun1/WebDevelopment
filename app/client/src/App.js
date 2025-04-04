import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import MissionStatement from './MissionStatement';
import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5001/home');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  function Game1() {
    return <h2>This is Game 1</h2>;
  }

  function Game2() {
    return <h2>This is Game 2</h2>;
  }

  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/MissionStatement" element={<MissionStatement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
