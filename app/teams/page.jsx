"use client";
import "./teams.css";
import GlitchText from "@/components/GlitchText";
import NewCardPokerModal from "@/components/NewCardPokeModal";
import ShinyText from "@/components/ShinyText";
import { useEffect, useState } from "react";
import Link from "next/link";

function teamsPage() {
  const [pokemonTeam, setPokemonTeam] = useState([]);

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

  return (
    <div className="teamsPage grid justify-center mt-[100px]">
      <div className="myteams grid justify-center">
        <div className="nav flex justify-center ">
          <ShinyText
            text="MI EQUIPO POKEMON"
            disabled={false}
            speed={5}
            className="teamtext font-bold text-2xl"
          />
        </div>
        <div className="cardsTeams flex justify-center m-5">
          {pokemonTeam.map((pokemon) => (
            <NewCardPokerModal
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
      <div className="pokemonsSelect">
        <Link href="/home">
          <button className="gradient-button">Volver al Inicio</button>
        </Link>
        <p>Editar equipo proximamente</p>
      </div>
    </div>
  );
}

export default teamsPage;
