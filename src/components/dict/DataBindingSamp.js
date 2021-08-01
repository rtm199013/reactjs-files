import React from "react";

class DataBindingSamp extends React.Component {
  state = {
    fname: "John",
    lname: "Wick",
  };

  inputChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  inputReset = () => {
    this.setState({
      fname: "",
      lname: "",
    });
  };

  render() {
    return (
      <div className="border">
        Firstname:
        <input
          type="text"
          name="fname"
          value={this.state.fname}
          onChange={this.inputChangeHandle}
        />
        <br />
        Lastname:{" "}
        <input
          type="text"
          name="lname"
          value={this.state.lname}
          onChange={this.inputChangeHandle}
        />
        <button onClick={this.inputReset}>Reset</button>
        <p>
          Welcome {this.state.fname} {this.state.lname}
        </p>
      </div>
    );
  }
}

export default DataBindingSamp;
