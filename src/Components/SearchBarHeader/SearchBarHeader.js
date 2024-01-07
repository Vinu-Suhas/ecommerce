import React, { useState } from "react";
import "./SearchBarHeader.css";
import { FaRegUserCircle } from "react-icons/fa";
export const SearchBarHeader = () => {
  const [searchData, setSearchData] = useState("");
  const handleSeatchField = (event) => {
    console.log(event.target.value);
    setSearchData(event.target.value);
  };
  return (
    <div className="searchBarHeaderContainermain">
      <div className="searchBarHeaderContainer">
        <span className="logo">iFRUIT STORE</span>
        <input type="text" onChange={handleSeatchField} />
        <FaRegUserCircle />
      </div>
      {searchData.length > 0 ? (
        <div className="searchResultContainer">{searchData}</div>
      ) : null}
    </div>
  );
};
