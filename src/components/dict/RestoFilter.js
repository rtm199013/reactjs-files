import React from "react";

class RestoFilter extends React.Component {
  render() {
    return (
      <div>
        <div className="text-start"></div>
        {this.props.foodFiltered}
        <button onClick={this.props.filterFood}>All</button>
        <button>Food</button>
        <button>Drink</button>
        <button>Dessert</button>
      </div>
    );
  }
}

export default RestoFilter;
