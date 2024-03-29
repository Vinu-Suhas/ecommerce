import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
export const bucket = createContext();

function CreateStore(props) {
  const [cartItemCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [data, setData] = useState([]);
  const [brandsByCategory, setBrandsByCategory] = useState({});
  const [hasUserLoggedIn, setHasUserLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get("https://react-project2-backend-vinu.onrender.com/data")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getBrandsByCategory = (data) => {
      const brandsByCategory = {};

      data.forEach((product) => {
        const { category, brand } = product;

        if (!brandsByCategory[category]) {
          brandsByCategory[category] = [];
        }

        if (!brandsByCategory[category].includes(brand)) {
          brandsByCategory[category].push(brand);
        }
      });

      return brandsByCategory;
    };
    setBrandsByCategory(getBrandsByCategory(data));
  }, [data]);
  useEffect(() => {
    let count = 0;
    for (const value of Object.values(cartItems)) {
      count += value;
    }
    setCartItemsCount(count);
  }, [cartItems]);
  // const [data, setData] = useState([]);
  const isUserLoggedIn = () => localStorage.getItem("token") !== null;

  const handleLogout = () => localStorage.removeItem("token");
  const addToCart = (itemid) => {
    if (isUserLoggedIn()) {
      setHasUserLoggedIn(true);
      if (cartItems[itemid] === undefined) {
        setCartItems({ ...cartItems, [itemid]: 1 });
      } else setCartItems({ ...cartItems, [itemid]: cartItems[itemid] + 1 });
    } else {
      setHasUserLoggedIn(false);
      toast.warn("Please login to add to cart");
    }
  };
  const removeFromCart = (itemid) => {
    if (cartItems[itemid] !== undefined)
      setCartItems({ ...cartItems, [itemid]: cartItems[itemid] - 1 });
  };
  const hightlightButtons = ({ isActive }) => ({
    color: isActive ? "darkgreen" : "white",
  });

  return (
    <>
      <bucket.Provider
        value={{
          setHasUserLoggedIn,
          data,
          setData,
          addToCart,
          cartItems,
          setCartItems,
          removeFromCart,
          cartItemCount,
          brandsByCategory,
          hasUserLoggedIn,
          handleLogout,
          hightlightButtons,
        }}
      >
        {props.children}
      </bucket.Provider>
    </>
  );
}

export { CreateStore };
