"use client";

import "./BattleCard.css";

const BattleCard = ({ date, win }) => {
  return (
    <div 
      className="cardd"
      style={{ '--bgColor': win ? '#00ff003b' : '#ff00003b' }}
    >
      <h2 className="date">{date}</h2>
      <div className="imageContainerBattle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='./battle-svgrepo-com.svg' alt={date} className="imgBattle" />
      </div>
      <h3 className="result">LOSE</h3>
    </div>
  );
};

export default BattleCard;
