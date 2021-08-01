import React from "react";

class StateSample extends React.Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    let newCount = this.state.counter + 1;
    this.setState({
      counter: newCount,
    });
    console.log(newCount);
  };

  minusCounter = () => {
    let newCount = this.state.counter - 1;
    this.setState({
      counter: newCount,
    });
    console.log(newCount);
  };

  addCounterPlus = (val) => {
    let newCount = this.state.counter + val;
    this.setState({
      counter: newCount,
    });
    console.log(newCount);
  };

  render() {
    return (
      <div className="border">
        state activity
        <br />
        {this.state.counter}
        <div>
          <button type="button" onClick={this.addCounter}>
            +
          </button>
          <button type="button" onClick={this.minusCounter}>
            -
          </button>
          <button type="button" onClick={() => this.addCounterPlus(5)}>
            +5
          </button>
        </div>
      </div>
    );
  }
}

export default StateSample;
