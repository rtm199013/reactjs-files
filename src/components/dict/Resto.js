import React from "react";
import RestoItems from "./RestoItems";
import CartItems from "./CartItems";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

class Resto extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: "Burger",
        price: 50,
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046784.svg",
      },
      {
        id: 2,
        name: "Pizza",
        price: 100,
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046771.svg",
      },
      {
        id: 3,
        name: "Fries",
        price: 25,
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046786.svg",
      },
      {
        id: 4,
        name: "Coffee",
        price: 35,
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046785.svg",
      },
      {
        id: 5,
        name: "Iced Tea",
        price: 45,
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046782.svg",
      },
      {
        id: 6,
        name: "Hot Tea",
        price: 45,
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046792.svg",
      },
      {
        id: 7,
        name: "Ice Cream",
        price: 15,
        category: "Dessert",
        image: "https://image.flaticon.com/icons/svg/1046/1046768.svg",
      },
      {
        id: 8,
        name: "Donut",
        price: 20,
        category: "Dessert",
        image: "https://image.flaticon.com/icons/svg/1046/1046767.svg",
      },
      {
        id: 9,
        name: "Croissant",
        price: 10,
        category: "Dessert",
        image: "https://image.flaticon.com/icons/svg/1046/1046777.svg",
      },
    ],
    filter: "All",
    cart: [],
    onEdit: true,
    name: null,
    price: null,
    category: null,
    image: null,
    itemEdit: null,
  };

  addToCart = (id, name, price, image) => {
    //alert("Add to Cart");
    //console.log(id + name + price + image);

    let orderToAdd = {
      id: id,
      name: name,
      price: price,
      image: image,
    };

    let cartCopy = [...this.state.cart];
    //console.log(cartCopy);
    // cartCopy.push(orderToAdd);
    // this.setState({
    //   cart: cartCopy,
    // });
    // console.log(cartCopy);

    let orderIndex = cartCopy.findIndex((item) => item.id === orderToAdd.id);
    //console.log(orderIndex);

    if (orderIndex === -1) {
      orderToAdd.quantity = 1;
      cartCopy.push(orderToAdd);
      alert("add new order");
      //console.log(cartCopy);
    } else {
      cartCopy[orderIndex].quantity++;
      alert("add order QTY");
      //console.log(cartCopy);
    }

    this.setState({
      cart: cartCopy,
    });

    // console.log(this.state.cart);
  };

  addItemToStore = (itemToAdd) => {
    //console.log(itemToAdd);

    itemToAdd.id = this.state.items.length + 1;

    let itemsCopy = [...this.state.items];

    itemsCopy.unshift(itemToAdd);

    this.setState({
      items: itemsCopy,
    });
  };

  deleteToItem = (itemId) => {
    alert("Deleted item" + itemId);

    let itemsCopy = [...this.state.items];

    itemsCopy = itemsCopy.filter((i) => i.id !== itemId);

    this.setState({
      items: itemsCopy,
    });
  };

  editToItem = (item) => {
    this.setState({
      itemEdit: item,
    });
  };

  editUpdate = (itemUpdateDetails) => {
    alert("edit to update is push");
    //console.log(itemUpdateDetails.id);

    let updateItemIndex = this.state.items.findIndex(
      (item) => item.id === itemUpdateDetails.id
    );

    //console.log(updateItemIndex);

    let itemsCopy = [...this.state.items];
    itemsCopy[updateItemIndex] = itemUpdateDetails;

    this.setState({
      items: itemsCopy,
    });

    this.setState({
      itemEdit: null,
    });
  };

  render() {
    //console.log(this.state);
    let filterItems = (filterWithCategory, sample) => {
      this.setState({
        filter: filterWithCategory,
      });
      //console.log(filterWithCategory + " " + sample);
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 border">
            <AddItemForm addItemToStore={this.addItemToStore} />
            {this.state.itemEdit && (
              <EditItemForm
                itemToUpdate={this.state.itemEdit}
                editUpdate={this.editUpdate}
              />
            )}
          </div>
        </div>

        {/* forward object as data props */}
        <div className="row">
          <div className="col-9">
            <div>
              <RestoItems
                data={this.state}
                editToItem={this.editToItem}
                deleteToItem={this.deleteToItem}
                addToCart={this.addToCart}
                // filterBy is return from child, sampleArgs@restoJs for testing only
                filter={(filterBy) =>
                  filterItems(filterBy, "sampleArgs@restoJs")
                }
              />
            </div>
          </div>
          <div className="col-3">
            Cart
            <CartItems data={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resto;
