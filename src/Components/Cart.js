import React, { useContext, useEffect, useState } from "react";
import { bucket } from "./Store/CreateStore";

export const Cart = () => {
  const [filteredItems, setFilteredItems] = useState([0]);
  const { cartItems, data } = useContext(bucket);
  useEffect(() => {
    setFilteredItems(data.filter((item) => cartItems[item.id] > 0));
    console.log("cart comp[o triggered");
  }, [cartItems]);

  return (
    <>
      <div>Cart Components</div>
      {filteredItems.map((element, index) => {
        return (
          <>
            <h2>{element.name}</h2>
          </>
        );
      })}
    </>
  );
};
