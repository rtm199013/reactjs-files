import React from "react";

class CartItems extends React.Component {
  render() {
    //Object - ALL
    const cartItems = this.props.data.cart;
    console.log(cartItems);

    let itemOnCart = cartItems.map((item) => {
      return (
        <div>
          <div key={item.id}>
            <img src={item.image} alt={item.name} />X{item.quantity}
          </div>
          <div>{item.name}</div>
          <div>{item.price * item.quantity}</div>
        </div>
      );
    });

    let totalAmountPerItem = cartItems.map((item) => {
      item.total = item.price * item.quantity;
      return <div key={item.id}>{item.total}</div>;
    });

    //console.log(totalAmountPerItem.length);

    return (
      <div>
        <div>Cart</div>
        <hr />
        {itemOnCart}
        <hr />
        {totalAmountPerItem}
      </div>
    );
  }
}

export default CartItems;
