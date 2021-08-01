import React from "react";

class AddItemForm extends React.Component {
  state = {
    name: "Sample",
    price: 0,
    category: "Food",
    image: "image/link",
  };

  //dynamic input handler for 2 way binding
  //using name property of input
  // e is event
  // target.name is property of node or the input
  inputChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //Add new item
  addNewItem = () => {
    let newItem = {
      name: this.state.name,
      price: this.state.price,
      category: this.state.category,
      image: this.state.image,
    };
    // console.log(newItem);
    alert("New Item Added!");
    this.props.addItemToStore(newItem);
  };

  render() {
    return (
      <div>
        <div>
          {/* checking: {this.state.name} */}
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChangeHandle}
          />
          <br />
          Price:
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.inputChangeHandle}
          />
          <br />
          Category:
          <input
            type="text"
            value={this.state.category}
            onChange={(e) => this.setState({ category: e.target.value })}
          />
          <br />
          Image:
          <input
            type="text"
            value={this.state.image}
            onChange={(e) => this.setState({ image: e.target.value })}
          />
        </div>
        <button onClick={this.addNewItem}>Add New Item</button>
      </div>
    );
  }
}

export default AddItemForm;
