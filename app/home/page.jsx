"use client";
import "./home.css";
import ShinyText from "@/components/ShinyText";
import PokemonCard from "@/components/CardPokemon";
import BattleCard from "@/components/CardBattle";
import axiosClient from "@/lib/axiosClient";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const pokemonTeam = [];

function HomePage() {
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [user, setUser] = useState(null);
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      axiosClient.get(`api/auth/me`).then((response) => {
        setUser(response.data);
      });
    };
    fetchUser().then((r) => console.log(r));
  }, []);

  useEffect(() => {
    const fetchPokemonTeam = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/840d2992-5703-4bf0-bdb9-98af6ad303da"
        );
        const data = await response.json();
        console.log("This is the endpoint`s teams", data);
        setPokemonTeam(data);
      } catch (error) {
        console.error("Error al obtener el equipo Pokémon:", error);
      }
    };
    fetchPokemonTeam();
  }, []);

  useEffect(() => {
    const fetchBattles = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/8ae2ce7a-35e6-4408-b9a7-dbcda9c09ad2"
        );
        const data = await response.json();
        console.log("This is the endpoint's battles", data);
        setBattles(data);
      } catch (error) {
        console.error("Error al obtener las batallas:", error);
      }
    };
    fetchBattles();
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
              <p className="trainerName">
                {user !== null
                  ? (user.firstName + " " + user.lastName).toUpperCase()
                  : "CARGANDO..."}
              </p>
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
              {battles.map((battle, index) => (
                <BattleCard
                  key={battle.id || index}
                  date={battle.fecha}
                  win={battle.win}
                />
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
