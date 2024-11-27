import React from "react";
import { useNavigate } from "react-router-dom";

const Winning = ({ winner }) => {
  return (
    <div className="background"> {/*ver como mierda ahcer confeti de emopjis :)))))*/}
        <Window className="win-window 1" winner={winner} />
        <Window className="win-window 2" winner={winner} />
        <Window className="win-window 3" winner={winner} />
        <Window className="win-window 4" winner={winner} />
        <Window className="win-window 5" winner={winner} />
        {/*la idea es que este staqueado y como ventanas de windows*/}
    </div>
  )
};



const Window = ({ winner }) => {
  const router = useNavigate();
  const goHome = () => {
      router("/");
  }
  return (
    <>
      {winner === 1 ? (
        <div className="score-board">
          <div className={`title-bar ${winner === '🐬' ? "two" : ""}`}>
            {winner}
            {winner}
            {winner}
            <div className="bar-button">✖</div>
          </div>
          <div className="screen">
            <div className="score"> You won {winner} !!</div>
            <div className="score-button" onClick={goHome}>
              Play Again?
            </div>
          </div>
        </div>
      ) : (
        <div className="score-board">
          <div className={"title-bar  draw"}>
            {winner}
            <div className="bar-button">✖</div>
          </div>
          <div className="screen">
            <div className="score"> It was a tie {winner} !!</div>
            <div className="score-button" onClick={goHome}>
              Play Again?
            </div>
          </div>
        </div>
      )}
    </>
  );
}; //mas refactorizar por hacer ^^^ lo que cambia en el draw seria la title-bar y el score

export default Winning;
