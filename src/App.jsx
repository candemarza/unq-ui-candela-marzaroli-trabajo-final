import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"
import ScoreBoard from "./Components/ScoreBoard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/score" element={<ScoreBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
