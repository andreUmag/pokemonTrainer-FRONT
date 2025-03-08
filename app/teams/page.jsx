import "./teams.css";
import PokemonCard from "@/components/CardPokemon";
import ShinyText from "@/components/ShinyText";

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

function teamsPage() {
  return (
    <div className="teamsPage flex justify-center mt-[100px]">
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
      <div className="pokemonsSelect"></div>
    </div>
  );
}

export default teamsPage;
