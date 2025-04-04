// Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

 
function Home() {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <h1 className="homeTitle">Welcome to our Bilingual Gaming Page!</h1>
      <p className="homeDescription">
        This webpage was made to make learning Spanish & English a fun experience for kids! Through these interactive games, kids and people of all ages can build their understanding of a language while having a good time.
      </p>
      <p className="homeDescription">
        Our mission is to create a playful learning environment, while still encouraging curiosity and confidence in a new language. By intertwining education with entertainment, this project entices kids to explore bilingualism in a way that feels like playing—not work!
      </p>

      <div className="gameSelection">
        <div
          className="gameBox game1"
          onClick={() => navigate('/game1')}
        >
          <h2>Word Block</h2>
          <p>Click to play!</p>
        </div>
        <div
          className="gameBox game2"
          onClick={() => navigate('/game2')}
        >
          <h2>Wild Words</h2>
          <p>Click to play!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
