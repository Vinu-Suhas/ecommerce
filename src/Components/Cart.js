import React, { useContext } from "react";
import { bucket } from "./Store/CreateStore";

export const Cart = () => {
  const { cartItems } = useContext(bucket);
  return (
    <>
      <div>Cart Components</div>
    </>
  );
};
