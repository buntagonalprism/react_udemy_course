import { useState } from 'react';
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';


function deriveActivePlayer(gameTurns) {
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveWinner(gameBoard) {
  for (const winningCombination of WINNING_COMBINATIONS) {
    const playersInSquares = winningCombination.map(square => gameBoard[square.row][square.column]);
    if (playersInSquares.every(player => player === 'X')) {
      return 'X';
    } else if (playersInSquares.every(player => player === 'O')) {
      return 'O';
    }
  }
  return null;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = structuredClone(INITIAL_GAME_BOARD);

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({ X: 'Player 1', O: 'Player 2' });

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      let currentPlayer = deriveActivePlayer(prevGameTurns);
      return [{ player: currentPlayer, square: { row: rowIndex, col: colIndex } }, ...prevGameTurns];
    });
  }

  function handleResetGame() {
    setGameTurns([]);
  }

  function handleNameEdited(playerSymbol, newName) {
    setPlayerNames((prevPlayerNames) => {
      return { ...prevPlayerNames, [playerSymbol]: newName };
    });
  }

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);
  const boardFilled = gameTurns.length === 9;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onNameEdited={(newName) => handleNameEdited('X', newName)} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onNameEdited={(newName) => handleNameEdited('O', newName)} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        {(boardFilled || winner) && <GameOver winner={playerNames[winner]} onResetGame={handleResetGame} />}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
