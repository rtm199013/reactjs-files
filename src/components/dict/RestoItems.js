import React from "react";
import RestoItemCounter from "./RestoItemCounter";

class RestoItems extends React.Component {
  test = () => {
    alert("test");
  };

  updateItem = (item) => {
    //alert(item);
    //console.log(item);
    this.props.editToItem(item);
  };

  filterFood = (filterBy) => {
    // alert("filter value: " + filterBy);
    this.props.filter(filterBy);
  };

  render() {
    //state/setState filter value
    let foodFiltered = this.props.data.filter;

    //Object - ALL
    const foodList = this.props.data.items;

    //Object - Filtered
    const filteredFood = foodList.filter(
      (item) => item.category === foodFiltered
    );

    //Ternary for foodDisplay
    let items = foodFiltered === "All" ? foodList : filteredFood;

    let foodDisplay = items.map((item) => {
      return (
        <div className="col-4 border" key={item.id}>
          <div className="row">
            <p />
            <div className="col-5 restopic">
              <img src={item.image} alt={item.category + " " + item.name} />
            </div>
            <div className="col-7 text-start">
              <strong>{item.name}</strong>
              <p>
                {item.category}
                <br />
                <small className="fs-6">Php </small>
                {item.price}
              </p>
            </div>
            <div className="col-12">
              <p />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  this.props.addToCart(
                    item.id,
                    item.name,
                    item.price,
                    item.image
                  )
                }
              >
                Add
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.deleteToItem(item.id)}
              >
                Delete
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                // onClick={() => this.updateItem(item.id)}
                onClick={() => this.updateItem(item)}
              >
                Edit
              </button>
              {/* {this.state.itemQuantityCounter} */}
              {/* <RestoItemCounter orderQty={this.addQty} /> */}
            </div>
          </div>
          <br />
        </div>
      );
    });

    return (
      <div>
        <br />
        <div className="text-start">
          Filter by: {foodFiltered}&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.filterFood("All")}
          >
            All
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.filterFood("Food")}
          >
            Food
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.filterFood("Drink")}
          >
            Drink
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.filterFood("Dessert")}
          >
            Dessert
          </button>
          <p />
        </div>
        <div className="row">{foodDisplay}</div>
        <br />
      </div>
    );
  }
}

export default RestoItems;
