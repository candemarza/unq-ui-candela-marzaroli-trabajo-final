import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();
    const goToBoard = () => {
        navigate('/play');
    };

    return (
        <div>
            <h1>Memotest</h1>
            <h2>Encuentra los pares de la naturaleza!</h2>
            <button onClick={goToBoard}>Play</button>
        </div>
    );
};

export default Home;