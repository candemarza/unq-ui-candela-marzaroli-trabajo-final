import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"
import Paint from "./Components/Paint";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/paint" element={<Paint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
