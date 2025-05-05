import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game1 from './Game1';
import Game2 from './Game2';
import MissionStatement from './MissionStatement';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/game1" element={<Game1 />} />
      <Route path="/game2" element={<Game2 />} />
      <Route path="/missionStatement" element={<MissionStatement />} />

    </Routes>
  );
}

export default AppRoutes;
