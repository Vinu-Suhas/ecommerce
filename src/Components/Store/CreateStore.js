import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const bucket = createContext();

function CreateStore(props) {
  const [cartItemCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [data, setData] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S21",
      brand: "Samsung",
      color: "black",
      storage: "128GB",
      imageLink: "https://example.com/samsung-galaxy-s21-image.jpg",
      price: "12000",
    },
    {
      id: 2,
      name: "Google Pixel 5",
      brand: "Google",
      color: "white",
      storage: "256GB",
      imageLink: "https://example.com/google-pixel-5-image.jpg",
      price: "25000",
    },
    {
      id: 3,
      name: "OnePlus 9",
      brand: "OnePlus",
      color: "silver",
      storage: "256GB",
      imageLink: "https://example.com/oneplus-9-image.jpg",
      price: "25000",
    },
    {
      id: 4,
      name: "Huawei P40 Pro",
      brand: "Huawei",
      color: "gold",
      storage: "128GB",
      imageLink: "https://example.com/huawei-p40-pro-image.jpg",
      price: "25000",
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      brand: "Xiaomi",
      color: "green",
      storage: "128GB",
      imageLink: "https://example.com/xiaomi-mi-11-image.jpg",
      price: "25000",
    },
    {
      id: 6,
      name: "iPhone 13",
      brand: "Apple",
      color: "blue",
      storage: "256GB",
      imageLink: "https://example.com/iphone-13-image.jpg",
      price: "25000",
    },
    {
      id: 7,
      name: "Sony Xperia 1 III",
      brand: "Sony",
      color: "purple",
      storage: "256GB",
      imageLink: "https://example.com/sony-xperia-1-iii-image.jpg",
      price: "25000",
    },
    {
      id: 8,
      name: "Motorola Edge 20",
      brand: "Motorola",
      color: "gray",
      storage: "128GB",
      imageLink: "https://example.com/motorola-edge-20-image.jpg",
      price: "25000",
    },
    {
      id: 9,
      name: "LG Velvet",
      brand: "LG",
      color: "silver",
      storage: "128GB",
      imageLink: "https://example.com/lg-velvet-image.jpg",
      price: "25000",
    },
  ]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/data")
  //     .then(function (response) {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });
  useEffect(() => {
    let count = 0;
    for (const value of Object.values(cartItems)) {
      count += value;
    }
    setCartItemsCount(count);

    console.log(cartItemCount);
  }, [cartItems]);
  // const [data, setData] = useState([]);

  const addToCart = (itemid) => {
    if (cartItems[itemid] === undefined) {
      setCartItems({ ...cartItems, [itemid]: 1 });
    } else setCartItems({ ...cartItems, [itemid]: cartItems[itemid] + 1 });
  };
  const removeFromCart = (itemid) => {
    if (cartItems[itemid] === undefined) {
      console.log("error");
    } else setCartItems({ ...cartItems, [itemid]: cartItems[itemid] - 1 });
  };
  return (
    <>
      <bucket.Provider
        value={{
          data,
          setData,
          addToCart,
          cartItems,
          removeFromCart,
          cartItemCount,
        }}
      >
        {props.children}
      </bucket.Provider>
    </>
  );
}

export { CreateStore };
