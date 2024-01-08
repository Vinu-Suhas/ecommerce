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
    {
      id: 10,
      name: "Lenovo LOQ 15IRH8",
      brand: "Lenovo",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/7/m/c/-original-imagtvudctd8grxy.jpeg?q=70",
      storage: "512GB",
      price: "66990",
      category: "laptop",
      rating: "3",
    },
    {
      id: 11,
      name: "ASUS Vivobook 14",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/z/b/c/-original-imagtucnf8mszzhy.jpeg?q=70",

      storage: "512GB",
      brand: "Asus",
      price: "31990",
      category: "laptop",
      rating: "4",
    },
    {
      id: 12,
      name: "ASUS Vivobook 15",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/m/h/x1502za-ej544ws-thin-and-light-laptop-asus-original-imagtxpgachxjzhm.jpeg?q=70",

      storage: "512GB",
      brand: "Asus",
      price: "65990",
      category: "laptop",
      rating: "5",
    },
    {
      id: 13,
      name: "SAMSUNG Galaxy Book2 Pro",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/x/x/i/-original-imagupz9spjhhhtw.jpeg?q=70",
      storage: "512GB",
      brand: "Samsung",
      price: "62390",
      category: "laptop",
      rating: "4.3",
    },
    {
      id: 14,
      name: "APPLE 2020 Macbook Air",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      storage: "512GB",
      brand: "Apple",
      price: "62390",
      category: "laptop",
      rating: "3.2",
    },
    {
      id: 15,
      name: "DELL New Inspiron 15 ",
      brand: "DELL",
      category: "laptop",
      price: "62390",
      storage: "512GB",
      rating: "3",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
    },
    {
      id: 16,
      name: "Lenovo Tab M10 2nd Gen",
      brand: "Lenovo",
      category: "tablet",
      price: "8500",
      storage: "64GB",
      rating: "3",
      color: "Black",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/h/4/s/-original-imagu2h39539yhry.jpeg?q=70",
    },
    {
      id: 17,
      name: "REDMI Pad 6",
      brand: "Redmi",
      category: "tablet",
      price: "17000",
      storage: "64GB",
      color: "Graphite Grey",
      rating: "3.6",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70",
    },
    {
      id: 18,
      name: "realme Pad 2 ",
      brand: "Realme",
      category: "tablet",
      price: "21000",
      storage: "128GB",
      color: "Imagination Grey",
      rating: "3.6",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/o/y/8/rmp2204-realme-original-imagrhcqdhdyc9tg.jpeg?q=70",
    },
    {
      id: 19,
      name: "Galaxy Tab A8",
      brand: "Samsung",
      category: "tablet",
      price: "21000",
      storage: "128GB",
      color: "Black",
      rating: "4.2",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70",
    },
    {
      id: 19,
      name: "Galaxy Tab S7 FE",
      brand: "Samsung",
      category: "tablet",
      price: "31000",
      storage: "128GB",
      color: "Black",
      rating: "4.2",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/kq5iykw0/tablet/t/r/0/sm-t735nzkeinu-samsung-original-imag48f76axd4ehu.jpeg?q=70",
    },
    {
      id: 19,
      name: "iPad Pro (4th Gen)",
      brand: "Apple",
      category: "tablet",
      price: "80000",
      storage: "128GB",
      color: "Space grey",
      rating: "4.2",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/kq5iykw0/tablet/t/r/0/sm-t735nzkeinu-samsung-original-imag48f76axd4ehu.jpeg?q=70",
    },
    {
      id: 20,
      name: "SanDisk E61 1TB SSD",
      brand: "Sandisk",
      category: "accessories",
      price: "9600",
      storage: "1TB",
      color: "Red",
      rating: "4.2",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/kn6cxow0/external-hard-drive/ssd/f/d/s/sdssde61-4t00-g25-sandisk-original-imagfws2dbenut49.jpeg?q=70",
    },
    {
      id: 21,
      name: "SAMSUNG T7 Shield SSD",
      brand: "Samsung",
      category: "accessories",
      price: "9700",
      storage: "1TB",
      color: "Black",
      rating: "4.5",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/l2jcccw0/external-hard-drive/ssd/l/o/k/t7-shield-1tb-usb-3-2-gen-2-10gbps-ip65-rated-speeds-upto-1050-original-imagdv4gbpgfjdwn.jpeg?q=70",
    },
    {
      id: 22,
      name: "WD My Passport HDD",
      brand: "WD",
      category: "accessories",
      price: "9700",
      storage: "5TB",
      color: "Black",
      rating: "4.5",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/l2jcccw0/external-hard-drive/ssd/l/o/k/t7-shield-1tb-usb-3-2-gen-2-10gbps-ip65-rated-speeds-upto-1050-original-imagdv4gbpgfjdwn.jpeg?q=70",
    },
    {
      id: 23,
      name: "SanDisk Cruze Blade ",
      brand: "Sandisk",
      category: "accessories",
      price: "500",
      storage: "64GB",
      color: "Black",
      rating: "4.5",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkevktvq4w.jpeg?q=70",
    },
    {
      id: 24,
      name: "HP X796W",
      brand: "HP",
      category: "accessories",
      price: "800",
      storage: "128GB",
      color: "Gold",
      rating: "3.5",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/pendrive/q/b/l/-original-imagqwyhjpwacgbv.jpeg?q=70",
    },
    {
      id: 25,
      name: "SAMSUNG MUF-128DA/APC",
      brand: "Samsung",
      category: "accessories",
      price: "1500",
      storage: "128GB",
      color: "Blue",
      rating: "4.5",
      imageLink:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/pendrive/pendrive/3/9/s/muf-128da-apc-samsung-original-imaguzgvd5s7avxt.jpeg?q=70",
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
