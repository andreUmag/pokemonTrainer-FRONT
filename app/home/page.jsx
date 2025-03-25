"use client";
import "./home.css";
import ShinyText from "@/components/ShinyText";
import BattleCard from "@/components/CardBattle";
import BattleModal from "@/components/BattleModal";
import axiosClient from "@/lib/axiosClient";
import { use, useEffect, useState } from "react";
import Cookies from "js-cookie";
import NewCardPokerModal from "@/components/NewCardPokeModal";

function HomePage() {
  const [pokemonTeam, setPokemonTeam] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [user, setUser] = useState(null);
  const [battles, setBattles] = useState([]);
  const [selectedBattle, setSelectedBattle] = useState(null);

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
          "https://gestor-equipos-pokemon-backend-h6g9cge5hbeefagx.canadacentral-01.azurewebsites.net/api/equipos-entrenador/entrenador/1"
        );
        const data = await response.json();
        const equipoSeleccionado = data[0].equipoSeleccionado;
        console.log("equipo seleccionado", equipoSeleccionado);

        const response2 = await fetch(
          "https://gestor-equipos-pokemon-backend-h6g9cge5hbeefagx.canadacentral-01.azurewebsites.net/api/equipos/" +
            equipoSeleccionado
        );

        const data2 = await response2.json();
        console.log("teams", data);
        console.log("teams for id", data2);
        setPokemonTeam(data2);

        console.log("pokemon team", data2.nombre);
      } catch (error) {
        console.error("Error al obtener el equipo Pokémon:", error);
      }
    };
    fetchPokemonTeam();
  }, []);

  useEffect(() => {
    if (pokemonTeam && pokemonTeam.pokemonesIds) {  
      const fetchPokemonInfo = async () => {
        try {
          const requests = pokemonTeam.pokemonesIds.map((id) => 
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
    }
  }, [pokemonTeam]);

  const simulateBattle = async () => {
    const battleData = {
      team1: {
        trainerId: "ash",
        pokemons: [
          { id: "pikachu", hp: 35, attack: 55, defense: 40 },
          { id: "charizard", hp: 78, attack: 84, defense: 78 },
          { id: "lapras", hp: 130, attack: 85, defense: 80 },
        ],
      },
      team2: {
        trainerId: "gary",
        pokemons: [
          { id: "blastoise", hp: 79, attack: 83, defense: 100 },
          { id: "alakazam", hp: 55, attack: 50, defense: 45 },
          { id: "gengar", hp: 60, attack: 65, defense: 60 },
        ],
      },
    };

    try {
      const response = await fetch(
        "https://run.mocky.io/v3/21169be0-49e5-46fe-83a2-4bc19d80b1c2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(battleData),
        }
      );
      const result = await response.json();
      console.log("battle result", result);
      setBattles([result]);
    } catch (error) {
      console.error("Error al simular la batalla:", error);
    }
  };

  useEffect(() => {
    simulateBattle();
  }, []);

  useEffect(() => {
    console.log("selectedBattle", selectedBattle);
  }, [selectedBattle]);

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
                  key={index}
                  date={`Batalla ${index + 1}`}
                  win={battle.winnerTeam === "ash"}
                  onClick={() => {
                    console.log("Battle clicked:", battle);
                    setSelectedBattle(battle);
                  }}
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
            <div className="teamss">
              {pokemonInfo && pokemonInfo.length > 0 ? (
                <div className="cardsteams">
                  {pokemonInfo.map((pokemon) => (
                    <NewCardPokerModal
                      key={pokemon.id}
                      name={pokemon.name}
                      imageUrl={pokemon.sprites.front_default}
                      type={pokemon.types[0].type.name}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-[100px] h-[100px] rounded-2xl border-4 newteam">
                  <a href="/newteam">
                    <svg
                      style={{ opacity: 0.4 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-square-plus"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedBattle && (
        <BattleModal
          battle={selectedBattle}
          onClose={() => setSelectedBattle(null)}
        />
      )}
    </div>
  );
}

export default HomePage;
