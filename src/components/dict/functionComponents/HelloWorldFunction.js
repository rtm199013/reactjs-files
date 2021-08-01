import { useState } from "react";
//import React from "react";
import PlayerFunction from "./PlayerFunction";
import DataBindFunction from "./DataBindFunction";

function HelloWorldFunction() {
  const [players, setPlayers] = useState([
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
  ]);

  const [count, setCount] = useState(0);

  const [firstname, setFirtsname] = useState("John");
  const [lastname, setLastname] = useState("Wick");
  let inputReset = () => {
    setFirtsname("");
    setLastname("");
  };

  return (
    <div>
      <div>Hello World!</div>
      <div>Function Component</div>
      <div>Data Set (Main App)</div>
      <hr />
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>+</button>
      <hr />
      <div>
        <PlayerFunction data={players} />
      </div>
      <div>
        <DataBindFunction
          firstname={firstname}
          setFirtsname={setFirtsname}
          lastname={lastname}
          setLastname={setLastname}
          inputReset={inputReset}
        />
      </div>
    </div>
  );
}

export default HelloWorldFunction;
