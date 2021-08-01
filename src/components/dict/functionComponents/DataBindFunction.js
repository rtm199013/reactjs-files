import { useState } from "react";
//import React from "react";

const DataBindFunction = (props) => {
  return (
    <div>
      Firstname:
      <input
        type="text"
        value={props.firstname}
        onChange={(e) => props.setFirtsname(e.target.value)}
      />
      <br />
      Lastname:
      <input
        type="text"
        value={props.lastname}
        onChange={(e) => props.setLastname(e.target.value)}
      />
      <button onClick={props.inputReset}>Reset</button>
      <p>
        Welcome {props.firstname} {props.lastname}
      </p>
    </div>
  );
};

export default DataBindFunction;
