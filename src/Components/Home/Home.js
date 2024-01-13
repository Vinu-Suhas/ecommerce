import React, { useContext, useEffect } from "react";
import axios from "axios";
import { bucket } from "../Store/CreateStore";
import { WallpaperCarousel } from "../SlideShow/WalpaperCarousel";
import { useNavigate } from "react-router-dom";
import oneplusBanner from "../../assets/banner2.jpg";
import "./Home.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";
import { MdEnhancedEncryption } from "react-icons/md";
import { IconContext } from "react-icons";
import { ProductGrid } from "../ProductGrid/ProductGrid";

export function Home({ newData }) {
  const nav = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/data")
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(bucket.data);
  const { data } = useContext(bucket);
  // useEffect(() => {

  //   console.log("filtered data",data.data.filter((element) => element.brand === "Apple"));
  // }, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-seciton-data">
            <p className="intro-data">Welcome to</p>
            <h1>IV Store</h1>
            <p>
              this is only to testthis is only to testthis is only to test this
              is only to test this is only to test this is only to test vthis is
              only to test this is only to test this is only to test this is
              only to test this is only to test this is only to test this is
              only to test this is only to test this is only to test this is
              only to test this is only to test this is only to test this is
              only to test this is only to
            </p>
            <button className="shopNow" onClick={() => nav("/smartphones")}>
              SHOP NOW
            </button>
          </div>
          <div className="image-section">
            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/05/90/98/01/360_F_590980156_W28QRjBKhacNz8WeTpDr3v3uUOp5A9JF.jpg"
                alt="Image"
                className="section-image"
              />
            </figure>
          </div>
        </div>
      </div>
      <WallpaperCarousel />
      <hr style={{ marginTop: "2.5vh" }} />
      <h2 style={{ textAlign: "center" }}>BEST SELLER </h2>
      <hr />
      <div className="featuredProducts" style={{ marginBottom: "2vh" }}>
        {data.slice(0, 4).map((element, index) => {
          return (
            <ProductGrid
              id={element.id}
              name={element.name}
              brand={element.brand}
              color={element.color}
              storage={element.storage}
              img={element.imageLink}
              key={index}
              rating={element.rating}
              price={element.price}
            />
          );
        })}
      </div>
      <img
        src={oneplusBanner}
        style={{ width: "100%", height: "30vh", objectFit: "fill" }}
      />

      <div className="feature-container">
        <IconContext.Provider value={{ color: "#04aa6d", size: "70px" }}>
          <div className="feature">
            <TbTruckDelivery />
            <h1>FREE DELIVERY</h1>
            <h4>
              We believe in transparency and making your shopping experience as
              enjoyable as possible. That's why we offer free shipping on all
              orders, so you can focus on finding the perfect items without
              worrying about additional charges
            </h4>
          </div>
          <div className="feature">
            <RiCustomerServiceFill />
            <h1>CUSTOMER CARE </h1>
            <h4>
              Have a question at midnight or a concern in the early hours? No
              problem! Our dedicated support team is ready to assist you 24
              hours a day, 7 days a week. Wherever you are, whenever you need
              us, we're just a message or call away.
            </h4>
          </div>
          <div className="feature">
            <GiCardExchange />
            <h1>100% EXCHANGE</h1>
            <h4>
              Experience the assurance of our 100% Exchange Guarantee. We are
              committed to facilitating a seamless exchange process for you.
              Your satisfaction is our priority, and we strive to make the
              exchange experience hassle-free.
            </h4>
          </div>
          <div className="feature">
            <MdEnhancedEncryption />
            <h1>Shielded Payment</h1>
            <h4>
              Shop with confidence! Our ecommerce platform ensures a secure
              payment process with cutting-edge encryption technology. Your
              financial information is protected, providing you with a
              worry-free and safe shopping experience
            </h4>
          </div>
        </IconContext.Provider>
      </div>
      <hr style={{ marginTop: "2.5vh" }} />
      <h2 style={{ textAlign: "center" }}>FEATURED PRODUCTS </h2>
      <hr />
      <div className="featuredProducts">
        {data.slice(0, 4).map((element, index) => {
          return (
            <ProductGrid
              id={element.id}
              name={element.name}
              brand={element.brand}
              color={element.color}
              storage={element.storage}
              img={element.imageLink}
              rating={element.rating}
              key={index}
              price={element.price}
            />
          );
        })}
      </div>
    </>
  );
}
