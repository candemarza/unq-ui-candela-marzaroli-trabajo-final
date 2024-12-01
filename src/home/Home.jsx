import React from "react";
import { useState } from "react";
import "./Home.css";
import Paint from "../components/Paint";
import Game from "../Game/Game";

const Home = () => { //elegir como jugar y empezar
  const [difficulty, setDifficulty] = useState("easy");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gameState, setGameState] = useState("home");

  const selectDifficulty = (level) => () => {
    setDifficulty(level);
  }

  const selectNumberOfPlayers = (num) => () => {
    setNumberOfPlayers(num);
  }

  const startGame = () => {
    setGameState("gameStart");
  }

  return (
    gameState === "home" ? (
    <div className="background-home">
    <Paint>
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
          <div className="button" onClick={startGame}>Start Game</div>
        </div>
    </Paint>
    </div>
    ) : (
        <Game difficulty={difficulty} numberOfPlayers={numberOfPlayers}/>
    )
  );
};

export default Home;
