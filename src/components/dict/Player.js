import React from "react";
import PlayerList from "./PlayerList";

class Player extends React.Component {
  render() {
    const players = [
      {
        name: "jordan",
        number: 23,
      },
      {
        name: "James",
        number: 23,
      },
      {
        name: "Bryant",
        number: 24,
      },
    ];

    return (
      <div>
        <PlayerList data={players} />
      </div>
    );
  }
}

export default Player;
