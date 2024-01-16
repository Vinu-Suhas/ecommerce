import React from "react";
import "./OrderSuccessful.css";
import orderSuccessfulAnimation from "../../assets/order_confirmation.gif";
import { useNavigate } from "react-router-dom";
export const OrderSuccessful = () => {
  const Navigate = useNavigate();
  return (
    <div className="orderConfirmationContainer">
      <img src={orderSuccessfulAnimation} />
      <div id="orderConfirmation" className="confirmation-container">
        <h2 className="text-center">Your Order Has Been Successful!</h2>
        <p className="text-center">
          Thank you for shopping with us. Your order is confirmed.
        </p>
      </div>

      <button className="continue-shopping" onClick={() => Navigate("/home")}>
        Continue Shopping
      </button>
    </div>
  );
};
