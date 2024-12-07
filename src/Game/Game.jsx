import { useState, useEffect } from "react";
import "./Game.css";
import Card from "../Components/Card";
import ScoreBoard from "../Components/ScoreBoard";
import Winning from "../Components/Winning";
import { GoHomeFill } from "react-icons/go";
import { GrPowerReset } from "react-icons/gr";

const Game = ({ numOfPlayers, onBackToHome, difficulty }) => {

  const { pairs, list, size } = difficulty;

  //logica de el jeugo en si
  const [shuffledCards, setShuffledCards] = useState([]);
  const [cardFlipped, setCardFlipped] = useState(null);
  const [isShowing, setIsShowing] = useState(false);
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [player1turn, setPlayer1Turn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [restart, setRestart] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    //set de inicio de juego
    const shuffledList = shuffle(list);
    setShuffledCards(
      shuffledList.map((color, i) => ({
        index: i,
        color,
        flipped: false,
        matched: false,
      }))
    );
    setScore(0);  //vuelvo a poner todo en estado incial para  el boton de resetear, igual ta raro
    setScore2(0);
    setPlayer1Turn(true);
    setGameOver(false);
    setCardFlipped(null);
    setGameOver(false);
    setIsShowing(false);
    setTime(null); 
  }, [restart]);

  const shuffle = (array) => {
    //cosa de matematica para mezclarlas
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardFlip = (card) => {
    //muestro la carta girada
    const newFlippedCard = { ...card, flipped: true };
    shuffledCards[card.index] = { ...shuffledCards[card.index], flipped: true };

    //si no hay otra carta girada, la dejo
    if (!cardFlipped) {
      setCardFlipped(newFlippedCard);
      return;
    } else {
      //sino, chequeo
      checkIfMatch(newFlippedCard, cardFlipped);
    }
  };

  const checkIfMatch = (card1, card2) => {
    if (card1.color.name === card2.color.value) {
      handleScore(); //sumo 1 al puntaje que corresponde
      shuffledCards[card1.index] = { ...shuffledCards[card1.index], matched: true };
      shuffledCards[card2.index] = { ...shuffledCards[card2.index], matched: true }; //las marco que ya estan asi no joden
      setCardFlipped(null); 

    } else {
      setIsShowing(true); //para que no me deje girar otra carta antes de que se giren las dos
      setTimeout(() => {
        //giro ambas cartas, despues de 2 segundos
        shuffledCards[card1.index] = { ...shuffledCards[card1.index], flipped: false };
        shuffledCards[card2.index] = { ...shuffledCards[card2.index], flipped: false };
        setCardFlipped(null); //volvemos a iniciar
        setIsShowing(false);
        setPlayer1Turn(!player1turn); //cambio de jugador si perdi
      }, 1000);
    }
  };

  const handleScore = () => {
    if (Number(numOfPlayers) === 2 && !player1turn) {
      setScore2(score2 + 1);
    } else {
      setScore(score + 1);
    }
  };

  const updateTime = (newTime) => {
    setTime(newTime + 1);
  }

  useEffect(() => {
    setGameOver(score + score2 === pairs);
  }, [score, score2]);

  const winner = () => {
    switch (true) {
      case score > score2:
        return "p-one";
      case score < score2:
        return "p-two";
      default:
        return "w-match";
    }
  };

  const handleRestart = () => {
    setRestart(!restart);
  };

  return (
    <>
      <div className="game-container">
        <div className="scoreBoard-container">
          <div className="control-buttons">
            <div className="restart-button" onClick={handleRestart}>
              <GrPowerReset />
            </div>
            <div className="back-button" onClick={onBackToHome}>
              <GoHomeFill />
            </div>
          </div>
          <ScoreBoard
            score={score}
            score2={score2}
            numOfPlayers={numOfPlayers}
            player1turn={player1turn}
            updateTime={updateTime}
            gameOver={gameOver}
          />
        </div>
        <div className="board-container">
          <div className={`board ${size}`}>
            {shuffledCards.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card}
                  handleCardFlip={handleCardFlip}
                  isShowing={isShowing}
                />
              );
            })}
          </div>
        </div>
      </div>
      {gameOver && (
        <Winning
          winner={winner()}
          onRestart={handleRestart}
          onBackToHome={onBackToHome}
          time={time}
        />
      )}
    </>
  );
};
export default Game;
