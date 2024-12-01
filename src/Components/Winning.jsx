import React from "react";
import "./css/Winning.css";
import { GoHomeFill } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

const Winning = ({ winner, onRestart, onBackToHome}) => {
  const winnerEmoji = (() => {
    switch (winner) {
      case "p-one":
        return "🌸";
      case "p-two":
        return "🐬";
      default:
        return "🌸🐬";
    }
  })();

  return (
    <div className="win-background">
      <div className="win-windows">
      <Window winner={winner} emoji={winnerEmoji} position={"w-one"} />
      <Window winner={winner} emoji={winnerEmoji} position={"w-two"}/>
      <Window winner={winner} emoji={winnerEmoji} position={"w-three"}/>
      <Window winner={winner} emoji={winnerEmoji} position={"w-four"}/>
      <Window winner={winner} emoji={winnerEmoji} position={"w-five"}/>
      <Window winner={winner} emoji={winnerEmoji} position={"w-six"}/>
      <Window winner={winner} emoji={winnerEmoji} position={"w-seven"}/>
      <Window winner={winner} emoji={winnerEmoji} position={"w-eight"} onRestart={onRestart} onBackToHome={onBackToHome}/>
      </div>
    </div>
  );
};

const Window = ({ winner, emoji, position, onRestart, onBackToHome}) => {
  
  return (
    <div className={position}>
    <div className="win-score-board">
      <div className={`win-title-bar ${winner}`}>
        {emoji}
        {emoji}
        {emoji}
        <div className="win-bar-button">
        <GrFormClose />
        </div>
      </div>
      <div className="win-screen">
        {winner === "w-match" ? (<div className="win-text"> It was a match {emoji} !!</div>) : <div className="win-text"> You won {emoji} !!</div>}
        <div className="win-back-button" onClick={onRestart}>
          Play Again?
        </div>
        <div className="win-back-button" onClick={onBackToHome}>
          <GoHomeFill />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Winning;
