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
     <div className="datacontainer">
        <h1 className="title">Memotest</h1>
        <h2 className="subtitle">Encuentra los pares de colores esatndar css y sus codigos hex! </h2>
        <div className="button" onClick={goToBoard}> Play</div>
      </div>
    </div>
  );
};

export default Home;