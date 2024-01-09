import React, { useContext, useEffect, useState } from "react";
import { bucket } from "../Store/CreateStore";
import "./cart.css";
// import { PaymentGateway } from "../PaymentGateway/PaymentGateway";
export const Cart = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItemsPrice, setCartItemsPrice] = useState(0);
  const { cartItems, data, addToCart, removeFromCart, cartItemCount } =
    useContext(bucket);
  useEffect(() => {
    setFilteredItems(data.filter((item) => cartItems[item.id] > 0));
    setCartItemsPrice(
      filteredItems.reduce((finalPrice, element) => {
        return finalPrice + cartItems[element.id] * Number(element.price);
      }, 0)
    );
  }, [cartItems]);

  return (
    <>
      {filteredItems.length == 0 ? (
        <h1 style={{ textAlign: "center" }}>No items are added to cart</h1>
      ) : (
        <>
          {filteredItems.map((element, index) => {
            return (
              <div className="cartItems">
                <h2 style={{ textAlign: "center" }}>{element.name}</h2>
                <img
                  src={element.imageLink}
                  style={{
                    height: "25vh",
                    width: "15vw",
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    style={{ height: "4vh", width: "4vw" }}
                    onClick={() => addToCart(element.id)}
                  >
                    +
                  </button>
                  <h3 style={{ marginLeft: "2vw", marginRight: "2vw" }}>
                    {cartItems[element.id]}
                  </h3>
                  <button
                    onClick={() => removeFromCart(element.id)}
                    style={{ height: "4vh", width: "4vw" }}
                  >
                    -
                  </button>
                </div>

                <h3 style={{ textAlign: "center" }}>Price :{element.price}</h3>
              </div>
            );
          })}
          <div
            className="cartItems"
            style={{
              alignItems: "center",
              //   display: "flex",
              //   justifyContent: "center",
              //   flexDirection: "column",
              //   border: "5px solid green",
              //   width: "40%",
            }}
          >
            <h2>Total:</h2>
            <p>Total Items: {cartItemCount}</p>
            <hr style={{ color: "black" }} />
            <p>Total Before Tax: {cartItemsPrice}</p>
            <p>Delivery Charges: 100</p>
            <p>GST: {cartItemsPrice * 0.18}</p>
            <p>Final Amount: 22300</p>
            <button
              style={{
                marginBottom: "2rem",
                background: "#04aa6d",
                padding: "1rem",
                borderRadius: "1rem",
                width: "8rem",
              }}
            >
              Checkout
            </button>

          </div>
        </>
      )}
    </>
  );
};
