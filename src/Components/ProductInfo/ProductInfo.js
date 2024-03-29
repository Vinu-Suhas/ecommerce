import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bucket } from "../Store/CreateStore";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import "./ProductInfo.css";
export default function ProductInfo() {
  const productId = useParams().id;
  const { data ,addToCart,cartItems,removeFromCart } = useContext(bucket);
  const product = data.find((item) => item.id === parseInt(productId));
  const cartAmount = cartItems[product.id] ?? 0;
  return (
    <div className="product-info-container">
      <h2 style={{ textAlign: "center" }} className="productitle">{product.name}</h2>
      <div className="productInfoDivider">
        <div className="productInfoDivider-1">
          <img
            src={product.imageLink}
            alt={product.name}
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="productInfoDivider-2">
          <h3>Brand: {product.brand}</h3>
          <h3>Color: {product.color}</h3>
          <h3>Storage: {product.storage}</h3>
          <h3>
            Price:
            <span
              style={{
                textDecoration: "line-through",
                textDecorationThickness: "3px",
                textDecorationColor: "red",
              }}
            >
              ₹{parseInt(product.price) + 2000}
            </span>
            <span style={{ color: "red" }}> ₹{product.price}</span>
          </h3>
          <h3>
            Rating :{product.rating}
            {parseInt(product.rating) === product.rating ? (
              <FaStar />
            ) : (
              <FaStarHalfAlt />
            )}
          </h3>
          <p>
            Experience smooth operation and brilliant user interface with the
            5G-ready Google Pixel 7 smartphone that comes loaded with innovative
            features. Google Tensor G2 makes the Pixel 7 faster, more efficient,
            and more secure and it delivers even more helpful features.
            Furthermore, the Pixel 7 Camera takes incredible photos and videos
            in stunning colour and detail. It includes Super Res Zoom so that
            you can get super-sharp close-ups without an extra telephoto lens.
            Additionally, the Pixel 7's 16.002 cm (6.3) display is super sharp,
            with rich, vivid colours. And it's fast and responsive for smoother
            gaming, scrolling, and moving between apps.{" "}
          </p>
          <>
          {cartAmount == 0 ? (
  <button
  className="pi-buttons"
    onClick={() => addToCart(product.id)}
  >
    Buy now
  </button>
) : (
 <><button  className="pi-buttons" onClick={() => addToCart(product.id)}> + </button> {cartAmount} <button  className="pi-buttons" onClick={() => removeFromCart(product.id)}>-</button></>
)}

          </>
        </div>
      </div>

    </div>
  );
}
