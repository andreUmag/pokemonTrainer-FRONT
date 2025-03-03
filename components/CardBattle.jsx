"use client";

import "./BattleCard.css";

const BattleCard = ({ date, imageUrl, win }) => {
  return (
    <div 
      className="cardd"
      style={{ '--bgColor': win ? '#00ff003b' : '#ff00003b' }}
    >
      <h2 className="date">{date}</h2>
      <div className="imageContainer">
        <img src={imageUrl} alt={name} className="imgBattle" />
      </div>
    </div>
  );
};

export default BattleCard;
