import React from "react";
import { useState, useEffect } from "react";
import "./css/Board.css"
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";	


//para 2 jug recibir un bool y cada vez que cardFlipped es null cambiar de jug?
//ir guardando puntaje en dos variables acorde a un bool de turno

const Board = ({list, size, numOfPlayers}) => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [cardFlipped, setCardFlipped] = useState(null);
  
  const [isShowing, setIsShowing] = useState(false);
  const [score2, setScore2] = useState(0);
  const [score, setScore] = useState(0);
  const [player1turn, setPlayer1Turn] = useState(true);
  

  useEffect(() => {
    const shuffledList = shuffle([...list]);
    setShuffledCards(
      shuffledList.map((color, i) => ({ index: i, color, flipped: false, matched:false}))
    );
  }, []);

  const shuffle = (array) => {  
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const handleCardFlip = (card) => {
    
    //muestro la carta girada
    const newFlippedCard = { ...card, flipped: true };
    const boardCopy = [...shuffledCards];
    boardCopy.splice(card.index, 1, newFlippedCard);
    setShuffledCards(boardCopy);

    //si no hay otra carta girada, la guardo
    if (!cardFlipped) {
      setCardFlipped(newFlippedCard);
      return;
    } else { //sino, chequeo
        checkIfMatch(newFlippedCard, cardFlipped);
    }
    
  };

  const checkIfMatch = (card1, card2) => {
    if (card1.color.name === card2.color.value) {
      setCardFlipped(null); //dejo las cartas giradas
      handleScore() //sumo 1 al puntaje que corresponde
    } else {
      setIsShowing(true); //para que no me deje girar otra carta antes de que se muestren las dos
      setTimeout(() => { //giro ambas cartas, despues de 2 segundos
        const boardCopy = [...shuffledCards];
        boardCopy.splice(card1.index, 1, { ...card1, flipped: false });
        boardCopy.splice(card2.index, 1, { ...card2, flipped: false });
        setShuffledCards(boardCopy); 
        setCardFlipped(null); //volvemos ainiciar
        setIsShowing(false); 
        setPlayer1Turn(!player1turn); //cambio de jugador
      }, 1000);
    }
  }

  const handleScore = () => {
    if (Number(numOfPlayers) === 2) {
      player1turn ? setScore(score + 1) : setScore2(score2 + 1);
      setPlayer1Turn(!player1turn);
    }
    else {
      setScore(score + 1);
    }
  }
  
  useEffect(() => {
    finsihedGame();
  }, [score, score2]);

  const finsihedGame = () => {
    if (((score + score2) === (size*size/2))) {
      console.log("el ganador es: " + winner());
    }
  }

  const winner = () => {
    if(score > score2) {
      return "p-one";
    } else if (score < score2) {
      return "p-two";
    } else {
      return "match";
    }
  }
  
  return (
    <div className="game-container">
      <div className="scoreBoard-container">
        <ScoreBoard score={score} score2={score2} numOfPlayers={numOfPlayers} player1turn={player1turn}/>
      </div>
      <div className="board"  style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {shuffledCards.map((card, index) => {
          return (
            <Card key={index} card={card} handleCardFlip={handleCardFlip} isShowing={isShowing} />
          );
        })}
      </div>
    </div>
  );
};
export default Board;
