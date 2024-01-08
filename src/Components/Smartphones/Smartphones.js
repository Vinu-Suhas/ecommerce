import React, { useContext, useEffect, useState } from "react";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { bucket } from "../Store/CreateStore";

export function Smartphones(props) {
  const [newData, setNewData] = useState([]);
  const [filter, setFilter] = useState("");
  const { data } = useContext(bucket);
  useEffect(() => {
    if (filter === "") setNewData(data);
    else {
      setNewData(
        data.filter((item) => item.brand.toLowerCase() === filter.toLowerCase())
      );
    }
  }, [data, filter]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%", border: "5px solid green" }}>
        <h1
          style={{
            margin: "0",
            textAlign: "center",
            borderTop: "5px solid green",
            borderBottom: "5px solid green",
          }}
        >
          FILTER
        </h1>
        <h3 onClick={() => setFilter("Samsung")}>Samsung</h3>
        <h3 onClick={() => setFilter("Google")}>Google</h3>
        <h3 onClick={() => setFilter("Oneplus")}>Oneplus</h3>
        <h3 onClick={() => setFilter("Sony")}>Sony</h3>
        <h3 onClick={() => setFilter("")}>Clear</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "85%",
        }}
      >
        {newData.map((element, index) => {
          return (
            <ProductGrid
              id={element.id}
              name={element.name}
              brand={element.brand}
              color={element.color}
              storage={element.storage}
              img={element.imageLink}
              key={index}
              rating={element.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
