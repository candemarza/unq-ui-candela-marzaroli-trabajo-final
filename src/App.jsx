import "./App.css";
import "./fonts/TANMERINGUE.ttf";
import "./fonts/TANMERINGUE.otf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Board from "./Board/Board";
import Home from "./Home/Home";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
