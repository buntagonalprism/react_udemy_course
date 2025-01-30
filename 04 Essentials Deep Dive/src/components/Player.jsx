import { useState } from 'react';

export default function Player({ name: initialName, symbol, isActive, onNameEdited }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditButton(event) {
    setIsEditing(!isEditing);
    if (isEditing) {
      onNameEdited(playerName);
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input> : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
