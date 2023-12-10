import React, { useContext, useEffect } from "react";
import axios from "axios";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { bucket } from "./Store/CreateStore";

export function Home({newData}) {
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
      {/* <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel> */}
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
            <button>Click here</button>
          </div>
          <div className="image-section">
            <figure>
              <img src="https://t4.ftcdn.net/jpg/05/90/98/01/360_F_590980156_W28QRjBKhacNz8WeTpDr3v3uUOp5A9JF.jpg" alt="Image"  className="section-image"/>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
