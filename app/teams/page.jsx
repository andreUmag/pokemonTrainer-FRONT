"use client";
import "./teams.css";
import GlitchText from "@/components/GlitchText";
import NewCardPokerModal from "@/components/NewCardPokeModal";
import ShinyText from "@/components/ShinyText";
import { useEffect, useState } from "react";
import Link from "next/link";

function teamsPage() {
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    const fetchPokemonTeam = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/1caaf81e-9221-4339-b9b1-c70148df4f1d"
        );
        const data = await response.json();
        console.log("teams", data);
        setPokemonTeam(data);
      } catch (error) {
        console.error("Error al obtener el equipo Pokémon:", error);
      }
    };
    fetchPokemonTeam();
  }, []);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const requests = pokemonTeam.pokemonIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        );
        const responses = await Promise.all(requests);
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        console.log("pokemon info", data);
        setPokemonInfo(data);
      } catch (error) {
        console.log("Error al obtener la info del pokemon", error);
      }
    };
    fetchPokemonInfo();
  }, [pokemonTeam]);

  return (
    <div className="teamsPage grid justify-center mt-[100px]">
      <div className="myteams grid justify-center">
        <div className="nav flex justify-center ">
          <ShinyText
            text={"TEAM " + pokemonTeam.nombre}
            disabled={false}
            speed={5}
            className="teamtext font-bold text-2xl"
          />
        </div>
        <div className="cardsTeams flex justify-center m-5">
          {pokemonInfo.map((pokemon) => (
            <NewCardPokerModal
              key={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
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
