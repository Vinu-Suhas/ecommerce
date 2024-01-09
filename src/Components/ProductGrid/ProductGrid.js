import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductGrid.css";
export function ProductGrid(props) {
  const { addToCart, cartItems,removeFromCart } = useContext(bucket);
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
      <h3>
        <span
          style={{
            textDecoration: "line-through",
            textDecorationThickness: "3px",
            textDecorationColor: "red",
          }}
        >
          ₹{parseInt(props.price) + 2000}
        </span>
        <span style={{ color: "red" }}> ₹{props.price}</span>
      </h3>
      {/* <button
        onClick={() => {
          addToCart(props.id);
        }}
      >
        Buy now {cartAmount > 0 && <>({cartAmount})</>} 
      </button>*/}
      {cartAmount == 0 ? (
  <button
  className="pi-buttons"
    onClick={() => addToCart(props.id)}
  >
    Buy now
  </button>
) : (
 <div style={{ display:"flex" ,justifyContent:"space-evenly"}}> <button  className="pi-buttons"  onClick={() => addToCart(props.id)}  style={{marginRight:"1rem" ,transition:"1s"}}> + </button> {cartAmount} <button  className="pi-buttons" style={{marginLeft:"1rem",transition:"1s"}}   onClick={() => removeFromCart(props.id)}>-</button></div>
)}
      
    </div>
  );
}
