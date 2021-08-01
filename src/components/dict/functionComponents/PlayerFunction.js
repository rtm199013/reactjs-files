import React from "react";

const PlayerFunction = (props) => {
  const players = props.data;

  let playerList = players.map((p) => {
    return (
      <div key={p.name}>
        {p.name} {p.number}
      </div>
    );
  });

  let clickHandler = (val, args) => {
    alert(val + " " + args);
  };

  return (
    <div>
      Player Name and Jersay Number
      <hr />
      <div>{playerList}</div>
      <hr />
      <button type="button" onClick={() => clickHandler("test", "args")}>
        Test Click!
      </button>
      <hr />
    </div>
  );
};

export default PlayerFunction;
