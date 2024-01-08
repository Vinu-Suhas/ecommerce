import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductGrid.css";
export function ProductGrid(props) {
  const { addToCart, cartItems } = useContext(bucket);
  const cartAmount = cartItems[props.id] ?? 0;
  return (
    <div className="productContainer">
      <Link
        to={`/productinfo/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={props.img} style={{ height: "17vh" }} />

        <h2 className="black" style={{ textDecoration: "none" }}>
          {props.name}
        </h2>
      </Link>
      <h3>
        Rating :{props.rating}
        {parseInt(props.rating) === props.rating ? (
          <FaStar />
        ) : (
          <FaStarHalfAlt />
        )}
      </h3>
      <h3>{props.storage}</h3>
      <button
        onClick={() => {
          addToCart(props.id);
        }}
      >
        Buy now {cartAmount > 0 && <>({cartAmount})</>}
      </button>
    </div>
  );
}
