import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Smartphones } from "./Smartphones";
import { Laptops } from "./Laptops";
import { Tablets } from "./Tablets";
import { Accessories } from "./Accessories";
import ProductInfo from "./ProductInfo";
import Contact from "./Contact";
import { Cart } from "./Cart";
import ErrorPage from "./ErrorPage";
import { Footer } from "./Footer";
import { Register } from "./Register";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";

function RouterCompo() {
  const hightlightButtons = ({ isActive }) => ({
    color: isActive ? "darkgreen" : "white",
  });
  return (
    <div style={{ marginBottom: "10rem" }}>
      <BrowserRouter>
        <ul className="headingContainer">
          <NavLink to="/home" style={hightlightButtons}>
            <li className="dropdown">Home</li>
            <div class="dropdown-content">
              <a href="#test">Link 1</a>
              <a href="#test">Link 2</a>
              <a href="#test">Link 3</a>
            </div>
          </NavLink>
          <NavLink style={hightlightButtons} to="/smartphones">
            <li>Smartphones</li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/laptops">
            <li>Laptops</li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/tablets">
            <li>Tablets</li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/accessories">
            <li>Accessories</li>
          </NavLink>
          <NavLink
            style={hightlightButtons}
            to="/cart"
            className="navbar-link cart-trolley--link"
          >
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item">8</span>
          </NavLink>
        </ul>
        {/* mobile navbar */}
        <div className="mobile-navbar-btn">
          <CgMenu  className="mobile-nav-icon"/>
          <CgClose  className="mobile-nav-icon close-outline"/>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterCompo;
