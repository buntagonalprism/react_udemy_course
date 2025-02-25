export default function GameOver({ winner, onResetGame }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>Player {winner} wins!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onResetGame}>Rematch!</button>
      </p>
    </div>
  )
}