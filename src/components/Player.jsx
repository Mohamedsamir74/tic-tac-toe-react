import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleChange(event) {
    setEditedName(event.target.value);
  }

  function handleEditClick() {
    if (isEditing) {
      onChangeName(symbol, editedName);
    }
    setIsEditing((prev) => !prev);
  }

  const playerContent = isEditing ? (
    <input type="text" required value={editedName} onChange={handleChange} />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
