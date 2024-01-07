import React, { useContext, useEffect, useState } from "react";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { bucket } from "../Store/CreateStore";

export function Smartphones() {
  const [newData, setNewData] = useState([]);
  const { data } = useContext(bucket);
  useEffect(() => {
    setNewData(data);
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
    </>
  );
}
