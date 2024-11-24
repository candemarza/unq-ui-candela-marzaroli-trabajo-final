import React from 'react';
import './css/ScoreBoard.css';
import { useNavigate } from 'react-router-dom';

const ScoreBoard = ({ score, score2 }) => {

 const router = useNavigate();
  const goHome = () => {
      router("/");
  }

  //en vez de tener el go home en ambos deberia de ser un si es tu turno mostrar Your Turn y Wait
  //si es el turno haria la cajita mas grande?? o algo asi tmb
  return (
    <>
      {score2 !== undefined ? (
        <>
          <div className="score-board">
            <div className="title-bar">
              Player1
              <div className="bar-button">✖</div>
            </div>
            <div className="screen">
              <div className="score">🌸 Your score is {score}...</div>
              <div className="score-button" onClick={goHome}>Go home?</div>
            </div>
          </div>
          <div className="score-board">
            <div className="title-bar two">
              Player2
              <div className="bar-button">✖</div>
            </div>
            <div className="screen">
              <div className="score">🐬 Your score is {score2}...</div>
              <div className="score-button" onClick={goHome}>Go home?</div>
            </div>
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default ScoreBoard;