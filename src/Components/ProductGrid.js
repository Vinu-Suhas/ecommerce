import React, { useContext } from "react";
import { bucket } from "./Store/CreateStore";
import { Link } from "react-router-dom";

export function ProductGrid(props) {
  const { addToCart, cartItems } = useContext(bucket);
  const cartAmount = cartItems[props.id] ?? 0;
  return (
    <div className="productContainer">
      <Link to={`/productinfo/${props.id}`}>
        <img
          src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"
          style={{ height: "17vh" }}
        />
        <h2 className="black">{props.name}</h2>
      </Link>
      <h3>{props.storage}</h3>
      <button
        style={{ textDecoration: "none" }}
        onClick={() => {
          addToCart(props.id);
        }}
      >
        Buy now ({cartAmount > 0 && cartAmount})
      </button>
    </div>
  );
}
