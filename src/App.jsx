import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"
import Winning from "./Components/Winning";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:difficulty/:players" element={<Game />} />
        <Route path="/win" element={<Winning winner={"w-match"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
