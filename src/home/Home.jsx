import { useState, useEffect} from "react";
import "./Home.css";
import Paint from "../Components/Paint";
import Game from "../Game/Game";
import colorHexDictionary from "../colorHexdictionary";

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
