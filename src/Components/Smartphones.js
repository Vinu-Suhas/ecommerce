import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductGrid } from "./ProductGrid";
import { bucket } from "./Store/CreateStore";

export function Smartphones() {
  const [newData, setNewData] = useState([]);
  const { data } = useContext(bucket);
  useEffect(() => {
    setNewData(data);
    console.log("rendered");
  }, [data]);
  return (
    <>
      <div style={{}}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {/* <div>This is Smartphones Components</div> */}
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
            />
          );
        })}
      </div>
    </>
  );
}
