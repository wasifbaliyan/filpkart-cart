import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./ProductList.css";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("db/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <section className="product-list">
      <h2 className="product-list_heading">Product List</h2>
      <div className="line"></div>
      <div className="product-list_container">
        {products.length === 0 && <p>No products found!</p>}
        {products.map((product) => (
          <Product product={product} key={product.price} />
        ))}
      </div>
    </section>
  );
}
