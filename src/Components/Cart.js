import React, { useContext, useEffect, useState } from "react";
import { bucket } from "./Store/CreateStore";

export const Cart = () => {
  const [filteredItems, setFilteredItems] = useState([0]);
  const { cartItems, data, addToCart, removeFromCart } = useContext(bucket);
  useEffect(() => {
    setFilteredItems(data.filter((item) => cartItems[item.id] > 0));
    console.log("cart comp[o triggered");
  }, [cartItems]);

  return (
    <>
      {filteredItems.map((element, index) => {
        return (
          <div
            style={{
              width: "60%",
              border: "solid 5px green",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2 style={{ textAlign: "center" }}>{element.name}</h2>
            <img
              src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"
              style={{
                height: "17vh",
                width: "20vw",
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
              }}
            />
            <button onClick={() => addToCart(element.id)}>+</button>
            <h3>{cartItems[element.id]}</h3>
            <button onClick={() => removeFromCart(element.id)}>-</button>
          </div>
        );
      })}
    </>
  );
};
