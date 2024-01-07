import React, { useContext, useState } from "react";
import "./SearchBarHeader.css";
import { FaRegUserCircle } from "react-icons/fa";
import { bucket } from "../Store/CreateStore";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export const SearchBarHeader = () => {
  const [searchData, setSearchData] = useState([]);
  const { data } = useContext(bucket);
  const handleSeatchField = (event) => {
    console.log(event.target.value);
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
        <input type="text" onChange={handleSeatchField} placeholder="Enter Product name"/>
        <FaRegUserCircle />
      </div>
      {searchData.length > 0 ? (
        <div className="searchResultContainer">
          {searchData.map((element, index) => {
            return (
              <div key={index} className="searchProductData">
                <span>{element.name}</span>
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
                  <span>More info {element.id}</span>
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
