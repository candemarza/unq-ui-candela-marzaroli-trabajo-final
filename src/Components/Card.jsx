import React from "react";
import "./css/Card.css";

const Card = ({ handleCardFlip, card, isShowing }) => {
  const flipCard = () => {
    !card.flipped && !isShowing ? handleCardFlip(card) : null;
  };

  const isHex = card.color.value.includes("#");

  return (
    <div className="card" onClick={flipCard}>
      <div
        className={`card-content ${card.flipped ? "card-flipped" : ""}  ${
          card.matched ? "match" : ""
        }`}
      >
        <div className="card-front">
          <img className="card-logo" src={"/color-cat.png"} />
        </div>
        <div
          className="card-back"
          style={isHex ? { backgroundColor: card.color.value } : {}}
        >
          {isHex ? (
            <div className="color-name"> {card.color.name} </div>
          ) : (
            <div className="color-hex">{card.color.name}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
