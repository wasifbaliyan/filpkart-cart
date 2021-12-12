import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="home_main">
        <ProductList />
      </section>
    </div>
  );
}
