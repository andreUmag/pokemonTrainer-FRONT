"use client";
import "./home.css";
import ShinyText from "@/components/ShinyText";
import PokemonCard from "@/components/CardPokemon";
import BattleCard from "@/components/CardBattle";
import axiosClient from "@/lib/axiosClient";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const pokemonTeam = [
  {
    id: 1,
    name: "Pikachu",
    imageUrl:
      "https://ivector.xyz/public/wp-content/uploads/pikachu-electrico-vector-01.jpg",
    description: "Un Pokémon eléctrico muy popular y poderoso.",
  },
  {
    id: 2,
    name: "Charizard",
    imageUrl:
      "https://i.pinimg.com/736x/27/78/00/27780014e4740d691d824c3da7fa9167.jpg",
    description: "Un Pokémon de fuego y volador increíblemente fuerte.",
  },
  {
    id: 3,
    name: "Bulbasaur",
    imageUrl:
      "https://static.wikia.nocookie.net/kingsfan-characters/images/9/9b/Ash%27s_bulbasaur.png",
    description: "Un Pokémon planta con poderes curativos.",
  },
  {
    id: 4,
    name: "Squirtle",
    imageUrl:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Squirtle-Using-Water-Gun-Attack.jpg",
    description: "Un Pokémon de agua, pequeño pero tenaz.",
  },
  {
    id: 5,
    name: "Jigglypuff",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zV4arjYWfTbmtyiYihhn-Q2gkV4EMbTrYA&s",
    description: "Un Pokémon que adormece a sus oponentes con su canto.",
  },
];

function HomePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const userId = Cookies.get("user_id");
      axiosClient.get(`api/trainers/${userId}`).then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
    };
    fetchUser();
  }, []);
  
  return (
    <div className="home-page">
      <div className="rows">
        <div className="row-up">
          <div className="user">
            <img src="./avatar3.webp" alt="avatar" />
            <div className="usertags">
              <ShinyText
                text="TRAINER"
                disabled={false}
                speed={5}
                className="trainer"
              />
              <p className="trainerName">{user !== null ? user.firstName + ' ' + user.lastName : 'cargando...'}</p>
            </div>
          </div>
          <div className="battles">
            <div className="mininav">
              <ShinyText
                text="MIS BATALLAS"
                disabled={false}
                speed={5}
                className="teamtext"
              />
            </div>
            <div className="battlescards flex">
              {[
                "05/05/2020",
                "05/05/2020",
                "05/05/2020",
                "05/05/2020",
                "05/05/2020",
                "05/05/2020",
                "05/05/2020",
                "05/05/2020",
              ].map((date, index) => (
                <BattleCard key={index} date={date} win={index % 2 === 0} />
              ))}
            </div>
          </div>
        </div>
        <div className="row-down">
          <div className="team">
            <div className="mininav flex">
              <a href="/teams" className="flex">
                <ShinyText
                  text="MI EQUIPO"
                  disabled={false}
                  speed={5}
                  className="teamtext"
                />
                <img
                  src="./IconParkSolidEdit.svg"
                  alt="edit"
                  className="w-[20px] mt-2 ml-2"
                />
              </a>
            </div>
            <div className="cardsteams">
              {pokemonTeam.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  imageUrl={pokemon.imageUrl}
                  description={pokemon.description}
                  attack1={pokemon.attack1} 
                  attack2={pokemon.attack2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
