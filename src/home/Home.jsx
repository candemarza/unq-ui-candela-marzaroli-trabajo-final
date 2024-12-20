import { useState, useEffect} from "react";
import "./Home.css";
import Paint from "../Components/Paint";
import Game from "../Game/Game";

const Home = () => { //elegir como jugar y empezar
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gameState, setGameState] = useState("home");
  const [difficulty, setDifficulty] = useState(null);
  const [pairs, setPairs] = useState(8); //esto es para poder mostrar el boton seleccionado


  const selectDifficulty = (difficulty) => () => {
    setDifficulty(difficulty);
    setPairs(difficulty.pairs); 
  }

  const selectNumberOfPlayers = (num) => () => {
    setNumberOfPlayers(num);
  }

  const startGame = () => {
    setGameState("gameStart");
  }

  const handleBackToHome = () => {
    setGameState("home");
  }

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

  const easyGameList = [...nameList.slice(0, 8), ...hexList.slice(0, 8)];
  const mediumGameList = [...nameList.slice(0, 18), ...hexList.slice(0, 18)];
  const hardGameList = [...nameList.slice(0, 32), ...hexList.slice(0, 32)];

  const easy = {
    pairs: 8,
    size: "fourByFour",
    list: easyGameList
  }

  const medium = {
    pairs: 18,
    size: "sixBySix",
    list: mediumGameList
  }

  const hard = {
    pairs: 32,
    size: "eightByEight",
    list: hardGameList
  }

  useEffect(() => {
    setDifficulty(easy);
  }, []);


  return (
    gameState === "home" ? (
    <div className="background-home">
    <Paint>
        <h1 className="title">Memo-Hex</h1>
        <h2 className="subtitle">Find the matching css standar color and it's hexcode! </h2>
         <div className="options"> 
          <div className="difficulty">
            <div className={`button ${pairs === 8  ? "selected" : ""}`} onClick={selectDifficulty(easy)}>Easy</div>
            <div className={`button ${pairs === 18 ? "selected" : ""}`} onClick={selectDifficulty(medium)}>Medium</div>
            <div className={`button ${pairs === 32 ? "selected" : ""}`} onClick={selectDifficulty(hard)}>Hard</div>
          </div>
          <div className="numberOfPlayers">
            <div className={`button ${numberOfPlayers === 1 ? "selected" : ""}`} onClick={selectNumberOfPlayers(1)}>1 player</div>
            <div className={`button ${numberOfPlayers === 2 ? "selected" : ""}`} onClick={selectNumberOfPlayers(2)}>2 players</div>
          </div>
          <div className="button" onClick={startGame}>Start Game</div>
        </div>
    </Paint>
    </div>
    ) : (
      <div className="background-game">
        <Game numOfPlayers={numberOfPlayers} difficulty={difficulty} onBackToHome={handleBackToHome}/>
      </div>
    )
  );
};

export default Home;
