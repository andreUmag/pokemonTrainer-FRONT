import "./home.css";
import ShinyText from "@/components/ShinyText";
import Magnet from "@/components/Magnet";
import PokemonCard from "@/components/CardPokemon";

const pokemonTeam = [
  {
    name: "Pikachu",
    imageUrl: "./pokeball.webp", // Actualiza la ruta de imagen si es necesario
    description: "Un Pokémon eléctrico muy popular y poderoso.",
    attack1: "Impactrueno",
    attack2: "Onda Trueno",
  },
  {
    name: "Charizard",
    imageUrl: "./pokeball.webp",
    description: "Un Pokémon de fuego y volador increíblemente fuerte.",
    attack1: "Llamarada",
    attack2: "Vuelo",
  },
  {
    name: "Bulbasaur",
    imageUrl: "./pokeball.webp",
    description: "Un Pokémon planta con poderes curativos.",
    attack1: "Latigazo",
    attack2: "Hoja Afilada",
  },
  {
    name: "Squirtle",
    imageUrl: "./pokeball.webp",
    description: "Un Pokémon de agua, pequeño pero tenaz.",
    attack1: "Pistola Agua",
    attack2: "Caparazón",
  },
  {
    name: "Jigglypuff",
    imageUrl: "./pokeball.webp",
    description: "Un Pokémon que adormece a sus oponentes con su canto.",
    attack1: "Canto",
    attack2: "Dulce Voz",
  },
];

function HomePage() {
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
              <p className="trainerName">HITMAN RONALD</p>
            </div>
          </div>
          <div className="battles">hi battles</div>
        </div>
        <div className="row-down">
          <div className="team">
            <div className="mininav">
              <ShinyText
                text="MI EQUIPO"
                disabled={false}
                speed={5}
                className="teamtext"
              />
            </div>
            <div className="cardsteams">
              {pokemonTeam.map((pokemon, index) => (
                // <Magnet
                //   key={index}
                //   padding={200}
                //   disabled={false}
                //   magnetStrength={20}
                // >
                  <PokemonCard
                    name={pokemon.name}
                    imageUrl={pokemon.imageUrl}
                    description={pokemon.description}
                    attack1={pokemon.attack1}
                    attack2={pokemon.attack2}
                  />
                // </Magnet>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
