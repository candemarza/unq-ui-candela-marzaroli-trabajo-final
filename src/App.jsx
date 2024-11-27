import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"
import Paint from "./Components/Paint";
import Winning from "./Components/Winning";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:difficulty/:players" element={<Game />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/win" element={<Winning winner="match"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
