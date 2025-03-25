import React from "react";
import "./BattleCard.css";

const BattleCard = ({ date, win, onClick }) => {
  return (
    <div className="cardd">
      <div className="imageContainerBattle">
        <img src="./pokeball.webp" alt="Pokeball" className="imgBattle" />
      </div>
      <p className="date">{date}</p>
      <p className="result">{win ? "WIN" : "LOSE"}</p>
      <button className="expand-button" onClick={onClick}>+</button>
    </div>
  );
};

export default BattleCard;