import React from 'react';
import './css/ScoreBoard.css';

const ScoreBoard = ({ score }) => {
  return (
    <div>
        <div className="title-bar">
            <div className="bar-button min">_</div>
            <div className="bar-button box">□</div>
            <div className="bar-button x">✖</div>
        </div>
        <div className="screen">
            <h1 className="score">Score: 4</h1>
        </div>
    </div>
  );
}

export default ScoreBoard;