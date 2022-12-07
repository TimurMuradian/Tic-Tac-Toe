import { useState } from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";
import calculateWinner from "./helpers/calculateWinner.js";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState("true");

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    const isWinner = calculateWinner(squares);

    if (squares[index] || isWinner) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory([
      ...newHistory,
      {
        squares,
      },
    ]);

    setStepNumber(newHistory.length);

    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => () => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    
    const endStep = (array) => {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == null) {
          return false;
        }
      }
      return true;
  }; 
  
    let line = [];
    let status;
    let win;

    if (winner) {
      win = winner[0];
      line = winner[1];
      status = `Winner ${win}!`;
  

  } else if (endStep(current.squares)) {
    status = `No Winner!`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} winline={line} />
      </div>
      <GameInfo status={status} history={history} jumpTo ={jumpTo}/>
    </div>
  );
};

export default Game;
