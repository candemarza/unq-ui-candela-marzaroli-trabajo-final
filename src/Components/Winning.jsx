import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Winning.css";

const Winning = ({ winner }) => {
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
      <Window winner={winner} emoji={winnerEmoji} position={"w-eight"}/>
      </div>
    </div>
  );
};

const Window = ({ winner, emoji, position }) => {
  const router = useNavigate();
  const goHome = () => {
    router("/");
  };

  return (
    <div className={position}>
    <div className="win-score-board">
      <div className={`win-title-bar ${winner}`}>
        {emoji}
        {emoji}
        {emoji}
        <div className="win-bar-button">✖</div>
      </div>
      <div className="win-screen">
        <div className="win-text"> You won {emoji} !!</div>
        <div className="win-back-button" onClick={goHome}>
          Play Again?
        </div>
      </div>
    </div>
    </div>
  );
};

export default Winning;
