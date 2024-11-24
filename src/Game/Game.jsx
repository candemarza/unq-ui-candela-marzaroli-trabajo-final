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
  //easy ^^
  SlateGray: "#708090",
  FireBrick: "#B22222",
  Khaki: "#F0E68C",
  YellowGreen: "#9ACD32",
  DarkCyan: "#008B8B",
  GhostWhite: "#F8F8FF",
  RebeccaPurple: "#663399",
  Orchid: "#DA70D6",
  MediumVioletRed: "#c71585",
  MidnightBlue: "#191970",
  //medium ^^
  Tomato: "#FF6347",
  SpringGreen: "#00FF7F",
  DarkTurquoise: "#00CED1",
  MediumPurple: "#9370DB",
  RoyalBlue: "#4169E1",
  SaddleBrown: "#8B4513",
  Indigo: "#4B0082",
  SeaGreen: "#2E8B57",
  Pink: "#FFBEC2",
  GoldenRod: "#DAA520",
  Thisle: "#D8BFD8",
  LightCoral: "#F08080",
  OliveDrab: "#6B8E23",
  Chocolate: "#D2691E"
  //hard ^^
};

//recibir como query param la dificultad?
const difficulty = "hard";

//es solo lso colores nombres x ahora 
const easyList = Object.keys(colorHexDictionary).slice(0, 8);
const mediumList = Object.keys(colorHexDictionary).slice(0, 18);
const hardList = Object.keys(colorHexDictionary).slice(0, 32);

const size = difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8;
const list = difficulty === "easy" ? easyList : difficulty === "medium" ? mediumList : hardList;
//ta raro no mg ^^ cambaira choose?

//recibir como query param el numero de jugadores?
const numOfPlayers = 1;

  return (
    <div>
      <Board size ={size} list={list} numOfPlayers={numOfPlayers} />
    </div>
  );
};

export default Game;
