import React, { useContext, useEffect, useState } from "react";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { bucket } from "../Store/CreateStore";

export function ProductsPage(props) {
  const [newData, setNewData] = useState([]);
  const [products, setProducts] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const { data } = useContext(bucket);

  useEffect(() => {
    setProducts(
      data.filter((item) => item.category.toLowerCase() === props.category)
    );
  }, [data]);

  useEffect(() => {
    if (brandFilter === "") setNewData(products);
    else {
      setNewData(
        products.filter(
          (item) => item.brand.toLowerCase() === brandFilter.toLowerCase()
        )
      );
    }
  }, [products, brandFilter]);
  return (
    <div style={{ display: "flex", margin: "2rem" }}>
      <div
        style={{
          width: "15%",
          border: "5px solid green",
          borderRadius: "16px",
        }}
      >
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
        <div>
          {props.brands.map((element, index) => {
            return (
              <h3
                key={index}
                style={{ textAlign: "center" }}
                onClick={() => setBrandFilter(element)}
              >
                {element}
              </h3>
            );
          })}
          <h3
            style={{ textAlign: "center" }}
            onClick={() => setBrandFilter("")}
          >
            Clear
          </h3>
        </div>
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
