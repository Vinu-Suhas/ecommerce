import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/smartphones">
                <li>Smartphone</li>
              </NavLink>
              <NavLink to="/laptops">
                <li>Laptops</li>
              </NavLink>
              <NavLink to="/tablets">
                <li>Tablets</li>
              </NavLink>
            </ul>
          </div>
          <div className="col">
            <ul className="unstyledList">
              <NavLink to="/accessories">
                <li>Accessories</li>
              </NavLink>
              <a href="https://github.com/Vinu-Suhas">
                <li>Github</li>
              </a>
              <a href="https://www.youtube.com/channel/UC1F2qSvltPwcIvlnsJQoyBg/">
                <li>Youtube</li>
              </a>
            </ul>
          </div>
          <div className="col">
            <ul className="unstyledList">
              <li>
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} size="2xl" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} size="2xl" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a>
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
