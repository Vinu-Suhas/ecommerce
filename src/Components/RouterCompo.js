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
import { Login } from "./Login";
import { useHoverEffect } from "./CustomHook/useHoverEffect";
import { DropdownMenu } from "./DropdownMenu";

function RouterCompo() {
  const hightlightButtons = ({ isActive }) => ({
    color: isActive ? "darkgreen" : "white",
  });
  const Smartphones = useHoverEffect();
  const Laptops = useHoverEffect();
  const Tablets = useHoverEffect();
  const Accessories = useHoverEffect();
  return (
    <div style={{ marginBottom: "10rem" }}>
      <BrowserRouter>
        <ul className="headingContainer">
          <NavLink to="/home" style={hightlightButtons}>
            <li className="dropdown">Home</li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/smartphones">
            <li
              onMouseEnter={Smartphones.handleMouseEnter}
              onMouseLeave={Smartphones.handleMouseLeave}
            >
              Smartphones
              {Smartphones.isDropdownVisible && (
                <DropdownMenu
                  dataset={["Apple", "Samsung", "Asus", "Google"]}
                />
              )}
            </li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/laptops">
            <li
              onMouseEnter={Laptops.handleMouseEnter}
              onMouseLeave={Laptops.handleMouseLeave}
            >
              Laptops
              {Laptops.isDropdownVisible && (
                <DropdownMenu dataset={["Apple", "HP", "Asus", "Lenova"]} />
              )}
            </li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/tablets">
            <li
              onMouseEnter={Tablets.handleMouseEnter}
              onMouseLeave={Tablets.handleMouseLeave}
            >
              Tablets
              {Tablets.isDropdownVisible && (
                <DropdownMenu
                  dataset={["Apple", "Google", "Samsung", "Xiaomi"]}
                />
              )}
            </li>
          </NavLink>
          <NavLink style={hightlightButtons} to="/accessories">
            <li
              onMouseEnter={Accessories.handleMouseEnter}
              onMouseLeave={Accessories.handleMouseLeave}
            >
              Accessories
              {Accessories.isDropdownVisible && (
                <DropdownMenu dataset={["Apple", "Boat", "Samsung", "Anker"]} />
              )}
            </li>
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
          <CgMenu className="mobile-nav-icon" />
          <CgClose className="mobile-nav-icon close-outline" />
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
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterCompo;
