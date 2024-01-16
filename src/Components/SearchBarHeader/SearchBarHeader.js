import React, { createRef, useContext, useState } from "react";
import "./SearchBarHeader.css";
import { FaRegUserCircle } from "react-icons/fa";
import { bucket } from "../Store/CreateStore";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useHoverEffect } from "../CustomHook/useHoverEffect";
import { DropdownMenu } from "../DropdownMenu";
import { CgClose, CgMenu } from "react-icons/cg";
import { toast } from "react-toastify";
export const SearchBarHeader = () => {
  const [searchData, setSearchData] = useState([]);
  const {
    data,
    hasUserLoggedIn,
    handleLogout,
    setHasUserLoggedIn,
    setCartItems,
  } = useContext(bucket);
  const user = useHoverEffect();
  const searchRef = createRef();
  const handleSeatchField = (event) => {
    if (event.target.value.toLowerCase() !== "") {
      setSearchData(
        data.filter((element) =>
          element.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else setSearchData([]);
  };
  return (
    <div className="searchBarHeaderContainermain">
      <div className="searchBarHeaderContainer">
        <span className="logo">iFRUIT STORE</span>
        <input
          type="text"
          onChange={handleSeatchField}
          placeholder="Enter Product name"
          ref={searchRef}
        />
        <CgMenu
          className="mobile-nav-icon"
          onClick={() => {
            let mobilenavbar = document.getElementById("mobileNavbar");
            mobilenavbar.classList.remove("hide");
          }}
        />
        <div className="mobileNavbar hide" id="mobileNavbar">
          <h2> Home2Home</h2>
          <CgClose
            onClick={() => {
              let mobilenavbar = document.getElementById("mobileNavbar");
              mobilenavbar.classList.add("hide");
            }}
          />
        </div>
        <div
          onMouseEnter={user.handleMouseEnter}
          onMouseLeave={user.handleMouseLeave}
        >
          <FaRegUserCircle size={40} />
          {user.isDropdownVisible && (
            <div
              style={{
                position: "absolute",
                top: "33px",
                right: "8px",
                background: "#3e8e41",
                borderRadius: "16px",
                zIndex: "34",
                padding: "1rem",
              }}
            >
              {!hasUserLoggedIn ? (
                <>
                  <NavLink to="/login">
                    <h3 style={{ margin: "0" }}>Login</h3>
                  </NavLink>
                  <NavLink to="/register">
                    <h3 style={{ margin: "0" }}>Register</h3>
                  </NavLink>
                </>
              ) : (
                <h3
                  style={{ margin: "0" }}
                  onClick={() => {
                    handleLogout();
                    toast.success("Logout successful");
                    setCartItems({});
                    setHasUserLoggedIn(false);
                  }}
                >
                  Log out
                </h3>
              )}
            </div>
          )}
        </div>
      </div>
      {searchData.length > 0 ? (
        <div className="searchResultContainer">
          {searchData.map((element, index) => {
            return (
              <div key={index} className="searchProductData">
                <span>{element.name}</span>
                <img
                  src={element.imageLink}
                  style={{ height: "6vh", width: "6vw" }}
                />
                <span>{element.price}</span>
                <span>
                  Rating :{element.rating}
                  {parseInt(element.rating) === element.rating ? (
                    <FaStar />
                  ) : (
                    <FaStarHalfAlt />
                  )}
                </span>
                <Link to={`/productinfo/${element.id}`}>
                  <span
                    onClick={() => {
                      searchRef.current.value = "";
                      setSearchData([]);
                    }}
                  >
                    More info
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
