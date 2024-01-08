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
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/o/r/-original-imagu4haetzha9bj.jpeg?q=70",
      price: "12000",
      rating: 3,
      category: "smartphone",
    },
    {
      id: 2,
      name: "Google Pixel 5",
      brand: "Google",
      color: "white",
      storage: "256GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70",
      price: "25000",
      rating: 4,
      category: "smartphone",
    },
    {
      id: 3,
      name: "OnePlus 9",
      brand: "OnePlus",
      color: "silver",
      storage: "256GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/n/y/-original-imagdhtmgbg6vyrd.jpeg?q=70",
      price: "25000",
      rating: 3.5,
      category: "smartphone",
    },
    {
      id: 4,
      name: "Huawei P40 Pro",
      brand: "Huawei",
      color: "gold",
      storage: "128GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/j70sccw0/mobile/z/g/j/honor-8-pro-duke-l09-v100r001-original-imaexdy3pcegz3df.jpeg?q=70",
      price: "25000",
      rating: 2.5,
      category: "smartphone",
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      brand: "Xiaomi",
      color: "green",
      storage: "128GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/ky7lci80/mobile/e/j/x/-original-imagag2gatsxzcuv.jpeg?q=70",
      price: "25000",
      rating: 3,
      category: "smartphone",
    },
    {
      id: 6,
      name: "iPhone 13",
      brand: "Apple",
      color: "blue",
      storage: "256GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/f/o/s/iphone-13-mlpf3hn-a-apple-original-imag6vzzemfy9nse.jpeg?q=70",
      price: "25000",
      rating: 3.6,
      category: "smartphone",
    },
    {
      id: 7,
      name: "Sony Xperia 1 III",
      brand: "Sony",
      color: "purple",
      storage: "256GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/jkbguq80/mobile/2/s/m/sony-xperia-xz2-na-original-imaf7zvvhuxxf7hf.jpeg?q=70",
      price: "25000",
      rating: 5,
      category: "smartphone",
    },
    {
      id: 8,
      name: "Motorola Edge 30 Fusion",
      brand: "Motorola",
      color: "gray",
      storage: "128GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/q/o/-original-imagg34wnw7u5qne.jpeg?q=70",
      price: "25000",
      rating: 5,
      category: "smartphone",
    },
    {
      id: 9,
      name: "LG Velvet",
      brand: "LG",
      color: "silver",
      storage: "128GB",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/kgsb1jk0/mobile/h/r/e/lg-velvet-dual-screen-lmg910emw-original-imafwy7ytk8y3ucw.jpeg?q=70",
      price: "25000",
      rating: 2,
      category: "smartphone",
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
