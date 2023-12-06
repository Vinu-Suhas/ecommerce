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
import Login from "./Login";
import { Footer } from "./Footer";

function RouterCompo() {
  return (
    <div>
      <BrowserRouter>
        <ul className="headingContainer">
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? "darkgreen" : "white",
            })}
          >
            <li className="dropdown">Home</li>
            <div class="dropdown-content">
              <a href="#test">Link 1</a>
              <a href="#test">Link 2</a>
              <a href="#test">Link 3</a>
            </div>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "darkgreen" : "white",
            })}
            to="/smartphones"
          >
            <li>Smartphones</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "darkgreen" : "white",
            })}
            to="/laptops"
          >
            {" "}
            <li>Laptops</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "darkgreen" : "white",
            })}
            to="/tablets"
          >
            <li>Tablets</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "darkgreen" : "white",
            })}
            to="/accessories"
          >
            <li>Accessories</li>
          </NavLink>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default RouterCompo;
