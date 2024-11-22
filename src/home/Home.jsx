import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const goToBoard = () => {
    navigate("/play");
  };

  return (
    <div className="container">
      <img className="img" src="https://media-public.canva.com/8jaAQ/MAEvOj8jaAQ/1/tl.png" alt="flor" />
      <div className="datacontainer">
        <h1 className="title">Memotest</h1>
        <h2 className="subtitle">Encuentra los pares de la naturaleza!</h2>
        <div className="button" onClick={goToBoard}> Play</div>
      </div>
      <img className="img right" src="https://media-public.canva.com/8jaAQ/MAEvOj8jaAQ/1/tl.png" alt="flor" />
    </div>
  );
};

export default Home;
