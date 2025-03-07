'use client';

import './CardPokemon.css';

const PokemonCard = ({ name, imageUrl,description }) => {
  return (
    <div className='card'>
      <div className='imageContainer'>
        <img src={imageUrl} alt={name} className='imgpoke' />
      </div>
      <h2 className='name'>{name}</h2>
      <p className='description'>{description}</p>
    </div>
  );
};

export default PokemonCard;