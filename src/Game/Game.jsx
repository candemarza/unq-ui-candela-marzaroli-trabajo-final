import React from "react";
import Board from "../Components/Board";
import Winning from "../Components/Winning";
import { useParams } from "react-router-dom";
import "./Game.css";


const Game = ({difficulty, numberOfPlayers}) => { //logica de config

const colorHexDictionary = {
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Yellow": "#FFFF00",
    "Green": "#008000",
    "Cyan": "#00FFFF",
    "Blue": "#0000FF",
    "Purple": "#800080",
    "Magenta": "#FF00FF",
    //easy ^^
    "Slate Gray": "#708090",
    "Fire Brick": "#B22222",
    "Khaki": "#F0E68C",
    "Yellow Green": "#9ACD32",
    "Dark Cyan": "#008B8B",
    "Ghost White": "#F8F8FF",
    "Rebecca Purple": "#663399",
    "Orchid": "#DA70D6",
    "Medium Violet Red": "#C71585",
    "Midnight Blue": "#191970",
    //medium ^^
    "Tomato": "#FF6347",
    "Spring Green": "#00FF7F",
    "Dark Turquoise": "#00CED1",
    "Medium Purple": "#9370DB",
    "Royal Blue": "#4169E1",
    "Saddle Brown": "#8B4513",
    "Indigo": "#4B0082",
    "Sea Green": "#2E8B57",
    "Pink": "#FFBEC2",
    "Golden Rod": "#DAA520",
    "Thistle": "#D8BFD8",
    "Light Coral": "#F08080",
    "Olive Drab": "#6B8E23",
    "Chocolate": "#D2691E"
    //hard ^^
  };

const nameList = Object.entries(colorHexDictionary).map(([name, value]) => ({ name, value }));
const hexList = Object.entries(colorHexDictionary).map(([name, value]) => ({ name:value, value:name }));

const easyList = [...nameList.slice(0, 8), ...hexList.slice(0, 8)];
const mediumList = [...nameList.slice(0, 18), ...hexList.slice(0, 18)];
const hardList = [...nameList.slice(0, 32), ...hexList.slice(0, 32)];

let size;
let list;
let pairs

switch (difficulty) {
  case "easy":
    size = "fourByFour";
    list = easyList;
    pairs = 8;
    break;
  case "medium":
    size = "sixBySix";
    list = mediumList;
    pairs = 18;
    break;
  case "eightByEight":
    size = 8;
    list = hardList;
    pairs = 32;
    break;
  default:
    size = 8;
    list = hardList; 
    pairs = 32;
    break;
}

const gameOver = false;
const winner = "p-one";

  return (
    <>
    <div className="background-game">
      <Board size ={size} list={list} numOfPlayers={numberOfPlayers} amountOfPairs={pairs}/>
    </div>
    {gameOver ? <Winning winner={winner} /> : null}
    </>
  );
};

export default Game;
