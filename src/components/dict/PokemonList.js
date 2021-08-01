import React from "react";

class PokemonList extends React.Component {
  render() {
    const pokemonList = this.props.data;
    console.log(pokemonList);

    return (
      // jsx return at (render-base) vs. method-base
      // check playerList for method-base
      <tbody>
        {pokemonList.map((p) => {
          return (
            // key={p.id} = added key
            <tr key={p.id}>
              <th>{p.id}</th>
              <td>{p.name}</td>
              <td>
                <img
                  src={p.image}
                  className="rounded mx-auto d-block"
                  alt={p.name}
                />
              </td>
              <td>
                {p.type + " "}
                {/* console.log(Object.values(object1)); */}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default PokemonList;
