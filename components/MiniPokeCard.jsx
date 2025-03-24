"use client";

import "./BattleCard.css";
import SpotlightCard from "@/components/SpotlightCard";

const MiniPoketCard = ({}) => {

  return (
    <div 
      className="cardd custom-spotlight-card"
    >
      <h2 className="date">{}</h2>
      <div className="imageContainerBattle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='' alt='pokeimagen' className="imgBattle" />
      </div>
      <h3 className="result"></h3>
    </div>
  );
};

export default MiniPoketCard;
