import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const goToBoard = () => {
    navigate(`/play/${difficulty}/${numberOfPlayers}`);
  };

  const [difficulty, setDifficulty] = useState("easy");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  const selectDifficulty = (level) => () => {
    setDifficulty(level);
  }

  const selectNumberOfPlayers = (num) => () => {
    setNumberOfPlayers(num);
  }

  return (
    <div className="window">
      <div className="container">
        <h1 className="title">Memotest</h1>
        <h2 className="subtitle">Find the matching css standar color and it's hexcode! </h2>
         <div className="options"> 
          <div className="difficulty">
            <div className={`button ${difficulty === "easy" ? "selected" : ""}`} onClick={selectDifficulty("easy")}>Easy</div>
            <div className={`button ${difficulty === "medium" ? "selected" : ""}`} onClick={selectDifficulty("medium")}>Medium</div>
            <div className={`button ${difficulty === "hard" ? "selected" : ""}`} onClick={selectDifficulty("hard")}>Hard</div>
          </div>
          <div className="numberOfPlayers">
            <div className={`button ${numberOfPlayers === 1 ? "selected" : ""}`} onClick={selectNumberOfPlayers(1)}>1 player</div>
            <div className={`button ${numberOfPlayers === 2 ? "selected" : ""}`} onClick={selectNumberOfPlayers(2)}>2 players</div>
          </div>
          <div className="button" onClick={goToBoard}>Start Game</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
