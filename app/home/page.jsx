import "./home.css";
import ShinyText from "@/components/ShinyText";
import PokemonCard from "@/components/CardPokemon";
import BattleCard from "@/components/CardBattle";

const pokemonTeam = [
  {
    id: 1,
    name: "Pikachu",
    imageUrl: "https://ivector.xyz/public/wp-content/uploads/pikachu-electrico-vector-01.jpg",
    description: "Un Pokémon eléctrico muy popular y poderoso.",
    attack1: "Impactrueno",
    attack2: "Onda Trueno",
  },
  {
    id: 2,
    name: "Charizard",
    imageUrl: "https://i.pinimg.com/736x/27/78/00/27780014e4740d691d824c3da7fa9167.jpg",
    description: "Un Pokémon de fuego y volador increíblemente fuerte.",
    attack1: "Llamarada",
    attack2: "Vuelo",
  },
  {
    id: 3,
    name: "Bulbasaur",
    imageUrl: "https://static.wikia.nocookie.net/kingsfan-characters/images/9/9b/Ash%27s_bulbasaur.png",
    description: "Un Pokémon planta con poderes curativos.",
    attack1: "Latigazo",
    attack2: "Hoja Afilada",
  },
  {
    id: 4,
    name: "Squirtle",
    imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Squirtle-Using-Water-Gun-Attack.jpg  ",
    description: "Un Pokémon de agua, pequeño pero tenaz.",
    attack1: "Pistola Agua",
    attack2: "Caparazón",
  },
  {
    id: 5,
    name: "Jigglypuff",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zV4arjYWfTbmtyiYihhn-Q2gkV4EMbTrYA&s",
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
              <BattleCard win={true}/>
              <BattleCard win={false}/>
              <BattleCard win={true}/>
              <BattleCard win={false}/>
              <BattleCard win={true}/>
              <BattleCard win={false}/>
              <BattleCard win={true}/>
              <BattleCard win={false}/>
            </div>
          </div>
        </div>
        <div className="row-down">
          <div className="team">
            <div className="mininav">
              <ShinyText
                text="MI EQUIPO"
                disabled={false}
                speed={5}
                className="teamtext "
              />
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
