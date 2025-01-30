export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => <li key={index}>Player {turn.player} clicked square ({turn.square.row}, {turn.square.col})</li>)}
    </ol>
  );
}