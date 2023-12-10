import React from "react";

export function ProductGrid(props) {
  return (
    <div className="productContainer">
      <img
        src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"
        style={{ height: "17vh" }}
      />
      <h2 className="black">{props.name}</h2>
      {/* <h2>{props.brand}</h2> */}
      {/* <h3>{props.color}</h3> */}
      <h3>{props.storage}</h3>
    </div>
  );
}
