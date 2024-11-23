import React from "react";
import "./css/Card.css"

const Card = ({ handleCardFlip, card }) => {
  
  const flipCard = () => {
  (!card.flipped) ? handleCardFlip(card) : null;
  };
 
  return (
    <div className="card" onClick={flipCard}>
      <div className={`card-content ${card.flipped ? "card-flipped" : ""}`}>
        <div className="card-front"/>
        <div className="card-back" style={{ backgroundColor: card.color }}></div>
      </div>
    </div>
  );
};

export default Card;