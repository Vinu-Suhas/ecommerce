import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const bucket = createContext();

function CreateStore(props) {
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/data")
    //   .then(function (response) {
    //     console.log(response.data);
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  });
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemid) => {
    if (cartItems[itemid] === undefined) {
      setCartItems({ ...cartItems, [itemid]: 1 });
      console.log("asdasd", cartItems);
      console.log("dict ", { ...cartItems, [itemid]: 1 });
    } else setCartItems({ ...cartItems, [itemid]: cartItems[itemid] + 1 });
    console.log(cartItems);
  };
  return (
    <>
      <bucket.Provider value={{ data, setData, addToCart, cartItems }}>
        {props.children}
      </bucket.Provider>
    </>
  );
}

export { CreateStore };
