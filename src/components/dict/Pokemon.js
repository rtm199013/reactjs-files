import React from "react";
import PokemonList from "./PokemonList";

class Pokemon extends React.Component {
  render() {
    let pokemons = [
      {
        id: "#001",
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      },
      {
        id: "#004",
        name: "Charmander",
        type: "Fire",
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      },
      {
        id: "#007",
        name: "Squirtle",
        type: "Water",
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      },
      {
        id: "#012",
        name: "Butterfree",
        type: ["Bug", "Flying"],
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
      },
    ];

    return (
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Pokemon</th>
            <th scope="col">Image</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <PokemonList data={pokemons} />
      </table>
    );
  }
}

export default Pokemon;
