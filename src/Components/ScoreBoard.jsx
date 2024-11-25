import React from 'react';
import './css/ScoreBoard.css';
import { useNavigate } from 'react-router-dom';

const ScoreBoard = ({ score, score2, numOfPlayers, player1turn}) => {

 const router = useNavigate();
  const goHome = () => {
      router("/");
  }
  
  //en vez de tener el go home en ambos deberia de ser un si es tu turno mostrar Your Turn y Wait
  //si es el turno haria la cajita mas grande?? o algo asi tmb
  return (
    <>
      {Number(numOfPlayers) === 2 ? (
        <div className='two-player-score'>
          <div className={`score-board ${player1turn ? "turn" : ""}`}>
            <div className="title-bar">
              Player1
              <div className="bar-button">✖</div>
            </div>
            <div className="screen">
              <div className="score">🌸 Your score is {score}...</div>
              {player1turn ? <div className="score-button">Your Turn!</div> : <div className="score-button" onClick={goHome}>Go home?</div>}
            </div>
          </div>
          <div className={`score-board ${!player1turn ? "turn" : ""}`}>
            <div className="title-bar two">
              Player2
              <div className="bar-button">✖</div>
            </div>
            <div className="screen">
              <div className="score">🐬 Your score is {score2}...</div>
              {!player1turn ? <div className="score-button">Your Turn!</div> : <div className="score-button" onClick={goHome}>Go home?</div>}
            </div>
          </div>
        </div>
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