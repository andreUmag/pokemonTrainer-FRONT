"use client";

import "./BattleCard.css";
import SpotlightCard from "@/components/SpotlightCard";


{/* <SpotlightCard
className="custom-spotlight-card"
spotlightColor="rgba(0, 229, 255, 0.2)"
>
</SpotlightCard> */}

const BattleCard = ({ date, win }) => {

  var result = win ? "WIN" : "LOSE";
  var color = win ? "0, 255, 0, 0.5" : "255, 0, 0, 0.5";

  return (
    <SpotlightCard 
      className="cardd custom-spotlight-card"
      spotlightColor={`rgba(${color})`}
    >
      <h2 className="date">{date}</h2>
      <div className="imageContainerBattle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='./pokeball.webp' alt={date} className="imgBattle" />
      </div>
      <h3 className="result">{result}</h3>
    </SpotlightCard>
  );
};

export default BattleCard;
