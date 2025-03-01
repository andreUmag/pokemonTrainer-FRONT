'use client';
import Image from 'next/image';
import './CardPokemon.css';

const PokemonCard = ({ name, imageUrl,description, attack1, attack2 }) => {
  return (
    <div className='card'>
      <h2 className='name'>{name}</h2>
      <div className='imageContainer'>
        <img src={imageUrl} alt={name} className='imgpoke' />
      </div>
      <p className='description'>{description}</p>
      <div className='attacks'>
        <p><strong>Ataque 1:</strong> {attack1}</p>
        <p><strong>Ataque 2:</strong> {attack2}</p>
      </div>
    </div>
  );
};

export default PokemonCard;