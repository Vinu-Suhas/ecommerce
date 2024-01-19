import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import ProductInfo from "./ProductInfo/ProductInfo";
import Contact from "./Contact";
import { Cart } from "./Cart/Cart";
import ErrorPage from "./ErrorPage";
import { Register } from "./Login/Register";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { Login } from "./Login/Login";
import { useHoverEffect } from "./CustomHook/useHoverEffect";
import { DropdownMenu } from "./DropdownMenu";
import { bucket } from "./Store/CreateStore";
import { SearchBarHeader } from "./SearchBarHeader/SearchBarHeader";
import { OrderSuccessful } from "./OrderSuccessful/OrderSuccessful";

function RouterCompo() {
  const { cartItemCount, data, brandsByCategory, hightlightButtons } =
    useContext(bucket);
  // const getBrandsByCategory = (products) => {
  //   const brandsByCategory = {};

  //   products.forEach((product) => {
  //     const { category, brand } = product;

  //     if (!brandsByCategory[category]) {
  //       brandsByCategory[category] = [];
  //     }

  //     if (!brandsByCategory[category].includes(brand)) {
  //       brandsByCategory[category].push(brand);
  //     }
  //   });

  //   return brandsByCategory;
  // };
  // const brandsByCategory = getBrandsByCategory(data);

  // const hightlightButtons = ({ isActive }) => ({
  //   color: isActive ? "darkgreen" : "white",
  // });
  const Smartphone = useHoverEffect();
  const Laptop = useHoverEffect();
  const Tablet = useHoverEffect();
  const Accessorie = useHoverEffect();

  return (
    <div style={{ overflowX: "hidden" }}>
    
        <SearchBarHeader />
        <div>
          <ul className="navbarContainer">
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
                  dataset={brandsByCategory.smartphone}
                  destination={"/smartphones"}
                />
              )}
            </li>
            <li
              onMouseEnter={Laptop.handleMouseEnter}
              onMouseLeave={Laptop.handleMouseLeave}
            >
              <NavLink style={hightlightButtons} to="/laptops">
                Laptops
              </NavLink>
              {Laptop.isDropdownVisible && (
                <DropdownMenu
                  dataset={brandsByCategory.laptop}
                  destination={"/laptops"}
                />
              )}
            </li>
            <li
              onMouseEnter={Tablet.handleMouseEnter}
              onMouseLeave={Tablet.handleMouseLeave}
            >
              <NavLink style={hightlightButtons} to="/tablets">
                Tablets
              </NavLink>
              {Tablet.isDropdownVisible && (
                <DropdownMenu
                  dataset={brandsByCategory.tablet}
                  destination={"/tablets"}
                />
              )}
            </li>
            <li
              onMouseEnter={Accessorie.handleMouseEnter}
              onMouseLeave={Accessorie.handleMouseLeave}
            >
              <NavLink style={hightlightButtons} to="/accessories">
                Accessories
              </NavLink>
              {Accessorie.isDropdownVisible && (
                <DropdownMenu
                  destination={"/accessories"}
                  dataset={brandsByCategory.accessories}
                />
              )}
            </li>
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
          {/* <div className="mobile-navbar-btn">
            <CgMenu className="mobile-nav-icon" />
            <CgClose className="mobile-nav-icon close-outline" />
          </div> */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/smartphones"
              element={
                <ProductsPage
                  brands={brandsByCategory.smartphone}
                  category={"smartphone"}
                />
              }
            />
            <Route
              path="/laptops"
              element={
                <ProductsPage
                  brands={brandsByCategory.laptop}
                  category={"laptop"}
                />
              }
            />
            <Route
              path="/tablets"
              element={
                <ProductsPage
                  brands={brandsByCategory.tablet}
                  category={"tablet"}
                />
              }
            />
            <Route
              path="/accessories"
              element={
                <ProductsPage
                  brands={brandsByCategory.accessories}
                  category={"accessories"}
                />
              }
            />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/successful" element={<OrderSuccessful />} />
          </Routes>
        </div>
    </div>
  );
}

export default RouterCompo;
