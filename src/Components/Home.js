import React, { useContext, useEffect } from "react";
import axios from "axios";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { bucket } from "./Store/CreateStore";

export function Home({ newData }) {
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
  const data = useContext(bucket);
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
            <button className="shopNow">SHOP NOW</button>
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
    </>
  );
}
