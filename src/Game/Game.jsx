import React from "react";
import Board from "../Components/Board";

import {useNavigate} from "react-router-dom";

const Game = () => {
  //mejor que sea facil: colores clasicos
  //medium colores mas niche(?) pero distinos
  //dificil colores similares

  /*  const list = [
    { colorName: "Red",     hex: "#FF0000" },
    { colorName: "Orange",  hex: "#FFA500" },
    { colorName: "Yellow",  hex: "#FFFF00" },
    { colorName: "Green",   hex: "#008000" },
    { colorName: "Blue",    hex: "#0000FF" },
    { colorName: "Purple",  hex: "#800080" },
    { colorName: "Magenta", hex: "#FF00FF" },
    { colorName: "Black",   hex: "#000000"}
  ]; 

*/

  const list = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Magenta",
    "Black",
  ];

  //toda la logica de elegir modo de juego seria mandarle
  //la lista que corresponda acorde a botones
  //y para 2 jugadores mandarle un bool de 1 jug


  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Board list={list} />
      <div className="button" onClick={goHome}> Play</div>
    </div>
  );
};

export default Game;
