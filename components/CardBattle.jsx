import React from "react";
import "./BattleCard.css";
import SpotlightCard from "@/components/SpotlightCard";

const BattleCard = ({ date, win, onClick }) => {
  const result = win ? "WIN" : "LOSE";
  const color = win ? "0, 0, 255, 0.5" : "255, 0, 0, 0.5";

  return (
    <SpotlightCard 
      className="cardd custom-spotlight-card"
      spotlightColor={`rgba(${color})`}
    >
      <h2 className="date">{date}</h2>
      <div className="imageContainerBattle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='./pokeball.webp' alt={date} className="imgBattle" />
      </div>
      <p className="result">{win ? "WIN" : "LOSE"}</p>
      <button className="expand-button" onClick={onClick}>+</button>
    </SpotlightCard>
  );
};

export default BattleCard;