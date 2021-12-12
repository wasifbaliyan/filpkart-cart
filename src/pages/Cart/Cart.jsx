import React, { useContext } from "react";
import CartItems from "../../components/CartItems/CartItems";
import SavedItems from "../../components/SavedItems/SavedItems";
import { CartContext } from "../../context/cartContext";
import "./Cart.css";

export default function Cart() {
  const { state } = useContext(CartContext);
  function getTotalPrice(products) {
    return products.reduce((a, c) => {
      return c.count * (a + Number(c.price));
    }, 0);
  }

  function getDiscountedPrice(products) {
    return getTotalPrice(products) - getDiscount(products);
  }

  function getDiscount(products) {
    return products.reduce((a, c) => {
      return c.count * (a + (Number(c.price) * Number(c.discount)) / 100);
    }, 0);
  }
  function getTotalItems(products) {
    return products.reduce((a, c) => {
      return a + Number(c.count);
    }, 0);
  }
  return (
    <div className="cart">
      <section className="cart_main">
        <div className="cart_main_item">
          <CartItems />
        </div>
        <div className="cart_main_item">
          <SavedItems />
        </div>
      </section>
      <aside className="cart_sidebar">
        <h3 style={{ color: "#ccc", textTransform: "uppercase" }}>
          Price Details
        </h3>
        <div className="line"></div>
        {state.cart.length !== 0 && (
          <div>
            <p>Price: ₹{getTotalPrice(state.cart)}</p>
            <p>Items: {getTotalItems(state.cart)}</p>
            <p>Discount: ₹{getDiscount(state.cart)}</p>
            <h3>Total Amount: ₹{getDiscountedPrice(state.cart)}</h3>
          </div>
        )}
      </aside>
    </div>
  );
}
