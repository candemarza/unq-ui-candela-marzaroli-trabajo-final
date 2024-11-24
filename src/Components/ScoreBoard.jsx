import React from 'react';
import './css/ScoreBoard.css';
import { useNavigate } from 'react-router-dom';

const ScoreBoard = ({ score }) => {

 const router = useNavigate();
  const goHome = () => {
      router("/");
  }

  return (
    <div className="score-board">
        <div className="title-bar">
            Score
            <div className="bar-button">✖</div>
        </div>
        <div className="screen">
            <div className="score">🌸 Your score is {score}...</div>
            <div className="score-button" onClick={goHome}>Go home?</div>
        </div>
    </div>
  );
}

export default ScoreBoard;