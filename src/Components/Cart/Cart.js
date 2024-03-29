// Cart.js
import React, { useContext, useEffect, useState } from "react";
import { bucket } from "../Store/CreateStore";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const Navigate = useNavigate();
  const {
    cartItems,
    data,
    addToCart,
    removeFromCart,
    cartItemCount,
    setCartItems,
  } = useContext(bucket);
  const [cartItemsList, setCartItemsList] = useState([]);

  useEffect(() => {
    const filteredItems = data.filter((item) => cartItems[item.id] > 0);
    setCartItemsList(filteredItems);
  }, [cartItems, data]);

  const calculateTotalPrice = () => {
    return cartItemsList.reduce((total, item) => {
      return total + cartItems[item.id] * Number(item.price);
    }, 0);
  };

  return (
    <div className="cart-container">
      {cartItemsList.length === 0 ? (
        <h1 className="empty-cart-message">No items are added to the cart</h1>
      ) : (
        <>
          <div className="cart-title">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
          </div>
          {cartItemsList.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img
                  src={item.imageLink}
                  alt={item.name}
                  className="cart-image"
                />
                <h3>{item.name}</h3>
              </div>
              <p>₹{item.price}</p>
              <div className="quantity-controls">
                <button
                  className="pi-buttons"
                  onClick={() => addToCart(item.id)}
                  style={{ marginRight: "1rem" }}
                >
                  +
                </button>
                <p>{cartItems[item.id]}</p>
                <button
                  className="pi-buttons"
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: "1rem" }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div className="order-summary">
            <h2>Order Summary :</h2>
            <p>Total Items : {cartItemCount}</p>
            <hr />
            <p>
              Total Before Tax : ₹
              {calculateTotalPrice() - calculateTotalPrice() * 0.18}
            </p>
            <hr />
            <p>Delivery Charges : ₹100</p>
            <hr />
            <p>GST : ₹{(calculateTotalPrice() * 0.18).toFixed(2)}</p>
            <hr />
            <p>Final Amount : ₹{calculateTotalPrice()+100}</p>
            <button
              className="checkout-button"
              onClick={() => {
                setCartItems({});
                Navigate("/successful");
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
