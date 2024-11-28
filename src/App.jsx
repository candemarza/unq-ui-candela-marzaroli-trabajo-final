import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:difficulty/:players" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
