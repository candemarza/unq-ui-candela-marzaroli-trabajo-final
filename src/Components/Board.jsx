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
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffledList = shuffle([...list, ...list]);
    setShuffledCards(
        shuffledList.map((color, i) => ({ index: i, color, flipped: false }))
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
    if (card1.color === card2.color) {
      setCardFlipped(null); //dejo las cartas giradas
      setScore(score + 1); //sumo 1 al puntaje
    } else {
      setTimeout(() => { //giro ambas cartas, despues de 2 segundos
        const boardCopy = [...shuffledCards];
        boardCopy.splice(card1.index, 1, { ...card1, flipped: false });
        boardCopy.splice(card2.index, 1, { ...card2, flipped: false });
        setShuffledCards(boardCopy); 
        setCardFlipped(null); //pongo en null la carta girada
      }, 1000);
    }
  } //deberia de bloquear girar otra carta durante este timeput xq colapsa

  return (
    <div className="game-container">
      <div className="scoreBoard-container">
        <ScoreBoard score={score}/>
      </div>
      <div className="board"  style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {shuffledCards.map((card, index) => {
          return (
            <Card key={index} card={card} handleCardFlip={handleCardFlip} />
          );
        })}
      </div>
    </div>
  );
};
export default Board;
