import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bucket } from "../Store/CreateStore";
import "./ProductInfo.css";
export default function ProductInfo() {
  const productId = useParams().id;
  const { data } = useContext(bucket);
  const product = data.find((item) => item.id === parseInt(productId));
  return (
    <div className="product-info-container">
      <h2 style={{ textAlign: "center" }}>{product.name}</h2>
      <div className="productInfoDivider">
        <div className="productInfoDivider-1">
          <img
            src={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/u/3/-original-imaggsuddwubypxp.jpeg?q=70"
            }
            alt={product.name}
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="productInfoDivider-1">
          <p>Brand: {product.brand}</p>
          <p>Color: {product.color}</p>
          <p>Storage: {product.storage}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
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
        </div>
      </div>

      {/* Add more details as needed */}
    </div>
  );
}
