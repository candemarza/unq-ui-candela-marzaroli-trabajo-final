import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const goToBoard = () => {
    navigate("/play");
  };

  return (
    <div className="window">
      <div className="container">
        <h1 className="title">Memotest</h1>
        <h2 className="subtitle">Find the matching css standar color and it's hexcode! </h2>
        <div className="button" onClick={goToBoard}> Play</div>
      </div>
    </div>
  );
};

export default Home;
