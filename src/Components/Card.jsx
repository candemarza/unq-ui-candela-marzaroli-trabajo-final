import React from "react";
import "./css/Card.css";

const Card = ({ handleCardFlip, card, isShowing }) => {
  const flipCard = () => {
    !card.flipped && !isShowing ? handleCardFlip(card) : null;
  };

  const isHex = card.color.value.includes("#");

  return isHex ? (
    <div className="card" onClick={flipCard}>
      <div className={`card-content ${card.flipped ? "card-flipped" : ""}`}>
        <div className="card-front" />
        <div
          className="card-back"
          style={{ backgroundColor: card.color.value }}
        ></div>
      </div>
    </div>
  ) : (
    <div className="card" onClick={flipCard}>
      <div className={`card-content ${card.flipped ? "card-flipped" : ""}`}>
        <div className="card-front" />
        <div className="card-back">
        <div className="color-name">{card.color.name}</div>
          <div className="color-hex">{card.color.value}</div>
          
        </div>
      </div>
    </div>
  );
  //refactorizar las cards a renderizar el front o el back
};

export default Card;
