import React, { useEffect } from "react";
import "./BattleModal.css";

const BattleModal = ({ battle, onClose }) => {
  if (!battle) return null;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    console.log("Rendering BattleModal with battle:", battle);
  }, [battle]);

  return (
    <div className="battle-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h3>Resultado de la Batalla</h3>
        <p>Equipo Ganador: {battle.winnerTeam}</p>
        <p>Pokémon Restantes de Ash: {battle.remainingPokemon.ash}</p>
        <p>Pokémon Restantes de Gary: {battle.remainingPokemon.gary}</p>
        <h4>Detalles de la Batalla</h4>
        {battle.details.map((detail, index) => (
          <div key={index}>
            <p>Ronda: {detail.round}</p>
            <p>Atacante: {detail.attacker}</p>
            <p>Defensor: {detail.defender}</p>
            <p>Daño: {detail.damage}</p>
            <p>Ganador: {detail.winner}</p>
            <p>HP Restante - {detail.defender}: {detail.hp_remaining[detail.defender]}</p>
            <p>HP Restante - {detail.attacker}: {detail.hp_remaining[detail.attacker]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattleModal;