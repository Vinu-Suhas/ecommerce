import React, { useContext, useEffect, useState } from "react";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { bucket } from "../Store/CreateStore";
import "./ProductPage.css";
export function ProductsPage(props) {
  const [newData, setNewData] = useState([]);
  const [products, setProducts] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const { data } = useContext(bucket);

  useEffect(() => {
    setProducts(
      data.filter((item) => item.category.toLowerCase() === props.category)
    );
    setBrandFilter("");
  }, [props.category]);

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
      <div className="filterBoxContainer">
        <h1 className="filterTitle">FILTER</h1>
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
            style={{ textAlign: "center" ,color:"red"}}
            onClick={() => setBrandFilter("")}
          >
            Clear
          </h3>
        </div>
      </div>
      <div className="productDisplayContainer">
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
              price={element.price}
            />
          );
        })}
      </div>
    </div>
  );
}
