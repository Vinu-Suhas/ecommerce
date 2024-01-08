import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { Laptops } from "./Laptops";
import { Tablets } from "./Tablets";
import { Accessories } from "./Accessories";
import ProductInfo from "./ProductInfo/ProductInfo";
import Contact from "./Contact";
import { Cart } from "./Cart/Cart";
import ErrorPage from "./ErrorPage";
import { Footer } from "./Footer";
import { Register } from "./Register";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { Login } from "./Login";
import { useHoverEffect } from "./CustomHook/useHoverEffect";
import { DropdownMenu } from "./DropdownMenu";
import { bucket } from "./Store/CreateStore";
import { SearchBarHeader } from "./SearchBarHeader/SearchBarHeader";

function RouterCompo() {
  const { cartItemCount } = useContext(bucket);

  const hightlightButtons = ({ isActive }) => ({
    color: isActive ? "darkgreen" : "white",
  });
  const Smartphone = useHoverEffect();
  const Laptop = useHoverEffect();
  const Tablet = useHoverEffect();
  const Accessorie = useHoverEffect();
  return (
    <>
      <BrowserRouter>
        <SearchBarHeader />
        <div>
          {/* style={{ marginBottom: "10rem" }} */}
          <ul className="headingContainer">
            <NavLink to="/home" style={hightlightButtons}>
              <li className="dropdown">Home</li>
            </NavLink>
            <li
              onMouseEnter={Smartphone.handleMouseEnter}
              onMouseLeave={Smartphone.handleMouseLeave}
            >
              <NavLink style={hightlightButtons} to="/smartphones">
                Smartphones
              </NavLink>
              {Smartphone.isDropdownVisible && (
                <DropdownMenu
                  dataset={["Apple", "Samsung", "Asus", "Google"]}
                />
              )}
            </li>
            <NavLink style={hightlightButtons} to="/laptops">
              <li
                onMouseEnter={Laptop.handleMouseEnter}
                onMouseLeave={Laptop.handleMouseLeave}
              >
                Laptops
                {Laptop.isDropdownVisible && (
                  <DropdownMenu dataset={["Apple", "HP", "Asus", "Lenova"]} />
                )}
              </li>
            </NavLink>
            <NavLink style={hightlightButtons} to="/tablets">
              <li
                onMouseEnter={Tablet.handleMouseEnter}
                onMouseLeave={Tablet.handleMouseLeave}
              >
                Tablets
                {Tablet.isDropdownVisible && (
                  <DropdownMenu
                    dataset={["Apple", "Google", "Samsung", "Xiaomi"]}
                  />
                )}
              </li>
            </NavLink>
            <NavLink style={hightlightButtons} to="/accessories">
              <li
                onMouseEnter={Accessorie.handleMouseEnter}
                onMouseLeave={Accessorie.handleMouseLeave}
              >
                Accessories
                {Accessorie.isDropdownVisible && (
                  <DropdownMenu
                    dataset={["Apple", "Boat", "Samsung", "Anker"]}
                  />
                )}
              </li>
            </NavLink>
            <NavLink
              style={hightlightButtons}
              to="/cart"
              className="navbar-link cart-trolley--link"
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{cartItemCount}</span>
            </NavLink>
          </ul>
          {/* mobile navbar */}
          <div className="mobile-navbar-btn">
            <CgMenu className="mobile-nav-icon" />
            <CgClose className="mobile-nav-icon close-outline" />
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/smartphones"
              element={
                <ProductsPage
                  brands={["Samsung", "Google", "Oneplus", "Sony"]}
                />
              }
            />
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
        </div>
      </BrowserRouter>
    </>
  );
}

export default RouterCompo;
