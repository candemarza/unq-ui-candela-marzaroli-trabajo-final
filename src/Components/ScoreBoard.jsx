import React from "react";
import "./css/ScoreBoard.css";
import Time from "./Time";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const ScoreBoard = ({ score, score2, numOfPlayers, player1turn, updateTime, gameOver }) => {

  return (
    <>
      {Number(numOfPlayers) === 2 ? (
        <div className="two-player-score">
          <div
            className={`score-board two-players ${player1turn ? "turn" : ""}`}
          >
            <div className="title-bar">
              Player1
              <div className="bar-button">
                <IoClose />
              </div>
            </div>
            <div className="screen">
              <div className="score">🌸 Your score is {score}...</div>
              {player1turn ? (
                <div className="score-button">Your Turn!</div>
              ) : (
                <div className="score-button">Wait!</div>
              )}
            </div>
          </div>
          <div
            className={`score-board two-players second-player ${
              !player1turn ? "turn" : ""
            }`}
          >
            <div className="title-bar two">
              Player2
              <div className="bar-button">
                <IoClose />
              </div>
            </div>
            <div className="screen">
              <div className="score">🐬 Your score is {score2}...</div>
              {!player1turn ? (
                <div className="score-button">Your Turn!</div>
              ) : (
                <div className="score-button">Wait!</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="score-board">
          <div className="title-bar">
            Score
            <div className="bar-button">
              <IoClose />
            </div>
          </div>
           <Time updateTime={updateTime} gameOver={gameOver}/>
        </div>
      )}
    </>
  );
};

export default ScoreBoard;
