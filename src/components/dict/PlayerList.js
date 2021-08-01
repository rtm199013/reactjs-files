import React from "react";

class PlayerList extends React.Component {
  render() {
    const players = this.props.data;
    console.log(players);

    // jsx return at (method-base) vs. render-base
    // check pokemonList for render-base
    let playerList = players.map((p) => {
      return (
        <div key={p.name}>
          {p.name} {p.number}
        </div>
      );
    });

    // let playerList = players.map( p => {})

    return (
      <div>
        Player Name and Jersay Number
        <hr />
        <div>{playerList}</div>
      </div>
    );
  }
}

export default PlayerList;

// .map function
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// expected output: Array [2, 8, 18, 32]
