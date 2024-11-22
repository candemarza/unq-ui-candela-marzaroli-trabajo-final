import React from "react";
import { useNavigate } from "react-router-dom";
import "./Board.css";
import Card from "../Card/Card";


const Board = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };

    const cards = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

    return (
        <div>
            <h1>board aca</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} num={card} />
                ))}
            </div>
            <button onClick={goToHome}>Play again!</button>
        </div>
    );

}
export default Board;