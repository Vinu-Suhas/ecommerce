import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export function Footer() {
  return (
    <footer className="mainFooter">
      <div className="subFooterContainer">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="col">
            <ul className="unstyledList">
              <li>Smartphone</li>
              <li>Laptops</li>
              <li>Tablets</li>
            </ul>
          </div>
          <div className="col">
            <ul className="unstyledList">
              <li>Fitness</li>
              <li>Food</li>
              <li>Health</li>
            </ul>
          </div>
          <div className="col">
            <ul className="unstyledList">
              <li>
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Vinu Suhas | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
}
