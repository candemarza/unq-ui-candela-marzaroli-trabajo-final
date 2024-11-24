import React from "react";
import Board from "../Components/Board";
import {useNavigate} from "react-router-dom";
import "./Game.css";


const Game = () => {

const colorHexDictionary = {
  Red: "#FF0000",
  Orange: "#FFA500",
  Yellow: "#FFFF00",
  Green: "#008000",
  Cyan: "#00FFFF",
  Blue: "#0000FF",
  Purple: "#800080",
  Magenta: "#FF00FF",

  SlateGray: "#708090",
  FireBrick: "#B22222",
  Khaki: "#F0E68C",
  YellowGreen: "#9ACD32",
  DarkCyan: "#008B8B",
  GhostWhite: "#F8F8FF",
  RebeccaPurple: "#663399",
  Orchid: "#DA70D6",
  RoyalBlue: "#4169E1",
  MidnightBlue: "#191970",

  
  Tomato: "#FF6347",
  RoyalBlue: "#4169E1",
  SpringGreen: "#00FF7F",
  DarkTurquoise: "#00CED1",
  MediumPurple: "#9370DB",
  MediumVioletRed: "#C71585",
  SaddleBrown: "#8B4513",
  //faltan 8 
};

//recibir como query param la dificultad
const difficulty = "hard";

//es solo lso colores nombres x ahora 
const easyList = Object.keys(colorHexDictionary).slice(0, 8);
const mediumList = Object.keys(colorHexDictionary).slice(0, 16);
const hardList = Object.keys(colorHexDictionary).slice(0, 24);

const list = difficulty === "easy" ? easyList : difficulty === "medium" ? mediumList : hardList;
//ta raro no mg ^^

//recibir como query param el numero de jugadores
const numOfPlayers = 1;

console.log(list);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Board list={list} numOfPlayers={numOfPlayers} />
      <div className="button" onClick={goHome}>go home</div>
    </div>
  );
};

export default Game;
